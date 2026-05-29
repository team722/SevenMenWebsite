import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What services does Sevenmen Media Solutions offer?',
    answer:
      'We provide digital marketing, media production, creative design, website development, SaaS support, AI automation, and consulting services. Our team helps businesses improve visibility, build trust, and generate better leads.'
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines depend on the scope and complexity. A basic website may take 2 to 4 weeks, while branding, marketing, or software projects may take longer. We share a clear timeline after understanding your requirements.'
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. We work with clients across India, the United States, the United Kingdom, and other regions. Our team is experienced in handling communication, planning, and delivery across different time zones.'
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We work with startups, small businesses, corporate companies, education brands, healthcare businesses, e-commerce stores, non-profits, political campaigns, and service-based businesses.'
  },
  {
    question: 'What is your pricing model?',
    answer:
      'Our pricing depends on the project scope, timeline, and service requirements. We offer project-based pricing and monthly retainer options after understanding your goals during the consultation.'
  },
  {
    question: 'Do you provide support after project completion?',
    answer:
      'Yes. We provide ongoing support for websites, marketing campaigns, content updates, SEO, performance tracking, and digital growth needs. We prefer building long-term working relationships with our clients.'
  },
  {
    question: 'How do I get started with Sevenmen Media Solutions?',
    answer:
      'You can contact us by phone, email, or through the contact form. We will schedule a consultation, understand your business goals, and suggest the best next steps.'
  },
  {
    question: 'Can you handle both small and large projects?',
    answer:
      'Yes. We work on small tasks like logo design, social media creatives, and landing pages, as well as larger projects like full websites, digital campaigns, video production, and automation systems.'
  },
  {
    question: 'What makes Sevenmen Media Solutions different?',
    answer:
      'We bring marketing, design, media production, websites, automation, and strategy together in one place. This helps clients save time, maintain consistency, and move with a clear growth plan.'
  },
  {
    question: 'Do you offer urgent or rush services?',
    answer:
      'Yes, based on team availability and project scope. For urgent requirements, contact us with your timeline, and we will let you know the best possible delivery plan.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-24 bg-gradient-to-br from-white to-[#E6F2FA]/30"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
            Clear answers to common questions about our services, process, pricing, and support.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden"
            >
              <button
                id={`faq-question-${index}`}
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#E6F2FA]/30 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-base md:text-lg font-bold leading-relaxed text-[#0A2647] pr-4">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`text-[#2C5F8D] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={22}
                  aria-hidden="true"
                />
              </button>

              <motion.div
                id={`faq-answer-${index}`}
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="px-6 pb-5 border-t border-[#2C5F8D]/10">
                  <p className="pt-4 text-base leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 p-8 bg-gradient-to-r from-[#2C5F8D] to-[#6BA3D0] rounded-2xl text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Still Have Questions?
          </h3>

          <p className="text-base md:text-lg leading-relaxed text-white/90 mb-6 max-w-2xl mx-auto">
            We are here to help. Reach out to our team for clear, personalized answers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919629288884"
              className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-white text-[#2C5F8D] text-base font-semibold hover:bg-[#E6F2FA] transition-colors"
            >
              Call Us: +91 96292 88884
            </a>

            <a
              href="mailto:thesevenmedia@gmail.com"
              className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-[#0A2647] text-white text-base font-semibold hover:bg-[#0A2647]/80 transition-colors"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}