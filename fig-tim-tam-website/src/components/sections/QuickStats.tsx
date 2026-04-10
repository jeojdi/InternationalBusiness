'use client'
import { motion } from 'framer-motion'

const stats = [
  { value: '30M', label: 'Population' },
  { value: '$1.83T', label: 'GDP (AUD)' },
  { value: '71%', label: 'Indulgence Score' },
  { value: '18%', label: 'Market Growth' },
]

export default function QuickStats() {
  return (
    <section className="py-16 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-cream text-center mb-12"
        >
          Australia at a Glance
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-aussie-gold mb-2">
                {stat.value}
              </p>
              <p className="text-cream text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
