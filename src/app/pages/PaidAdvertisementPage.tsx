import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Search,
  TrendingUp,
  ShoppingCart,
  Target,
  BarChart3,
  ArrowRight,
  Zap,
  ChevronDown,
  Lightbulb,
  LineChart,
  Share2,
  Megaphone,
  Monitor,
  MousePointerClick,
  Video,
  MapPin,
  ShoppingBag,
  Briefcase,
  Rocket,
  Settings,
  ClipboardList,
  FileText,
  Users
} from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { NewCTA } from '../components/NewCTA';

const focusAreas = [
  {
    icon: Zap,
    title: 'Faster Brand Visibility',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Target,
    title: 'Targeted Audience Reach',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Users,
    title: 'Quality Lead Generation',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: TrendingUp,
    title: 'Website Traffic Growth',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: ShoppingBag,
    title: 'Sales-Focused Campaigns',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: LineChart,
    title: 'ROI and ROAS Tracking',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    icon: Settings,
    title: 'Campaign Optimization',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50'
  },
  {
    icon: BarChart3,
    title: 'Clear Performance Reports',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  }
];

const paidAdServices = [
  {
    icon: Search,
    title: 'Search Engine Advertising (PPC)',
    description:
      'Show your business on Google when people search for your products or services. PPC campaigns help bring high-intent traffic, calls, inquiries, and website visits.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Share2,
    title: 'Social Media Advertising',
    description:
      'Run targeted ads on Facebook, Instagram, LinkedIn, and YouTube to build awareness, promote offers, generate leads, and reach the right audience.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Monitor,
    title: 'Display Advertising',
    description:
      'Promote your brand with visual banner ads across websites, apps, and ad networks to improve reach, visibility, and brand recall.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    icon: MousePointerClick,
    title: 'Remarketing Campaigns',
    description:
      'Reach people who already visited your website, viewed your products, clicked your ads, or engaged with your brand earlier.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Briefcase,
    title: 'B2B Paid Marketing Services',
    description:
      'Create paid campaigns for B2B companies focused on decision-makers, lead forms, website traffic, service inquiries, and sales conversations.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Advertising',
    description:
      'Promote products through search, shopping, social media, and marketplace ads to improve product visibility, website traffic, and online sales.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Video,
    title: 'Video Advertising',
    description:
      'Use video ads on YouTube, Meta, and other platforms to explain your offer, build trust, and reach people with engaging content.',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: MapPin,
    title: 'Local Paid Advertising',
    description:
      'Target nearby customers with ads focused on calls, store visits, direction requests, bookings, local inquiries, and business growth.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  }
];

const platforms = [
  {
    icon: Search,
    title: 'Google Ads',
    description:
      'Reach people who are already searching for your products, services, or solutions on Google.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Share2,
    title: 'Meta Ads, Facebook & Instagram',
    description:
      'Promote your business through image ads, video ads, reels ads, lead forms, and retargeting campaigns.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Video,
    title: 'YouTube Ads',
    description:
      'Use video ads to build awareness, explain your offer, promote products, and reach a larger audience.',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Briefcase,
    title: 'LinkedIn Ads',
    description:
      'Run B2B campaigns targeting business owners, professionals, decision-makers, and industry-specific audiences.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: Monitor,
    title: 'Display Network',
    description:
      'Show visual banner ads across websites, apps, and partner networks to improve visibility and recall.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    icon: ShoppingCart,
    title: 'Marketplace Ads',
    description:
      'Promote products on platforms like Amazon, Flipkart, Meesho, and other online marketplaces.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: MapPin,
    title: 'Local Search Ads',
    description:
      'Target nearby customers searching for businesses, services, directions, calls, or store visits.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  }
];

const benefits = [
  {
    icon: Search,
    title: 'Google and Meta Ads Support',
    description:
      'We plan and manage campaigns across Google, Facebook, Instagram, YouTube, and other paid platforms.'
  },
  {
    icon: Target,
    title: 'Lead-Focused Campaign Planning',
    description:
      'Every campaign is planned around useful outcomes like calls, forms, sales, bookings, and quality inquiries.'
  },
  {
    icon: LineChart,
    title: 'ROI and ROAS Tracking',
    description:
      'We track campaign results to understand ad spend, revenue, leads, conversions, ROI, and ROAS.'
  },
  {
    icon: FileText,
    title: 'Landing Page and Creative Support',
    description:
      'We support your ads with clear landing pages, ad creatives, messages, and campaign flow.'
  },
  {
    icon: MapPin,
    title: 'Chennai-Based Paid Ads Team',
    description:
      'Our team understands local businesses, Chennai markets, customer behavior, and practical campaign needs.'
  },
  {
    icon: BarChart3,
    title: 'Clear Reporting and Optimization',
    description:
      'We share simple reports and improve campaigns based on real performance, not guesswork.'
  }
];

const paidAdProcess = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Understand',
    description:
      'We understand your business, offer, target customers, budget, location, and the result you want from paid ads.'
  },
  {
    number: '02',
    icon: Search,
    title: 'Research',
    description:
      'We check your audience, competitors, keywords, ad platforms, and market demand before building the campaign.'
  },
  {
    number: '03',
    icon: ClipboardList,
    title: 'Plan',
    description:
      'We prepare the campaign structure, targeting, ad message, creatives, landing page flow, and tracking setup.'
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description:
      'We publish your ads on the right platforms, such as Google, Meta, YouTube, LinkedIn, or marketplace channels.'
  },
  {
    number: '05',
    icon: Settings,
    title: 'Optimize',
    description:
      'We review the campaign regularly, adjust targeting, test creatives, manage budget, and improve lead quality.'
  },
  {
    number: '06',
    icon: BarChart3,
    title: 'Report',
    description:
      'We share simple reports showing performance, leads, cost, conversions, ROI, ROAS, and useful next steps.'
  }
];

