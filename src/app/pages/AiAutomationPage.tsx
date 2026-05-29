import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Cpu,
  Bot,
  Workflow,
  Users,
  MessageSquare,
  Mail,
  BarChart3,
  Settings,
  Zap,
  Clock,
  Target,
  Database,
  Lightbulb,
  ClipboardList,
  CheckCircle,
  Rocket,
  HeadphonesIcon,
  Repeat,
  MessageCircle,
  LineChart,
  Brain
} from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { NewCTA } from '../components/NewCTA';

const services = [
  {
    icon: Brain,
    title: 'AI Integration',
    description:
      'Connect AI tools with your business process to improve customer support, content tasks, data handling, and daily operations.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Bot,
    title: 'Chatbot Automation',
    description:
      'Set up chatbots for websites, WhatsApp, or social platforms to answer basic questions and collect customer details.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Automate repeated tasks like form updates, lead movement, task creation, reminders, approvals, and internal notifications.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Users,
    title: 'CRM Automation',
    description:
      'Organize leads, contacts, follow-ups, pipelines, customer stages, and sales activities inside your CRM system.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: Target,
    title: 'Lead Follow-Up Automation',
    description:
      'Send automatic follow-ups to new leads through WhatsApp, email, SMS, or CRM reminders, so fewer inquiries are missed.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Automation',
    description:
      'Use WhatsApp for auto-replies, lead updates, appointment reminders, offer messages, and customer follow-ups.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Mail,
    title: 'Email Automation',
    description:
      'Send automated emails for inquiries, confirmations, reminders, newsletters, offers, and lead nurturing.',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: LineChart,
    title: 'Sales Funnel Automation',
    description:
      'Build automated steps that move leads from inquiry to follow-up, appointment, proposal, and conversion.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Reporting',
    description:
      'Track leads, campaign results, sales activity, customer data, and team performance with clear dashboards and reports.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    icon: Cpu,
    title: 'AI Business Tools',
    description:
      'Create simple AI-powered tools that support content, customer service, lead handling, reporting, and business decisions.',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50'
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
    icon: Clock,
    title: 'Save Time on Repeated Tasks',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: MessageSquare,
    title: 'Improve Customer Response',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Repeat,
    title: 'Automate Lead Follow-Ups',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: Users,
    title: 'Manage Leads Better',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Workflow,
    title: 'Improve Team Workflow',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Lightbulb,
    title: 'Support Faster Decisions',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: BarChart3,
    title: 'Track Data More Clearly',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
];

const benefits = [
  {
    icon: ClipboardList,
    title: 'Automation Based on Your Business Needs',
    description:
      'We first understand your real workflow and then build automation that supports your daily process.'
  },
  {
    icon: Bot,
    title: 'CRM, Chatbot, and Workflow Support',
    description:
      'We help connect CRMs, chatbots, follow-up systems, workflows, reminders, and internal task flows.'
  },
  {
    icon: Settings,
    title: 'Integration with Existing Tools',
    description:
      'We connect automation with the tools your team already uses, including CRM, WhatsApp, email, forms, and dashboards.'
  },
  {
    icon: Target,
    title: 'Lead Follow-Up and Sales Automation',
    description:
      'We build follow-up systems that help your team respond faster, manage leads better, and miss fewer inquiries.'
  },
  {
    icon: Users,
    title: 'Chennai-Based Automation Team',
    description:
      'Our team understands local businesses, practical workflows, customer response needs, and lead management challenges.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Support and Improvements',
    description:
      'We help improve your automation flow after launch based on real usage, gaps, and future business needs.'
  }
];

const automationProcess = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Understand',
    description:
      'We understand your business process, current tools, customer journey, and time-consuming tasks.'
  },
  {
    number: '02',
    icon: Workflow,
    title: 'Map',
    description:
      'We create a clear flow for leads, messages, reminders, tasks, approvals, and reports.'
  },
  {
    number: '03',
    icon: Settings,
    title: 'Automate',
    description:
      'We connect the right tools and set up automated actions for your daily workflow.'
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Test',
    description:
      'We check the full automation flow to make sure everything works correctly.'
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Launch',
    description:
      'We make the automation live and explain how your team can use it.'
  },
  {
    number: '06',
    icon: HeadphonesIcon,
    title: 'Improve',
    description:
      'We review the system, fix gaps, and improve the workflow when needed.'
  }
];

const faqs = [
  {
    question: 'What are AI and automation services?',
    answer:
      'AI and automation services help businesses reduce manual work, automate follow-ups, manage leads, improve customer response, and organize daily tasks using smart tools and workflows.'
  },
  {
    question: 'How can automation help my business?',
    answer:
      'Automation can save time, reduce missed leads, send faster replies, improve follow-ups, organize customer data, and help your team focus on more important work.'
  },
  {
    question: 'Do you provide chatbot automation in Chennai?',
    answer:
      'Yes. Sevenmen Media Solutions provides chatbot automation services in Chennai for websites, WhatsApp, social media, lead capture, customer support, and basic inquiry handling.'
  },
  {
    question: 'Can you automate lead follow-ups?',
    answer:
      'Yes. We can set up automated follow-ups through WhatsApp, email, SMS, CRM reminders, and sales workflows, so your team can respond faster and miss fewer inquiries.'
  },
  {
    question: 'How do you build an automation system?',
    answer:
      'We first understand your business process, then map the workflow, set up the automation, test it, launch it, and improve it based on real usage.'
  }
];

