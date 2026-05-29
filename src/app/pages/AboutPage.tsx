import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  Award,
  Globe2,
  Heart,
  Zap,
  Users,
  Target,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { NewCTA } from '../components/NewCTA';

const values = [
  {
    icon: Zap,
    title: 'Chennai-Based Team',
    description:
      'We understand Chennai businesses, Tamil Nadu markets, customer behavior, and what growing brands need to stand out online.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: Heart,
    title: '7+ Years of Experience',
    description:
      'With 7+ years in creative and digital services, we know how to plan content, campaigns, videos, and designs that support real business growth.',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10'
  },
  {
    icon: Award,
    title: 'Lead-Focused Approach',
    description:
      'We focus on work that supports real enquiries, better visibility, stronger trust, and steady business growth.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    icon: Globe2,
    title: 'Complete Digital Support',
    description:
      'You do not need separate teams for marketing, video production, design, websites, and lead generation. We bring everything together in one place.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    icon: Target,
    title: 'Practical Growth Strategy',
    description:
      'We suggest what your business actually needs, not just what looks trendy. Our focus is to use your budget wisely and build step by step.',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: CheckCircle,
    title: 'Clear Communication',
    description:
      'We keep the process simple with clear updates, easy coordination, and reliable support from planning to delivery.',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10'
  }
];

const stats = [
  { number: '100+', label: 'Projects Completed', icon: Target },
  { number: '100+', label: 'Happy Clients', icon: Users },
  { number: '98%', label: 'Satisfaction Rate', icon: Heart },
  { number: '7+', label: 'Years Experience', icon: Award }
];

const team = [
  {
    role: 'Creative Team',
    description:
      'Designers, videographers, editors, and content creators working together to build strong visual communication.',
    members: '15+ Professionals'
  },
  {
    role: 'Development Team',
    description:
      'Website developers and technical specialists building clean, functional, and business-ready digital platforms.',
    members: '20+ Engineers'
  },
  {
    role: 'Strategy Team',
    description:
      'Marketing strategists, SEO specialists, and campaign planners focused on clear growth direction.',
    members: '10+ Experts'
  },
  {
    role: 'Support Team',
    description:
      'Project coordinators and support professionals helping clients with smooth communication and delivery.',
    members: '8+ Professionals'
  }
];

