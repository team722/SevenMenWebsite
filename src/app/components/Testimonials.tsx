import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechVision Solutions',
    location: 'Chennai',
    content:
      'Sevenmen Media transformed our brand presence completely. Their digital marketing strategy increased our leads by 300% in just three months. Outstanding work!',
    rating: 5,
    image: null
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Director, GreenEarth NGO',
    location: 'Mumbai',
    content:
      'The video production quality was exceptional. They captured our mission perfectly and helped us reach thousands of new supporters. Highly professional team.',
    rating: 5,
    image: null
  },
  {
    name: 'Michael Anderson',
    role: 'Founder, StartupHub Inc.',
    location: 'San Francisco, USA',
    content:
      'Working with Sevenmen Media was seamless despite the time difference. They built our SAAS platform ahead of schedule with incredible attention to detail.',
    rating: 5,
    image: null
  },
  {
    name: 'Arun Natarajan',
    role: 'Political Campaign Manager',
    location: 'Tamil Nadu',
    content:
      'Their campaign strategy and media production helped us connect with voters across the state. Creative, responsive, and results-driven.',
    rating: 5,
    image: null
  },
  {
    name: 'Sarah Johnson',
    role: 'COO, EduTech Global',
    location: 'London, UK',
    content:
      'The AI automation solutions they developed saved us 40 hours per week. Impressive technical expertise combined with business understanding.',
    rating: 5,
    image: null
  },
  {
    name: 'Vikram Patel',
    role: 'Restaurant Chain Owner',
    location: 'Bangalore',
    content:
      'From logo design to complete digital presence, Sevenmen Media handled everything. Our brand now stands out in a competitive market.',
    rating: 5,
    image: null
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-white">
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
            What Our Clients Say
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
            Real feedback from businesses that trusted us with their marketing,
            media production, design, website, and digital growth needs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="h-full bg-gradient-to-br from-[#E6F2FA] to-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <Quote
                    className="text-[#6BA3D0] opacity-40 flex-shrink-0"
                    size={40}
                    aria-hidden="true"
                  />

                  <div className="flex gap-1" aria-label={`${testimonial.rating} star rating`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#F8B04C] text-[#F8B04C]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-base leading-relaxed text-gray-700 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="border-t border-[#2C5F8D]/20 pt-5">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C5F8D] to-[#6BA3D0] flex items-center justify-center text-white text-xl font-semibold flex-shrink-0"
                      aria-hidden="true"
                    >
                      {testimonial.name.charAt(0)}
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-[#0A2647] mb-1">
                        {testimonial.name}
                      </h3>

                      <p className="text-sm leading-relaxed text-gray-600">
                        {testimonial.role}
                      </p>

                      <p className="text-sm leading-relaxed text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-5">
            Join our growing list of satisfied clients.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center h-14 px-8 rounded-lg bg-[#2C5F8D] text-white text-base md:text-lg font-semibold hover:bg-[#0A2647] transition-colors"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}