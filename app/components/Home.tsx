'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import {
  FaFacebook,
  FaGoogle,
  FaSearchengin,
  FaLaptopCode,
  FaInstagram,
  FaMapMarkerAlt,
  FaChartLine,
  FaStore,
  FaGraduationCap,
  FaBuilding,
  FaHospital,
  FaRocket,
  FaPlane,
  FaTools,
  FaChevronDown,
  FaStar,
  FaShieldAlt,
  FaBullseye,
  FaClock,
  FaTrophy,
  FaSearch,
  FaLink,
  FaChartBar,
  FaBug,
  FaCode,
  FaGlobe,
} from 'react-icons/fa'
import { SiSemrush, SiGoogleanalytics, SiGooglesearchconsole } from 'react-icons/si'

import Section from './ui/Section'
import Button from './ui/Button'
import ScrollReveal from './ui/ScrollReveal'

const services = [
  {
    title: 'Meta Ads',
    description: 'Craft thumb-stopping creatives and precision-targeted Meta Ads to put your brand in front of the right audience.',
    icon: <FaFacebook className="w-7 h-7" />,
    iconColor: 'text-[#1877F2]',
    href: '/meta-ads-services',
    features: [
      'Laser-targeted audience segmentation',
      'A/B tested creatives',
      'Full-funnel Meta Ad strategies',
      'Conversion-optimized copy',
      'Retargeting campaigns',
    ],
  },
  {
    title: 'Google Ads Management',
    description: 'Get found when it matters most with keyword-optimized campaigns that reach ready-to-convert customers.',
    icon: <FaGoogle className="w-7 h-7" />,
    iconColor: 'text-[#EA4335]',
    href: '/google-ads-services',
    features: [
      'Search, Display & Video Ads',
      'Daily performance monitoring',
      'Location-based targeting',
      'Quality Score improvement',
      'Lower CPC, higher conversions',
    ],
  },
  {
    title: 'SEO Services',
    description: 'Stay on top of search results with robust SEO strategies that dominate Google rankings locally and nationally.',
    icon: <FaSearchengin className="w-7 h-7" />,
    iconColor: 'text-[#34A853]',
    href: '/seo-services',
    features: [
      'Keyword research',
      'Technical SEO audits',
      'Quality backlink outreach',
      'Local SEO optimization',
      'Content strategy',
    ],
  },
  {
    title: 'Website Development',
    description: 'We build fast, responsive, SEO-friendly websites that convert visitors into paying customers.',
    icon: <FaLaptopCode className="w-7 h-7" />,
    iconColor: 'text-[#6366F1]',
    href: '/website-development-services',
    features: [
      'WordPress & Next.js',
      'Mobile-first design',
      'UX/UI optimization',
      'Fast loading times',
      'Built-in SEO structure',
    ],
  },
  {
    title: 'Social Media Management',
    description: 'Build a brand that talks and listens with curated content and engagement strategies.',
    icon: <FaInstagram className="w-7 h-7" />,
    iconColor: 'text-[#E1306C]',
    href: '/social-media-management-services',
    features: [
      'Content calendars',
      'Creative design',
      'Reel strategy',
      'Analytics tracking',
      'Community management',
    ],
  },
  {
    title: 'GMB Optimization',
    description: 'Dominate local searches and be the top choice in Pune with our GMB optimization services.',
    icon: <FaMapMarkerAlt className="w-7 h-7" />,
    iconColor: 'text-[#FBBC05]',
    href: '/gmb-optimization-services',
    features: [
      'Complete GMB setup',
      'Weekly post scheduling',
      'Review generation',
      'Local pack ranking',
      'Performance tracking',
    ],
  },
]

