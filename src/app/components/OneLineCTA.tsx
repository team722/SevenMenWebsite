import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function OneLineCTA() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#E6F2FA] to-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#0A2647] leading-tight mb-6"
        >
          Your Next Customer Is Already Online
        </motion.h2>

        {/* Section Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8"
        >
          Let&apos;s help them discover your business with clear marketing,
          creative content, and the right digital growth strategy.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`https://wa.me/919629288884?text=${encodeURIComponent(
              'Hi, I would like to know more about your services'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white text-base md:text-lg font-semibold h-14 px-8"
            >
              <MessageCircle className="mr-2" size={20} />
              Chat with Us
            </Button>
          </a>

          <Link to="/services" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-[#2C5F8D] text-[#2C5F8D] hover:bg-[#2C5F8D] hover:text-white text-base md:text-lg font-semibold h-14 px-8"
            >
              Explore Our Services
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}