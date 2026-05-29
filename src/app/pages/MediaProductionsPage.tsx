import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Video,
  ArrowRight,
  ChevronDown,
  Camera,
  Film,
  Megaphone,
  Clapperboard,
  PlaySquare,
  Sparkles,
  MonitorPlay,
  Users,
  Target,
  Award,
  MessageSquare,
  Lightbulb,
  Edit3,
  Rocket,
  HeadphonesIcon
} from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { NewCTA } from '../components/NewCTA';

const focusAreas = [
  {
    icon: Megaphone,
    title: 'Promotional Videos',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Film,
    title: 'Corporate Videos',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Sparkles,
    title: 'Brand Story Videos',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: MonitorPlay,
    title: 'Commercial Videos',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Clapperboard,
    title: 'Animated Explainer Videos',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: PlaySquare,
    title: 'Social Media Reels & Shorts',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  }
];

const mediaServices = [
  {
    icon: Film,
    title: 'Corporate Videos',
    description:
      'Professional videos that introduce your company, services, team, process, and brand value in a clear and trusted way.',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Megaphone,
    title: 'Promotional Videos',
    description:
      'Short and focused videos made for product launches, service promotions, offers, events, and marketing campaigns.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Sparkles,
    title: 'Brand Story Videos',
    description:
      'Videos that share your journey, purpose, values, and what makes your brand different from others.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: MonitorPlay,
    title: 'Commercial Videos',
    description:
      'Ad-ready commercial videos designed to promote your products, services, offers, and campaigns with strong visual impact.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Clapperboard,
    title: 'Animated Explainer Videos',
    description:
      'Simple animated videos that explain your product, service, process, app, software, or business idea clearly.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: PlaySquare,
    title: 'Social Media Reels & Shorts',
    description:
      'Quick vertical videos for Instagram Reels, YouTube Shorts, Facebook, and LinkedIn to improve reach and engagement.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  }
];

const benefits = [
  {
    icon: Award,
    title: '7+ Years of Creative Experience',
    description:
      'Experienced in planning, shooting, editing, and delivering creative content for business needs.'
  },
  {
    icon: Video,
    title: 'Video, Photography, Design, and Marketing Support',
    description:
      'We support your media production needs with creative, design, and marketing understanding.'
  },
  {
    icon: Target,
    title: 'Content Planned for Business Goals',
    description:
      'Every video is planned based on where it will be used and what action it should support.'
  },
  {
    icon: Edit3,
    title: 'Professional Editing and Delivery',
    description:
      'We edit videos with clean visuals, music, titles, graphics, color correction, and proper formats.'
  },
  {
    icon: Users,
    title: 'Chennai-Based Production Team',
    description:
      'Our local team understands Chennai businesses, audiences, locations, and production needs.'
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication From Shoot to Final Output',
    description:
      'We keep the process simple with clear planning, updates, revisions, and final delivery support.'
  }
];

const productionProcess = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Understand',
    description:
      'We learn about your business, audience, message, video purpose, and where the content will be used.'
  },
  {
    number: '02',
    icon: Target,
    title: 'Plan',
    description:
      'We prepare the concept, script idea, shoot style, locations, schedule, and content direction.'
  },
  {
    number: '03',
    icon: Camera,
    title: 'Shoot',
    description:
      'Our team captures the required visuals, interviews, product shots, event moments, or brand footage.'
  },
  {
    number: '04',
    icon: Edit3,
    title: 'Edit',
    description:
      'We organize the footage, add music, titles, graphics, color correction, and make the video clear and polished.'
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Deliver',
    description:
      'We provide the final video in the right format for social media, websites, ads, presentations, or campaigns.'
  },
  {
    number: '06',
    icon: HeadphonesIcon,
    title: 'Support',
    description:
      'We help with revisions, format changes, short edits, and content suggestions when needed.'
  }
];

const portfolioTabs = [
  'Commercial Videos',
  'Promotional Videos',
  'Corporate Videos',
  'Brand Story Videos',
  'Animated Explainer Videos',
  'Social Media Reels & Shorts'
];

