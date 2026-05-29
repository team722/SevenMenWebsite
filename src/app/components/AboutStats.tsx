import { motion } from 'motion/react';
import { Building2, Briefcase, CheckCircle2, MapPin } from 'lucide-react';

const stats = [
  {
    icon: CheckCircle2,
    number: '7+',
    label: 'Years of Experience'
  },
  {
    icon: Briefcase,
    number: '10+',
    label: 'Services Across Marketing, Design & Tech'
  },
  {
    icon: Building2,
    number: '100+',
    label: 'Projects Delivered'
  },
  {
    icon: MapPin,
    number: 'Chennai',
    label: 'Based, Serving Tamil Nadu & Beyond'
  }
];

export function AboutStats() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#0A2647] to-[#2C5F8D] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Proven Results
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-white/85 max-w-3xl mx-auto">
            A quick look at the experience, services, and results we bring to growing brands.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="text-[#F8B04C]" size={28} />
                </div>

                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>

                <p className="text-base md:text-lg leading-relaxed text-white/85 max-w-xs mx-auto">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}