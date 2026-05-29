import { motion } from 'motion/react';
import { Lightbulb, Award, Users, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Clarity First',
    description:
      'We create clear plans and organized workflows before starting any project.'
  },
  {
    icon: Award,
    title: 'Professional Presence',
    description:
      'We help your brand look polished, trustworthy, and consistent across every platform.'
  },
  {
    icon: Users,
    title: 'One Reliable Team',
    description:
      'We handle your marketing, media, design, website, and digital support in one place.'
  },
  {
    icon: TrendingUp,
    title: 'Lead-Focused Growth',
    description:
      'We create content and campaigns that help the right customers find your business.'
  }
];

export function OurValues() {
  return (
    <section className="py-20 md:py-24 bg-white">
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
            Our Values
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
            The principles that guide how we plan, create, communicate, and deliver every project.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="h-full text-center p-8 rounded-2xl border border-gray-100 bg-white hover:bg-[#E6F2FA]/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#6BA3D0]/20 flex items-center justify-center mx-auto mb-5">
                    <Icon className="text-[#2C5F8D]" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-[#0A2647] mb-3">
                    {value.title}
                  </h3>

                  <p className="text-base leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}