const milestones = [
  {
    year: '2019',
    title: 'Company Founded',
    description:
      'Started with a clear vision to help businesses grow through creative media and digital marketing.'
  },
  {
    year: '2020',
    title: 'First 50 Clients',
    description:
      'Built trust with growing businesses through design, video, marketing, and website support.'
  },
  {
    year: '2021',
    title: 'Service Expansion',
    description:
      'Expanded into SEO, paid ads, automation, branding, and complete digital growth solutions.'
  },
  {
    year: '2022',
    title: 'Wider Market Reach',
    description:
      'Started supporting clients across India and international markets with digital services.'
  },
  {
    year: '2023',
    title: '100+ Projects',
    description:
      'Completed major creative, website, video, and marketing projects for different industries.'
  },
  {
    year: '2024',
    title: 'Stronger Digital Team',
    description:
      'Grew into a complete Chennai-based digital marketing and media production team.'
  },
  {
  year: '2025',
  title: 'Growth-Focused Digital Solutions',
  description:
    'Strengthened our services with advanced digital marketing, automation, website development, creative content, and lead-focused growth support for businesses.'
}
];

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Sevenmen Media Solutions | Digital Agency Chennai</title>
        <meta name="description" content="Sevenmen Media Solutions is a Chennai-based digital marketing, media production, and creative design team helping brands grow with SEO, ads, video, web design, and leads."/>
        <meta name="keywords" content="About Sevenmen Media Solutions, Digital Agency Chennai, Digital Marketing Agency Chennai, Media Production Company Chennai, Creative Design Agency Chennai, SEO Services Chennai, Paid Ads Chennai, Web Design Chennai, Lead Generation Chennai"/>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sevenmensolutions.com/about-us" />
        <meta property="og:title" content="About Sevenmen Media Solutions | Digital Agency Chennai" />
        <meta property="og:description" content="Sevenmen Media Solutions is a Chennai-based digital marketing, media production, and creative design team helping brands grow with SEO, ads, video, web design, and leads."/>
        <meta property="og:url" content="https://www.sevenmensolutions.com/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sevenmen Media Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Sevenmen Media Solutions | Digital Agency Chennai"/>
        <meta name="twitter:description" content="Sevenmen Media Solutions is a Chennai-based digital marketing, media production, and creative design team helping brands grow with SEO, ads, video, web design, and leads." />
      </Helmet>

    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-28 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjIxNzM3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Team collaboration"
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
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30 mb-6">
              <Award size={18} />
              <span className="text-sm font-medium">
                Award-Winning Agency
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              About Sevenmen Media Solutions Team
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-4xl mx-auto mb-8">
              We are a creative digital marketing team from Chennai helping businesses build a stronger online presence with marketing, media production, and design. We work on SEO, paid advertisement, social media, video production, branding, web design, and lead generation to help your brand get noticed, earn trust, and attract the right customers.
            </p>

            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#0A2647] hover:bg-gray-100 text-lg h-14 md:h-16 px-8 md:px-10 font-semibold"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="text-[#2C5F8D] mx-auto mb-4" size={32} />

                  <div className="text-3xl md:text-4xl font-bold text-[#2C5F8D] mb-2">
                    {stat.number}
                  </div>

                  <p className="text-base font-medium text-gray-600">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="The Sevenmen Media team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0052CC]/30 to-transparent" />
              </div>

              <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-8 lg:-right-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-start gap-4">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Trusted Partner
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      For growing businesses, startups, and established brands.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-5">
                Our Story
              </h2>

              <p className="text-xl font-semibold text-[#2C5F8D] mb-6">
                7+ Years of Helping Brands Grow Online
              </p>

              <div className="space-y-5">
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  Sevenmen Media Solutions did not start with a big office or a fancy setup. It started with a simple belief: good businesses should not stay hidden. They deserve to be seen, heard, and trusted.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  Over the last 7+ years, we have worked with brands that wanted to look better, communicate clearly, and grow online. Some needed videos. Some needed designs. Some needed SEO, paid advertisement, websites, social media, or lead generation.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  Today, we are a Chennai-based digital marketing, media production, and creative design team helping businesses turn ideas into content, content into attention, and attention into real opportunities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Why You Should Work With Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full text-center hover:shadow-lg transition-shadow">
                    <div
                      className={`w-16 h-16 rounded-full ${value.bgColor} flex items-center justify-center mx-auto mb-5`}
                    >
                      <Icon className={value.color} size={28} />
                    </div>

                    <h3 className="text-xl font-bold text-[#0A2647] mb-3">
                      {value.title}
                    </h3>

                    <p className="text-base leading-relaxed text-gray-600">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Our Team
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
              A skilled team of creative, technical, and marketing professionals working together to deliver strong digital results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((dept, index) => (
              <motion.div
                key={dept.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <Users className="text-[#2C5F8D] mb-5" size={32} />

                  <h3 className="text-xl font-bold text-[#0A2647] mb-3">
                    {dept.role}
                  </h3>

                  <p className="text-base leading-relaxed text-gray-600 mb-4">
                    {dept.description}
                  </p>

                  <div className="text-sm font-semibold text-[#2C5F8D]">
                    {dept.members}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth story.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#6BA3D0]/30 -translate-x-1/2 hidden md:block" />

            <div className="space-y-10 md:space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div
                      className={
                        index % 2 === 0
                          ? 'md:text-right'
                          : 'md:col-start-2'
                      }
                    >
                      <Card className="p-6 hover:shadow-lg transition-shadow">
                        <div className="text-2xl font-bold text-[#2C5F8D] mb-2">
                          {milestone.year}
                        </div>

                        <h3 className="text-xl font-bold text-[#0A2647] mb-2">
                          {milestone.title}
                        </h3>

                        <p className="text-base leading-relaxed text-gray-600">
                          {milestone.description}
                        </p>
                      </Card>
                    </div>
                  </div>

                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 rounded-full bg-[#2C5F8D] border-4 border-white shadow-lg" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 md:py-24 bg-gradient-to-r from-[#0052CC] to-[#003d99]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let&apos;s Work Together
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8">
              Ready to grow your business online? Get in touch for a free consultation.
            </p>

            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#0A2647] hover:bg-gray-100 text-lg h-14 px-8 font-semibold"
              >
                Start a Conversation
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