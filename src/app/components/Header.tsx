import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Mail,
  Phone,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { Button } from './ui/button';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' }
];

const serviceLinks = [
  {
    label: 'Digital Marketing',
    path: '/services/top-digital-marketing-agency-chennai'
  },
  {
    label: 'Paid Advertisement',
    path: '/services/paid-advertising-services-chennai'
  },
  {
    label: 'Media Production',
    path: '/services/top-media-production-services-chennai'
  },
  {
    label: 'Creative Design',
    path: '/services/top-creative-design-services-chennai'
  },
  {
    label: 'Web Design & Development',
    path: '/services/web-design-development-company-chennai'
  },
  {
    label: 'Software & SaaS',
    path: '/services/software-saas-development-company-chennai'
  },
  {
    label: 'AI & Automation',
    path: '/services/ai-automation-services-chennai'
  },
  {
    label: 'Consulting & Strategy',
    path: '/services/top-digital-strategy-consultants-chennai'
  }
];

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 448 512"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinejoin="round"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101 32 1 132 1 255c0 39.3 10.3 77.7 29.9 111.5L0 480l116.2-30.5c32.7 17.8 69.5 27.2 107.6 27.2h.1c122.9 0 222.9-100 222.9-223 0-59.3-23.1-115-65.9-156.6zM223.9 439.6c-33.9 0-67.1-9.1-96-26.2l-6.9-4.1-68.9 18.1 18.4-67.2-4.5-7c-18.8-29.9-28.7-64.4-28.7-100.2 0-103.3 84-187.3 187.3-187.3 50 0 97 19.5 132.3 54.8 35.3 35.4 55.4 82.4 55.4 132.5 0 103.3-84 187.3-188.4 187.3zm101.6-138.1c-5.6-2.8-33.1-16.3-38.2-18.2-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.2-17.5 21.9-3.2 3.7-6.5 4.2-12.1 1.4-5.6-2.8-23.6-8.7-44.9-27.7-16.6-14.8-27.8-33.1-31-38.7-3.2-5.6-.3-8.6 2.4-11.4 2.5-2.5 5.6-6.5 8.4-9.7 2.8-3.2 3.7-5.6 5.6-9.3 1.9-3.7.9-7-0.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-7-.2-10.7-.2s-9.8 1.4-14.9 7c-5.1 5.6-19.6 19.1-19.6 46.6s20.1 54.1 22.9 57.8c2.8 3.7 39.5 60.3 95.7 84.5 13.4 5.8 23.8 9.2 31.9 11.8 13.4 4.3 25.6 3.7 35.2 2.2 10.7-1.6 33.1-13.5 37.8-26.6 4.7-13.1 4.7-24.3 3.3-26.6-1.4-2.3-5.1-3.7-10.7-6.5z" />
    </svg>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith('/services');

  const headerBg = isScrolled
    ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
    : 'bg-white/90 backdrop-blur-md shadow-sm border-b border-white/40';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/src/assets/c9b2144db05f2ad449f821764d2de3e308e76d15.png"
              alt="Sevenmen Media Solutions"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#F7FBFF] border border-[#E6F2FA] rounded-full px-2 py-2">
            <Link
              to="/"
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive('/')
                  ? 'bg-[#0A2647] text-white shadow-md'
                  : 'text-gray-700 hover:bg-white hover:text-[#2C5F8D]'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive('/about')
                  ? 'bg-[#0A2647] text-white shadow-md'
                  : 'text-gray-700 hover:bg-white hover:text-[#2C5F8D]'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                to="/services"
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1 ${
                  isServicesActive
                    ? 'bg-[#0A2647] text-white shadow-md'
                    : 'text-gray-700 hover:bg-white hover:text-[#2C5F8D]'
                }`}
              >
                Services
                <ChevronDown size={15} />
              </Link>

              <div className="absolute left-1/2 top-full z-50 hidden w-[300px] -translate-x-1/2 pt-4 group-hover:block">
                <div className="rounded-2xl bg-white border border-gray-100 shadow-2xl p-3">
                  <Link
                    to="/services"
                    className="block px-4 py-3 rounded-xl text-sm font-semibold text-[#0A2647] hover:bg-[#E6F2FA] transition-colors"
                  >
                    Our Services
                  </Link>

                  <div className="my-2 h-px bg-gray-100" />

                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive(service.path)
                          ? 'bg-[#0A2647] text-white'
                          : 'text-gray-700 hover:bg-[#E6F2FA] hover:text-[#2C5F8D]'
                      }`}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-[#0A2647] text-white shadow-md'
                    : 'text-gray-700 hover:bg-white hover:text-[#2C5F8D]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden xl:flex items-center gap-4">
            <div className="flex items-center gap-3 text-sm">
              <a
                href="mailto:thesevenmenmedia@gmail.com"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-[#2C5F8D] transition-colors"
              >
                <Mail size={15} className="text-[#2C5F8D]" />
                <span className="font-medium">Mail</span>
              </a>

              <span className="w-px h-5 bg-gray-200" />

              <a
                href="tel:+919629288884"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-[#2C5F8D] transition-colors"
              >
                <Phone size={15} className="text-[#2C5F8D]" />
                <span className="font-medium">Call</span>
              </a>
            </div>

            <Link to="/contact">
              <Button className="bg-[#0A2647] hover:bg-[#2C5F8D] text-white h-11 px-5 rounded-full font-semibold shadow-md">
                Get Free Consultation
                <ArrowRight className="ml-2" size={17} />
              </Button>
            </Link>

            <a
              href={`https://wa.me/919629288884?text=${encodeURIComponent(
                'Hi, I would like to know more about your services'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all duration-300 shadow-md hover:scale-105"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>

          {/* Tablet CTA */}
          <div className="hidden lg:flex xl:hidden items-center gap-3">
            <Link to="/contact">
              <Button className="bg-[#0A2647] hover:bg-[#2C5F8D] text-white h-11 px-5 rounded-full font-semibold">
                Get Free Consultation
              </Button>
            </Link>

            <button
              className="text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile and Tablet Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden pb-6 border-t border-gray-100 bg-white">
            <nav className="flex flex-col gap-2 pt-5">
              <Link
                to="/"
                className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive('/')
                    ? 'bg-[#0A2647] text-white'
                    : 'text-gray-700 hover:bg-[#E6F2FA] hover:text-[#2C5F8D]'
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive('/about')
                    ? 'bg-[#0A2647] text-white'
                    : 'text-gray-700 hover:bg-[#E6F2FA] hover:text-[#2C5F8D]'
                }`}
              >
                About Us
              </Link>

              {/* Mobile Services Submenu */}
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                  isServicesActive
                    ? 'bg-[#0A2647] text-white'
                    : 'text-gray-700 hover:bg-[#E6F2FA] hover:text-[#2C5F8D]'
                }`}
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    isMobileServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isMobileServicesOpen && (
                <div className="ml-3 pl-3 border-l border-[#2C5F8D]/20 space-y-2">
                  <Link
                    to="/services"
                    className="block px-4 py-3 rounded-xl text-sm font-semibold text-[#0A2647] hover:bg-[#E6F2FA]"
                  >
                    Our Services
                  </Link>

                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive(service.path)
                          ? 'bg-[#0A2647] text-white'
                          : 'text-gray-700 hover:bg-[#E6F2FA] hover:text-[#2C5F8D]'
                      }`}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                to="/portfolio"
                className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive('/portfolio')
                    ? 'bg-[#0A2647] text-white'
                    : 'text-gray-700 hover:bg-[#E6F2FA] hover:text-[#2C5F8D]'
                }`}
              >
                Portfolio
              </Link>

              <Link
                to="/contact"
                className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive('/contact')
                    ? 'bg-[#0A2647] text-white'
                    : 'text-gray-700 hover:bg-[#E6F2FA] hover:text-[#2C5F8D]'
                }`}
              >
                Contact
              </Link>

              <div className="grid grid-cols-2 gap-3 pt-4">
                <a
                  href="mailto:thesevenmenmedia@gmail.com"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#E6F2FA] text-[#0A2647] font-semibold"
                >
                  <Mail size={18} />
                  Mail
                </a>

                <a
                  href="tel:+919629288884"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#E6F2FA] text-[#0A2647] font-semibold"
                >
                  <Phone size={18} />
                  Call
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <Link to="/contact">
                  <Button className="bg-[#0A2647] hover:bg-[#2C5F8D] text-white w-full h-12 rounded-xl font-semibold">
                    Get Free Consultation
                  </Button>
                </Link>

                <a
                  href={`https://wa.me/919629288884?text=${encodeURIComponent(
                    'Hi, I would like to know more about your services'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white w-full h-12 rounded-xl font-semibold gap-2">
                    <WhatsAppIcon />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}