'use client'
import { motion } from 'framer-motion'

export default function ProductTeaser() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric grid inspired by Pipe landing page */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: Large feature with image placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-cream border border-charcoal/10 rounded-sm overflow-hidden h-full flex flex-col">
              <div className="aspect-[4/3] bg-gradient-to-br from-fig-purple/10 to-aussie-gold/10 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-charcoal/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="absolute bottom-4 right-4 text-xs text-charcoal/30 bg-white/80 px-3 py-1 rounded-sm">
                  Tim Tam package + native figs
                </p>
              </div>
              <div className="p-8 flex-1">
                <h2 className="text-3xl font-bold text-charcoal mb-4">
                  65,000 years of heritage
                </h2>
                <p className="text-charcoal/60 leading-relaxed">
                  Native Australian figs have been a vital food source for Indigenous communities for over 65,000 years.
                  Our Fig Tim Tam celebrates this rich heritage by sourcing from five distinct regions across Australia.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Stacked smaller cards */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-fig-purple text-white p-8 rounded-sm"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl font-bold">AUD $4.50</span>
              </div>
              <p className="text-white/80 text-sm uppercase tracking-wider">Premium Pricing</p>
              <p className="mt-4 text-white/70">
                Competitive with other premium Tim Tam varieties, positioned below Messina collaboration at $5.00
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-sage-green text-white p-8 rounded-sm flex-1"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl font-bold">100%</span>
              </div>
              <p className="text-white/90 text-sm uppercase tracking-wider">Sustainable</p>
              <p className="mt-4 text-white/80">
                Recyclable packaging and ethically sourced native figs supporting Indigenous communities
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
