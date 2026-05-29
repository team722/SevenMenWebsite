import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Sparkles,
  Loader2,
  CloudCog,
} from "lucide-react";
import {
  collection,
  getDocs,
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

export function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true);
        setErrorMessage("");

        const snapshot = await getDocs(collection(db, "blogs"));

        const blogList = snapshot.docs.map((doc) => {
          const data = doc.data();

          return {
            id: doc.id,
            title: data.title || "",
            slug: data.slug || "",
            category: data.category || "Blog",
            author: data.author || "Sevenmen Team",
            excerpt: data.excerpt || "",
            content: data.content || "",
            image: data.image || "",
            readTime: data.readTime || "5 min read",
            status: data.status || "published",
            createdAt: data.createdAt,
          };
        }) as Blog[];

        const publishedBlogs = blogList
          .filter((blog) => blog.status === "published")
          .sort((a, b) => {
            const dateA = a.createdAt?.toDate?.().getTime?.() || 0;
            const dateB = b.createdAt?.toDate?.().getTime?.() || 0;
            return dateB - dateA;
          });


console.log(publishedBlogs)   
       
        setBlogs(publishedBlogs);
      } catch (error) {
        console.error("Fetch blogs error:", error);
        setErrorMessage("Unable to load blogs. Please check Firebase rules and console errors.");
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-28 md:py-32 overflow-hidden bg-gradient-to-br from-[#0A2647] via-[#123B63] to-[#2C5F8D]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2647]/95 via-[#123B63]/90 to-[#2C5F8D]/85" />

        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6BA3D0]/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 mb-6">
              <Sparkles size={18} className="text-[#F8B04C]" />
              <span className="text-sm md:text-base font-semibold">
                Latest Insights
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Blog
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
              Read practical ideas on SEO, paid ads, branding, websites,
              automation, and digital business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog List */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#F7FBFF] via-white to-[#E6F2FA] overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#6BA3D0]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0052CC]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 size={34} className="animate-spin text-[#2C5F8D]" />
            </div>
          ) : errorMessage ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-[#0A2647] mb-3">
                Blog loading issue
              </h2>
              <p className="text-gray-600">{errorMessage}</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-[#0A2647] mb-3">
                No blogs found
              </h2>
              <p className="text-gray-600">
                Blog data exists in Firebase, but no published blog is available.
                Check the field name: <strong>status</strong> should be{" "}
                <strong>published</strong>.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="h-full"
                >
                  <Card className="h-full overflow-hidden bg-white/95 backdrop-blur-sm border border-[#2C5F8D]/10 shadow-lg hover:shadow-2xl transition-all duration-300 group rounded-[1.75rem]">
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={
                          blog.image ||
                          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                        }
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-[#0A2647] hover:bg-white backdrop-blur-sm">
                          {blog.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={15} />
                          <span>
                            {blog.createdAt
                              ? blog.createdAt.toDate().toLocaleDateString()
                              : "Recently"}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <Clock size={15} />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-[#0A2647] mb-3 leading-snug">
                        {blog.title}
                      </h3>

                      <p className="text-base leading-relaxed text-gray-600 mb-5 flex-1">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User size={15} />
                          <span>{blog.author}</span>
                        </div>

                        <Link
                          to={`/blog/${blog.slug}`}
                          className="inline-flex items-center gap-2 text-[#2C5F8D] font-semibold hover:gap-3 transition-all whitespace-nowrap"
                        >
                          Read More
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}