const reviews = [
  { name: 'Rahul Sharma', service: 'SEO Services', text: 'Leadzoro\'s SEO services helped us achieve top rankings in our niche. Traffic increased by 3x within 4 months.', stars: 5 },
  { name: 'Priya Mehta', service: 'Google Ads', text: 'Amazing Google Ads results. Our leads doubled after working with Leadzoro. Highly transparent reporting and great ROI.', stars: 5 },
  { name: 'Amit Joshi', service: 'Meta Ads', text: 'Best digital marketing agency in Pune for performance marketing. Their Meta Ads campaigns are truly result-driven.', stars: 5 },
  { name: 'Sneha Kulkarni', service: 'Social Media', text: 'Professional team with excellent communication. Our Instagram engagement went up 5x in just 2 months.', stars: 5 },
  { name: 'Vikram Desai', service: 'Website Development', text: 'They built our website from scratch — fast, beautiful, and SEO-ready. Leadzoro delivered beyond expectations.', stars: 5 },
  { name: 'Neha Patil', service: 'GMB Optimization', text: 'We now appear in the local pack for all our target keywords. Leadzoro\'s GMB work is outstanding.', stars: 5 },
  { name: 'Rohan Verma', service: 'SEO Services', text: 'Highly transparent reporting and great ROI on campaigns. Our website traffic increased significantly.', stars: 5 },
  { name: 'Kavita Singh', service: 'Google Ads', text: 'Professional team that truly understands performance marketing. Our cost per lead dropped by 40%.', stars: 5 },
]

const ReviewCard = ({ name, service, text, stars }: typeof reviews[0]) => (
  <div className="min-w-[300px] max-w-[300px] bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mx-3 flex flex-col gap-3">
    <div className="flex gap-1">
      {Array.from({ length: stars }).map((_, i) => (
        <FaStar key={i} className="w-4 h-4 text-[#FACC15]" />
      ))}
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">"{text}"</p>
    <div className="mt-auto pt-2 border-t border-gray-100">
      <p className="font-semibold text-[#0B3C6F] text-sm">{name}</p>
      <p className="text-xs text-gray-400">{service}</p>
    </div>
  </div>
)

