'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const basePath = process.env.NODE_ENV === 'production' ? '/InternationalBusiness' : ''
  const links = [
    { href: `${basePath}/`, label: 'Home' },
    { href: `${basePath}/country`, label: 'Country' },
    { href: `${basePath}/culture`, label: 'Culture' },
    { href: `${basePath}/product`, label: 'Product' },
    { href: `${basePath}/marketing`, label: 'Marketing' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`${basePath}/`} className="text-lg font-bold text-charcoal tracking-tight">
            Fig Tim Tam
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`${basePath}/business-report.pdf`}
              download="Fig-Tim-Tam-Business-Report.pdf"
              className="bg-fig-purple text-white px-5 py-2 rounded-sm text-sm font-medium hover:bg-fig-purple/90 transition-colors"
            >
              Download Report
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-charcoal hover:text-fig-purple transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
