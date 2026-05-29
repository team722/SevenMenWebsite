import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Lightbulb,
  Target,
  Megaphone,
  BadgeCheck,
  FileText,
  Search,
  BarChart3,
  Share2,
  LineChart,
  Users,
  ClipboardList,
  Rocket,
  BookOpen,
  Compass,
  TrendingUp,
  Eye,
  CheckCircle,
  HeadphonesIcon,
  Layers,
  MessageSquare,
  Map,
  PenTool
} from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { NewCTA } from '../components/NewCTA';

const services = [
  {
    icon: TrendingUp,
    title: 'Digital Growth Strategy',
    description:
      'A practical growth plan for improving visibility, leads, customer trust, and online performance.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: BadgeCheck,
    title: 'Brand Strategy Consulting',
    description:
      'Clear guidance on your brand position, message, audience, tone, and overall identity.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Megaphone,
    title: 'Marketing Strategy Planning',
    description:
      'A focused plan for your marketing channels, campaigns, budget, offers, and business goals.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description:
      'Content direction for social media, websites, videos, blogs, ads, and brand communication.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: Rocket,
    title: 'Campaign Strategy',
    description:
      'Planning for promotions, launches, offers, awareness campaigns, and lead generation activities.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Search,
    title: 'SEO Strategy',
    description:
      'Keyword direction, page planning, content ideas, local SEO focus, and ranking improvement steps.',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: BarChart3,
    title: 'Paid Ads Strategy',
    description:
      'Ad planning for Google, Meta, YouTube, remarketing, lead generation, ROI, and ROAS.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: Share2,
    title: 'Social Media Strategy',
    description:
      'Platform selection, content themes, posting plans, engagement ideas, and audience growth direction.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    icon: LineChart,
    title: 'Sales Funnel Strategy',
    description:
      'A clear path to move people from awareness to inquiry, follow-up, and conversion.',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50'
  },
  {
    icon: Users,
    title: 'Market Research',
    description:
      'Insights into your audience, industry, customer behavior, demand, and growth opportunities.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Eye,
    title: 'Competitor Analysis',
    description:
      'A review of competitor activity, strengths, gaps, content, offers, and positioning.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Map,
    title: 'Go-To-Market Strategy',
    description:
      'Launch planning for new products, services, offers, brands, campaigns, or business ideas.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Target,
    title: 'Business Growth Planning',
    description:
      'A practical plan that connects marketing, sales, website, content, and customer follow-up.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: BookOpen,
    title: 'Training & Team Guidance',
    description:
      'Simple guidance for your team to understand strategy, content, marketing, and digital workflows.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
];

const focusAreas = [
  {
    icon: TrendingUp,
    title: 'Digital Growth Planning',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Megaphone,
    title: 'Marketing Strategy',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: BadgeCheck,
    title: 'Brand Positioning',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: FileText,
    title: 'Content Direction',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: Search,
    title: 'SEO and Paid Ads Planning',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: LineChart,
    title: 'Sales Funnel Planning',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Eye,
    title: 'Competitor and Market Research',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  }
];

const benefits = [
  {
    icon: Layers,
    title: 'Marketing, Branding, and Digital Expertise',
    description:
      'We connect strategy across marketing, branding, websites, content, SEO, paid ads, automation, and funnels.'
  },
  {
    icon: Target,
    title: 'Focus on Leads and Business Goals',
    description:
      'Every strategy is planned around visibility, lead generation, customer trust, and practical business growth.'
  },
  {
    icon: ClipboardList,
    title: 'Simple Guidance and Clear Action Plan',
    description:
      'We give you a clear direction that your team can understand and follow without confusion.'
  },
  {
    icon: Map,
    title: 'Chennai Market Understanding',
    description:
      'Our team understands local markets, customer behavior, and what growing businesses need to stand out.'
  },
  {
    icon: CheckCircle,
    title: 'No Guesswork, Just Clear Planning',
    description:
      'We help you choose the right steps before spending on marketing, branding, websites, ads, or automation.'
  }
];

const strategyProcess = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Understand',
    description:
      'We learn about your business, goals, audience, services, current challenges, and digital presence.'
  },
  {
    number: '02',
    icon: Search,
    title: 'Research',
    description:
      'We study your market, competitors, audience behavior, website, content, SEO, ads, and online visibility.'
  },
  {
    number: '03',
    icon: Eye,
    title: 'Identify Gaps',
    description:
      'We find what is missing, what is not working, and where your business has better growth opportunities.'
  },
  {
    number: '04',
    icon: PenTool,
    title: 'Plan',
    description:
      'We create a clear strategy for marketing, branding, content, campaigns, website, leads, and digital growth.'
  },
  {
    number: '05',
    icon: MessageSquare,
    title: 'Guide',
    description:
      'We explain the next steps clearly, so your team knows what to do, when to do it, and why it matters.'
  },
  {
    number: '06',
    icon: HeadphonesIcon,
    title: 'Improve',
    description:
      'We review progress, track results, and adjust the strategy based on performance and business needs.'
  }
];

