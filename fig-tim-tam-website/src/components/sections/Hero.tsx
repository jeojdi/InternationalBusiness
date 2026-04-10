'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const basePath = process.env.NODE_ENV === 'production' ? '/InternationalBusiness' : ''

  return (
    <section className="min-h-screen flex items-center bg-cream relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-fig-purple/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="text-sage-green uppercase tracking-wider text-sm font-semibold">
                New Product Launch
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6 leading-tight">
              Fig Tim Tam
            </h1>

            <p className="text-xl text-charcoal/70 mb-8 leading-relaxed max-w-xl">
              The first Tim Tam to celebrate Indigenous Australian heritage.
              Native figs from five distinct regions, wrapped in Australia's most iconic biscuit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href={`${basePath}/product`}
                className="inline-block bg-fig-purple text-white px-8 py-4 rounded-sm text-base font-medium hover:bg-fig-purple/90 transition-all"
              >
                View Full Analysis
              </Link>
              <Link
                href={`${basePath}/country`}
                className="inline-block border-2 border-charcoal text-charcoal px-8 py-4 rounded-sm text-base font-medium hover:bg-charcoal hover:text-white transition-all"
              >
                Explore Regions
              </Link>
            </div>

            <div className="flex gap-8 text-sm">
              <div>
                <p className="text-charcoal/50 mb-1">Heritage</p>
                <p className="font-semibold text-charcoal">65,000 years</p>
              </div>
              <div>
                <p className="text-charcoal/50 mb-1">Regions</p>
                <p className="font-semibold text-charcoal">5 native sources</p>
              </div>
              <div>
                <p className="text-charcoal/50 mb-1">Price</p>
                <p className="font-semibold text-charcoal">AUD $4.50</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-fig-purple/10 to-sage-green/10 rounded-sm flex items-center justify-center border-2 border-fig-purple/20">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 bg-aussie-gold/20 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-aussie-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-charcoal/40 text-sm">Product Photography Placeholder</p>
                <p className="text-charcoal/30 text-xs mt-2">Fig Tim Tam package with native Australian backdrop</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
