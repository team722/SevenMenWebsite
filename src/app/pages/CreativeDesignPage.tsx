import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Palette,
  BadgeCheck,
  Megaphone,
  Layers,
  MonitorSmartphone,
  FileText,
  Share2,
  Package,
  CreditCard, 
  Image,
  PlaySquare,
  BarChart3,
  Lightbulb,
  Target,
  PenTool,
  Eye,
  Users,
  Brush,
  Rocket,
  HeadphonesIcon
} from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { NewCTA } from '../components/NewCTA';

const focusAreas = [
  {
    icon: BadgeCheck,
    title: 'Build Brand Trust',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Megaphone,
    title: 'Improve Visual Communication',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Layers,
    title: 'Keep Designs Consistent',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: MonitorSmartphone,
    title: 'Strengthen Online Presence',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: Target,
    title: 'Support Marketing Campaigns',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Eye,
    title: 'Make Your Brand Easy to Remember',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  }
];

const creativeServices = [
  {
    icon: PenTool,
    title: 'Logo Design',
    description:
      'Unique and professional logos that make your brand easy to identify, remember, and trust.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: BadgeCheck,
    title: 'Brand Identity Design',
    description:
      'Complete brand visuals, including colors, fonts, logo usage, and design style for consistent communication.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: FileText,
    title: 'Brochure & Flyer Design',
    description:
      'Clear and attractive brochures and flyers for promotions, events, services, products, and business presentations.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Share2,
    title: 'Social Media Creative Design',
    description:
      'Scroll-friendly posts, stories, banners, and campaign creatives for Instagram, Facebook, LinkedIn, and YouTube.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: MonitorSmartphone,
    title: 'Website UI/UX Design',
    description:
      'Clean website layouts that improve user experience, visual appeal, and visitor flow.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: BarChart3,
    title: 'Corporate Presentation Design',
    description:
      'Professional company profiles, pitch decks, proposals, and presentation slides for business use.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Package,
    title: 'Packaging Design',
    description:
      'Product packaging designs that look attractive, explain the product clearly, and support better customer attention.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  },
  {
    icon: CreditCard,
    title: 'Business Card Design',
    description:
      'Simple and professional business cards that match your brand and leave a strong first impression.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    icon: Image,
    title: 'Banner & Poster Design',
    description:
      'Eye-catching banners and posters for offers, launches, events, awareness campaigns, and promotions.',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: PlaySquare,
    title: 'Motion Graphics Design',
    description:
      'Animated visuals for reels, ads, videos, explainers, presentations, and social media content.',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing Creatives',
    description:
      'Ad creatives, campaign visuals, promotional posts, and offer designs made for online marketing.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Layers,
    title: 'Infographic Design',
    description:
      'Visual designs that explain data, services, processes, and ideas in a simple and easy-to-read format.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  }
];

const benefits = [
  {
    icon: BadgeCheck,
    title: '7+ Years of Design and Branding Experience',
    description:
      'Experienced in creating brand visuals, marketing designs, social media creatives, and professional business materials.'
  },
  {
    icon: Layers,
    title: 'Brand-Consistent Designs',
    description:
      'We keep your colors, style, tone, and visual identity consistent across every design touchpoint.'
  },
  {
    icon: FileText,
    title: 'Digital and Print Support',
    description:
      'We design for social media, websites, ads, brochures, flyers, packaging, presentations, and print materials.'
  },
  {
    icon: Target,
    title: 'Marketing-Focused Creatives',
    description:
      'Every creative is planned to support your message, campaign goal, audience, and business growth.'
  },
  {
    icon: Users,
    title: 'Designs for Every Business Type',
    description:
      'We support startups, local businesses, service brands, product companies, and growing organizations.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Clear Design Process',
    description:
      'We keep the process simple with proper planning, revisions, feedback, and final delivery support.'
  }
];

const designProcess = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Understand',
    description:
      'We understand your business, audience, purpose, design need, and platform requirements.'
  },
  {
    number: '02',
    icon: Target,
    title: 'Plan',
    description:
      'We plan the design direction, content structure, visual style, colors, and layout approach.'
  },
  {
    number: '03',
    icon: Brush,
    title: 'Design',
    description:
      'Our team creates clean, professional, and brand-focused visuals based on the approved direction.'
  },
  {
    number: '04',
    icon: Eye,
    title: 'Review',
    description:
      'We share the design for review and collect feedback to improve clarity, look, and final quality.'
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Deliver',
    description:
      'We deliver the final creative in the required format for digital, print, website, or campaign use.'
  },
  {
    number: '06',
    icon: HeadphonesIcon,
    title: 'Support',
    description:
      'We help with minor changes, format adjustments, and creative support whenever needed.'
  }
];

