import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  MonitorSmartphone,
  Code,
  ShoppingCart,
  Globe,
  Settings,
  ShieldCheck,
  Layout,
  Server,
  Search,
  Target,
  Layers,
  BadgeCheck,
  Users,
  FileText,
  Lightbulb,
  PenTool,
  Rocket,
  CheckCircle,
  HeadphonesIcon,
  Gauge
} from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { NewCTA } from '../components/NewCTA';

const services = [
  {
    icon: Code,
    title: 'Website Design & Development',
    description:
      'Responsive business websites that look clean, load fast, and make it easy for customers to understand your services.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Website Development',
    description:
      'Online stores designed for product browsing, smooth checkout, secure payments, and better customer shopping experience.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Globe,
    title: 'WordPress Development',
    description:
      'Flexible WordPress websites that are easy to update, manage, and scale as your business grows.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: ShoppingCart,
    title: 'Shopify Website Development',
    description:
      'Shopify stores built for product-based brands that need clean design, simple management, and sales-focused layouts.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: MonitorSmartphone,
    title: 'Custom Web Application Development',
    description:
      'Custom web platforms built for unique business workflows, customer portals, dashboards, booking systems, or internal tools.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Settings,
    title: 'Website Maintenance & Support',
    description:
      'Ongoing website updates, bug fixes, content changes, security checks, speed improvements, and technical support.',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Layout,
    title: 'CMS Website Development',
    description:
      'Content management websites that allow your team to add, edit, and manage pages without technical difficulty.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: Server,
    title: 'Domain & Hosting Support',
    description:
      'Support for domain setup, hosting connection, SSL, email setup, website migration, and basic technical configuration.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
];

const focusAreas = [
  {
    icon: BadgeCheck,
    title: 'Professional Website Look',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive Design',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: FileText,
    title: 'Clear Service Details',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Layers,
    title: 'Smooth Page Flow',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: Search,
    title: 'SEO-Friendly Setup',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Gauge,
    title: 'Faster Loading Speed',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Target,
    title: 'Lead-Focused Layout',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: ShieldCheck,
    title: 'Strong Brand Credibility',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
];

const benefits = [
  {
    icon: Target,
    title: 'Business-Focused Website Planning',
    description:
      'We plan your website around your business goals, services, audience, and customer journey.'
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive Website Design',
    description:
      'Your website is designed to work smoothly across mobile, tablet, laptop, and desktop screens.'
  },
  {
    icon: Search,
    title: 'SEO-Friendly Website Structure',
    description:
      'We build websites with clean structure, clear pages, proper sections, and basic SEO direction.'
  },
  {
    icon: FileText,
    title: 'Design, Content, and Development Support',
    description:
      'We support your website with design layout, content flow, technical setup, and development.'
  },
  {
    icon: Users,
    title: 'Chennai-Based Web Team',
    description:
      'Our web team understands Chennai businesses, local markets, and practical website needs.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Website Maintenance and Support',
    description:
      'We help with future updates, fixes, improvements, content changes, and regular website support.'
  }
];

const websiteProcess = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Understand',
    description:
      'We learn about your business, services, audience, website goals, design preferences, and required features.'
  },
  {
    number: '02',
    icon: Target,
    title: 'Plan',
    description:
      'We prepare the website structure, page list, content flow, user journey, features, and basic SEO direction.'
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Design',
    description:
      'We create clean, responsive website layouts that match your brand and make the content easy to understand.'
  },
  {
    number: '04',
    icon: Code,
    title: 'Develop',
    description:
      'We build the website with the required pages, forms, sections, features, CMS, e-commerce, or custom functionality.'
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'Test',
    description:
      'We check mobile responsiveness, speed, links, forms, browser compatibility, and basic technical performance.'
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Launch',
    description:
      'We connect the domain, hosting, SSL, analytics, tracking, and make the website live for users.'
  },
  {
    number: '07',
    icon: HeadphonesIcon,
    title: 'Support',
    description:
      'We help with updates, fixes, content changes, improvements, and future website maintenance when needed.'
  }
];

const faqs = [
  {
    question: 'What type of websites do you design and develop?',
    answer:
      'We design business websites, landing pages, e-commerce stores, WordPress websites, Shopify websites, CMS websites, and custom web applications.'
  },
  {
    question: 'Do you provide web development services in Chennai?',
    answer:
      'Yes. Sevenmen Media Solutions provides web design and development services in Chennai for startups, local businesses, e-commerce brands, corporate companies, and service-based businesses.'
  },
  {
    question: 'Can you build e-commerce websites?',
    answer:
      'Yes. We build e-commerce websites with product pages, cart, checkout, payment gateway setup, mobile-friendly design, and easy product management.'
  },
  {
    question: 'Do you create WordPress and Shopify websites?',
    answer:
      'Yes. We create WordPress websites for business and content-based needs, and Shopify websites for product-based businesses and online stores.'
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'The timeline depends on the number of pages, features, content, and revisions. A basic business website can be completed faster, while e-commerce and custom websites may take more time.'
  }
];

