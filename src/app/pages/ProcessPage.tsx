import { motion } from 'motion/react';
import { MessageSquare, Lightbulb, Palette, Rocket, BarChart, CheckCircle, Clock, Users } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery & Consultation',
    description: 'We start by understanding your goals, challenges, and target audience through in-depth consultations.',
    duration: '1-2 Weeks',
    deliverables: ['Requirements Document', 'Project Scope', 'Timeline & Budget', 'Team Assignment'],
    activities: [
      'Initial consultation call',
      'Business goals assessment',
      'Target audience analysis',
      'Competitive research',
      'Technical requirements gathering'
    ]
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy & Planning',
    description: 'Our team develops a tailored strategy with clear milestones, timelines, and deliverables aligned with your objectives.',
    duration: '1-3 Weeks',
    deliverables: ['Strategic Plan', 'Creative Brief', 'Project Roadmap', 'Resource Allocation'],
    activities: [
      'Strategy development workshop',
      'Creative brainstorming sessions',
      'Technical architecture planning',
      'Content strategy creation',
      'Risk assessment and mitigation'
    ]
  },
  {
    number: '03',
    icon: Palette,
    title: 'Creative Development',
    description: 'We bring ideas to life through design, content creation, and development—keeping you involved every step.',
    duration: '2-8 Weeks',
    deliverables: ['Design Assets', 'Content Creation', 'Development Build', 'Review Iterations'],
    activities: [
      'Design and prototyping',
      'Content creation and copywriting',
      'Software development',
      'Regular client reviews',
      'Iterative improvements'
    ]
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Deployment',
    description: 'Your project goes live with comprehensive testing, quality assurance, and strategic deployment for maximum impact.',
    duration: '1-2 Weeks',
    deliverables: ['Final Product', 'Launch Plan', 'Training Materials', 'Documentation'],
    activities: [
      'Quality assurance testing',
      'User acceptance testing',
      'Performance optimization',
      'Deployment and launch',
      'Team training sessions'
    ]
  },
  {
    number: '05',
    icon: BarChart,
    title: 'Optimize & Scale',
    description: 'We monitor performance, gather insights, and continuously optimize to ensure sustained growth and ROI.',
    duration: 'Ongoing',
    deliverables: ['Analytics Reports', 'Optimization Plan', 'Support & Maintenance', 'Growth Strategy'],
    activities: [
      'Performance monitoring',
      'Analytics and reporting',
      'Continuous optimization',
      'A/B testing and improvements',
      'Scaling recommendations'
    ]
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: 'Transparent Communication',
    description: 'Regular updates and clear communication throughout the project lifecycle'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Strict adherence to timelines with milestone-based project management'
  },
  {
    icon: Users,
    title: 'Collaborative Approach',
    description: 'Your feedback and input integrated at every stage of the process'
  },
  {
    icon: BarChart,
    title: 'Measurable Results',
    description: 'Data-driven approach with clear KPIs and success metrics'
  }
];

export function ProcessPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Nlc3MlMjB3b3JrZmxvd3xlbnwxfHx8fDE3NjIxMTk1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Business process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2647]/95 via-[#2C5F8D]/90 to-[#6BA3D0]/85" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="mb-6 text-white">Our Process</h1>
            <p className="text-xl text-white/90 mb-8">
              A proven 5-step approach that transforms ideas into measurable results. We've perfected this methodology through 500+ successful projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#F8B04C]" />
                <span>Agile Methodology</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#F8B04C]" />
                <span>Client-Centric</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#F8B04C]" />
                <span>Results-Driven</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Step Info */}
                    <div className={isEven ? '' : 'lg:order-2'}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-[#6BA3D0]/20 border-4 border-[#2C5F8D] flex items-center justify-center">
                          <Icon className="text-[#2C5F8D]" size={28} />
                        </div>
                        <span className="text-6xl text-[#6BA3D0]/20">{step.number}</span>
                      </div>
                      
                      <h2 className="mb-4">{step.title}</h2>
                      <p className="text-xl text-gray-600 mb-6">{step.description}</p>
                      
                      <div className="flex items-center gap-2 text-[#2C5F8D] mb-8">
                        <Clock size={20} />
                        <span>Duration: {step.duration}</span>
                      </div>

                      <div className="mb-6">
                        <h3 className="mb-3">Key Activities</h3>
                        <ul className="space-y-2">
                          {step.activities.map((activity) => (
                            <li key={activity} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Deliverables Card */}
                    <div className={isEven ? '' : 'lg:order-1'}>
                      <Card className="p-8 bg-gradient-to-br from-[#0052CC]/5 to-purple-500/5 border-[#0052CC]/20">
                        <h3 className="mb-6">Deliverables</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {step.deliverables.map((deliverable) => (
                            <div
                              key={deliverable}
                              className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
                            >
                              <CheckCircle size={20} className="text-[#2C5F8D] flex-shrink-0" />
                              <span className="text-gray-700">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute left-8 -bottom-12 w-0.5 h-12 bg-gradient-to-b from-[#0052CC] to-[#0052CC]/20" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Why Our Process Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on years of experience and refined through hundreds of successful projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full text-center hover:shadow-lg transition-shadow">
                    <Icon className="text-[#2C5F8D] mx-auto mb-4" size={32} />
                    <h3 className="mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0052CC] to-[#003d99]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your project and how our proven process can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-[#0052CC] hover:bg-gray-100 text-lg h-14 px-8">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg h-14 px-8">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
