import { motion } from 'motion/react';

const clients = [
  {
    name: 'E Tamil',
    logo: 'src/assets/clients/client1_etamil.png'
  },
  {
    name: 'Blue Bright',
    logo: 'src/assets/clients/client2_bluebright.png'
  },
  {
    name: 'Urloved',
    logo: 'src/assets/clients/client3_urloved.png'
  },
  {
    name: 'Fireline Media',
    logo: 'src/assets/clients/client4_firelinemedia.webp'
  },
  {
    name: 'Kopase',
    logo: 'src/assets/clients/client5_kopase.webp'
  }
];

export function OurClients() {
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
            Trusted by Growing Brands and Businesses
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
            We have worked with clients from different industries, helping them
            with digital marketing, media production, branding, design,
            websites, and content support.
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 items-center"
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="h-28 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center"
            >
              <div className="w-full h-full flex items-center justify-center px-6">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-14 max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}