export function WebDesignDevelopmentPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Best Web Design and Development Company in Chennai | Website Development Services</title>
        <meta name="description" content="Looking for the best web design and development company in Chennai? We offer responsive website design, e-commerce development, WordPress, Shopify, and custom web solutions." />
        <meta name="keywords" content="Web Development Company in Chennai, Website Design Company in Chennai, Best Web Design Company in Chennai, Web Design & Development Chennai, Ecommerce Website Development Chennai, WordPress Development Chennai, Shopify Website Development Chennai, Custom Web Application Development Chennai" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sevenmensolutions.com/web-design-development-company-chennai" />

        <meta property="og:title" content="Best Web Design and Development Company in Chennai | Website Development Services" />
        <meta property="og:description" content="Looking for the best web design and development company in Chennai? We offer responsive website design, e-commerce development, WordPress, Shopify, and custom web solutions." />
        <meta property="og:url" content="https://www.sevenmensolutions.com/web-design-development-company-chennai" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sevenmen Media Solutions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Web Design and Development Company in Chennai | Website Development Services" />
        <meta name="twitter:description" content="Looking for the best web design and development company in Chennai? We offer responsive website design, e-commerce development, WordPress, Shopify, and custom web solutions." />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-28 md:py-32 bg-gradient-to-br from-[#0A2647] via-[#2C5F8D] to-[#6BA3D0] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Web design and website development company in Chennai"
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
                <MonitorSmartphone className="text-white" size={20} aria-hidden="true" />
                <span className="text-sm md:text-base font-semibold text-white">
                  Web Design & Development Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Best Web Design & Website Development Company in Chennai
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-4xl mb-8">
                Build a responsive, professional, and SEO-friendly website for
                your business with Sevenmen Media Solutions. We create business
                websites, e-commerce stores, WordPress websites, Shopify websites,
                and custom web solutions.
              </p>

              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#0A2647] hover:bg-gray-100 text-base md:text-lg font-semibold h-14 px-8"
                >
                  Start Your Website Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Web Design & Development Overview Section */}
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
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                    alt="Responsive web design and development services in Chennai"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0052CC]/30 to-transparent" />
                </div>

                <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-8 lg:-right-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-2">
                      Website
                    </div>

                    <p className="text-base font-medium text-gray-700">
                      Built for Online Growth
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
                  Trusted Web Design and Development Services in Chennai for a Strong Online Presence
                </h2>

                <div className="space-y-5 mb-8">
                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    Your good website should work like a strong digital office for
                    your business. It should welcome visitors, explain your
                    services, show your value, and guide people toward the next
                    step.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    At Sevenmen Media Solutions, we design and develop websites
                    that are clean, responsive, easy to use, and built with a
                    clear purpose. From simple business websites to e-commerce
                    stores, WordPress, Shopify, and custom web solutions, we
                    create websites that match your brand and support your goals.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    We focus on mobile-friendly design, fast loading speed, clear
                    content flow, SEO-friendly structure, and contact sections
                    that turn visitors into inquiries.
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
                Our Web Design & Development Services
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto">
                Whether you need a simple business website, an online store, a
                custom web platform, or regular website support, we build web
                solutions that fit your business goal and customer needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  Every business needs a website for a different reason. Some
                  need more inquiries. Some need online sales. Some need a
                  professional company profile. Some need a simple place where
                  customers can understand their services and contact them.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  We create websites based on that exact need, whether it is a
                  business website, e-commerce store, landing page, portfolio site,
                  or custom web solution. Each website is planned to look
                  professional, work smoothly, and help visitors take the next
                  step.
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
                Why Choose Sevenmen Media Solutions for Web Design and Development
              </h2>

              <div className="max-w-4xl mx-auto space-y-5">
                <p className="text-base md:text-lg leading-relaxed text-white/85">
                  A website works well only when design, content, speed, mobile
                  experience, SEO structure, and user flow come together. It
                  should not only look good. It should help visitors understand
                  your business and take action. At Sevenmen Media Solutions, we build websites that are clean,
                  responsive, SEO-friendly, and planned around your business
                  goals. Our focus is to help your brand create a strong online
                  presence, build trust, and generate better inquiries.
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

        {/* Our Website Development Process Section */}
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
                  How We Build
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
                Our Website Development Process
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto mb-3">
                A Clear Process from Idea to Launch
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
                We follow a simple website development process to keep the project
                organized from the first discussion to final launch. Every step is
                planned to make sure your website looks professional, works
                smoothly, and supports your business goal.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websiteProcess.map((step, index) => {
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
                Clear answers to common questions about our web design and website
                development services in Chennai.
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
                Ready to Build a Professional Website?
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8 max-w-3xl mx-auto">
                Let&apos;s create a responsive, SEO-friendly, and lead-focused
                website that helps your business look professional and grow
                online.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-[#0A2647] hover:bg-gray-100 text-base md:text-lg font-semibold h-14 px-8"
                  >
                    Start Your Website Project
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