const SEOToolkit = () => {
  const tools = [
    {
      name: 'Ahrefs',
      desc: 'Backlink analysis & keyword research',
      icon: <FaLink className="w-8 h-8" />,
      color: 'text-[#FF7043]',
    },
    {
      name: 'SEMrush',
      desc: 'Competitor research & rank tracking',
      icon: <SiSemrush className="w-8 h-8" />,
      color: 'text-[#FF6B35]',
    },
    {
      name: 'Google Analytics',
      desc: 'Traffic insights & user behaviour',
      icon: <SiGoogleanalytics className="w-8 h-8" />,
      color: 'text-[#E37400]',
    },
    {
      name: 'Search Console',
      desc: 'Index coverage & search performance',
      icon: <SiGooglesearchconsole className="w-8 h-8" />,
      color: 'text-[#4285F4]',
    },
    {
      name: 'Moz Pro',
      desc: 'Domain authority & on-page SEO',
      icon: <FaGlobe className="w-8 h-8" />,
      color: 'text-[#00A4E0]',
    },
    {
      name: 'Screaming Frog',
      desc: 'Technical SEO crawl & audit',
      icon: <FaBug className="w-8 h-8" />,
      color: 'text-[#6DBE45]',
    },
    {
      name: 'Ubersuggest',
      desc: 'Keyword ideas & content planning',
      icon: <FaSearch className="w-8 h-8" />,
      color: 'text-[#8B5CF6]',
    },
    {
      name: 'Majestic SEO',
      desc: 'Trust flow & citation flow metrics',
      icon: <FaLink className="w-8 h-8" />,
      color: 'text-[#DC2626]',
    },
    {
      name: 'GTmetrix',
      desc: 'Page speed & Core Web Vitals',
      icon: <FaChartBar className="w-8 h-8" />,
      color: 'text-[#0B3C6F]',
    },
    {
      name: 'Schema Markup',
      desc: 'Structured data for rich snippets',
      icon: <FaCode className="w-8 h-8" />,
      color: 'text-[#10B981]',
    },
  ]

  return (
    <section className="py-20 bg-[#0B3C6F]">
      <div className="container">
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Our SEO <span className="text-[#FACC15]">Toolkit</span>
          </h2>
          <p className="mt-4 text-white/70">
            We use industry-leading tools to deliver data-driven SEO results that actually move the needle.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {tools.map((tool) => (
            <ScrollReveal key={tool.name}>
              <div className="yellow-card flex flex-col items-center text-center gap-3 bg-white">
                <div className={tool.color}>{tool.icon}</div>
                <p className="font-bold text-[#0B3C6F] text-sm">{tool.name}</p>
                <p className="text-xs text-gray-500 leading-snug">{tool.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const ReviewsSection = () => (
  <section className="py-20 bg-white overflow-hidden">
    <div className="container">
      <ScrollReveal className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C6F] tracking-tight">
          What Our Clients Say
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Real results. Real businesses. Real growth with Leadzoro.
        </p>
      </ScrollReveal>
    </div>

    <div className="relative">
      <div className="flex animate-marquee gap-0">
        {[...reviews, ...reviews].map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>
    </div>
  </section>
)

const WhyChooseUs = () => {
  const features = [
    { label: '100% Transparent Reporting', icon: FaShieldAlt },
    { label: 'ROI-Driven Strategies', icon: FaBullseye },
    { label: 'Pune-Based Team with India-Wide Reach', icon: FaMapMarkerAlt },
    { label: 'Fast Turnaround. Proven Results.', icon: FaClock },
    { label: 'Trusted by 50+ Brands & Growing', icon: FaTrophy },
  ]

  return (
    <section className="py-20 bg-[#0B3C6F]">
      <div className="container">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Why Choose <span className="text-[#FACC15]">Leadzoro?</span>
          </h2>
          <p className="mt-4 text-white/70">
            Because we don't just run campaigns — we drive business outcomes.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-left">
            {features.map(({ label, icon: Icon }) => (
              <div key={label} className="yellow-card flex items-start gap-3">
                <Icon className="w-5 h-5 text-[#0B3C6F] flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 font-medium text-sm leading-snug">{label}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-white/70 font-medium">
            We're not another agency — we're your growth partner.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

const ProcessSection = () => {
  const steps = [
    { step: '01', title: 'Discover', description: 'We understand your goals, target audience, and market competitors.' },
    { step: '02', title: 'Strategize', description: 'We build a tailored plan across platforms that aligns with your budget and business model.' },
    { step: '03', title: 'Execute', description: 'Our experts launch your campaign with precision, creativity, and analytics-ready tracking.' },
    { step: '04', title: 'Optimize', description: 'We tweak, refine, and split-test continuously for peak performance.' },
    { step: '05', title: 'Scale', description: 'Once we hit ROI sweet spots, we scale your campaigns for long-term growth.' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C6F] tracking-tight">
            Our 5-Step Process to <span className="text-[#FACC15]">Digital Domination</span>
          </h2>
          <p className="mt-4 text-gray-500">
            A proven methodology that transforms your digital presence into a revenue-generating machine.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {steps.map((s) => (
            <ScrollReveal key={s.step}>
              <div className="yellow-card text-center h-full">
                <h2 className="text-4xl font-bold text-[#FACC15]">{s.step}</h2>
                <h3 className="mt-3 font-semibold text-[#0B3C6F] text-lg">{s.title}</h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{s.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const WhoWeWorkWith = () => {
  const industries = [
    { icon: FaStore, title: 'E-commerce Brands', color: 'text-[#F97316]' },
    { icon: FaGraduationCap, title: 'Educational Institutes', color: 'text-[#6366F1]' },
    { icon: FaBuilding, title: 'Real Estate Agencies', color: 'text-[#0B3C6F]' },
    { icon: FaHospital, title: 'Healthcare & Clinics', color: 'text-[#EF4444]' },
    { icon: FaRocket, title: 'SaaS Startups', color: 'text-[#8B5CF6]' },
    { icon: FaPlane, title: 'Travel & Hospitality', color: 'text-[#06B6D4]' },
    { icon: FaTools, title: 'Local Service Providers', color: 'text-[#10B981]' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C6F] tracking-tight">Who We Work With</h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
          {industries.map(({ icon: Icon, title, color }) => (
            <ScrollReveal key={title}>
              <div className="yellow-card flex flex-col items-center text-center gap-3">
                <Icon className={`w-8 h-8 ${color}`} />
                <p className="font-medium text-gray-800 text-sm">{title}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10">
          <p className="text-gray-500 text-center max-w-3xl mx-auto">
            Whether you're in Pune or anywhere across India, Leadzoro adapts digital growth strategies that fit your industry like a glove.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => (
  <div className={`rounded-xl overflow-hidden border transition-all duration-300 ${isOpen ? 'border-[#0B3C6F] shadow-md' : 'border-gray-200'}`}>
    <button
      onClick={onToggle}
      className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-200"
    >
      <span className="font-semibold text-gray-900">{question}</span>
      <FaChevronDown className={`text-[#0B3C6F] flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>

    {isOpen && (
      <div className="px-6 pb-5 text-gray-600 bg-gray-50 border-t border-gray-100">
        <p className="pt-4">{answer}</p>
      </div>
    )}
  </div>
)

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    { question: 'What makes Leadzoro the best marketing agency in Pune?', answer: 'We combine proven strategies, deep local market understanding, and creative execution that brings in real business, not just traffic.' },
    { question: 'Do you offer packages for startups or small businesses?', answer: 'Absolutely! We have flexible and affordable plans suited for every stage — from bootstrap to blitz-scale.' },
    { question: 'How quickly can I see results?', answer: 'Depending on your service type, Meta & Google Ads deliver visible results within days, while SEO may take 3–6 months for full traction.' },
    { question: 'Can I track the performance of my campaigns?', answer: 'Yes. We provide live dashboards, weekly reporting, and strategy calls to keep you in the loop at all times.' },
    { question: 'What if I only need one service like SEO or Google Ads?', answer: 'No worries — we offer standalone services as well as bundled growth plans.' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C6F] tracking-tight">Frequently Asked Questions</h2>
        </ScrollReveal>

        <div className="mt-10 max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const CTASection = () => (
  <section className="py-20" style={{ background: 'linear-gradient(135deg, #0B3C6F, #1E5AA8)' }}>
    <div className="container">
      <ScrollReveal className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white tracking-tight">
          Ready to Grow Your Business?
        </h2>
        <p className="mt-4 text-white/75">
          Let's scale your brand with proven strategies.
        </p>
        <Button
          className="mt-8 bg-[#FACC15] text-[#0B3C6F] hover:bg-yellow-300 rounded-full font-bold shadow-lg px-8 py-3 transition-all duration-200 hover:scale-105"
          href="/contact-us"
        >
          Get Free Consultation
        </Button>
      </ScrollReveal>
    </div>
  </section>
)

const Services = () => (
  <div>
    {/* Services Section — white bg */}
    <section className="py-20 bg-white">
      <div className="container">
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3C6F] tracking-tight">
            Our Core <span className="text-[#FACC15]">Services</span>
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            We don't just market — we create measurable success with our comprehensive digital solutions.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ScrollReveal key={service.title}>
              <div className="yellow-card h-full flex flex-col">
                <div className={`text-3xl mb-4 ${service.iconColor}`}>
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-[#0B3C6F]">{service.title}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{service.description}</p>

                <ul className="mt-4 space-y-2 flex-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#FACC15] font-bold mt-0.5">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={service.href} className="text-[#0B3C6F] mt-5 inline-block font-semibold hover:text-[#FACC15] transition-colors">
                  Learn More →
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <WhyChooseUs />
    <ProcessSection />
    <WhoWeWorkWith />
    <SEOToolkit />
    <ReviewsSection />
    <FAQSection />
    <CTASection />
  </div>
)

export default Services
