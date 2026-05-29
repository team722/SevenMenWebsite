import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Code,
  Cloud,
  Users,
  Settings,
  Smartphone,
  ShoppingCart,
  Workflow,
  Database,
  BarChart3,
  Target,
  CheckCircle,
  Lightbulb,
  PenTool,
  Rocket,
  HeadphonesIcon,
  Layers,
  ClipboardList,
  ShieldCheck,
  Zap
} from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { NewCTA } from '../components/NewCTA';

const services = [
  {
    icon: Cloud,
    title: 'SaaS Products',
    description:
      'Scalable SaaS platforms with user accounts, dashboards, subscriptions, admin panels, reports, and role-based access.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Users,
    title: 'CRM Systems',
    description:
      'Custom CRM systems to manage leads, customers, follow-ups, sales activities, team tasks, and customer communication.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Code,
    title: 'Custom Software',
    description:
      'Business software built for your specific process, so your team can reduce manual work and manage tasks better.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'iOS and Android apps for customers, teams, bookings, services, e-commerce, communication, and business operations.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description:
      'Online selling systems with product pages, cart, checkout, payment setup, order tracking, and customer management.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Workflow,
    title: 'Business Automation Tools',
    description:
      'Automation tools that help reduce repeated tasks, connect systems, manage workflows, and improve team productivity.',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  }
];

const focusAreas = [
  {
    icon: Zap,
    title: 'Reduce Manual Work',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Workflow,
    title: 'Improve Team Workflow',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Database,
    title: 'Centralize Customer Data',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Users,
    title: 'Manage Leads and Customers',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: Settings,
    title: 'Automate Daily Tasks',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Layers,
    title: 'Build Scalable Systems',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: BarChart3,
    title: 'Track Reports and Performance',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: Target,
    title: 'Support Business Growth',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
];

const benefits = [
  {
    icon: ClipboardList,
    title: 'Built Around Your Process',
    description:
      'We understand your workflow first and build software that fits how your business actually works.'
  },
  {
    icon: Cloud,
    title: 'SaaS, CRM, and Automation Experience',
    description:
      'We build SaaS platforms, CRM systems, dashboards, automation tools, and custom business software.'
  },
  {
    icon: Layers,
    title: 'Simple and Scalable Systems',
    description:
      'Our systems are planned to be easy to use now and scalable as your business grows.'
  },
  {
    icon: Target,
    title: 'Sales and Marketing Integration',
    description:
      'We help connect your software with sales, leads, customers, marketing, and reporting needs.'
  },
  {
    icon: Users,
    title: 'Chennai-Based Development Team',
    description:
      'Our team understands local businesses, practical workflows, and custom software needs.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Support After Launch',
    description:
      'We help with fixes, updates, improvements, new features, and future system changes.'
  }
];

const softwareProcess = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Understand',
    description:
      'We learn about your business process, team workflow, challenges, users, features, and software goals.'
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Plan',
    description:
      'We define the project structure, modules, user roles, features, timeline, and development approach.'
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Design',
    description:
      'We create simple layouts, user flows, dashboards, and screens that make the software easy to use.'
  },
  {
    number: '04',
    icon: Code,
    title: 'Develop',
    description:
      'We build the software, SaaS platform, CRM, mobile app, dashboard, or automation tool based on the approved plan.'
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'Test',
    description:
      'We check the features, user actions, forms, speed, bugs, access levels, and overall working of the system.'
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Launch',
    description:
      'We make the software live, connect required tools, set up access, and confirm everything is ready to use.'
  },
  {
    number: '07',
    icon: HeadphonesIcon,
    title: 'Support',
    description:
      'We continue to help with fixes, updates, improvements, new features, and future system changes.'
  }
];

const faqs = [
  {
    question: 'What is SaaS development?',
    answer:
      'SaaS development is the process of building cloud-based software that users can access online through a browser or app. It can include user accounts, dashboards, subscriptions, reports, admin panels, and role-based access.'
  },
  {
    question: 'What is the difference between custom software and SaaS?',
    answer:
      'Custom software is usually built for one business and its specific workflow. SaaS is built as an online platform that can serve multiple users, teams, or customers through subscription-based access.'
  },
  {
    question: 'Why does my business need custom software?',
    answer:
      'Your business may need custom software if manual work, spreadsheets, repeated tasks, or disconnected tools are slowing your team down. Custom software helps you manage work, data, customers, and reports in one place.'
  },
  {
    question: 'Who can use your Software & SaaS development services?',
    answer:
      'Startups, service businesses, e-commerce brands, schools, healthcare businesses, real estate companies, B2B companies, agencies, local businesses, and growing enterprises can use our software and SaaS services.'
  },
  {
    question: 'How do you build a software or SaaS product?',
    answer:
      'We first understand your business process, users, features, and goals. Then we plan, design, develop, test, launch, and support the software so it works smoothly for your business.'
  }
];

