'use client'

import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { 
  FaFacebook, 
  FaGoogle, 
  FaSearchengin, 
  FaLaptopCode, 
  FaInstagram, 
  FaMapMarkerAlt,
  FaCheckCircle,
  FaLightbulb,
  FaChartLine,
  FaStore,
  FaGraduationCap,
  FaBuilding,
  FaHospital,
  FaRocket,
  FaPlane,
  FaTools,
  FaChevronDown
} from 'react-icons/fa'

import Section from './ui/Section'
import Card from './ui/Card'
import Button from './ui/Button'
import ScrollReveal from './ui/ScrollReveal'

// Import images
import DiscoverImg from '../../public/assets/Discover.png'
import StratergizeImg from '../../public/assets/Stratergize.png'
import ExecuteImg from '../../public/assets/Execute.png'
import OptimizeImg from '../../public/assets/Optimize.png'
import ScaleImg from '../../public/assets/Scale.png'

const services = [
  {
    title: 'Meta Ads',
    description: 'Craft thumb-stopping creatives and precision-targeted Meta Ads to put your brand in front of the right audience.',
    icon: <FaFacebook className="w-8 h-8" />,
    href: '/meta-ads-services',
    features: [
      'Laser-targeted audience segmentation',
      'A/B tested creatives',
      'Full-funnel Meta Ad strategies',
      'Conversion-optimized copy',
      'Retargeting campaigns'
    ]
  },
  {
    title: 'Google Ads Management',
    description: 'Get found when it matters most with keyword-optimized campaigns that reach ready-to-convert customers.',
    icon: <FaGoogle className="w-8 h-8" />,
    href: '/google-ads-services',
    features: [
      'Search, Display & Video Ads',
      'Daily performance monitoring',
      'Location-based targeting',
      'Quality Score improvement',
      'Lower CPC, higher conversions'
    ]
  },
  {
    title: 'SEO Services',
    description: 'Stay on top of search results with robust SEO strategies that dominate Google rankings locally and nationally.',
    icon: <FaSearchengin className="w-8 h-8" />,
    href: '/seo-services',
    features: [
      'Keyword research',
      'Technical SEO audits',
      'Quality backlink outreach',
      'Local SEO optimization',
      'Content strategy'
    ]
  },
  {
    title: 'Website Development',
    description: 'We build fast, responsive, SEO-friendly websites that convert visitors into paying customers.',
    icon: <FaLaptopCode className="w-8 h-8" />,
    href: '/website-development-services',
    features: [
      'WordPress & Next.js',
      'Mobile-first design',
      'UX/UI optimization',
      'Fast loading times',
      'Built-in SEO structure'
    ]
  },
  {
    title: 'Social Media Management',
    description: 'Build a brand that talks and listens with curated content and engagement strategies.',
    icon: <FaInstagram className="w-8 h-8" />,
    href: '/social-media-management-services',
    features: [
      'Content calendars',
      'Creative design',
      'Reel strategy',
      'Analytics tracking',
      'Community management'
    ]
  },
  {
    title: 'GMB Optimization',
    description: 'Dominate local searches and be the top choice in Pune with our GMB optimization services.',
    icon: <FaMapMarkerAlt className="w-8 h-8" />,
    href: '/gmb-optimization-services',
    features: [
      'Complete GMB setup',
      'Weekly post scheduling',
      'Review generation',
      'Local pack ranking',
      'Performance tracking'
    ]
  }
]

const serviceIconGradients = [
  'from-blue-600 to-cyan-500',
  'from-purple-600 to-pink-500',
  'from-green-600 to-emerald-500',
  'from-indigo-600 to-blue-500',
  'from-rose-600 to-orange-500',
  'from-teal-600 to-cyan-500',
]

const WhyChooseUs = () => {
  const features = [
    '100% Transparent Reporting',
    'ROI-Driven Strategies',
    'Pune-Based Team with India-Wide Reach',
    'Fast Turnaround. Proven Results.',
    'Trusted by 50+ Brands & Growing'
  ];

  return (
    <Section className="mt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white mx-auto">
            <FaLightbulb className="w-6 h-6" />
          </div>
          
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-gray-900">Why Choose Leadzoro?</h2>

          <p className="mt-4 text-xl text-gray-700">
            Because we don't just run campaigns — we drive business outcomes.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {features.map((feature) => (
              <Card key={feature} className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 flex-shrink-0 w-5 h-5" />
                <span className="text-gray-900 font-medium">{feature}</span>
              </Card>
            ))}
          </div>

          <p className="mt-10 text-xl text-gray-700 font-medium">
            We're not another agency — we're your growth partner.
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
};

