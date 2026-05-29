import { motion } from 'motion/react';
import { useState } from 'react';
import {
  TrendingUp,
  Filter,
  ArrowRight,
  CheckCircle,
  Briefcase,
  Sparkles
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';

const categories = [
  'All',
  'Media Production',
  'Digital Marketing',
  'Software Development',
  'Creative Design',
  'AI & Automation'
];

const portfolioItems = [
  {
    title: 'Brand Launch Campaign',
    client: 'Tech Startup - India',
    category: 'Digital Marketing',
    image:
      'https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    result: '500% increase in leads',
    metric: '+500%',
    description:
      'Comprehensive digital campaign combining SEO, social media, and content marketing to establish market presence.',
    tags: ['SEO', 'Social Media', 'Content Marketing']
  },
  {
    title: 'Corporate Brand Film',
    client: 'Manufacturing Company - US',
    category: 'Media Production',
    image:
      'https://images.unsplash.com/photo-1639701386739-449a0e789367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    result: '2M+ views',
    metric: '2M+',
    description:
      'Corporate film showcasing company heritage, innovation, and brand story across digital platforms.',
    tags: ['Video Production', 'Brand Film', 'Corporate']
  },
  {
    title: 'SAAS Platform Development',
    client: 'Education Tech - Global',
    category: 'Software Development',
    image:
      'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    result: '10K+ active users',
    metric: '10K+',
    description:
      'Full-stack SaaS platform with smart features, serving students and educators across multiple regions.',
    tags: ['Web Development', 'SAAS', 'AI Integration']
  },
  {
    title: 'E-commerce Platform Redesign',
    client: 'Fashion Retailer - India',
    category: 'Creative Design',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    result: '85% boost in conversions',
    metric: '+85%',
    description:
      'Complete UI/UX redesign of an e-commerce platform to improve user experience and sales performance.',
    tags: ['UI/UX', 'E-commerce', 'Branding']
  },
  {
    title: 'AI Chatbot Implementation',
    client: 'Customer Service - US',
    category: 'AI & Automation',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    result: '60% cost reduction',
    metric: '-60%',
    description:
      'AI-powered chatbot built to handle customer conversations, improve response time, and reduce support workload.',
    tags: ['AI', 'Chatbot', 'Automation']
  },
  {
    title: 'Documentary Series',
    client: 'Non-Profit Organization',
    category: 'Media Production',
    image:
      'https://images.unsplash.com/photo-1581374820583-317d45555a82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    result: '5M+ impressions',
    metric: '5M+',
    description:
      'A documentary-style content series highlighting social impact initiatives and meaningful community stories.',
    tags: ['Documentary', 'Social Impact', 'Storytelling']
  },
  {
    title: 'Mobile App Launch',
    client: 'Fitness Startup - Global',
    category: 'Software Development',
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    result: '50K+ downloads',
    metric: '50K+',
    description:
      'Mobile app launch campaign and product experience design for fitness users across iOS and Android.',
    tags: ['Mobile App', 'iOS', 'Android']
  },
  {
    title: 'Social Media Campaign',
    client: 'Political Campaign - India',
    category: 'Digital Marketing',
    image:
      'https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    result: '15M+ reach',
    metric: '15M+',
    description:
      'Multi-platform social media campaign with targeted creatives, content planning, and audience engagement.',
    tags: ['Social Media', 'Campaign', 'Advertising']
  },
  {
    title: 'Brand Identity Redesign',
    client: 'Tech Company - US',
    category: 'Creative Design',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    result: '100% brand recall',
    metric: '100%',
    description:
      'Complete brand refresh including visual identity, logo direction, colors, and brand communication system.',
    tags: ['Branding', 'Logo Design', 'Identity']
  }
];

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-28 md:py-32 overflow-hidden bg-gradient-to-br from-[#0A2647] via-[#123B63] to-[#2C5F8D]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1511752229301-31156e2e6b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
            alt="Creative portfolio and digital work showcase"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2647]/95 via-[#123B63]/90 to-[#2C5F8D]/85" />
        </div>

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
                Our Creative Work
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Portfolio That Shows Strategy, Creativity & Results
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8 max-w-3xl mx-auto">
              Explore our work across digital marketing, media production,
              software development, creative design, and AI automation.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-white">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#F8B04C]" />
                <span>500+ Projects Completed</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#F8B04C]" />
                <span>100+ Happy Clients</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#F8B04C]" />
                <span>Result-Focused Work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-[#0A2647] font-semibold">
              <Filter size={20} />
              <span>Filter by category</span>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? 'bg-[#0A2647] hover:bg-[#2C5F8D] text-white rounded-full px-5'
                      : 'border-[#2C5F8D]/25 text-[#2C5F8D] hover:bg-[#2C5F8D] hover:text-white rounded-full px-5'
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#F7FBFF] via-white to-[#E6F2FA] overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#6BA3D0]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0052CC]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 opacity-[0.45] bg-[radial-gradient(circle_at_top_right,rgba(107,163,208,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(0,82,204,0.10),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,rgba(10,38,71,0.7)_1px,transparent_1px),linear-gradient(rgba(10,38,71,0.7)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <p className="text-base text-gray-600">
              Showing{' '}
              <span className="font-bold text-[#0A2647]">
                {filteredItems.length}
              </span>{' '}
              projects in{' '}
              <span className="font-bold text-[#2C5F8D]">
                {selectedCategory}
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${selectedCategory}-${item.title}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="h-full"
              >
                <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 h-full flex flex-col bg-white/95 backdrop-blur-sm border border-[#2C5F8D]/10">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                    <div className="absolute top-4 right-4 bg-[#2C5F8D] text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                      <TrendingUp size={16} />
                      <span className="text-sm font-semibold">
                        {item.metric}
                      </span>
                    </div>

                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-white/90 backdrop-blur-sm text-[#0A2647] font-semibold"
                      >
                        {item.category}
                      </Badge>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white/80 text-sm mb-1">
                        {item.client}
                      </p>
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-base leading-relaxed text-gray-600 mb-5 flex-1">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {item.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs border-[#2C5F8D]/20 text-[#2C5F8D]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-[#2C5F8D] font-semibold">
                        <Briefcase size={16} />
                        <span>{item.result}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#123B63] via-[#1F5C8A] to-[#2C5F8D] overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#6BA3D0]/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F8B04C]/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0A2647] via-[#174A78] to-[#2C5F8D] border border-white/15 p-8 md:p-12 shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F8B04C]/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Want Similar Results?
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8 max-w-3xl mx-auto">
                Let&apos;s create your success story together. Get in touch for
                a free consultation.
              </p>

              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-[#F8B04C] hover:bg-[#e09a3a] text-[#0A2647] text-base md:text-lg font-semibold h-14 px-8"
                >
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}