const portfolioItems = [
  {
    title: 'Promotional Video 01',
    category: 'Promotional Videos',
    videoUrl: 'https://www.youtube.com/embed/4KJfmfLCKqY',
    description:
      'A focused promotional video created to highlight products, services, offers, and campaigns in a clear and engaging way.'
  },
  {
    title: 'Promotional Video 02',
    category: 'Promotional Videos',
    videoUrl: 'https://www.youtube.com/embed/OZukSA83D30',
    description:
      'A marketing-ready promotional video designed to improve brand visibility and support digital campaign performance.'
  },
  {
    title: 'Corporate Video 01',
    category: 'Corporate Videos',
    videoUrl: 'https://www.youtube.com/embed/LauR_lwl3mU',
    description:
      'A professional corporate video that presents the company, brand message, services, and business value with a polished look.'
  },
  {
    title: 'Corporate Video 02',
    category: 'Corporate Videos',
    videoUrl: 'https://www.youtube.com/embed/1UVn_zhPpZ8',
    description:
      'A clean corporate video created to build trust, explain business strengths, and communicate clearly with the target audience.'
  },
  {
    title: 'Brand Story Video',
    category: 'Brand Story Videos',
    videoUrl: 'https://www.youtube.com/embed/cz3OZSgBEVo',
    description:
      'A story-driven brand video that showcases the brand journey, purpose, values, and emotional connection with the audience.'
  },
  {
    title: 'Commercial Video 01',
    category: 'Commercial Videos',
    videoUrl: 'https://www.youtube.com/embed/M5oUs3CNw0k',
    description:
      'A commercial video created to promote products, services, and campaigns with a strong visual presentation.'
  },
  {
    title: 'Commercial Video 02',
    category: 'Commercial Videos',
    videoUrl: 'https://www.youtube.com/embed/ZGZNHCrwneg',
    description:
      'A business-focused commercial video designed to support marketing, advertising, and brand promotion.'
  },
  {
    title: 'Commercial Video 03',
    category: 'Commercial Videos',
    videoUrl: 'https://www.youtube.com/embed/kvlZzsL8qfw',
    description:
      'A polished commercial video made to capture attention and communicate key brand messages clearly.'
  },
  {
    title: 'Animated Explainer Video',
    category: 'Animated Explainer Videos',
    videoUrl: 'https://www.youtube.com/embed/4Gh6BzM-Mxc',
    description:
      'An animated explainer video that simplifies a product, service, process, or business idea for easy understanding.'
  },
  {
    title: 'Social Media Reel 01',
    category: 'Social Media Reels & Shorts',
    videoUrl: 'https://www.youtube.com/embed/54IflHVtcoU',
    description:
      'A short-form social media video created for quick engagement, reach, and platform-ready promotion.'
  },
  {
    title: 'Social Media Reel 02',
    category: 'Social Media Reels & Shorts',
    videoUrl: 'https://www.youtube.com/embed/SY8RF7NaNWk',
    description:
      'A vertical reel-style video designed for Instagram Reels, YouTube Shorts, and social media campaigns.'
  },
  {
    title: 'Social Media Reel 03',
    category: 'Social Media Reels & Shorts',
    videoUrl: 'https://www.youtube.com/embed/Ug5JPh8W4YQ',
    description:
      'A short and engaging video created to improve social media visibility and audience interaction.'
  }
];

const faqs = [
  {
    question: 'What media production services do you offer?',
    answer:
      'We create corporate videos, promotional videos, brand story videos, commercial videos, animated explainer videos, and social media reels and shorts.'
  },
  {
    question: 'Do you provide video production services in Chennai?',
    answer:
      'Yes. Sevenmen Media Solutions provides media and video production services in Chennai for businesses, brands, creators, and organizations.'
  },
  {
    question: 'Can you create videos for social media?',
    answer:
      'Yes. We create platform-ready videos for Instagram Reels, YouTube Shorts, Facebook, LinkedIn, ads, and regular social media content.'
  },
  {
    question: 'Can you make videos for ads and promotions?',
    answer:
      'Yes. We create promotional videos, commercial videos, product videos, and social media ad creatives that can be used for campaigns, offers, launches, and brand awareness.'
  },
  {
    question: 'Do you provide edited videos in different formats?',
    answer:
      'Yes. We can deliver videos in formats suitable for Instagram, YouTube, Facebook, websites, presentations, ads, and other platforms.'
  }
];

