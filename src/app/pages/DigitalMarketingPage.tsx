import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Search,
  TrendingUp,
  MessageSquare,
  ShoppingCart,
  Mail,
  Users,
  FileText,
  Target,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Zap,
  Award,
  ChevronDown,
  Lightbulb,
  LineChart,
  Share2,
  Palette,
  HeadphonesIcon,
  Rocket,
  Video,
} from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Process } from '../components/Process';
import { CaseStudies } from '../components/CaseStudies';
import { OneLineCTA } from '../components/OneLineCTA';
import { NewCTA } from '../components/NewCTA';

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description:
      'We learn about your business, audience, goals, and challenges.'
  },
  {
    number: '02',
    icon: Target,
    title: 'Strategy',
    description:
      'We create a clear plan tailored to your business objectives.'
  },
  {
    number: '03',
    icon: Palette,
    title: 'Create',
    description:
      'Our team designs, develops, writes, edits, and prepares your project.'
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description:
      'We publish, deliver, or launch the final solution.'
  },
  {
    number: '05',
    icon: HeadphonesIcon,
    title: 'Support',
    description:
      'We monitor, improve, and support your long-term growth.'
  }
];

const services = [
  {
    icon: Search,
    title: 'SEO Service',
    description:
      'We help your website appear for customer searches through keyword research, local SEO, content updates, page optimization, technical fixes, and performance tracking.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description:
      'We plan and manage content for platforms like Instagram, Facebook, LinkedIn, and YouTube. From post ideas to captions and creatives, we help your brand stay active and consistent.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: TrendingUp,
    title: 'Paid Advertising',
    description:
      'We run ads on Google, Facebook, Instagram, and YouTube to bring faster reach, traffic, and leads. The focus is simple: spend wisely, target the right people, and improve ROI and ROAS.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: ShoppingCart,
    title: 'Marketplace Marketing',
    description:
      'We support product-based businesses on platforms like Amazon, Flipkart, and Meesho. We help with listings, product titles, descriptions, images, ads, and catalog updates.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Marketing',
    description:
      'We help you use WhatsApp for customer follow-ups, offers, updates, reminders, and lead nurturing. It is useful for businesses that need direct and quick customer communication.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description:
      'We create email campaigns for offers, updates, newsletters, and follow-ups. This helps you stay connected with leads and existing customers without depending only on ads.',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Video,
    title: 'Youtube Marketing',
    description: 'We help improve your //Youtube channel with better titles, descriptions, thumbnails, upload planning, and video promotion. The goal is to make your videos easier to find and watch.',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Users,
    title: 'Influencer Marketing',
    description:
      'We help you work with creators and influencers who match your brand and audience. This works well for local promotions, product launches, events, and awareness campaigns.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: FileText,
    title: 'Landing Page Campaigns',
    description:
      'We create landing pages for ads, offers, events, and lead generation. Each page is made to explain the offer clearly and help visitors take action.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    icon: Target,
    title: 'Lead Generation',
    description:
      'We build campaigns that bring inquiries through SEO, ads, landing pages, social media, WhatsApp, and follow-up systems. The focus is on quality leads, not just traffic.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description:
      'We track traffic, leads, ad performance, ROI, ROAS, and campaign results. You get clear updates, so you know what is working and what needs improvement.',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50'
  }
];

