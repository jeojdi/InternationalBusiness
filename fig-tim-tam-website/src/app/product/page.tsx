'use client'
import { motion } from 'framer-motion'

export default function ProductPage() {
  const ingredients = [
    { name: 'Native Fig Paste', source: 'Indigenous Australian figs', icon: '🌳' },
    { name: 'Premium Chocolate', source: 'High-quality cocoa', icon: '🍫' },
    { name: 'Australian Wheat', source: 'Locally sourced', icon: '🌾' },
    { name: 'Dairy', source: 'Australian dairy farms', icon: '🥛' },
  ]

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-fig-purple to-sage-green">
        <div className="text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-cream text-2xl md:text-3xl mb-6"
          >
            Made from the land.
            <br />
            Loved across the nation.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-4xl md:text-6xl font-bold mb-6"
          >
            THE FIG TIM TAM
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-cream text-lg md:text-xl max-w-2xl mx-auto"
          >
            For 65,000 years, Indigenous Australians have known the secret of native figs.
            Now, we're bringing that heritage to Australia's most iconic biscuit.
          </motion.p>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Premium Ingredients</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={ingredient.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center shadow-lg"
              >
                <div className="text-6xl mb-4">{ingredient.icon}</div>
                <h3 className="text-xl font-bold text-fig-purple mb-2">{ingredient.name}</h3>
                <p className="text-gray-600">{ingredient.source}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-8">Pricing Strategy</h2>
          <div className="bg-cream rounded-lg p-8">
            <div className="mb-6">
              <p className="text-gray-600 mb-2">Standard Tim Tam</p>
              <p className="text-3xl font-bold text-charcoal">AUD $3.50 - $4.00</p>
            </div>
            <div className="border-t-2 border-aussie-gold pt-6">
              <p className="text-gray-600 mb-2">Fig Tim Tam</p>
              <p className="text-5xl font-bold text-fig-purple mb-4">AUD $4.50 - $5.00</p>
              <p className="text-lg text-sage-green font-semibold">Premium value. Accessible pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Distribution Network</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-fig-purple mb-4">Primary Channels</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🏪</span>
                  <span className="text-lg">Woolworths - Major supermarket chain</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🏪</span>
                  <span className="text-lg">Coles - Major supermarket chain</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-sage-green mb-4">Secondary Channels</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-2xl mr-3">⛽</span>
                  <span className="text-lg">Servos (Petrol stations)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🛒</span>
                  <span className="text-lg">Online platforms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