export function AiAutomationPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>AI and Automation Services in Chennai | Business Automation Solutions</title>
        <meta name="description" content="Sevenmen Media Solutions provides AI and automation services in Chennai, including chatbot automation, CRM automation, workflow automation, lead follow-up automation, and AI business tools." />
        <meta name="keywords" content="AI and Automation Services in Chennai, Business Automation Services in Chennai, AI Automation Company in Chennai, Workflow Automation Services Chennai, CRM Automation Services Chennai, Chatbot Automation Services Chennai, AI Integration Services Chennai, Lead Automation Services Chennai" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sevenmensolutions.com/ai-automation-services-chennai" />

        <meta property="og:title" content="AI and Automation Services in Chennai | Business Automation" />
        <meta property="og:description" content="Sevenmen Media Solutions provides AI and automation services in Chennai, including chatbot automation, CRM automation, workflow automation, lead follow-up automation, and AI business tools." />
        <meta property="og:url" content="https://www.sevenmensolutions.com/ai-automation-services-chennai" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sevenmen Media Solutions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI and Automation Services in Chennai | Business Automation" />
        <meta name="twitter:description" content="Sevenmen Media Solutions provides AI and automation services in Chennai, including chatbot automation, CRM automation, workflow automation, lead follow-up automation, and AI business tools." />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-28 md:py-32 bg-gradient-to-br from-[#0A2647] via-[#2C5F8D] to-[#6BA3D0] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="AI and automation services in Chennai"
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
                <Cpu className="text-white" size={20} aria-hidden="true" />
                <span className="text-sm md:text-base font-semibold text-white">
                  AI & Automation Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                AI and Automation Services in Chennai
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-4xl mb-8">
                Sevenmen Media Solutions helps businesses save time and work
                smarter with AI integration, chatbots, CRM automation, workflow
                automation, and lead follow-up systems that improve response,
                manage leads, and support faster growth.
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

        {/* AI & Automation Overview Section */}
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
                    src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                    alt="AI automation workflow system"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0052CC]/30 to-transparent" />
                </div>

                <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-8 lg:-right-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-2">
                      AI
                    </div>

                    <p className="text-base font-medium text-gray-700">
                      Built for Smarter Workflows
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
                  AI and Automation Services in Chennai for Smarter Business Workflows
                </h2>

                <div className="space-y-5 mb-8">
                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    As your business grows, repeated tasks, delayed follow-ups,
                    missed leads, and manual updates can slow your team down. AI
                    and automation help you handle these routine tasks faster and
                    more accurately.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    At Sevenmen Media Solutions, we create AI and automation
                    solutions that help businesses reduce manual work, save time,
                    improve customer response, automate follow-ups, and manage
                    leads better.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    From chatbots and CRM automation to workflow automation and
                    lead follow-up systems, we help you build smarter processes
                    that support faster decisions and smoother daily operations.
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
                Our AI & Automation Services
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto">
                We help businesses automate repeated tasks, manage leads better,
                respond faster, and keep their workflows organized with practical
                AI and automation systems.
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
                  If your team is spending too much time on repeated work, missed
                  follow-ups, scattered lead data, or manual reports, automation
                  can make daily operations easier.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  At Sevenmen Media Solutions, we help startups, local businesses,
                  service providers, real estate companies, healthcare brands,
                  educational institutions, e-commerce businesses, B2B companies,
                  agencies, and growing enterprises set up simple AI and
                  automation systems that improve speed, response, and workflow.
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
                Why Choose Sevenmen Media Solutions for AI & Automation
              </h2>

              <div className="max-w-4xl mx-auto space-y-5">
                <p className="text-base md:text-lg leading-relaxed text-white/85">
                  Automation works best when it fits your real business process.
                  We do not build complicated systems just for the sake of using
                  technology. We create simple, useful automation that saves time,
                  improves follow-ups, and helps your team work better. At Sevenmen Media Solutions, we connect AI tools, CRM systems,
                  chatbots, workflows, and lead follow-up automation in a way that
                  supports your daily operations.
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

        {/* Our AI & Automation Process Section */}
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
                  How We Automate
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
                Our AI &amp; Automation Process
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto mb-3">
                How We Set Up Automation for Your Business
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
                We keep the automation setup clear and practical. The goal is to
                remove repeated work, connect your tools, and make sure your team
                can manage leads, follow-ups, and daily tasks without confusion.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationProcess.map((step, index) => {
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
                Clear answers to common questions about our AI and automation
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
                Ready to Automate Your Business Workflow?
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8 max-w-3xl mx-auto">
                Let&apos;s build simple AI, chatbot, CRM, workflow, and lead
                follow-up automation systems that help your team save time and
                respond faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-[#0A2647] hover:bg-gray-100 text-base md:text-lg font-semibold h-14 px-8"
                  >
                    Get Free Consultation
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