const portfolioTabs = [
  'Billboard',
  'Printings',
  'Logo',
  'Packaging Design',
  'Brand Identity',
  'Social Media Creatives',
  'Website UI/UX'
];

const portfolioItems = [
  {
    title: 'Billboard Design 01',
    category: 'Billboard',
    image: '/src/assets/CreativeDesign/Billboard/Billboard1.png',
    description:
      'A high-impact billboard creative designed for strong outdoor visibility and brand recall.'
  },
  {
    title: 'Billboard Design 02',
    category: 'Billboard',
    image: '/src/assets/CreativeDesign/Billboard/Billboard2.png',
    description:
      'A bold billboard layout created to communicate the campaign message quickly and clearly.'
  },
  {
    title: 'Billboard Design 03',
    category: 'Billboard',
    image: '/src/assets/CreativeDesign/Billboard/Billboard3.png',
    description:
      'An outdoor advertising creative designed with clear visuals, readable text, and strong branding.'
  },
  {
    title: 'Billboard Design 04',
    category: 'Billboard',
    image: '/src/assets/CreativeDesign/Billboard/Billboard4.png',
    description:
      'A professional billboard design built for brand awareness, promotion, and visual impact.'
  },
  {
    title: 'Billboard Design 05',
    category: 'Billboard',
    image: '/src/assets/CreativeDesign/Billboard/Billboard5.jpg',
    description:
      'A clean and attractive billboard creative made for better attention in public spaces.'
  },
  {
    title: 'Billboard Design 06',
    category: 'Billboard',
    image: '/src/assets/CreativeDesign/Billboard/Billboard6.jpg',
    description:
      'A campaign-ready billboard design focused on visibility, clarity, and audience attention.'
  },
  {
    title: 'Logo Design 01',
    category: 'Logo',
    image: '/src/assets/CreativeDesign/Logo/Logo1.jpg',
    description:
      'A custom logo design created to give the brand a clear, professional, and memorable identity.'
  },
  {
    title: 'Logo Design 02',
    category: 'Logo',
    image: '/src/assets/CreativeDesign/Logo/Logo2.jpg',
    description:
      'A unique logo concept designed to support brand recognition and trust.'
  },
  {
    title: 'Logo Design 03',
    category: 'Logo',
    image: '/src/assets/CreativeDesign/Logo/Logo3.jpg',
    description:
      'A clean logo design created with a strong visual style and brand-friendly structure.'
  },
  {
    title: 'Logo Design 04',
    category: 'Logo',
    image: '/src/assets/CreativeDesign/Logo/Logo4.jpg',
    description:
      'A professional logo mark designed for digital, print, and business branding use.'
  },
  {
    title: 'Logo Design 05',
    category: 'Logo',
    image: '/src/assets/CreativeDesign/Logo/Logo5.jpg',
    description:
      'A modern logo design created to make the brand easy to identify and remember.'
  },
  {
    title: 'Packaging Design 01',
    category: 'Packaging Design',
    image: '/src/assets/CreativeDesign/PackagingDesign/PackagingDesign1.png',
    description:
      'A product packaging design created to improve shelf appeal, clarity, and brand presentation.'
  },
  {
    title: 'Brand Identity Design 01',
    category: 'Brand Identity',
    image: '/src/assets/CreativeDesign/BrandIdentity/BrandIdentity1.jpg',
    description:
      'A complete brand identity creative designed to keep visual communication consistent.'
  },
  {
    title: 'Brand Identity Design 02',
    category: 'Brand Identity',
    image: '/src/assets/CreativeDesign/BrandIdentity/BrandIdentity2.jpg',
    description:
      'A professional brand identity layout created with colors, typography, and visual direction.'
  },
  {
    title: 'Brand Identity Design 03',
    category: 'Brand Identity',
    image: '/src/assets/CreativeDesign/BrandIdentity/BrandIdentity3.jpg',
    description:
      'A brand presentation creative built to improve recognition and visual consistency.'
  },
  {
    title: 'Brand Identity Design 04',
    category: 'Brand Identity',
    image: '/src/assets/CreativeDesign/BrandIdentity/BrandIdentity4.jpg',
    description:
      'A clean identity design that supports brand trust across marketing and business materials.'
  },
  {
    title: 'Brand Identity Design 05',
    category: 'Brand Identity',
    image: '/src/assets/CreativeDesign/BrandIdentity/BrandIdentity5.jpg',
    description:
      'A polished brand identity creative created for professional business communication.'
  },
  {
    title: 'Print Design 01',
    category: 'Printings',
    image: '/src/assets/CreativeDesign/Printings/Print1.jpg',
    description:
      'A print-ready creative designed for business promotions, campaigns, and offline marketing.'
  },
  {
    title: 'Print Design 02',
    category: 'Printings',
    image: '/src/assets/CreativeDesign/Printings/Print2.jpg',
    description:
      'A professional print design created with clean layout, readable content, and visual appeal.'
  },
  {
    title: 'Print Design 03',
    category: 'Printings',
    image: '/src/assets/CreativeDesign/Printings/Print3.jpg',
    description:
      'A marketing-focused print creative designed for strong presentation and clear communication.'
  },
  {
    title: 'Print Design 04',
    category: 'Printings',
    image: '/src/assets/CreativeDesign/Printings/Print4.jpg',
    description:
      'A print material design created to support events, offers, campaigns, and brand promotions.'
  },
  {
    title: 'Print Design 05',
    category: 'Printings',
    image: '/src/assets/CreativeDesign/Printings/Print5.jpg',
    description:
      'A clear and attractive print design made for professional offline brand communication.'
  },
  {
    title: 'Print Design 06',
    category: 'Printings',
    image: '/src/assets/CreativeDesign/Printings/Print6.jpg',
    description:
      'A creative print layout designed for better visibility and brand message delivery.'
  },
  {
    title: 'Print Design 07',
    category: 'Printings',
    image: '/src/assets/CreativeDesign/Printings/Print7.jpg',
    description:
      'A print-ready design prepared for marketing, branding, and promotional use.'
  },
  {
    title: 'Social Media Creative 01',
    category: 'Social Media Creatives',
    image: '/src/assets/CreativeDesign/SocialMediaCreatives/SocialMediaCreatives1.jpg',
    description:
      'A scroll-friendly social media creative designed for engagement, reach, and brand awareness.'
  },
  {
    title: 'Social Media Creative 02',
    category: 'Social Media Creatives',
    image: '/src/assets/CreativeDesign/SocialMediaCreatives/SocialMediaCreatives2.png',
    description:
      'A campaign-ready social media design created for Instagram, Facebook, LinkedIn, and digital ads.'
  },
  {
    title: 'Social Media Creative 03',
    category: 'Social Media Creatives',
    image: '/src/assets/CreativeDesign/SocialMediaCreatives/SocialMediaCreatives3.jpg',
    description:
      'A clean social media post design made to communicate offers, services, and brand messages clearly.'
  },
  {
    title: 'Social Media Creative 04',
    category: 'Social Media Creatives',
    image: '/src/assets/CreativeDesign/SocialMediaCreatives/SocialMediaCreatives4.jpg',
    description:
      'A professional creative designed for consistent social media branding and better audience response.'
  },
  {
    title: 'Social Media Creative 05',
    category: 'Social Media Creatives',
    image: '/src/assets/CreativeDesign/SocialMediaCreatives/SocialMediaCreatives5.jpg',
    description:
      'A digital creative built for strong visual communication across social media platforms.'
  },
  {
    title: 'Website UI/UX Design 01',
    category: 'Website UI/UX',
    image: '/src/assets/CreativeDesign/WebsiteUIUX/WebsiteUIUX1.png',
    description:
      'A clean website UI/UX design created to improve visual flow, user experience, and brand presentation.'
  }
];

