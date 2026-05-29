import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Video,
  TrendingUp,
  Palette,
  Code,
  Cpu,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Megaphone,
  Monitor,
  Search,
  Target,
  Rocket,
  HeadphonesIcon,
  Award,
  Globe2,
  Heart,
  Zap,
  Users,
  ChevronDown,
  Briefcase
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { NewCTA } from '../components/NewCTA';

const services = [
  {
    id: 'top-digital-marketing-agency-chennai',
    icon: TrendingUp,
    title: 'Digital Marketing',
    description:
      'Grow your online presence with digital marketing services in Chennai that improve visibility, generate quality leads, and maximize ROI and ROAS through SEO, ads, and social media.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    gradient: 'from-blue-500/20 to-blue-500/5',
    items: [
      'SEO Services',
      'Social Media Marketing',
      'Google Ads',
      'Performance Marketing',
      'Content Marketing',
      'Lead Generation'
    ]
  },
  {
    id: 'paid-advertising-services-chennai',
    icon: Megaphone,
    title: 'Paid Advertisement',
    description:
      'Reach the right customers faster with paid advertisement services in Chennai. We create and manage targeted ad campaigns that improve visibility, drive traffic, generate leads, and help maximize ROI and ROAS.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    gradient: 'from-orange-500/20 to-orange-500/5',
    items: [
      'Google Ads',
      'Facebook Ads',
      'Instagram Ads',
      'YouTube Ads',
      'Lead Generation Ads',
      'Retargeting Campaigns'
    ]
  },
  {
    id: 'top-media-production-services-chennai',
    icon: Video,
    title: 'Media Production',
    description:
      'Create professional videos and visuals that help your brand tell its story, promote your services, and connect with the right audience.',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    gradient: 'from-red-500/20 to-red-500/5',
    items: [
      'Corporate Video Production',
      'Promotional Videos',
      'Event Films',
      'Product Photo & Video Shoots',
      'Brand Story Videos',
      'Reels & Shorts'
    ]
  },
  {
    id: 'top-creative-design-services-chennai',
    icon: Palette,
    title: 'Creative Design',
    description:
      'Build a brand that looks professional, consistent, and easy to remember. Our creative design services help businesses stand out across digital and print platforms.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    gradient: 'from-purple-500/20 to-purple-500/5',
    items: [
      'Brand Identity Design',
      'Logo Design',
      'Graphic Design',
      'UI/UX Design',
      'Packaging Design',
      'Motion Graphics'
    ]
  },
  {
    id: 'web-design-development-company-chennai',
    icon: Monitor,
    title: 'Web Design & Development',
    description:
      'Your website should not just look good. It should explain your business clearly, work smoothly, and help visitors take action.',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    gradient: 'from-indigo-500/20 to-indigo-500/5',
    items: [
      'Business Website Design',
      'Landing Pages',
      'E-commerce Websites',
      'WordPress Websites',
      'Wix Websites',
      'Website Redesign'
    ]
  },
  {
    id: 'software-saas-development-company-chennai',
    icon: Code,
    title: 'Software & SaaS',
    description:
      'We help businesses build useful digital systems that save time, improve workflow, and support growth.',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    gradient: 'from-green-500/20 to-green-500/5',
    items: [
      'SaaS Products',
      'CRM Systems',
      'Custom Software',
      'Mobile Apps',
      'E-commerce Solutions',
      'Business Automation Tools'
    ]
  },
  {
    id: 'ai-automation-services-chennai',
    icon: Cpu,
    title: 'AI & Automation',
    description:
      'Make your business faster and smarter with AI tools, chatbots, workflow automation, and CRM automation.',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    gradient: 'from-cyan-500/20 to-cyan-500/5',
    items: [
      'AI Integration',
      'Chatbots',
      'Workflow Automation',
      'CRM Automation',
      'Data Analytics',
      'AI Business Tools'
    ]
  },
  {
    id: 'top-digital-strategy-consultants-chennai',
    icon: Lightbulb,
    title: 'Consulting & Strategy',
    description:
      'Not sure where to start? We help you understand what your brand needs and build a practical plan for digital growth.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    gradient: 'from-yellow-500/20 to-yellow-500/5',
    items: [
      'Digital Strategy',
      'Brand Consulting',
      'Market Research',
      'Marketing Planning',
      'Growth Planning',
      'Team Training'
    ]
  }
];

const whyChooseUs = [
  {
    icon: Zap,
    title: 'Chennai-Based Team',
    description:
      'We understand local markets, customer behavior, and growing business needs.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: Award,
    title: '7+ Years of Experience',
    description:
      'Experienced in creative, media, marketing, design, and digital services.',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10'
  },
  {
    icon: Target,
    title: 'Lead-Focused Approach',
    description:
      'Focused on visibility, trust, quality leads, ROI, and ROAS.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    icon: Globe2,
    title: 'Complete Digital Support',
    description:
      'One team for marketing, media, design, websites, and lead generation.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    icon: TrendingUp,
    title: 'Practical Growth Strategy',
    description:
      'We suggest what your business needs and use your budget wisely.',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: CheckCircle,
    title: 'Clear Communication',
    description:
      'Simple updates, easy coordination, and reliable support from start to finish.',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10'
  }
];

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

