'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import ScrollProgressBar from './ScrollProgressBar'
import { usePathname } from 'next/navigation'

const ServiceDropdown = ({ isOpen }: { isOpen: boolean }) => {
  const services = [
    { name: 'Meta Ads', href: '/meta-ads-services' },
    { name: 'Google Ads', href: '/google-ads-services' },
    { name: 'SEO', href: '/seo-services' },
    { name: 'Website Development', href: '/website-development-services' },
    { name: 'Social Media Management', href: '/social-media-management-services' },
    { name: 'Google My Business', href: '/gmb-optimization-services' }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 rounded-xl bg-white border border-gray-200 shadow-lg"
        >
          <div className="py-2">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                >
                  {service.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Blogs', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact-us' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <ScrollProgressBar />
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHome && !isScrolled
            ? 'bg-transparent border-transparent'
            : 'bg-white shadow-sm border-b border-gray-200'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link href="/" className={`text-2xl font-semibold ${isHome && !isScrolled ? 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]' : 'text-gray-900'}`}>
                Leadzoro
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                    onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`${isHome && !isScrolled ? 'text-white/90 hover:text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.75)]' : 'text-gray-700 hover:text-gray-900'} px-3 py-2 text-sm font-medium`}
                      onClick={(e) => item.hasDropdown && e.preventDefault()}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && <ServiceDropdown isOpen={isServicesOpen} />}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`${isHome && !isScrolled ? 'text-white hover:text-white/90' : 'text-gray-700 hover:text-gray-900'} p-2`}
              >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-gray-900 block px-3 py-4 text-base font-medium border-b border-gray-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && isMobileMenuOpen && (
                      <div className="pl-6 py-2 space-y-2 bg-gray-50">
                        <Link href="/meta-ads-services" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                          Meta Ads
                        </Link>
                        <Link href="/google-ads-services" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                          Google Ads
                        </Link>
                        <Link href="/seo-services" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                          SEO
                        </Link>
                        <Link href="/website-development-services" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                          Website Development
                        </Link>
                        <Link href="/social-media-management-services" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                          Social Media Management
                        </Link>
                        <Link href="/gmb-optimization-services" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                          Google My Business
                        </Link>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Navbar Spacer */}
      <div className={isHome ? 'h-0' : 'h-20'} />
    </>
  )
}

export default Navbar