const ProcessStep = ({ 
  step, 
  title, 
  description, 
  image, 
  index,
  icon: Icon,
  color
}: { 
  step: string | number;
  title: string;
  description: string;
  image: StaticImageData;
  index: number;
  icon: React.ElementType;
  color: string;
}) => {  
  return (
    <Card variant="glass" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Step {step}</div>
            <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          </div>
        </div>
        <p className="mt-4 text-gray-700 leading-relaxed">{description}</p>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white aspect-[4/3]">
        <Image
          src={image}
          alt={`Step ${step}: ${title}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority={index === 0}
        />
      </div>
    </Card>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      step: 1,
      title: "Discover",
      description: "We understand your goals, target audience, and market competitors.",
      image: DiscoverImg,
      icon: FaLightbulb,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      title: "Strategize",
      description: "We build a tailored plan across platforms that aligns with your budget and business model.",
      image: StratergizeImg,
      icon: FaTools,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: 3,
      title: "Execute",
      description: "Our experts launch your campaign with precision, creativity, and analytics-ready tracking.",
      image: ExecuteImg,
      icon: FaRocket,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 4,
      title: "Optimize",
      description: "We tweak, refine, and split-test continuously for peak performance.",
      image: OptimizeImg,
      icon: FaChartLine,
      color: "from-orange-500 to-red-500"
    },
    {
      step: 5,
      title: "Scale",
      description: "Once we hit ROI sweet spots, we scale your campaigns for long-term growth.",
      image: ScaleImg,
      icon: FaPlane,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <Section className="mt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <ScrollReveal className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white mx-auto">
            <FaChartLine className="w-6 h-6" />
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-gray-900">
            Our 5-Step Process to Digital Domination
          </h2>
          <p className="mt-4 text-xl text-gray-700 leading-relaxed">
            A proven methodology that transforms your digital presence into a <span className="font-semibold text-gray-800">revenue-generating machine</span>.
          </p>
        </ScrollReveal>

        <div className="mt-12 space-y-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.step}>
              <div className="bg-white rounded-2xl p-3 shadow-sm">
                <ProcessStep {...step} index={index} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

const IndustryCard = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <Card className="flex flex-col items-center text-center gap-3">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
  </Card>
)

const WhoWeWorkWith = () => {
  const industries = [
    { icon: FaStore, title: "E-commerce Brands" },
    { icon: FaGraduationCap, title: "Educational Institutes" },
    { icon: FaBuilding, title: "Real Estate Agencies" },
    { icon: FaHospital, title: "Healthcare & Clinics" },
    { icon: FaRocket, title: "SaaS Startups" },
    { icon: FaPlane, title: "Travel & Hospitality" },
    { icon: FaTools, title: "Local Service Providers" }
  ];

  return (
    <Section className="mt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <ScrollReveal className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Who We Work With</h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <ScrollReveal key={industry.title}>
              <IndustryCard icon={industry.icon} title={industry.title} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10">
          <p className="text-xl text-gray-700 font-medium text-center max-w-3xl mx-auto">
            Whether you're in Pune or anywhere across India, Leadzoro adapts digital growth strategies that fit your industry like a glove.
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-all duration-300"
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <div
          className={`text-primary-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          <FaChevronDown />
        </div>
      </button>
      
      {isOpen && (
        <div className="overflow-hidden">
          <div className="p-6 text-gray-700 font-medium bg-gray-50">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Leadzoro the best marketing agency in Pune?",
      answer: "We combine proven strategies, deep local market understanding, and creative execution that brings in real business, not just traffic."
    },
    {
      question: "Do you offer packages for startups or small businesses?",
      answer: "Absolutely! We have flexible and affordable plans suited for every stage — from bootstrap to blitz-scale."
    },
    {
      question: "How quickly can I see results?",
      answer: "Depending on your service type, Meta & Google Ads deliver visible results within days, while SEO may take 3–6 months for full traction."
    },
    {
      question: "Can I track the performance of my campaigns?",
      answer: "Yes. We provide live dashboards, weekly reporting, and strategy calls to keep you in the loop at all times."
    },
    {
      question: "What if I only need one service like SEO or Google Ads?",
      answer: "No worries — we offer standalone services as well as bundled growth plans."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="mt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <ScrollReveal className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        </ScrollReveal>

        <div className="mt-10 max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index}>
              <div className="bg-white rounded-2xl p-2 shadow-sm">
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index} 
                  onToggle={() => toggleFAQ(index)}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

const CTASection = () => {

  return (
    <Section className="mt-20 bg-blue-900">
      <div className="container">
        <ScrollReveal className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">
              Ready to Grow Your Business?
            </h2>

            <p className="mt-4 text-white/80">
              Let's scale your brand with proven strategies.
            </p>

            <Button
              className="mt-6 bg-yellow-400 text-black hover:bg-yellow-300 rounded-full font-semibold shadow-lg"
              href="/contact-us"
            >
              Get Free Consultation
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};

const Services = () => {
  return (
    <div>
      <Section className="bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <ScrollReveal className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white mx-auto">
              <FaRocket className="w-6 h-6" />
            </div>
            <h2 className="mt-6 text-5xl md:text-6xl font-semibold text-gray-900">
              Our Core Services
            </h2>
            <p className="mt-4 text-xl text-gray-700 leading-relaxed">
              We don't just market — we create <span className="font-semibold text-gray-800">measurable success</span> with our comprehensive digital solutions.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.title}>
                <Link href={service.href} className="block">
                  <Card className="h-full">
                    <div className="flex items-start gap-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${serviceIconGradients[index % serviceIconGradients.length]} text-white flex-shrink-0 shadow-lg`}>
                        <div className="w-6 h-6">{service.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                        <p className="mt-2 text-gray-700 leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    <ul className="mt-6 space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 font-medium">
                          <FaCheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-blue-600 font-semibold">Learn More</span>
                      <span className="text-blue-600 font-semibold">→</span>
                    </div>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      <WhyChooseUs />
      <ProcessSection />
      <WhoWeWorkWith />
      <FAQSection />
      <CTASection />
    </div>
  )
}

export default Services