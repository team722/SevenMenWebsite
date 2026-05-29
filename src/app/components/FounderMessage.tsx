import { motion } from 'motion/react';
import { Quote } from 'lucide-react';


export function FounderMessage() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 to-white">
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
            From the Founder
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#2C5F8D] to-[#6BA3D0] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl bg-[#E6F2FA]">
              <img
                src="src/assets/8e641cb55ef8382cbd60c5641dd56c402eeafe3f.png"
                alt="Founder of Sevenmen Media Solutions"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#6BA3D0]/20 rounded-full -z-10" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#F8B04C]/20 rounded-full -z-10" />
          </motion.div>

          {/* Founder Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"
          >
            <Quote className="text-[#6BA3D0] opacity-40 mb-6" size={48} />

            <div className="space-y-5">
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                When I founded Sevenmen Media Solutions, my vision was simple:
                to help businesses grow with clear communication, creative
                media, digital marketing, and practical technology support.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                Every business has a story, but not every business knows how to
                present it clearly. Our goal is to help brands look
                professional, build trust, reach the right audience, and move
                forward with confidence.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                We believe good work comes from understanding the client first.
                Whether it is marketing, branding, videos, websites,
                automation, or strategy, our team focuses on creating work that
                is useful, clear, and connected to real business growth.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-lg md:text-xl font-bold text-[#0A2647] mb-1">
                Mr. Chandra Sekar E
              </p>

              <p className="text-base font-semibold text-[#2C5F8D]">
                Founder, Sevenmen Media Solutions
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-[#E6F2FA]/50 rounded-xl border border-[#6BA3D0]/20">
                <div className="text-2xl font-bold text-[#2C5F8D] mb-1">
                  7+
                </div>
                <p className="text-sm text-gray-600">
                  Years Experience
                </p>
              </div>

              <div className="text-center p-4 bg-[#E6F2FA]/50 rounded-xl border border-[#6BA3D0]/20">
                <div className="text-2xl font-bold text-[#2C5F8D] mb-1">
                  100+
                </div>
                <p className="text-sm text-gray-600">
                  Projects Delivered
                </p>
              </div>

              <div className="text-center p-4 bg-[#E6F2FA]/50 rounded-xl border border-[#6BA3D0]/20">
                <div className="text-2xl font-bold text-[#2C5F8D] mb-1">
                  10+
                </div>
                <p className="text-sm text-gray-600">
                  Digital Services
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}