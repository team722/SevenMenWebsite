import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  BookOpen,
  Sparkles,
  Loader2,
} from "lucide-react";
import {
  collection,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { db } from '../../config/firebase';


type Blog = {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
  readTime: string;
  status?: string;
  createdAt?: Timestamp;
};

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 448 512"
      fill="currentColor"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101 32 1 132 1 255c0 39.3 10.3 77.7 29.9 111.5L0 480l116.2-30.5c32.7 17.8 69.5 27.2 107.6 27.2h.1c122.9 0 222.9-100 222.9-223 0-59.3-23.1-115-65.9-156.6zM223.9 439.6c-33.9 0-67.1-9.1-96-26.2l-6.9-4.1-68.9 18.1 18.4-67.2-4.5-7c-18.8-29.9-28.7-64.4-28.7-100.2 0-103.3 84-187.3 187.3-187.3 50 0 97 19.5 132.3 54.8 35.3 35.4 55.4 82.4 55.4 132.5 0 103.3-84 187.3-188.4 187.3zm101.6-138.1c-5.6-2.8-33.1-16.3-38.2-18.2-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.2-17.5 21.9-3.2 3.7-6.5 4.2-12.1 1.4-5.6-2.8-23.6-8.7-44.9-27.7-16.6-14.8-27.8-33.1-31-38.7-3.2-5.6-.3-8.6 2.4-11.4 2.5-2.5 5.6-6.5 8.4-9.7 2.8-3.2 3.7-5.6 5.6-9.3 1.9-3.7.9-7-0.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-7-.2-10.7-.2s-9.8 1.4-14.9 7c-5.1 5.6-19.6 19.1-19.6 46.6s20.1 54.1 22.9 57.8c2.8 3.7 39.5 60.3 95.7 84.5 13.4 5.8 23.8 9.2 31.9 11.8 13.4 4.3 25.6 3.7 35.2 2.2 10.7-1.6 33.1-13.5 37.8-26.6 4.7-13.1 4.7-24.3 3.3-26.6-1.4-2.3-5.1-3.7-10.7-6.5z" />
    </svg>
  );
}

