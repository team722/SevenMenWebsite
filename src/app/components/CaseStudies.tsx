import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const caseStudies = [
  {
    title: 'Brand Launch Campaign',
    client: 'Tech Startup',
    category: 'Digital Marketing',
    image:
      'https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MDk1OTU5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    result: '500% Increase in Leads',
    metric: '+500%',
    description:
      'Comprehensive digital campaign combining SEO, social media, and content marketing to establish market presence.'
  },
  {
    title: 'Corporate Brand Film',
    client: 'Manufacturing Company',
    category: 'Media Production',
    image:
      'https://images.unsplash.com/photo-1639701386739-449a0e789367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmF8ZW58MXx8fHwxNzYwOTY5Nzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    result: '2M+ Views',
    metric: '2M+',
    description:
      'Award-winning corporate film showcasing company heritage and innovation, achieving strong reach across digital platforms.'
  },
  {
    title: 'SaaS Platform Development',
    client: 'Education Tech',
    category: 'Software Development',
    image:
      'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjA5OTg4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    result: '10K+ Active Users',
    metric: '10K+',
    description:
      'Full-stack SaaS platform with smart features, serving thousands of students and educators across different regions.'
  }
];

export function CaseStudies() {
  return (
    <section id="work" className="py-20 md:py-24 bg-white">
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
            Success Stories
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
            Real results for real businesses. See how we help brands improve
            visibility, build trust, and grow with focused digital solutions.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Result Badge */}
                  <div className="absolute top-4 right-4 bg-[#2C5F8D] text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <TrendingUp size={16} aria-hidden="true" />
                    <span className="text-sm font-semibold">
                      {study.metric}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 backdrop-blur-sm text-sm font-medium text-[#0A2647]"
                    >
                      {study.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A2647] mb-2">
                    {study.title}
                  </h3>

                  <p className="text-sm font-medium text-gray-500 mb-3">
                    {study.client}
                  </p>

                  <p className="text-base leading-relaxed text-gray-600 mb-5">
                    {study.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <span className="text-base font-semibold text-[#0A2647]">
                      {study.result}
                    </span>

                    <button
                      className="flex items-center gap-2 text-base font-semibold text-[#2C5F8D] group-hover:gap-3 transition-all"
                      aria-label={`Read more about ${study.title}`}
                    >
                      Read More
                      <ArrowRight size={16} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Button */}
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
  );
}