const faqs = [
  {
    question: 'What do digital strategy consultants do?',
    answer:
      'Digital strategy consultants help businesses plan the right steps for marketing, branding, content, websites, SEO, paid ads, automation, and lead generation.'
  },
  {
    question: 'Why does my business need a digital strategy?',
    answer:
      'A digital strategy helps you avoid guesswork, use your budget wisely, choose the right platforms, and focus on actions that support real growth.'
  },
  {
    question: 'Who can use your digital strategy consulting services?',
    answer:
      'Startups, local businesses, service-based companies, e-commerce brands, real estate businesses, educational institutions, healthcare brands, B2B companies, and growing teams can use our strategy support.'
  },
  {
    question: 'What is included in your strategy process?',
    answer:
      'We review your business, audience, competitors, website, content, branding, SEO, ads, and current digital presence, then create a clear action plan.'
  },
  {
    question: 'How do I get started with Sevenmen Media Solutions?',
    answer:
      'You can share your business goals, current challenges, and what you want to improve. Our team will review your needs and suggest the next steps.'
  }
];

export function ConsultingStrategyPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Digital Strategy Consultants in Chennai | Sevenmen Media</title>
        <meta name="description" content="Sevenmen Media Solutions offers digital strategy consulting in Chennai for marketing, branding, content, SEO, paid ads, sales funnels, automation, and business growth." />
        <meta name="keywords" content="Top Digital Strategy Consultants in Chennai, Digital Strategy Consultants in Chennai, Digital Strategy Services in Chennai, Business Strategy Consultants in Chennai, Digital Growth Strategy Chennai, Marketing Strategy Services Chennai, Brand Strategy Consultants Chennai, Business Growth Consulting Chennai" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sevenmensolutions.com/top-digital-strategy-consultants-chennai" />

        <meta property="og:title" content="Digital Strategy Consultants in Chennai | Sevenmen Media" />
        <meta property="og:description" content="Sevenmen Media Solutions offers digital strategy consulting in Chennai for marketing, branding, content, SEO, paid ads, sales funnels, automation, and business growth." />
        <meta property="og:url" content="https://www.sevenmensolutions.com/top-digital-strategy-consultants-chennai" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sevenmen Media Solutions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Strategy Consultants in Chennai | Sevenmen Media" />
        <meta name="twitter:description" content="Sevenmen Media Solutions offers digital strategy consulting in Chennai for marketing, branding, content, SEO, paid ads, sales funnels, automation, and business growth." />
      </Helmet>
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-28 md:py-32 bg-gradient-to-br from-[#0A2647] via-[#2C5F8D] to-[#6BA3D0] overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Digital strategy consultants in Chennai"
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
                  <Compass className="text-white" size={20} aria-hidden="true" />
                  <span className="text-sm md:text-base font-semibold text-white">
                    Digital Strategy Consulting Services
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                  Best Digital Strategy Consultants in Chennai
                </h1>

                <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-4xl mb-8">
                  Need clarity before investing in marketing, branding, websites,
                  ads, or automation? Sevenmen Media Solutions helps you plan the
                  right digital direction for better visibility, leads, and
                  long-term growth.
                </p>

                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-[#0A2647] hover:bg-gray-100 text-base md:text-lg font-semibold h-14 px-8"
                  >
                    Talk to Our Strategy Team
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Digital Strategy Consulting Overview Section */}
          <section className="py-20 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
                {/* Left Image */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                      alt="Digital strategy services in Chennai"
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0052CC]/30 to-transparent" />
                  </div>

                  <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-8 lg:-right-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-2">
                        Strategy
                      </div>

                      <p className="text-base font-medium text-gray-700">
                        Built for Clear Growth Direction
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-5">
                    Digital Strategy Services in Chennai for Business Growth
                  </h2>

                  <div className="space-y-5 mb-8">
                    <p className="text-base md:text-lg leading-relaxed text-gray-600">
                      Growing online becomes easier when you know what to focus on
                      first. Many businesses spend money on ads, content, websites,
                      or tools without a clear plan, and that often leads to wasted
                      effort.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-gray-600">
                      At Sevenmen Media Solutions, we help businesses build a
                      practical digital strategy based on their goals, audience,
                      market, and current digital presence. We look at what is
                      working, what is missing, and what needs to improve across
                      marketing, branding, content, SEO, paid ads, websites,
                      automation, and sales funnels.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-gray-600">
                      Our goal is to give your business a clear direction, so every
                      digital activity supports visibility, lead generation, customer
                      trust, and long-term growth.
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

          {/* Our Services Section */}
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
                  Our Digital Strategy Consulting Services
                </h2>

                <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto">
                  We help you understand what your business needs next and build a
                  clear plan for digital growth. From branding and marketing to
                  content, SEO, ads, funnels, and launches, our strategy support
                  helps you make better decisions and move forward with confidence.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
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

          {/* Who We Help Section */}
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
                    We work with businesses that want to grow online but need a
                    clear plan before investing in marketing, branding, content,
                    websites, ads, or automation.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    Whether you are starting fresh, improving your current digital
                    presence, launching a new offer, or trying to generate better
                    leads, we help you understand what to focus on first. Our
                    strategy support gives your business a practical direction, so
                    every step you take is planned, useful, and connected to your
                    growth goals.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Why Choose Us Section */}
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
                  Why Choose Sevenmen Media Solutions for Digital Strategy
                </h2>

                <div className="max-w-4xl mx-auto space-y-5">
                  <p className="text-base md:text-lg leading-relaxed text-white/85">
                    A good strategy helps you stop guessing and start making better
                    decisions. Before spending on ads, content, websites, branding,
                    or automation, your business needs to know what to focus on and
                    why.At Sevenmen Media Solutions, we help you build a clear digital
                    direction based on your business goals, audience, market,
                    competition, and current online presence.
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

          {/* Our Strategy Process Section */}
          <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#F7FBFF] via-white to-[#E6F2FA] overflow-hidden">
            {/* Background Decoration */}
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
                    How We Plan
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
                  Our Strategy Process
                </h2>

                <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
                  We use a clear strategy process to understand where your business
                  stands, identify what needs improvement, and build a growth plan
                  your team can use without confusion.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {strategyProcess.map((step, index) => {
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

          {/* FAQ Section */}
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
                  Clear answers to common questions about our digital strategy
                  consulting services in Chennai.
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

          {/* Final CTA */}
          {/* <section className="py-20 md:py-24 bg-gradient-to-r from-[#0052CC] to-[#003d99]">
            <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Build a Clear Digital Growth Plan?
                </h2>

                <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8 max-w-3xl mx-auto">
                  Let&apos;s plan the right strategy for your marketing, branding,
                  content, website, ads, funnels, automation, and long-term business
                  growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-white text-[#0A2647] hover:bg-gray-100 text-base md:text-lg font-semibold h-14 px-8"
                    >
                      Talk to Our Strategy Team
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>

                  <Link to="/portfolio" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-white bg-transparent text-white hover:bg-transparent hover:text-white text-base md:text-lg font-semibold h-14 px-8"
                    >
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section> */}
          <NewCTA/>
        </main>
    </>    
  );
}