const focusAreas = [
  {
    icon: Zap,
    title: 'Improve Visibility',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Target,
    title: 'Generate Quality Leads',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: LineChart,
    title: 'Increase ROI and ROAS',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Award,
    title: 'Build Brand Trust',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Users,
    title: 'Reach the Right Audience',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: BarChart3,
    title: 'Track Campaign Performance',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
];

const benefits = [
  {
    icon: Target,
    title: 'Focused on Delivering Leads and Maximizing ROI',
    description:
      'Every campaign is designed to generate quality inquiries and measurable returns.'
  },
  {
    icon: Award,
    title: 'Over 7 Years of Digital Marketing Experience',
    description:
      'A proven track record helping businesses across different industries grow online.'
  },
  {
    icon: CheckCircle,
    title: 'End-to-End Digital Solutions and Support',
    description:
      'Complete support from strategy and execution to tracking and ongoing optimization.'
  },
  {
    icon: Lightbulb,
    title: 'Customized Growth Plans Aligned With Your Goals',
    description:
      'No cookie-cutter approach. We create strategies based on your business, audience, and budget.'
  },
  {
    icon: MessageSquare,
    title: 'Open Communication for Complete Transparency',
    description:
      'Regular updates, clear reporting, and accessible team support throughout the process.'
  }
];

const faqs = [
  {
    question: 'What does Sevenmen Media Solutions do in digital marketing?',
    answer:
      'We help businesses grow online through SEO, paid ads, social media marketing, marketplace marketing, WhatsApp campaigns, landing pages, lead generation, and performance tracking.'
  },
  {
    question: 'Do you provide digital marketing services in Chennai?',
    answer:
      'Yes. We are based in Chennai and work with businesses across Tamil Nadu and beyond. We also help local brands improve visibility on Google, social media, and other digital platforms.'
  },
  {
    question: 'Can digital marketing help my business get more leads?',
    answer:
      'Yes. With the right mix of SEO, ads, landing pages, content, and follow-up campaigns, digital marketing can help your business attract more relevant customer inquiries.'
  }
];

export function DigitalMarketingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency in Chennai | Sevenmen Media</title>
        <meta name="description" content="Sevenmen Media Solutions offers digital marketing services in Chennai, including SEO, paid ads, social media, marketplace marketing, landing pages, and lead generation." />
        <meta name="keywords" content="Top Digital Marketing Agency Chennai, Digital Marketing Agency Chennai, Digital Marketing Services Chennai, SEO Services Chennai, Social Media Marketing Chennai, Paid Ads Chennai, Marketplace Marketing Chennai, WhatsApp Marketing Chennai, Lead Generation Chennai, Sevenmen Media Solutions" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sevenmensolutions.com/top-digital-marketing-agency-chennai" />

        <meta property="og:title" content="Digital Marketing Agency in Chennai | Sevenmen Media" />
        <meta property="og:description" content="Sevenmen Media Solutions offers digital marketing services in Chennai, including SEO, paid ads, social media, marketplace marketing, landing pages, and lead generation." />
        <meta property="og:url" content="https://www.sevenmensolutions.com/top-digital-marketing-agency-chennai" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sevenmen Media Solutions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing Agency in Chennai | Sevenmen Media" />
        <meta name="twitter:description" content="Sevenmen Media Solutions offers digital marketing services in Chennai, including SEO, paid ads, social media, marketplace marketing, landing pages, and lead generation." />
      </Helmet> 
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-28 md:py-32 bg-gradient-to-br from-[#0A2647] via-[#2C5F8D] to-[#6BA3D0] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Digital marketing services in Chennai"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Elements */}
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
                <TrendingUp className="text-white" size={20} aria-hidden="true" />
                <span className="text-sm md:text-base font-semibold text-white">
                  Digital Marketing Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Performance-Driven Digital Marketing Agency in Chennai
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-4xl mb-8">
                Grow your business with SEO, social media marketing, paid ads,
                marketplace marketing, and lead generation services focused on
                visibility, quality inquiries, ROI, and ROAS.
              </p>

              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#0A2647] hover:bg-gray-100 text-base md:text-lg font-semibold h-14 px-8"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
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
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                    alt="Digital marketing strategy and analytics"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0052CC]/30 to-transparent" />
                </div>

                {/* Floating Card */}
                <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-8 lg:-right-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-2">
                      Growth
                    </div>

                    <p className="text-base font-medium text-gray-700">
                      Strategy, Tracking, and Lead Focus
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
                  Trusted Digital Marketing Services in Chennai for Business Growth
                </h2>

                <div className="space-y-5 mb-8">
                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    Digital marketing is not just about posting content or running
                    ads. It is about helping the right people find your business,
                    trust your brand, and take action.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    At Sevenmen Media Solutions, we provide digital marketing
                    services in Chennai that connect strategy, content, SEO, paid
                    ads, social media, marketplace marketing, and lead generation.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    Whether you want to improve your Google ranking, grow your
                    social media presence, increase website traffic, or generate
                    qualified leads, our team helps you build a practical digital
                    marketing plan that supports long-term business growth.
                  </p>
                </div>

                {/* Key Focus Areas */}
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
                Our Digital Marketing Services
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
                Our services that help your brand improve visibility, reach the right audience, and generate quality inquiries.
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
                  We support startups, local businesses, service providers,
                  e-commerce brands, real estate companies, educational
                  institutions, healthcare brands, creators, and personal brands
                  with practical digital marketing services.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  Our goal is to help each business improve online visibility,
                  reach the right audience, generate quality leads, and build
                  steady long-term growth.
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
                Why Choose Sevenmen Media Solutions for Digital Marketing
              </h2>

              <div className="max-w-4xl mx-auto space-y-5">
                <p className="text-base md:text-lg leading-relaxed text-white/85">
                  Selecting the right digital marketing partner is crucial to your
                  business success. You need a team that truly understands your
                  brand, crafts strategic plans, and delivers measurable results.At Sevenmen Media Solutions, we combine strategy, content, SEO,
                  paid ads, social media, and reporting to help your business grow
                  with confidence.
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








        {/* Process Section */}

        
              {/* Our Process Section - White With Grid */}
        <section
          id="process"
          className="relative py-20 md:py-24 bg-gradient-to-br from-[#F7FBFF] via-white to-[#E6F2FA] overflow-hidden"
        >
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
                  How We Work
                </span>
              </div>
        
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
                Our Process
              </h2>
        
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
                Simple Steps. Clear Results.
              </p>
        
              <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto mt-3">
                We keep the process easy, organized, and focused on your business goals.
              </p>
            </motion.div>
        
            <div className="relative">
              {/* Timeline Line - Desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2C5F8D]/10 via-[#2C5F8D] to-[#2C5F8D]/10 -translate-x-1/2" />
        
              <div className="space-y-14 md:space-y-16 lg:space-y-24">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isEven = index % 2 === 0;
        
                  return (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        {/* Content */}
                        <div
                          className={
                            isEven
                              ? "lg:text-right lg:pr-16"
                              : "lg:col-start-2 lg:pl-16"
                          }
                        >
                          <div className="relative rounded-2xl bg-white/85 backdrop-blur-sm border border-[#2C5F8D]/10 shadow-lg hover:shadow-xl transition-shadow p-6 md:p-7 overflow-hidden">
                            <div className="absolute top-0 right-0 w-28 h-28 bg-[#6BA3D0]/15 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3" />
        
                            <div className="relative z-10">
                              {/* Mobile Icon */}
                              <div className="lg:hidden mb-5">
                                <div className="w-16 h-16 rounded-full bg-[#6BA3D0]/10 border-4 border-[#2C5F8D] flex items-center justify-center">
                                  <Icon className="text-[#2C5F8D]" size={28} />
                                </div>
                              </div>
        
                              <div
                                className={
                                  isEven
                                    ? "flex items-center justify-start lg:justify-end mb-4"
                                    : "flex items-center justify-start mb-4"
                                }
                              >
                                <span
                                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6BA3D0]/25 leading-none"
                                  aria-hidden="true"
                                >
                                  {step.number}
                                </span>
                              </div>
        
                              <h3 className="text-xl font-bold text-[#0A2647] mb-3">
                                {step.title}
                              </h3>
        
                              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
        
                        {/* Desktop Icon Circle */}
                        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="w-16 h-16 rounded-full bg-white border-4 border-[#2C5F8D] flex items-center justify-center shadow-lg">
                            <Icon className="text-[#2C5F8D]" size={28} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      



















        {/* Case Studies Section */}
        <CaseStudies />

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
                Clear answers to common questions about our digital marketing
                services in Chennai.
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
        {/* <OneLineCTA /> */}
        <NewCTA/>
      </main>
    </>  
  );
}