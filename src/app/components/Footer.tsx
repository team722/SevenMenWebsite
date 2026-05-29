import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';


const footerServices = [
  { label: 'Digital Marketing', path: '/services/top-digital-marketing-agency-chennai' },
  { label: 'Paid Advertisement', path: '/services/paid-advertising-services-chennai' },
  { label: 'Media Production', path: '/services/top-media-production-services-chennai' },
  { label: 'Creative Design', path: '/services/top-creative-design-services-chennai' },
  { label: 'Web Design & Development', path: '/services/web-design-development-company-chennai' },
  { label: 'AI & Automation', path: '/services/ai-automation-services-chennai' }
];

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Our Process', path: '/process' },
  { label: 'Contact Us', path: '/contact' }
];

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2H21.5l-7.11 8.123L22.75 22h-6.54l-5.12-6.693L5.23 22H1.97l7.6-8.69L1.55 2h6.706l4.626 6.112L18.244 2Zm-1.143 17.91h1.804L7.276 3.99H5.34L17.101 19.91Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socialLinks = [
  { label: 'Facebook', href: '#', icon: FacebookIcon },
  { label: 'Instagram', href: '#', icon: InstagramIcon },
  { label: 'Twitter', href: '#', icon: TwitterIcon },
  { label: 'LinkedIn', href: '#', icon: LinkedinIcon }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#061B33] text-gray-300">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2C5F8D]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6BA3D0]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-14 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_0.75fr_0.75fr_1.4fr] gap-10 lg:gap-10">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <img
                src="src/assets/c9b2144db05f2ad449f821764d2de3e308e76d15.png"
                alt="Sevenmen Media Solutions"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>

            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Sevenmen Media Solutions is a digital marketing, media production,
              and creative design agency in Chennai. We help businesses grow
              through SEO, social media marketing, video production, branding,
              graphic design, web design, and lead generation services.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#F8B04C] hover:text-[#0A2647] transition-colors"
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5">
              Our Services
            </h3>

            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6BA3D0] group-hover:bg-[#F8B04C]" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6BA3D0] group-hover:bg-[#F8B04C]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5">
              Contact Info
            </h3>

            <div className="space-y-4 mb-7">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[#F8B04C] mt-1 flex-shrink-0"
                />
                <span className="text-sm text-gray-400">
                  Chennai, Tamil Nadu
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="text-[#F8B04C] mt-1 flex-shrink-0"
                />
                <div className="space-y-1">
                  <a
                    href="tel:+919629288884"
                    className="block text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    +91 96292 88884
                  </a>

                  <a
                    href="tel:+919585598559"
                    className="block text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    +91 95855 98559
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="text-[#F8B04C] mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:thesevenmenmedia@gmail.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors break-all"
                >
                  thesevenmenmedia@gmail.com
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <h4 className="text-white font-semibold mb-2">
                Stay Updated
              </h4>

              <p className="text-sm text-gray-400 mb-4">
                Get useful updates, creative ideas, and digital growth tips.
              </p>

              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#F8B04C]"
                />

                <button
                  type="button"
                  className="w-12 h-12 rounded-xl bg-[#F8B04C] hover:bg-[#e09a3a] text-[#0A2647] flex items-center justify-center transition-colors"
                  aria-label="Subscribe"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Line */}
        <div className="py-6 border-t border-white/10">
          <p className="text-center text-sm leading-relaxed text-gray-400 max-w-5xl mx-auto">
            Digital marketing, media production, creative design, video
            production, SEO, social media marketing, paid ads, AI automation,
            and web design services <br /> in Chennai, Tamil Nadu.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {currentYear} Sevenmen Media Solutions. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}