const faqs = [
  {
    question: 'What creative design services do you offer?',
    answer:
      'We offer logo design, brand identity design, social media creatives, brochure design, flyer design, packaging design, website UI/UX design, billboard design, and print design services.'
  },
  {
    question: 'Do you provide graphic design services in Chennai?',
    answer:
      'Yes. Sevenmen Media Solutions provides professional creative and graphic design services in Chennai for businesses, brands, startups, and organizations.'
  },
  {
    question: 'Can you design creatives for social media campaigns?',
    answer:
      'Yes. We create social media posts, ad creatives, banners, campaign designs, reels covers, stories, and platform-ready graphics.'
  },
  {
    question: 'Do you provide print-ready design files?',
    answer:
      'Yes. We can deliver print-ready files for brochures, flyers, posters, billboards, packaging, business cards, and other print materials.'
  },
  {
    question: 'Can you create a full brand identity design?',
    answer:
      'Yes. We can create logos, color systems, typography direction, brand visuals, and design guidelines to keep your brand consistent.'
  }
];

export function CreativeDesignPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [activeTab, setActiveTab] = useState(portfolioTabs[0]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedPortfolioIndex, setSelectedPortfolioIndex] = useState<number | null>(
    null
  );



  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const filteredPortfolio = portfolioItems.filter(
    (item) => item.category === activeTab
  );

  const selectedPortfolio =
    selectedPortfolioIndex !== null ? filteredPortfolio[selectedPortfolioIndex] : null;

  const closePortfolioPopup = () => {
    setSelectedPortfolioIndex(null);
  };

  const showPreviousPortfolio = () => {
    setSelectedPortfolioIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return currentIndex === 0
        ? filteredPortfolio.length - 1
        : currentIndex - 1;
    });
  };

  const showNextPortfolio = () => {
    setSelectedPortfolioIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return currentIndex === filteredPortfolio.length - 1
        ? 0
        : currentIndex + 1;
    });
  };

  useEffect(() => {
    if (selectedPortfolioIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePortfolioPopup();
      }

      if (event.key === 'ArrowLeft') {
        showPreviousPortfolio();
      }

      if (event.key === 'ArrowRight') {
        showNextPortfolio();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPortfolioIndex, filteredPortfolio.length]);

  if (serviceId && serviceId !== 'creative-design-services-chennai') {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
            Service Not Found
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-6">
            The service page you are looking for is not available.
          </p>

          <Link to="/services">
            <Button className="bg-[#0A2647] hover:bg-[#2C5F8D] text-white text-base md:text-lg font-semibold h-14 px-8">
              View All Services
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>Creative Design Services in Chennai | Sevenmen Media</title>
        <meta
          name="description"
          content="Sevenmen Media Solutions provides creative design services in Chennai, including logo design, brand identity, social media creatives, packaging design, billboard design, print design, and website UI/UX design."
        />
        <meta
          name="keywords"
          content="Creative Design Services in Chennai, Graphic Design Company Chennai, Logo Design Chennai, Brand Identity Design Chennai, Social Media Creative Design Chennai, Packaging Design Chennai, Billboard Design Chennai, Print Design Chennai, Website UI UX Design Chennai"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.sevenmensolutions.com/creative-design-services-chennai"
        />
      </Helmet>

      <main className="pt-20">
        <section className="relative py-28 md:py-32 bg-gradient-to-br from-[#0A2647] via-[#2C5F8D] to-[#6BA3D0] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1542744094-3a31f272c490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Creative design services in Chennai"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#6BA3D0]/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
                <Palette className="text-white" size={20} aria-hidden="true" />

                <span className="text-sm md:text-base font-semibold text-white">
                  Creative Design Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Creative Design Services in Chennai
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-4xl mb-8">
                Build a stronger brand presence with professional logos, brand
                identity, social media creatives, print designs, packaging,
                billboard designs, and website UI/UX layouts.
              </p>

              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#0A2647] hover:bg-gray-100 text-base md:text-lg font-semibold h-14 px-8"
                >
                  Start Your Design Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                    alt="Professional creative design team"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0052CC]/30 to-transparent" />
                </div>

                <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-8 lg:-right-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-2">
                      Design
                    </div>

                    <p className="text-base font-medium text-gray-700">
                      Built for Brand Growth
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-5">
                  Professional Creative Design Services for Better Brand
                  Visibility
                </h2>

                <div className="space-y-5 mb-8">
                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    Your visuals shape how people remember your business. Clean,
                    consistent, and professional designs help your brand look
                    trustworthy across digital and print platforms.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    At Sevenmen Media Solutions, we create logo designs, brand
                    identity systems, social media creatives, packaging designs,
                    billboard creatives, print materials, and website UI/UX
                    designs for businesses in Chennai and beyond.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    Every creative is planned based on your brand style, target
                    audience, marketing goal, and platform use.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {focusAreas.map((area, index) => {
                    const Icon = area.icon;

                    return (
                      <motion.div
                        key={area.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-white shadow-sm"
                      >
                        <div
                          className={`w-11 h-11 ${area.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className={area.color} size={22} />
                        </div>

                        <h4 className="text-base font-bold text-[#0A2647]">
                          {area.title}
                        </h4>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
                Our Creative Design Services
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
                Design services planned to make your brand look professional,
                consistent, and ready for digital and print marketing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {creativeServices.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="h-full"
                  >
                    <Card className="p-8 h-full bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                      <div
                        className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={service.color} size={28} />
                      </div>

                      <h3 className="text-xl font-bold text-[#0A2647] mb-3">
                        {service.title}
                      </h3>

                      <p className="text-base leading-relaxed text-gray-600">
                        {service.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-gradient-to-br from-[#0A2647] to-[#2C5F8D] text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 max-w-5xl mx-auto">
                Why Choose Sevenmen Media Solutions for Creative Design
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-white/85 max-w-4xl mx-auto">
                Good design is not only about looking attractive. It should make
                your message clear, support your campaign, and help your brand
                stay consistent across every platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="p-8 h-full bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/20 transition-all duration-300">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-5">
                        <Icon className="text-white" size={28} />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">
                        {benefit.title}
                      </h3>

                      <p className="text-base leading-relaxed text-white/80">
                        {benefit.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#F7FBFF] via-white to-[#E6F2FA] overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#6BA3D0]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0052CC]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14 md:mb-16"
            >
              <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-white/80 border border-[#2C5F8D]/15 shadow-sm mb-5">
                <span className="text-sm md:text-base font-semibold text-[#2C5F8D]">
                  How We Design
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
                Our Design Process
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
                We follow a clear creative process so your design work is
                planned well, reviewed properly, and delivered ready for use.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designProcess.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="relative overflow-hidden p-8 h-full bg-white/90 backdrop-blur-sm border border-[#2C5F8D]/10 hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-16 h-16 rounded-full bg-[#6BA3D0]/10 flex items-center justify-center group-hover:bg-[#2C5F8D] transition-colors duration-300">
                          <Icon
                            className="text-[#2C5F8D] group-hover:text-white transition-colors duration-300"
                            size={28}
                          />
                        </div>

                        <span className="text-4xl font-bold text-[#6BA3D0]/25">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#0A2647] mb-3">
                        {step.title}
                      </h3>

                      <p className="text-base leading-relaxed text-gray-600">
                        {step.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

          {/* Portfolio Section */}
          <section className="py-20 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
                  Our Creative Portfolio
                </h2>

                <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto">
                  Explore our creative design work across billboard designs, logos,
                  packaging, brand identity, print materials, social media creatives, and
                  website UI/UX designs.
                </p>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {portfolioTabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab);
                      setSelectedPortfolioIndex(null);
                    }}
                    className={`px-5 py-3 rounded-full text-sm md:text-base font-semibold transition-all ${
                      activeTab === tab
                        ? 'bg-[#2C5F8D] text-white shadow-md'
                        : 'bg-white text-[#2C5F8D] border border-[#2C5F8D]/20 hover:bg-[#E6F2FA]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPortfolio.map((item, index) => (
                  <motion.div
                    key={`${item.title}-${item.category}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className="h-full"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedPortfolioIndex(index)}
                      className="group block w-full h-full overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 text-left"
                      aria-label={`View ${item.category} design`}
                    >
                      <div className="relative h-[260px] md:h-[320px] lg:h-[360px] overflow-hidden bg-[#E6F2FA]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2647]/85 via-[#0A2647]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="absolute left-5 right-5 bottom-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white text-[#0A2647] text-sm font-semibold shadow-md">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>



          {/* Portfolio Popup */}
          {selectedPortfolio && (
            <div
              className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 py-6"
              onClick={closePortfolioPopup}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-6xl max-h-[90vh]"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closePortfolioPopup}
                  className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white text-[#0A2647] text-2xl font-bold flex items-center justify-center hover:bg-gray-100 transition-colors z-20"
                  aria-label="Close popup"
                >
                  ×
                </button>

                {filteredPortfolio.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousPortfolio}
                      className="absolute left-3 md:-left-16 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white text-[#0A2647] flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-20"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={28} />
                    </button>

                    <button
                      type="button"
                      onClick={showNextPortfolio}
                      className="absolute right-3 md:-right-16 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white text-[#0A2647] flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-20"
                      aria-label="Next image"
                    >
                      <ChevronRight size={28} />
                    </button>
                  </>
                )}

                <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
                  <div className="absolute top-5 left-5 z-10">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white text-[#0A2647] text-sm font-semibold shadow-md">
                      {selectedPortfolio.category}
                    </span>
                  </div>

                  <img
                    src={selectedPortfolio.image}
                    alt={selectedPortfolio.title}
                    className="w-full max-h-[85vh] object-contain bg-white"
                  />
                </div>
              </motion.div>
            </div>
          )}



        <section
          id="faq"
          className="py-20 md:py-24 bg-gradient-to-br from-white to-[#E6F2FA]/30"
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
                FAQ
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
                Clear answers to common questions about our creative design
                services.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden"
                >
                  <button
                    id={`faq-question-${index}`}
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#E6F2FA]/30 transition-colors"
                    aria-expanded={openFaqIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-base md:text-lg font-bold leading-relaxed text-[#0A2647] pr-4">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`text-[#2C5F8D] flex-shrink-0 transition-transform duration-300 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                      size={22}
                      aria-hidden="true"
                    />
                  </button>

                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={false}
                    animate={{
                      height: openFaqIndex === index ? 'auto' : 0,
                      opacity: openFaqIndex === index ? 1 : 0
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
          </div>
        </section>

        <NewCTA />
      </main>
    </>
  );
}