const faqs = [
  {
    question: 'What paid advertising services do you offer?',
    answer:
      'We offer PPC advertising, Google Ads, Facebook Ads, Instagram Ads, YouTube Ads, display ads, remarketing campaigns, e-commerce ads, B2B paid marketing, and local paid advertising.'
  },
  {
    question: 'Do you provide Google Ads services in Chennai?',
    answer:
      'Yes. Sevenmen Media Solutions provides Google Ads services in Chennai for businesses that want better search visibility, website traffic, calls, leads, and sales.'
  },
  {
    question: 'Do you manage Facebook and Instagram ads?',
    answer:
      'Yes. We create and manage Facebook and Instagram ad campaigns for brand awareness, lead generation, offer promotions, retargeting, and customer engagement.'
  },
  {
    question: 'How much budget do I need for paid ads?',
    answer:
      'Your budget depends on your industry, location, competition, campaign goal, and platform. We help you start with a practical budget and improve based on performance.'
  },
  {
    question: 'How do you measure ROI and ROAS?',
    answer:
      'We track leads, sales, conversions, cost per lead, ad spend, revenue, ROI, and ROAS to understand how well your campaigns are performing and where they can improve.'
  }
];

export function PaidAdvertisementPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Paid Advertising Services in Chennai | Sevenmen Media</title>
        <meta name="description" content="Sevenmen Media Solutions offers paid advertising services in Chennai, including Google Ads, Meta Ads, PPC, remarketing, video ads, and lead generation campaigns." />
        <meta name="keywords" content="Top Paid Advertising Services in Chennai, Best PPC Agency in Chennai, Google Ads Agency in Chennai, Meta Ads Experts Chennai, Paid Ads Agency Chennai, PPC Advertising Company Chennai, Paid Advertising Company Chennai, Lead Generation Ads Chennai" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sevenmensolutions.com/paid-advertising-services-chennai" />

        <meta property="og:title" content="Paid Advertising Services in Chennai | Sevenmen Media" />
        <meta property="og:description" content="Sevenmen Media Solutions offers paid advertising services in Chennai, including Google Ads, Meta Ads, PPC, remarketing, video ads, and lead generation campaigns." />
        <meta property="og:url" content="https://www.sevenmensolutions.com/paid-advertising-services-chennai" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sevenmen Media Solutions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paid Advertising Services in Chennai | Sevenmen Media" />
        <meta name="twitter:description" content="Sevenmen Media Solutions offers paid advertising services in Chennai, including Google Ads, Meta Ads, PPC, remarketing, video ads, and lead generation campaigns." />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-28 md:py-32 bg-gradient-to-br from-[#0A2647] via-[#2C5F8D] to-[#6BA3D0] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Paid advertising agency in Chennai"
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
                <Megaphone className="text-white" size={20} aria-hidden="true" />
                <span className="text-sm md:text-base font-semibold text-white">
                  Paid Advertising Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Best Paid Ads Agency in Chennai for Leads, Sales, and ROI
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-4xl mb-8">
                From search ads and social media ads to remarketing and video
                campaigns, we help businesses spend smarter, reach the right
                audience, and grow with clear performance tracking.
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

        {/* Paid Advertising Overview Section */}
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
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                    alt="Paid advertising campaign dashboard"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0052CC]/30 to-transparent" />
                </div>

                {/* Floating Stat */}
                <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-8 lg:-right-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-2">
                      ROI
                    </div>

                    <p className="text-base font-medium text-gray-700">
                      Focused Campaign Tracking
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
                  Best PPC Agency in Chennai for Google Ads and Meta Ads
                </h2>

                <div className="space-y-5 mb-8">
                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    Paid advertising helps your business show up when people are
                    searching, scrolling, comparing, or ready to take action. It
                    is one of the fastest ways to promote your services, bring
                    traffic, generate leads, and test what works for your market.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    At Sevenmen Media Solutions, we plan and manage paid ad
                    campaigns across Google, Meta, YouTube, and other platforms.
                    Every campaign is built around your goal, whether it is more
                    calls, form submissions, website visits, product sales, or
                    brand awareness.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    We focus on reaching the right audience, using your budget
                    wisely, tracking ROI and ROAS, and improving campaigns based
                    on real performance.
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

        {/* Our Paid Ad Services Section */}
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
                Our Paid Advertising Services
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto">
                Every business runs ads for a different reason. Some want more
                leads. Some want more sales. Some want store visits, website
                traffic, bookings, or brand awareness. At Sevenmen Media
                Solutions, we plan paid advertising campaigns based on your goal,
                audience, budget, and platform, so every ad has a clear purpose.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {paidAdServices.map((service, index) => {
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

        {/* Platforms We Advertise On Section */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
                Platforms We Advertise On
              </h2>

              <h3 className="text-2xl md:text-3xl font-bold text-[#2C5F8D] mb-4">
                Reach Your Customers Where They Spend Time
              </h3>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto">
                Your customers are active across search engines, social media,
                video platforms, marketplaces, and local search. We choose the
                right ad platforms based on your business goal, audience, and
                budget.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platforms.map((platform, index) => {
                const Icon = platform.icon;

                return (
                  <motion.div
                    key={platform.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="p-8 h-full bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div
                        className={`w-16 h-16 ${platform.bgColor} rounded-full flex items-center justify-center mb-5`}
                      >
                        <Icon className={platform.color} size={28} />
                      </div>

                      <h3 className="text-xl font-bold text-[#0A2647] mb-3">
                        {platform.title}
                      </h3>

                      <p className="text-base leading-relaxed text-gray-600">
                        {platform.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who We Help Section */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
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
                  Running ads is easy. Running ads that reach the right people is
                  where the real work starts. We help businesses that want quicker visibility, more enquiries,
                  better website traffic, product sales, bookings, store visits,
                  or B2B leads through Google Ads, Meta Ads, YouTube Ads, LinkedIn
                  Ads, marketplace ads, and local search campaigns.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  Whether you are a local business, service provider, e-commerce
                  brand, or B2B company, we help you choose the right paid
                  advertising approach for your goal.
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
                Why Choose Sevenmen Media Solutions for Paid Advertising
              </h2>

              <div className="max-w-4xl mx-auto space-y-5">
                <p className="text-base md:text-lg leading-relaxed text-white/85">
                  Paid ads can bring fast results, but only when the campaign is
                  planned properly. The right audience, message, creative, landing
                  page, and tracking all need to work together.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-white/85">
                  At Sevenmen Media Solutions, we create paid ad campaigns that
                  are focused on useful outcomes, not just clicks. Our goal is to
                  help your business get better visibility, better leads, and
                  better returns from your ad spend.
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

        {/* Our Paid Ad Process Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
                Our Paid Ad Process
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto mb-3">
                A Clear Process for Smarter Ad Campaigns
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
                We follow a simple process to make sure your campaigns are planned
                properly, launched carefully, and improved based on results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paidAdProcess.map((step, index) => {
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
                    <Card className="p-8 h-full bg-white/90 backdrop-blur-sm border border-[#2C5F8D]/10 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-16 h-16 rounded-full bg-[#6BA3D0]/10 flex items-center justify-center">
                          <Icon className="text-[#2C5F8D]" size={28} />
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
                Clear answers to common questions about our paid advertising
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
        {/* <section className="py-20 md:py-24 bg-gradient-to-r from-[#0052CC] to-[#003d99]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Run Smarter Paid Ad Campaigns?
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8 max-w-3xl mx-auto">
                Let&apos;s plan the right Google Ads, Meta Ads, YouTube Ads, or
                remarketing campaign for your business goals.
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
        </section> */}
        <NewCTA/>
      </main>
    </>  
  );
}