export function MediaProductionsPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [activeTab, setActiveTab] = useState(portfolioTabs[0]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const filteredPortfolio = portfolioItems.filter(
    (item) => item.category === activeTab
  );

  if (serviceId && serviceId !== 'top-media-production-services-chennai') {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
            Service Not Found
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-6">
            The service page you are looking for is not available.
          </p>

          <Link to="/services">
            <Button className="bg-[#0A2647] hover:bg-[#2C5F8D] text-white text-base md:text-lg font-semibold h-14 px-8">
              View All Services
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>Media Production Services in Chennai | Sevenmen Media</title>
        <meta
          name="description"
          content="Sevenmen Media Solutions offers media production services in Chennai, including corporate videos, promotional videos, brand films, explainer videos, commercial videos, and social media reels."
        />
        <meta
          name="keywords"
          content="Top Media Production Services in Chennai, Video Production Company in Chennai, Media Production Company Chennai, Corporate Video Production Chennai, Promotional Videos Chennai, Brand Story Videos Chennai, Commercial Videos Chennai, Animated Explainer Videos Chennai, Social Media Video Production Chennai"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.sevenmensolutions.com/top-media-production-services-chennai"
        />

        <meta
          property="og:title"
          content="Media Production Services in Chennai | Sevenmen Media"
        />
        <meta
          property="og:description"
          content="Sevenmen Media Solutions offers media production services in Chennai, including corporate videos, promotional videos, brand films, explainer videos, commercial videos, and social media reels."
        />
        <meta
          property="og:url"
          content="https://www.sevenmensolutions.com/top-media-production-services-chennai"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sevenmen Media Solutions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Media Production Services in Chennai | Sevenmen Media"
        />
        <meta
          name="twitter:description"
          content="Sevenmen Media Solutions offers media production services in Chennai, including corporate videos, promotional videos, brand films, explainer videos, commercial videos, and social media reels."
        />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-28 md:py-32 bg-gradient-to-br from-[#0A2647] via-[#2C5F8D] to-[#6BA3D0] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Media production services in Chennai"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#6BA3D0]/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
                <Video className="text-white" size={20} aria-hidden="true" />

                <span className="text-sm md:text-base font-semibold text-white">
                  Media Production Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Media Production Services in Chennai
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-4xl mb-8">
                Create professional videos, brand films, product shoots,
                corporate videos, commercial videos, animated explainers, and
                social media reels that help your business stand out and connect
                with the right audience.
              </p>

              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#0A2647] hover:bg-gray-100 text-base md:text-lg font-semibold h-14 px-8"
                >
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Media Production Overview Section */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                    alt="Professional media production setup in Chennai"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0052CC]/30 to-transparent" />
                </div>

                <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-8 lg:-right-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-2">
                      Video
                    </div>

                    <p className="text-base font-medium text-gray-700">
                      Planned for Brand Visibility
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-5">
                  Professional Media Production Services in Chennai for Better
                  Brand Visibility
                </h2>

                <div className="space-y-5 mb-8">
                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    Your audience should understand what your business does
                    without confusion. Professional video content helps you
                    explain your services, show your products, build trust, and
                    make your brand easier to remember.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    At Sevenmen Media Solutions, we create corporate videos,
                    promotional videos, brand story videos, commercial videos,
                    animated explainer videos, social media reels, and
                    short-form video content for businesses in Chennai and
                    across Tamil Nadu.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    Each video is planned with a clear use, whether it is for
                    your website, social media, ads, product promotion, sales
                    presentation, or brand awareness campaign.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {focusAreas.map((area, index) => {
                    const Icon = area.icon;

                    return (
                      <motion.div
                        key={area.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-white shadow-sm"
                      >
                        <div
                          className={`w-11 h-11 ${area.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className={area.color} size={22} />
                        </div>

                        <h4 className="text-base font-bold text-[#0A2647]">
                          {area.title}
                        </h4>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Media Production Services */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
                Our Media Production Services
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
                Video production services planned to help your brand explain,
                promote, and communicate clearly across every platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaServices.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="p-8 h-full bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                      <div
                        className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={service.color} size={28} />
                      </div>

                      <h3 className="text-xl font-bold text-[#0A2647] mb-3">
                        {service.title}
                      </h3>

                      <p className="text-base leading-relaxed text-gray-600">
                        {service.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who We Help */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-5">
                Who We Help
              </h2>

              <div className="space-y-5">
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  We work with businesses, creators, and organizations that want
                  to explain their services better, promote their products, and
                  build a stronger visual presence online.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  Whether you need corporate videos, promotional content,
                  commercial videos, reels, animated explainers, short-form
                  videos, or brand story videos, our team helps you create
                  content that fits your audience, platform, and business goal.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-[#0A2647] to-[#2C5F8D] text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 max-w-5xl mx-auto">
                Why Choose Sevenmen Media Solutions for Media Production
              </h2>

              <div className="max-w-4xl mx-auto space-y-5">
                <p className="text-base md:text-lg leading-relaxed text-white/85">
                  A good video is not just about camera quality. It needs the
                  right idea, clean visuals, clear editing, and a message that
                  fits your business goal. At Sevenmen Media Solutions, we
                  handle media production with a practical approach. From
                  planning the shoot to final delivery, we make sure every video
                  is useful for your brand, marketing, and customer
                  communication.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="p-8 h-full bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/20 transition-all duration-300">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-5">
                        <Icon className="text-white" size={28} />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">
                        {benefit.title}
                      </h3>

                      <p className="text-base leading-relaxed text-white/80">
                        {benefit.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Production Process */}
        <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#F7FBFF] via-white to-[#E6F2FA] overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#6BA3D0]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0052CC]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          <div className="absolute inset-0 opacity-[0.45] bg-[radial-gradient(circle_at_top_right,rgba(107,163,208,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(0,82,204,0.10),transparent_35%)]" />
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,rgba(10,38,71,0.7)_1px,transparent_1px),linear-gradient(rgba(10,38,71,0.7)_1px,transparent_1px)] bg-[size:48px_48px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14 md:mb-16"
            >
              <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-white/80 border border-[#2C5F8D]/15 shadow-sm mb-5">
                <span className="text-sm md:text-base font-semibold text-[#2C5F8D]">
                  How We Create
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
                Our Production Process
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto mb-3">
                From Idea to Final Video, We Keep It Simple
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
                We follow a clear production process so your video content is
                planned well, shot properly, edited cleanly, and delivered ready
                to use.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productionProcess.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="relative overflow-hidden p-8 h-full bg-white/90 backdrop-blur-sm border border-[#2C5F8D]/10 hover:shadow-xl transition-all duration-300 group">
                      <div className="absolute top-0 right-0 w-28 h-28 bg-[#6BA3D0]/15 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3 group-hover:bg-[#2C5F8D]/15 transition-colors" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-16 h-16 rounded-full bg-[#6BA3D0]/10 flex items-center justify-center group-hover:bg-[#2C5F8D] transition-colors duration-300">
                            <Icon
                              className="text-[#2C5F8D] group-hover:text-white transition-colors duration-300"
                              size={28}
                            />
                          </div>

                          <span className="text-4xl font-bold text-[#6BA3D0]/25">
                            {step.number}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-[#0A2647] mb-3">
                          {step.title}
                        </h3>

                        <p className="text-base leading-relaxed text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
                Our Portfolio
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto">
                Take a look at the videos, shoots, and campaign visuals we
                create for brands, businesses, and organizations. From corporate
                videos to promotional videos, commercials, animated explainers,
                reels, and brand stories, our work is planned to make your brand
                look professional and communicate clearly.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {portfolioTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3 rounded-full text-sm md:text-base font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-[#2C5F8D] text-white shadow-md'
                      : 'bg-white text-[#2C5F8D] border border-[#2C5F8D]/20 hover:bg-[#E6F2FA]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPortfolio.map((item, index) => (
                <motion.div
                  key={`${item.title}-${activeTab}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full overflow-hidden bg-white border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                    <div className="relative aspect-video overflow-hidden bg-[#0A2647]">
                      <iframe
                        src={item.videoUrl}
                        title={item.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E6F2FA] text-[#2C5F8D] text-sm font-semibold mb-4">
                        {item.category}
                      </div>

                      <h3 className="text-xl font-bold text-[#0A2647] mb-3">
                        {item.title}
                      </h3>

                      <p className="text-base leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="py-20 md:py-24 bg-gradient-to-br from-white to-[#E6F2FA]/30"
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
                FAQ
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
                Clear answers to common questions about our media production and
                video production services in Chennai.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden"
                >
                  <button
                    id={`faq-question-${index}`}
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#E6F2FA]/30 transition-colors"
                    aria-expanded={openFaqIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-base md:text-lg font-bold leading-relaxed text-[#0A2647] pr-4">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`text-[#2C5F8D] flex-shrink-0 transition-transform duration-300 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                      size={22}
                      aria-hidden="true"
                    />
                  </button>

                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={false}
                    animate={{
                      height: openFaqIndex === index ? 'auto' : 0,
                      opacity: openFaqIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <div className="px-6 pb-5 border-t border-[#2C5F8D]/10">
                      <p className="pt-4 text-base leading-relaxed text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <NewCTA />
      </main>
    </>
  );
}