export function SoftwareSaasPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Software and SaaS Development Company in Chennai | Custom Software Solutions</title>
        <meta name="description" content="Sevenmen Media Solutions provides software and SaaS development services in Chennai, including custom software, CRM systems, web applications, SaaS platforms, dashboards, and business automation tools." />
        <meta name="keywords" content="Software and SaaS Development Company Chennai, Custom Software Development Chennai, SaaS Development Services Chennai, CRM Development Chennai, Business Automation Tools Chennai, E-commerce Solutions Chennai, Mobile App Development Chennai" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sevenmensolutions.com/software-saas-development-company-chennai" />

        <meta property="og:title" content="Software & SaaS Development Company in Chennai | Custom Solutions for Your Business" />
        <meta property="og:description" content="Sevenmen Media Solutions provides software and SaaS development services in Chennai, including custom software, CRM systems, web applications, SaaS platforms, dashboards, and business automation tools." />
        <meta property="og:url" content="https://www.sevenmensolutions.com/software-saas-development-company-chennai" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sevenmen Media Solutions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Software & SaaS Development Company in Chennai | Custom Solutions for Your Business" />
        <meta name="twitter:description" content="Sevenmen Media Solutions provides software and SaaS development services in Chennai, including custom software, CRM systems, web applications, SaaS platforms, dashboards, and business automation tools." />
      </Helmet>                               

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-28 md:py-32 bg-gradient-to-br from-[#0A2647] via-[#2C5F8D] to-[#6BA3D0] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Software and SaaS development services in Chennai"
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
                <Code className="text-white" size={20} aria-hidden="true" />
                <span className="text-sm md:text-base font-semibold text-white">
                  Software & SaaS Development Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Software and SaaS Development Services in Chennai
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-4xl mb-8">
                Build web applications, CRM systems, SaaS platforms, and
                automation tools that fit your business process and help your team
                work more efficiently.
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

        {/* SaaS & Software Overview Section */}
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
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                    alt="Software development services in Chennai"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0052CC]/30 to-transparent" />
                </div>

                <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-8 lg:-right-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-2">
                      SaaS
                    </div>

                    <p className="text-base font-medium text-gray-700">
                      Built for Workflow and Growth
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
                  Software Development Services in Chennai Built for Workflow, Automation, and Reporting
                </h2>

                <div className="space-y-5 mb-8">
                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    As your business grows, manual work can slow down your team.
                    Spreadsheets, repeated tasks, scattered customer data, and
                    disconnected tools can make daily operations harder than they
                    need to be.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    At Sevenmen Media Solutions, we build custom software and SaaS
                    systems that match the way your business works. From CRM
                    systems and web applications to automation tools and reporting
                    dashboards, we help you manage work, customers, data, and teams
                    from one place.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    Our goal is to help your business reduce manual effort,
                    improve workflow, save time, and build scalable digital
                    systems that support long-term growth.
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
                Our Software & SaaS Services
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto">
                We build software and SaaS solutions that help businesses manage
                work, customers, sales, data, and daily operations in a simpler
                way. Whether you need a CRM, mobile app, e-commerce system, or
                automation tool, we create solutions that fit your workflow.
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
                  Many businesses start with spreadsheets, WhatsApp follow-ups,
                  manual reports, and disconnected tools. As the work grows, these
                  methods become harder to manage and slow down the team.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  At Sevenmen Media Solutions, we build software and SaaS
                  solutions for startups, service businesses, e-commerce brands,
                  educational institutions, healthcare businesses, real estate
                  companies, B2B companies, agencies, local businesses, and
                  growing enterprises that need better systems, smoother workflows,
                  and simple tools to manage daily operations.
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
                Why Choose Sevenmen Media Solutions for Software & SaaS Development
              </h2>

              <div className="max-w-4xl mx-auto space-y-5">
                <p className="text-base md:text-lg leading-relaxed text-white/85">
                  Software should solve real problems inside your business. It
                  should reduce repeated work, organize data, improve team
                  coordination, and make daily operations easier to manage.
                  At Sevenmen Media Solutions, we build software and SaaS
                  solutions that fit your workflow, not the other way around. From
                  CRM systems and SaaS platforms to mobile apps and automation
                  tools, we focus on building systems that are useful, scalable,
                  and easy to use.
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

        {/* Our Software & SaaS Development Process Section */}
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
                  How We Develop
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
                Our Software &amp; SaaS Development Process
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto mb-3">
                How We Build Your Software
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
                We keep the development process clear, practical, and easy to
                follow, so your software is built around your real business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softwareProcess.map((step, index) => {
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
                Clear answers to common questions about our software and SaaS
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
                Ready to Build a Better Business System?
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8 max-w-3xl mx-auto">
                Let&apos;s build a CRM, SaaS platform, software system, dashboard,
                or automation tool that fits your workflow and supports your
                business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-[#0A2647] hover:bg-gray-100 text-base md:text-lg font-semibold h-14 px-8"
                  >
                    Start Your Project
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