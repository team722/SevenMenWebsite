import { motion } from 'motion/react';
import { Search, Target, Palette, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description:
      'We learn about your business, audience, goals, and challenges.'
  },
  {
    number: '02',
    icon: Target,
    title: 'Strategy',
    description:
      'We create a clear plan tailored to your business objectives.'
  },
  {
    number: '03',
    icon: Palette,
    title: 'Create',
    description:
      'Our team designs, develops, writes, edits, and prepares your project.'
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description:
      'We publish, deliver, or launch the final solution.'
  },
  {
    number: '05',
    icon: HeadphonesIcon,
    title: 'Support',
    description:
      'We monitor, improve, and support your long-term growth.'
  }
];

export function Process() {
  return (
    <section
      id="process"
      className="relative py-20 md:py-24 bg-gradient-to-br from-[#F7FBFF] via-white to-[#E6F2FA] overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#6BA3D0]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0052CC]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute inset-0 opacity-[0.45] bg-[radial-gradient(circle_at_top_right,rgba(107,163,208,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(0,82,204,0.10),transparent_35%)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,rgba(10,38,71,0.7)_1px,transparent_1px),linear-gradient(rgba(10,38,71,0.7)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-white/80 border border-[#2C5F8D]/15 shadow-sm mb-5">
            <span className="text-sm md:text-base font-semibold text-[#2C5F8D]">
              How We Work
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
            Our Process
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
            Simple steps. Clear results.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto mt-3">
            We keep the process easy, organized, and focused on your business goals.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2C5F8D]/10 via-[#2C5F8D] to-[#2C5F8D]/10 -translate-x-1/2" />

          <div className="space-y-14 md:space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Content */}
                    <div
                      className={
                        isEven
                          ? 'lg:text-right lg:pr-16'
                          : 'lg:col-start-2 lg:pl-16'
                      }
                    >
                      <div className="relative rounded-2xl bg-white/85 backdrop-blur-sm border border-[#2C5F8D]/10 shadow-lg hover:shadow-xl transition-shadow p-6 md:p-7 overflow-hidden">
                        <div className="absolute top-0 right-0 w-28 h-28 bg-[#6BA3D0]/15 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3" />

                        <div className="relative z-10">
                          {/* Mobile Icon */}
                          <div className="lg:hidden mb-5">
                            <div className="w-16 h-16 rounded-full bg-[#6BA3D0]/10 border-4 border-[#2C5F8D] flex items-center justify-center">
                              <Icon className="text-[#2C5F8D]" size={28} />
                            </div>
                          </div>

                          <div
                            className={
                              isEven
                                ? 'flex items-center justify-start lg:justify-end mb-4'
                                : 'flex items-center justify-start mb-4'
                            }
                          >
                            <span
                              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6BA3D0]/25 leading-none"
                              aria-hidden="true"
                            >
                              {step.number}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-[#0A2647] mb-3">
                            {step.title}
                          </h3>

                          <p className="text-base md:text-lg leading-relaxed text-gray-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Icon Circle */}
                    <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-[#2C5F8D] flex items-center justify-center shadow-lg">
                        <Icon className="text-[#2C5F8D]" size={28} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}