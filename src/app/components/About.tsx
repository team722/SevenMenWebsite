import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691737535-57edd2a11d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTAyMzAzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="The Sevenmen Media team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0052CC]/30 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-8 lg:-right-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-2">
                  7+
                </div>

                <p className="text-base font-medium text-gray-700">
                  Years of Excellence
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-5">
              About Sevenmen Media Solutions
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-6">
              Sevenmen Media Solutions is a Chennai-based digital marketing and
              creative agency offering SEO, social media marketing, video
              production, branding, graphic design, web design, and lead
              generation services. We help brands improve visibility, build
              trust, and grow through creative and result-driven marketing
              solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}