const portfolioItems = [
  {
    title: 'Digital Marketing Campaign',
    category: 'Digital Marketing',
    image:
      'https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    result: 'More Leads',
    metric: 'ROI',
    description:
      'A focused marketing campaign built to improve visibility, traffic, inquiries, and lead quality.'
  },
  {
    title: 'Brand Video Production',
    category: 'Media Production',
    image:
      'https://images.unsplash.com/photo-1639701386739-449a0e789367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    result: 'Better Brand Trust',
    metric: 'Video',
    description:
      'Professional video content created to present the brand story clearly and connect with the right audience.'
  },
  {
    title: 'Business Website Design',
    category: 'Web Design',
    image:
      'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    result: 'Clear User Journey',
    metric: 'Web',
    description:
      'A clean business website structure designed to explain services, build trust, and encourage action.'
  }
];

const faqs = [
  {
    question: 'What services does Sevenmen Media Solutions offer?',
    answer:
      'We offer SEO, digital marketing, paid ads, media production, creative design, web design, SaaS solutions, AI automation, consulting, and lead generation services.'
  },
  {
    question: 'Are your services available in Chennai?',
    answer:
      'Yes. Sevenmen Media Solutions is based in Chennai and supports businesses across Tamil Nadu and beyond.'
  },
  {
    question: 'Can you help my business generate more leads?',
    answer:
      'Yes. We plan digital marketing, SEO, paid ads, content, and website strategies focused on visibility, trust, quality leads, ROI, and ROAS.'
  },
  {
    question: 'Do you handle both marketing and creative work?',
    answer:
      'Yes. Our team handles marketing, video production, design, websites, and lead generation in one place, so your brand stays consistent.'
  }
];

export function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-28 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758518726741-6451f7f71348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MjE3OTk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Digital marketing and creative services team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2647]/95 via-[#2C5F8D]/90 to-[#6BA3D0]/85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Digital Marketing, Media Production &amp; Creative Design Services in Chennai
            </h1>

            <div className="space-y-5 mb-8">
              <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-4xl mx-auto">
                Sevenmen Media Solutions offers complete services for brands that want to grow online, from SEO, social media, and ads to video production, branding, graphic design, web design, SaaS, AI automation, and lead generation.                 We help you choose the right digital services, build a clear plan, and create work that improves visibility, builds trust, and brings better inquiries.
              </p>
            </div>

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

      {/* Services Overview Section */}
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
              Our Core Service
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Complete digital, creative, marketing, and technology services built to help your business grow with clarity and confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    <div className="relative z-10">
                      <div
                        className={`w-16 h-16 rounded-full ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={service.color} size={28} />
                      </div>

                      <h3 className="text-xl font-bold text-[#0A2647] mb-3">
                        {service.title}
                      </h3>

                      <p className="text-base leading-relaxed text-gray-600 mb-6">
                        {service.description}
                      </p>

                      <h4 className="text-base font-bold text-[#0A2647] mb-3">
                        What We Offer:
                      </h4>

                      <ul className="space-y-3 mb-6" role="list">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center text-sm leading-relaxed text-gray-700"
                          >
                            <CheckCircle
                              size={16}
                              className={`${service.color} flex-shrink-0 mr-3`}
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <Link to={`/services/${service.id}`}>
                        <Button
                          variant="ghost"
                          className={`${service.color} text-base font-semibold group-hover:gap-3 transition-all p-0`}
                        >
                          Learn More
                          <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
              Why Choose Us
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
              We bring strategy, creativity, communication, and execution together to support your business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="p-8 h-full text-center hover:shadow-lg transition-shadow duration-300">
                    <div
                      className={`w-16 h-16 rounded-full ${item.bgColor} flex items-center justify-center mx-auto mb-5`}
                    >
                      <Icon className={item.color} size={28} />
                    </div>

                    <h3 className="text-xl font-bold text-[#0A2647] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-base leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
    
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




      {/* Our Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
              Our Portfolio
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
              A look at the kind of digital, creative, and website work we create for growing businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <div className="absolute top-4 right-4 bg-[#2C5F8D] text-white px-4 py-2 rounded-lg flex items-center gap-2">
                      <Briefcase size={16} aria-hidden="true" />
                      <span className="text-sm font-semibold">
                        {item.metric}
                      </span>
                    </div>

                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-white/90 backdrop-blur-sm text-sm font-medium text-[#0A2647]"
                      >
                        {item.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0A2647] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-base leading-relaxed text-gray-600 mb-5">
                      {item.description}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <span className="text-base font-semibold text-[#0A2647]">
                        {item.result}
                      </span>

                      <Link
                        to="/portfolio"
                        className="flex items-center gap-2 text-base font-semibold text-[#2C5F8D] group-hover:gap-3 transition-all"
                      >
                        View Work
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link to="/portfolio" className="inline-block">
              <Button
                size="lg"
                variant="outline"
                className="border-[#2C5F8D] text-[#2C5F8D] hover:bg-[#2C5F8D] hover:text-white text-base md:text-lg font-semibold h-14 px-8"
              >
                View Full Portfolio
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
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
              Frequently Asked Questions
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Clear answers to common questions about our services and how we support your business growth.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden"
              >
                <button
                  id={`faq-question-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#E6F2FA]/30 transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-base md:text-lg font-bold leading-relaxed text-[#0A2647] pr-4">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`text-[#2C5F8D] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    size={22}
                    aria-hidden="true"
                  />
                </button>

                <motion.div
                  id={`faq-answer-${index}`}
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
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

      {/* CTA Section */}
      <NewCTA/>
      {/* <section className="py-20 md:py-24 bg-gradient-to-r from-[#0052CC] to-[#003d99]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Business Online?
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss the right digital marketing, media, design, website, or automation support for your business.
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
    </main>
  );
}