export function BlogViewerPage() {
  const { slug } = useParams();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [previousBlog, setPreviousBlog] = useState<Blog | null>(null);
  const [nextBlog, setNextBlog] = useState<Blog | null>(null);

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchBlogDetails() {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setNotFound(false);

        const blogQuery = query(
          collection(db, "blogs"),
          where("slug", "==", slug)
        );

        const blogSnapshot = await getDocs(blogQuery);

        if (blogSnapshot.empty) {
          setNotFound(true);
          return;
        }

        const selectedBlog = {
          id: blogSnapshot.docs[0].id,
          ...blogSnapshot.docs[0].data(),
        } as Blog;

        setBlog(selectedBlog);

        const allBlogsSnapshot = await getDocs(collection(db, "blogs"));

        const allBlogs = allBlogsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[];

        const publishedBlogs = allBlogs
          .filter((item) => item.status === "published" && item.slug)
          .sort((a, b) => {
            const dateA = a.createdAt?.toDate?.().getTime?.() || 0;
            const dateB = b.createdAt?.toDate?.().getTime?.() || 0;
            return dateB - dateA;
          });

        const currentIndex = publishedBlogs.findIndex(
          (item) => item.slug === selectedBlog.slug
        );

        const related = publishedBlogs
          .filter((item) => item.slug !== selectedBlog.slug)
          .slice(0, 3);

        setRelatedBlogs(related);

        if (publishedBlogs.length > 1 && currentIndex !== -1) {
          setPreviousBlog(
            currentIndex > 0
              ? publishedBlogs[currentIndex - 1]
              : publishedBlogs[publishedBlogs.length - 1]
          );

          setNextBlog(
            currentIndex < publishedBlogs.length - 1
              ? publishedBlogs[currentIndex + 1]
              : publishedBlogs[0]
          );
        }
      } catch (error) {
        console.error("Fetch blog detail error:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogDetails();
  }, [slug]);

  if (loading) {
    return (
      <main className="pt-20">
        <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#F7FBFF] via-white to-[#E6F2FA]">
          <div className="flex flex-col items-center gap-4">
            <Loader2 size={36} className="animate-spin text-[#2C5F8D]" />
            <p className="text-gray-600 font-medium">Loading blog...</p>
          </div>
        </section>
      </main>
    );
  }

  if (notFound || !blog) {
    return <Navigate to="/blog" replace />;
  }

  const formattedDate = blog.createdAt
    ? blog.createdAt.toDate().toLocaleDateString()
    : "Recently";

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-36 pb-28 md:pt-44 md:pb-40 overflow-hidden bg-gradient-to-br from-[#0A2647] via-[#123B63] to-[#2C5F8D]">
        <div className="absolute left-0 right-0 top-20 bottom-0 md:top-28 z-0 overflow-hidden">
          <ImageWithFallback
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#0A2647]/90 via-[#123B63]/86 to-[#2C5F8D]/78" />

        <div className="absolute top-0 left-0 z-[2] w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 z-[2] w-96 h-96 bg-[#F8B04C]/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-[#F8B04C] text-[#0A2647] hover:bg-[#F8B04C] font-semibold mb-6">
              {blog.category}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              {blog.title}
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-white/85 max-w-3xl mx-auto mb-8">
              {blog.excerpt}
            </p>

            <div className="flex flex-wrap justify-center gap-5 text-white/85">
              <div className="flex items-center gap-2">
                <User size={18} className="text-[#F8B04C]" />
                <span>{blog.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-[#F8B04C]" />
                <span>{formattedDate}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock size={18} className="text-[#F8B04C]" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#F7FBFF] via-white to-[#E6F2FA] overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#6BA3D0]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0052CC]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,rgba(10,38,71,0.7)_1px,transparent_1px),linear-gradient(rgba(10,38,71,0.7)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Blog Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="-mt-10 mb-14 relative z-20 rounded-[2rem] overflow-hidden shadow-2xl border border-white bg-white"
          >
            <ImageWithFallback
              src={blog.image}
              alt={blog.title}
              className="w-full h-[320px] md:h-[480px] object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-14">
            {/* Left Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                <Card className="p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#2C5F8D]/10 shadow-lg">
                  <div className="flex items-center gap-2 mb-5">
                    <BookOpen size={18} className="text-[#2C5F8D]" />
                    <h3 className="font-bold text-[#0A2647]">
                      Blog Details
                    </h3>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600">
                    <p>
                      <strong className="text-[#0A2647]">Category:</strong>{" "}
                      {blog.category}
                    </p>
                    <p>
                      <strong className="text-[#0A2647]">Author:</strong>{" "}
                      {blog.author}
                    </p>
                    <p>
                      <strong className="text-[#0A2647]">Read Time:</strong>{" "}
                      {blog.readTime}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button className="inline-flex items-center gap-2 text-[#2C5F8D] font-semibold">
                      <Share2 size={16} />
                      Share Article
                    </button>
                  </div>
                </Card>

                <Card className="p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#2C5F8D]/10 shadow-lg">
                  <div className="flex items-center gap-2 mb-5">
                    <Sparkles size={18} className="text-[#2C5F8D]" />
                    <h3 className="font-bold text-[#0A2647]">
                      Related Articles
                    </h3>
                  </div>

                  {relatedBlogs.length === 0 ? (
                    <p className="text-sm text-gray-600">
                      No related blogs found.
                    </p>
                  ) : (
                    <div className="space-y-5">
                      {relatedBlogs.map((post) => (
                        <Link
                          key={post.id}
                          to={`/blog/${post.slug}`}
                          className="group block"
                        >
                          <div className="flex gap-3">
                            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                              <ImageWithFallback
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>

                            <div>
                              <Badge
                                variant="outline"
                                className="text-[11px] mb-2 border-[#2C5F8D]/20 text-[#2C5F8D]"
                              >
                                {post.category}
                              </Badge>

                              <h4 className="text-sm font-bold text-[#0A2647] leading-snug group-hover:text-[#2C5F8D] transition-colors">
                                {post.title}
                              </h4>

                              <p className="text-xs text-gray-500 mt-1">
                                {post.readTime}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            </aside>

            {/* Main Article */}
            <article className="bg-white/95 backdrop-blur-sm rounded-[2rem] border border-[#2C5F8D]/10 shadow-xl p-7 md:p-10 lg:p-12">
              <div
                className="prose prose-slate max-w-none text-gray-700 prose-headings:text-[#0A2647] prose-a:text-[#2C5F8D] prose-strong:text-[#0A2647]"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              <div className="rounded-2xl bg-[#E6F2FA] border border-[#2C5F8D]/10 p-6 md:p-8 mt-10 mb-10">
                <h3 className="text-2xl font-bold text-[#0A2647] mb-3">
                  Need Help With This?
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Talk to our team and get practical support for SEO, ads,
                  branding, websites, and digital growth.
                </p>

                <a
                  href={`https://wa.me/919629288884?text=${encodeURIComponent(
                    `Hi, I read your blog "${blog.title}" and would like to discuss support`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#128C4A] hover:bg-[#0f7a40] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  <WhatsAppIcon />
                  Discuss on WhatsApp
                </a>
              </div>

              {(previousBlog || nextBlog) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-gray-100">
                  {previousBlog && (
                    <Link
                      to={`/blog/${previousBlog.slug}`}
                      className="group flex items-center gap-4 rounded-2xl border border-[#2C5F8D]/10 bg-white p-5 hover:shadow-lg transition-all"
                    >
                      <div className="w-11 h-11 rounded-full bg-[#E6F2FA] flex items-center justify-center flex-shrink-0">
                        <ArrowLeft size={18} className="text-[#2C5F8D]" />
                      </div>

                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          Previous Article
                        </p>
                        <h4 className="font-bold text-[#0A2647] group-hover:text-[#2C5F8D]">
                          {previousBlog.title}
                        </h4>
                      </div>
                    </Link>
                  )}

                  {nextBlog && (
                    <Link
                      to={`/blog/${nextBlog.slug}`}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-[#2C5F8D]/10 bg-white p-5 hover:shadow-lg transition-all text-right"
                    >
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          Next Article
                        </p>
                        <h4 className="font-bold text-[#0A2647] group-hover:text-[#2C5F8D]">
                          {nextBlog.title}
                        </h4>
                      </div>

                      <div className="w-11 h-11 rounded-full bg-[#E6F2FA] flex items-center justify-center flex-shrink-0">
                        <ArrowRight size={18} className="text-[#2C5F8D]" />
                      </div>
                    </Link>
                  )}
                </div>
              )}
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}