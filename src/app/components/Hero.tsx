import { motion } from 'motion/react';
import { ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-[#E6F2FA] via-white to-[#A0C4E0]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="relative z-10">
            {/* Highlight Line */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E6F2FA] text-[#0A2647] border border-[#CFE5F4] mb-6 shadow-sm"
            >
              <Award size={18} />
              <span className="text-sm font-medium">
                Helping brands get seen, trusted, and chosen.
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0A2647] mb-6 max-w-3xl"
            >
              Chennai&apos;s Creative Team for Digital Marketing, Video Production,
              Design &amp; Web Solutions
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl font-normal leading-relaxed text-gray-700 max-w-xl mb-8"
            >
              Sevenmen Media Solutions helps startups, businesses, creators, and
              organizations grow through SEO, social media, performance marketing,
              video production, branding, and web design.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#0A2647] hover:bg-[#2C5F8D] text-base md:text-lg font-semibold h-14 px-8"
                >
                  Book a Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>

              <Link to="/portfolio" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-[#2C5F8D] text-[#2C5F8D] hover:bg-[#2C5F8D] hover:text-white text-base md:text-lg font-semibold h-14 px-8"
                >
                  See Our Work
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Creative team collaboration"
                className="w-full h-[360px] md:h-[460px] lg:h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#6BA3D0]/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#A0C4E0]/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}