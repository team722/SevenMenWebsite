import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useState, type FormEvent } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import {
  Mail,
  Phone,
  Send,
  Clock,
  CheckCircle,
  Globe,
  MapPin,
  ArrowRight
} from 'lucide-react';

import { db } from '../../config/firebase';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../components/ui/select';
import { Card } from '../components/ui/card';
import { toast } from 'sonner';

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
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

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
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
      width="18"
      height="18"
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
      width="18"
      height="18"
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
      width="18"
      height="18"
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
  {
    label: 'Facebook',
    href: '#',
    icon: FacebookIcon
  },
  {
    label: 'Instagram',
    href: '#',
    icon: InstagramIcon
  },
  {
    label: 'X',
    href: '#',
    icon: TwitterIcon
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: LinkedinIcon
  }
];

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'thesevenmenmedia@gmail.com',
    link: 'mailto:thesevenmenmedia@gmail.com',
    description: 'For general inquiries and project discussions',
    type: 'contact'
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91 96292 88884 | +91 95855 98559',
    link: 'tel:+919629288884',
    description: 'Mon-Sat, 9:00 AM - 6:00 PM IST',
    type: 'contact'
  },
  {
    icon: Globe,
    title: 'Follow Us',
    value: '',
    link: '',
    description:
      'Follow our latest updates, creative projects, and digital growth ideas.',
    type: 'social'
  }
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.message
    ) {
      toast.error('Please fill all required fields.');
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, 'contactSubmissions'), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        source: 'Contact Page',
        createdAt: serverTimestamp()
      });

      toast.success('Thank you for reaching out!', {
        description: "We'll get back to you within 24 hours."
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error saving contact form:', error);

      toast.error('Something went wrong.', {
        description: 'Please try again or contact us on WhatsApp.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Sevenmen Media Solutions | Digital Agency Chennai</title>
        <meta
          name="description"
          content="Contact Sevenmen Media Solutions in Chennai for digital marketing, media production, branding, web design, SEO, paid ads, and creative business support."
        />
        <meta
          name="keywords"
          content="Contact Sevenmen Media Solutions, Digital Agency Chennai, Digital Marketing Agency Chennai, Media Production Chennai, Branding Agency Chennai, Web Design Chennai, SEO Services Chennai, Paid Ads Chennai"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sevenmensolutions.com/contact-us" />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-28 bg-gradient-to-br from-[#E6F2FA] via-white to-[#A0C4E0]/20 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#6BA3D0]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0052CC]/10 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-[#2C5F8D]/20 shadow-sm mb-6">
                <CheckCircle size={18} className="text-[#2C5F8D]" />
                <span className="text-sm md:text-base font-semibold text-[#2C5F8D]">
                  Free Consultation Available
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2647] leading-tight mb-6">
                Have a Goal? Let&apos;s Plan It Together
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8">
                Whether you want more inquiries, better branding, creative
                content, or a stronger website, our team is here to listen,
                understand, and help you take the next step.
              </p>

              <a href="#contact-form" className="inline-flex">
                <Button
                  size="lg"
                  className="bg-[#0A2647] hover:bg-[#2C5F8D] text-white text-base md:text-lg font-semibold h-14 px-8"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;

                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="relative h-full overflow-hidden p-[1px] rounded-2xl border-0 bg-gradient-to-br from-[#E6F2FA] via-white to-[#A0C4E0]/40 shadow-sm hover:shadow-xl transition-all duration-300 group">
                      <div className="relative h-full rounded-2xl bg-white p-7 text-center overflow-hidden">
                        <div className="absolute top-0 right-0 w-28 h-28 bg-[#6BA3D0]/20 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3 group-hover:bg-[#2C5F8D]/20 transition-colors" />

                        <div className="relative z-10">
                          <div className="w-16 h-16 rounded-2xl bg-[#0052CC]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#0052CC] transition-colors duration-300">
                            <Icon
                              className="text-[#0052CC] group-hover:text-white transition-colors duration-300"
                              size={28}
                            />
                          </div>

                          <h3 className="text-xl font-bold text-[#0A2647] mb-3">
                            {method.title}
                          </h3>

                          {method.type === 'social' ? (
                            <div className="flex justify-center gap-3 my-5">
                              {socialLinks.map((social) => {
                                const SocialIcon = social.icon;

                                return (
                                  <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-11 h-11 rounded-full bg-[#0052CC]/10 text-[#0052CC] flex items-center justify-center hover:bg-[#0052CC] hover:text-white transition-colors"
                                    aria-label={social.label}
                                  >
                                    <SocialIcon />
                                  </a>
                                );
                              })}
                            </div>
                          ) : (
                            <a
                              href={method.link}
                              className="text-[#0052CC] hover:text-[#0A2647] transition-colors mb-3 block font-semibold break-words"
                            >
                              {method.value}
                            </a>
                          )}

                          <p className="text-sm leading-relaxed text-gray-600 max-w-xs mx-auto">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WhatsApp and Contact Form */}
        <section
          id="contact-form"
          className="pt-16 md:pt-20 pb-10 md:pb-12 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1 grid grid-cols-1 gap-6 self-start"
              >
                <Card className="p-5 bg-gradient-to-br from-[#25D366] to-[#1DA851] text-white border-0 shadow-xl">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-3 text-white">
                    <WhatsAppIcon />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    WhatsApp Chat
                  </h2>

                  <p className="text-base leading-relaxed text-white/90 mb-4">
                    Want a faster response? Message us on WhatsApp and tell us
                    what you want to improve.
                  </p>

                  <a
                    href={`https://wa.me/919629288884?text=${encodeURIComponent(
                      'Hi, I would like to know more about your services'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-white text-[#128C4A] hover:bg-gray-100 text-base font-semibold h-12 px-6 gap-1.5"
                    >
                      <WhatsAppIcon />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </Card>

                <Card className="p-6 bg-white shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#0A2647] mb-5">
                    Contact Details
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-[#0052CC]/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-[#0052CC]" size={19} />
                      </div>

                      <div>
                        <div className="text-sm text-gray-500 mb-1">Email</div>
                        <a
                          href="mailto:thesevenmenmedia@gmail.com"
                          className="text-gray-900 hover:text-[#0052CC] transition-colors break-all"
                        >
                          thesevenmenmedia@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-[#0052CC]/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="text-[#0052CC]" size={19} />
                      </div>

                      <div>
                        <div className="text-sm text-gray-500 mb-1">Phone</div>

                        <a
                          href="tel:+919629288884"
                          className="block text-gray-900 hover:text-[#0052CC] transition-colors"
                        >
                          +91 96292 88884
                        </a>

                        <a
                          href="tel:+919585598559"
                          className="block text-gray-900 hover:text-[#0052CC] transition-colors"
                        >
                          +91 95855 98559
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-[#0052CC]/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="text-[#0052CC]" size={19} />
                      </div>

                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          Business Hours
                        </div>

                        <div className="text-gray-900 leading-relaxed">
                          Mon-Sat: 9:00 AM - 7:00 PM
                          <br />
                          Sunday: Closed
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl shadow-xl self-start"
              >
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
                    Contact Us
                  </h2>

                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    Share your goal with us. We&apos;ll review your requirement
                    and help you choose the right solution.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John"
                      className="mt-2"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger id="service" className="mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="media">Media Productions</SelectItem>
                        <SelectItem value="paid-ads">
                          Paid Advertisement
                        </SelectItem>
                        <SelectItem value="marketing">
                          Digital Marketing
                        </SelectItem>
                        <SelectItem value="design">Creative Design</SelectItem>
                        <SelectItem value="web">
                          Web Design & Development
                        </SelectItem>
                        <SelectItem value="software">
                          Software & SaaS
                        </SelectItem>
                        <SelectItem value="ai">AI & Automation</SelectItem>
                        <SelectItem value="consulting">
                          Consulting & Strategy
                        </SelectItem>
                        <SelectItem value="other">
                          Not Sure / Multiple Services
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your goal, project, business challenge, or requirement..."
                      className="mt-2 min-h-[130px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-[#0052CC] hover:bg-[#003d99] text-base md:text-lg font-semibold h-14 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2" size={18} />
                  </Button>

                  <p className="text-sm text-gray-500 text-center mb-0">
                    We typically respond within 24 hours. Your information is kept
                    confidential.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map / Location Section */}
        <section className="pt-12 md:pt-16 pb-20 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#0052CC]/10 mb-5">
                <MapPin className="text-[#0052CC]" size={26} />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
                Find Us in Chennai
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
                Visit or connect with Sevenmen Media Solutions in Chennai.
              </p>
            </motion.div>

            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <iframe
                title="Sevenmen Media Solutions Chennai Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6086368973583!2d80.15489767689384!3d12.932856687379092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84a374d797ec4bb1%3A0x5a43d7686d7875a2!2sZevenstone!5e0!3m2!1sen!2sin!4v1779357175497!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}












// import { Helmet } from 'react-helmet-async';
// import { motion } from 'motion/react';
// import { useState, type FormEvent } from 'react';
// import {
//   Mail,
//   Phone,
//   Send,
//   Clock,
//   CheckCircle,
//   Globe,
//   MapPin,
//   ArrowRight
// } from 'lucide-react';

// import { Button } from '../components/ui/button';
// import { Input } from '../components/ui/input';
// import { Textarea } from '../components/ui/textarea';
// import { Label } from '../components/ui/label';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue
// } from '../components/ui/select';
// import { Card } from '../components/ui/card';
// import { toast } from 'sonner';

// function WhatsAppIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="26"
//       height="26"
//       viewBox="0 0 448 512"
//       fill="currentColor"
//       stroke="currentColor"
//       strokeWidth="8"
//       strokeLinejoin="round"
//       aria-hidden="true"
//       className="flex-shrink-0"
//     >
//       <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101 32 1 132 1 255c0 39.3 10.3 77.7 29.9 111.5L0 480l116.2-30.5c32.7 17.8 69.5 27.2 107.6 27.2h.1c122.9 0 222.9-100 222.9-223 0-59.3-23.1-115-65.9-156.6zM223.9 439.6c-33.9 0-67.1-9.1-96-26.2l-6.9-4.1-68.9 18.1 18.4-67.2-4.5-7c-18.8-29.9-28.7-64.4-28.7-100.2 0-103.3 84-187.3 187.3-187.3 50 0 97 19.5 132.3 54.8 35.3 35.4 55.4 82.4 55.4 132.5 0 103.3-84 187.3-188.4 187.3zm101.6-138.1c-5.6-2.8-33.1-16.3-38.2-18.2-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.2-17.5 21.9-3.2 3.7-6.5 4.2-12.1 1.4-5.6-2.8-23.6-8.7-44.9-27.7-16.6-14.8-27.8-33.1-31-38.7-3.2-5.6-.3-8.6 2.4-11.4 2.5-2.5 5.6-6.5 8.4-9.7 2.8-3.2 3.7-5.6 5.6-9.3 1.9-3.7.9-7-0.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-7-.2-10.7-.2s-9.8 1.4-14.9 7c-5.1 5.6-19.6 19.1-19.6 46.6s20.1 54.1 22.9 57.8c2.8 3.7 39.5 60.3 95.7 84.5 13.4 5.8 23.8 9.2 31.9 11.8 13.4 4.3 25.6 3.7 35.2 2.2 10.7-1.6 33.1-13.5 37.8-26.6 4.7-13.1 4.7-24.3 3.3-26.6-1.4-2.3-5.1-3.7-10.7-6.5z" />
//     </svg>
//   );
// }

// function FacebookIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//     >
//       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//     </svg>
//   );
// }

// function InstagramIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//     >
//       <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//       <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//     </svg>
//   );
// }

// function TwitterIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       aria-hidden="true"
//     >
//       <path d="M18.244 2H21.5l-7.11 8.123L22.75 22h-6.54l-5.12-6.693L5.23 22H1.97l7.6-8.69L1.55 2h6.706l4.626 6.112L18.244 2Zm-1.143 17.91h1.804L7.276 3.99H5.34L17.101 19.91Z" />
//     </svg>
//   );
// }

// function LinkedinIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//     >
//       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//       <rect width="4" height="12" x="2" y="9" />
//       <circle cx="4" cy="4" r="2" />
//     </svg>
//   );
// }

// const socialLinks = [
//   {
//     label: 'Facebook',
//     href: '#',
//     icon: FacebookIcon
//   },
//   {
//     label: 'Instagram',
//     href: '#',
//     icon: InstagramIcon
//   },
//   {
//     label: 'X',
//     href: '#',
//     icon: TwitterIcon
//   },
//   {
//     label: 'LinkedIn',
//     href: '#',
//     icon: LinkedinIcon
//   }
// ];

// const contactMethods = [
//   {
//     icon: Mail,
//     title: 'Email Us',
//     value: 'thesevenmenmedia@gmail.com',
//     link: 'mailto:thesevenmenmedia@gmail.com',
//     description: 'For general inquiries and project discussions',
//     type: 'contact'
//   },
//   {
//     icon: Phone,
//     title: 'Call Us',
//     value: '+91 96292 88884 | +91 95855 98559',
//     link: 'tel:+919629288884',
//     description: 'Mon-Sat, 9:00 AM - 6:00 PM IST',
//     type: 'contact'
//   },
//   {
//     icon: Globe,
//     title: 'Follow Us',
//     value: '',
//     link: '',
//     description:
//       'Follow our latest updates, creative projects, and digital growth ideas.',
//     type: 'social'
//   }
// ];

// export function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!formData.service) {
//       toast.error('Please select a service.');
//       return;
//     }

//     toast.success('Thank you for reaching out!', {
//       description: "We'll get back to you within 24 hours."
//     });

//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       service: '',
//       message: ''
//     });
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Contact Sevenmen Media Solutions | Digital Agency Chennai</title>
//         <meta name="description" content="Contact Sevenmen Media Solutions in Chennai for digital marketing, media production, branding, web design, SEO, paid ads, and creative business support." />
//         <meta name="keywords" content="Contact Sevenmen Media Solutions, Digital Agency Chennai, Digital Marketing Agency Chennai, Media Production Chennai, Branding Agency Chennai, Web Design Chennai, SEO Services Chennai, Paid Ads Chennai" />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://www.sevenmensolutions.com/contact-us" />
//         <meta property="og:title" content="Contact Sevenmen Media Solutions | Digital Agency Chennai" />
//         <meta property="og:description" content="Contact Sevenmen Media Solutions in Chennai for digital marketing, media production, branding, web design, SEO, paid ads, and creative business support." />
//         <meta property="og:url" content="https://www.sevenmensolutions.com/contact-us" />
//         <meta property="og:type" content="website" />
//         <meta property="og:site_name" content="Sevenmen Media Solutions" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Contact Sevenmen Media Solutions | Digital Agency Chennai" />
//         <meta name="twitter:description" content="Contact Sevenmen Media Solutions in Chennai for digital marketing, media production, branding, web design, SEO, paid ads, and creative business support." />
//       </Helmet>
//       <main className="pt-20">
//         {/* Hero Section */}
//         <section className="relative py-24 md:py-28 bg-gradient-to-br from-[#E6F2FA] via-white to-[#A0C4E0]/20 overflow-hidden">
//           <div className="absolute top-20 right-10 w-72 h-72 bg-[#6BA3D0]/20 rounded-full blur-3xl" />
//           <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0052CC]/10 rounded-full blur-3xl" />

//           <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-center max-w-4xl mx-auto"
//             >
//               <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-[#2C5F8D]/20 shadow-sm mb-6">
//                 <CheckCircle size={18} className="text-[#2C5F8D]" />
//                 <span className="text-sm md:text-base font-semibold text-[#2C5F8D]">
//                   Free Consultation Available
//                 </span>
//               </div>

//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2647] leading-tight mb-6">
//                 Have a Goal? Let&apos;s Plan It Together
//               </h1>

//               <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8">
//                 Whether you want more inquiries, better branding, creative
//                 content, or a stronger website, our team is here to listen,
//                 understand, and help you take the next step.
//               </p>

//               <a href="#contact-form" className="inline-flex">
//                 <Button
//                   size="lg"
//                   className="bg-[#0A2647] hover:bg-[#2C5F8D] text-white text-base md:text-lg font-semibold h-14 px-8"
//                 >
//                   Get Free Consultation
//                   <ArrowRight className="ml-2" size={20} />
//                 </Button>
//               </a>
//             </motion.div>
//           </div>
//         </section>

//         {/* Contact Methods */}
//         <section className="py-16 bg-white">
//           <div className="max-w-7xl mx-auto px-6 lg:px-12">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {contactMethods.map((method, index) => {
//                 const Icon = method.icon;

//                 return (
//                   <motion.div
//                     key={method.title}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     className="h-full"
//                   >
//                     <Card className="relative h-full overflow-hidden p-[1px] rounded-2xl border-0 bg-gradient-to-br from-[#E6F2FA] via-white to-[#A0C4E0]/40 shadow-sm hover:shadow-xl transition-all duration-300 group">
//                       <div className="relative h-full rounded-2xl bg-white p-7 text-center overflow-hidden">
//                         <div className="absolute top-0 right-0 w-28 h-28 bg-[#6BA3D0]/20 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3 group-hover:bg-[#2C5F8D]/20 transition-colors" />

//                         <div className="relative z-10">
//                           <div className="w-16 h-16 rounded-2xl bg-[#0052CC]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#0052CC] transition-colors duration-300">
//                             <Icon
//                               className="text-[#0052CC] group-hover:text-white transition-colors duration-300"
//                               size={28}
//                             />
//                           </div>

//                           <h3 className="text-xl font-bold text-[#0A2647] mb-3">
//                             {method.title}
//                           </h3>

//                           {method.type === 'social' ? (
//                             <div className="flex justify-center gap-3 my-5">
//                               {socialLinks.map((social) => {
//                                 const SocialIcon = social.icon;

//                                 return (
//                                   <a
//                                     key={social.label}
//                                     href={social.href}
//                                     className="w-11 h-11 rounded-full bg-[#0052CC]/10 text-[#0052CC] flex items-center justify-center hover:bg-[#0052CC] hover:text-white transition-colors"
//                                     aria-label={social.label}
//                                   >
//                                     <SocialIcon />
//                                   </a>
//                                 );
//                               })}
//                             </div>
//                           ) : (
//                             <a
//                               href={method.link}
//                               className="text-[#0052CC] hover:text-[#0A2647] transition-colors mb-3 block font-semibold break-words"
//                             >
//                               {method.value}
//                             </a>
//                           )}

//                           <p className="text-sm leading-relaxed text-gray-600 max-w-xs mx-auto">
//                             {method.description}
//                           </p>
//                         </div>
//                       </div>
//                     </Card>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* WhatsApp and Contact Form */}
//         <section
//           id="contact-form"
//           className="pt-16 md:pt-20 pb-10 md:pb-12 bg-gray-50"
//         >
//           <div className="max-w-7xl mx-auto px-6 lg:px-12">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//               {/* Left Side Cards */}
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="lg:col-span-1 grid grid-cols-1 gap-6 self-start"
//               >
//                 {/* WhatsApp Card */}
//                 <Card className="p-5 bg-gradient-to-br from-[#25D366] to-[#1DA851] text-white border-0 shadow-xl">
//                   <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-3 text-white">
//                     <WhatsAppIcon />
//                   </div>

//                   <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
//                     WhatsApp Chat
//                   </h2>

//                   <p className="text-base leading-relaxed text-white/90 mb-4">
//                     Want a faster response? Message us on WhatsApp and tell us
//                     what you want to improve. Our team will guide you with the
//                     next step.
//                   </p>

//                   <a
//                     href={`https://wa.me/919629288884?text=${encodeURIComponent(
//                       'Hi, I would like to know more about your services'
//                     )}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Button
//                       size="lg"
//                       className="w-full bg-white text-[#128C4A] hover:bg-gray-100 text-base font-semibold h-12 px-6 gap-1.5"
//                     >
//                       <WhatsAppIcon />
//                       Chat on WhatsApp
//                     </Button>
//                   </a>
//                 </Card>

//                 {/* Contact Details Card */}
//                 <Card className="p-6 bg-white shadow-lg border border-gray-100">
//                   <h3 className="text-2xl font-bold text-[#0A2647] mb-5">
//                     Contact Details
//                   </h3>

//                   <div className="space-y-5">
//                     <div className="flex items-start gap-4">
//                       <div className="w-11 h-11 rounded-full bg-[#0052CC]/10 flex items-center justify-center flex-shrink-0">
//                         <Mail className="text-[#0052CC]" size={19} />
//                       </div>

//                       <div>
//                         <div className="text-sm text-gray-500 mb-1">Email</div>
//                         <a
//                           href="mailto:thesevenmenmedia@gmail.com"
//                           className="text-gray-900 hover:text-[#0052CC] transition-colors break-all"
//                         >
//                           thesevenmenmedia@gmail.com
//                         </a>
//                       </div>
//                     </div>

//                     <div className="flex items-start gap-4">
//                       <div className="w-11 h-11 rounded-full bg-[#0052CC]/10 flex items-center justify-center flex-shrink-0">
//                         <Phone className="text-[#0052CC]" size={19} />
//                       </div>

//                       <div>
//                         <div className="text-sm text-gray-500 mb-1">Phone</div>
//                         <div className="space-y-1">
//                           <a
//                             href="tel:+919629288884"
//                             className="block text-gray-900 hover:text-[#0052CC] transition-colors"
//                           >
//                             +91 96292 88884
//                           </a>

//                           <a
//                             href="tel:+919585598559"
//                             className="block text-gray-900 hover:text-[#0052CC] transition-colors"
//                           >
//                             +91 95855 98559
//                           </a>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex items-start gap-4">
//                       <div className="w-11 h-11 rounded-full bg-[#0052CC]/10 flex items-center justify-center flex-shrink-0">
//                         <Clock className="text-[#0052CC]" size={19} />
//                       </div>

//                       <div>
//                         <div className="text-sm text-gray-500 mb-1">
//                           Business Hours
//                         </div>

//                         <div className="text-gray-900 leading-relaxed">
//                           Mon-Sat: 9:00 AM - 7:00 PM
//                           <br />
//                           Sunday: Closed
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               </motion.div>

//               {/* Right Side - Contact Form */}
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl shadow-xl self-start"
//               >
//                 <div className="mb-6">
//                   <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
//                     Contact Us
//                   </h2>

//                   <p className="text-base md:text-lg leading-relaxed text-gray-600">
//                     Share your goal with us. We&apos;ll review your requirement
//                     and help you choose the right digital, creative, marketing, or
//                     technology solution.
//                   </p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div>
//                     <Label htmlFor="name">Full Name *</Label>
//                     <Input
//                       id="name"
//                       type="text"
//                       required
//                       value={formData.name}
//                       onChange={(e) =>
//                         setFormData({ ...formData, name: e.target.value })
//                       }
//                       placeholder="John"
//                       className="mt-2"
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                     <div>
//                       <Label htmlFor="phone">Phone Number *</Label>
//                       <Input
//                         id="phone"
//                         type="tel"
//                         required
//                         value={formData.phone}
//                         onChange={(e) =>
//                           setFormData({ ...formData, phone: e.target.value })
//                         }
//                         placeholder="+91 98765 43210"
//                         className="mt-2"
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="email">Email Address *</Label>
//                       <Input
//                         id="email"
//                         type="email"
//                         required
//                         value={formData.email}
//                         onChange={(e) =>
//                           setFormData({ ...formData, email: e.target.value })
//                         }
//                         placeholder="john@example.com"
//                         className="mt-2"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <Label htmlFor="service">Service Interested In *</Label>
//                     <Select
//                       value={formData.service}
//                       onValueChange={(value) =>
//                         setFormData({ ...formData, service: value })
//                       }
//                     >
//                       <SelectTrigger id="service" className="mt-2">
//                         <SelectValue placeholder="Select a service" />
//                       </SelectTrigger>

//                       <SelectContent>
//                         <SelectItem value="media">Media Productions</SelectItem>
//                         <SelectItem value="paid-ads">
//                           Paid Advertisement
//                         </SelectItem>
//                         <SelectItem value="marketing">
//                           Digital Marketing
//                         </SelectItem>
//                         <SelectItem value="design">Creative Design</SelectItem>
//                         <SelectItem value="web">
//                           Web Design & Development
//                         </SelectItem>
//                         <SelectItem value="software">
//                           Software & SaaS
//                         </SelectItem>
//                         <SelectItem value="ai">AI & Automation</SelectItem>
//                         <SelectItem value="consulting">
//                           Consulting & Strategy
//                         </SelectItem>
//                         <SelectItem value="other">
//                           Not Sure / Multiple Services
//                         </SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>

//                   <div>
//                     <Label htmlFor="message">Your Message *</Label>
//                     <Textarea
//                       id="message"
//                       required
//                       value={formData.message}
//                       onChange={(e) =>
//                         setFormData({ ...formData, message: e.target.value })
//                       }
//                       placeholder="Tell us about your goal, project, business challenge, or requirement..."
//                       className="mt-2 min-h-[130px]"
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     size="lg"
//                     className="w-full bg-[#0052CC] hover:bg-[#003d99] text-base md:text-lg font-semibold h-14"
//                   >
//                     Send Message
//                     <Send className="ml-2" size={18} />
//                   </Button>

//                   <p className="text-sm text-gray-500 text-center mb-0">
//                     We typically respond within 24 hours. Your information is kept
//                     confidential.
//                   </p>
//                 </form>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Map / Location Section */}
//         <section className="pt-12 md:pt-16 pb-20 md:pb-24 bg-white">
//           <div className="max-w-7xl mx-auto px-6 lg:px-12">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="text-center mb-12"
//             >
//               <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#0052CC]/10 mb-5">
//                 <MapPin className="text-[#0052CC]" size={26} />
//               </div>

//               <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
//                 Find Us in Chennai
//               </h2>

//               <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
//                 Visit or connect with Sevenmen Media Solutions in Chennai. We work
//                 with businesses across Tamil Nadu and beyond.
//               </p>
//             </motion.div>

//             <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
//               <iframe
//                 title="Sevenmen Media Solutions Chennai Location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6086368973583!2d80.15489767689384!3d12.932856687379092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84a374d797ec4bb1%3A0x5a43d7686d7875a2!2sZevenstone!5e0!3m2!1sen!2sin!4v1779357175497!5m2!1sen!2sin"
//                 width="100%"
//                 height="420"
//                 style={{ border: 0 }}
//                 loading="lazy"
//                 allowFullScreen
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }