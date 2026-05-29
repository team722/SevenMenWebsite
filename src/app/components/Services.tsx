import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Video,
  TrendingUp,
  Palette,
  Code,
  Cpu,
  Lightbulb,
  ArrowRight,
  Megaphone,
  MonitorSmartphone
} from 'lucide-react';
import { Card } from './ui/card';

const services = [
  {
    id: 'top-digital-marketing-agency-chennai',
    icon: TrendingUp,
    title: 'Digital Marketing',
    description:
      'Grow your online presence with digital marketing services in Chennai that improve visibility, generate quality leads, and maximize ROI and ROAS through SEO, ads, and social media.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    items: [
      'SEO Services',
      'Google Ads',
      'Social Media Marketing',
      'Performance Marketing',
      'Content Marketing',
      'Lead Generation'
    ]
  },
  {
    id: 'top-media-production-services-chennai',
    icon: Video,
    title: 'Media Production',
    description:
      'Create engaging visual content that captures attention, builds trust, and strengthens your brand presence. As a media production company in Chennai, we help brands with videos, photos, and content that connect with the right audience.',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    items: [
      'Corporate Videos',
      'Promotional Videos',
      'Brand Story Videos',
      'Short-Form Videos',
      'Business Promo Videos',
      'Social Media Reels'
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
    id: 'top-creative-design-services-chennai',
    icon: Palette,
    title: 'Creative Design',
    description:
      'Build a brand that looks professional and stands out. Our creative design services help businesses with branding, graphics, UI/UX, packaging, and digital creatives.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    items: [
      'Brand Identity',
      'Logo Design',
      'Graphic Design',
      'UI/UX Design',
      'Packaging Design',
      'Motion Graphics'
    ]
  },
  {
    id: 'web-design-development-company-chennai',
    icon: MonitorSmartphone,
    title: 'Web Design & Development',
    description:
      'Build a responsive, professional, and SEO-friendly website for your business. We create business websites, e-commerce stores, WordPress websites, Shopify websites, and custom web solutions.',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    items: [
      'Business Websites',
      'E-commerce Websites',
      'WordPress Websites',
      'Shopify Websites',
      'Landing Pages',
      'Website Maintenance'
    ]
  },
  {
    id: 'software-saas-development-company-chennai',
    icon: Code,
    title: 'Software & SaaS',
    description:
      'We build websites, software, and SaaS solutions that support your business growth. From business websites to CRM systems, we create digital tools that are simple, useful, and scalable.',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    items: [
      'Website Development',
      'Mobile App Development',
      'SaaS Products',
      'E-commerce Websites',
      'CRM Systems',
      'Landing Pages'
    ]
  },
  {
    id: 'ai-automation-services-chennai',
    icon: Cpu,
    title: 'AI & Automation',
    description:
      'Save time and improve workflows with AI and automation solutions. We help businesses use smart tools to automate tasks, manage leads, improve communication, and make better decisions.',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
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
      'Get clear direction for your brand, marketing, and digital growth. Our consulting services help businesses plan better, choose the right platforms, and grow with a focused strategy.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    items: [
      'Digital Strategy',
      'Brand Consulting',
      'Market Research',
      'Marketing Planning',
      'Business Growth Strategy',
      'Team Training'
    ]
  }
];

export function Services() {
  return (
    <>
      <Helmet>
        <title>Digital Marketing & Creative Services in Chennai | Sevenmen</title>
        <meta name="description" content="Sevenmen Media Solutions offers digital marketing, paid ads, media production, creative design, web design, SaaS, AI automation, and lead generation services in Chennai." />
        <meta name="keywords" content="Digital Marketing Services Chennai, Creative Services Chennai, Media Production Chennai, Paid Ads Chennai, Web Design Chennai, SaaS Services Chennai, AI Automation Chennai, Lead Generation Chennai, Sevenmen Media Solutions" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sevenmensolutions.com/services" />
        <meta property="og:title" content="Digital Marketing & Creative Services in Chennai | Sevenmen" />
        <meta property="og:description" content="Sevenmen Media Solutions offers digital marketing, paid ads, media production, creative design, web design, SaaS, AI automation, and lead generation services in Chennai." />
        <meta property="og:url" content="https://www.sevenmensolutions.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sevenmen Media Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing & Creative Services in Chennai | Sevenmen" />
        <meta name="twitter:description" content="Sevenmen Media Solutions offers digital marketing, paid ads, media production, creative design, web design, SaaS, AI automation, and lead generation services in Chennai." />
      </Helmet>

      <section id="services" className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
              Our Services
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Complete digital, creative, marketing, and technology services built
              to help your business grow with clarity and confidence.
            </p>
          </motion.div>

          {/* Services Grid */}
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
                  <Link to={`/services/${service.id}`} className="block h-full">
                    <Card className="p-8 h-full hover:shadow-xl transition-shadow duration-300 group">
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

                      <ul className="space-y-3 mb-6" role="list">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center text-sm leading-relaxed text-gray-700"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full bg-[#2C5F8D] mr-3 flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        className={`flex items-center gap-2 ${service.color} group-hover:gap-3 transition-all duration-300 text-base font-semibold`}
                      >
                        Learn More
                        <ArrowRight size={16} aria-hidden="true" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>  
  );
}

