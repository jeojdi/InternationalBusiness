'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface MarketingStep {
  step: number
  title: string
  tips: string[]
  dos: string[]
  donts: string[]
}

const marketingSteps: MarketingStep[] = [
  {
    step: 1,
    title: 'First Contact',
    tips: [
      'Use first names (low power distance)',
      'Be approachable, not hierarchical',
      'Come prepared with pricing/margins',
      'Show transparency about product sourcing',
    ],
    dos: ['Be punctual', 'Use "G\'day" greeting', 'Focus on individual benefits', 'Be authentic'],
    donts: ['Overpromise', 'Use complex jargon', 'Arrive unprepared', 'Be overly formal'],
  },
  {
    step: 2,
    title: 'Build Relationship',
    tips: [
      'Emphasize transparency',
      'Share personal stories about the product',
      'Show genuine interest in their business',
      'Build trust through consistency',
    ],
    dos: ['Be authentic', 'Use casual language', 'Follow through on commitments', 'Listen actively'],
    donts: ['Be overly formal', 'Rush the process', 'Hide information', 'Ignore cultural values'],
  },
  {
    step: 3,
    title: 'Position Product',
    tips: [
      'Highlight Indigenous heritage respectfully',
      'Focus on quality and premium positioning',
      'Show competitive pricing advantage',
      'Emphasize sustainability',
    ],
    dos: ['Show product samples', 'Provide taste tests', 'Share origin story', 'Demonstrate value'],
    donts: ['Oversell', 'Compare negatively to competitors', 'Ignore price sensitivity', 'Make false claims'],
  },
  {
    step: 4,
    title: 'Launch Campaign',
    tips: [
      'Use bright, joyful visuals (high indulgence)',
      'Feature outdoor lifestyle imagery',
      'Frame as uncomplicated reward',
      'Leverage social media heavily',
    ],
    dos: ['Target urban/coastal markets first', 'Use influencer partnerships', 'Create shareable content', 'Monitor feedback'],
    donts: ['Over-complicate messaging', 'Use guilt-inducing tactics', 'Ignore digital channels', 'Neglect mobile users'],
  },
  {
    step: 5,
    title: 'Distribution',
    tips: [
      'Partner with Woolworths and Coles (primary)',
      'Expand to servos (secondary)',
      'Ensure consistent stock',
      'Monitor inventory closely',
    ],
    dos: ['Build retailer relationships', 'Offer promotional support', 'Ensure product freshness', 'Track sales data'],
    donts: ['Overstock', 'Underestimate demand', 'Ignore regional preferences', 'Neglect smaller retailers'],
  },
  {
    step: 6,
    title: 'Follow-Up',
    tips: [
      'Maintain transparency',
      'Provide reliable customer service',
      'Collect and act on feedback',
      'Build long-term relationships',
    ],
    dos: ['Respond quickly', 'Honor commitments', 'Show appreciation', 'Adapt based on feedback'],
    donts: ['Disappear after sale', 'Ignore complaints', 'Become complacent', 'Stop innovating'],
  },
]

export default function Timeline() {
  const [selectedStep, setSelectedStep] = useState(1)

  const currentStep = marketingSteps.find(s => s.step === selectedStep)

  return (
    <div>
      {/* Horizontal Timeline */}
      <div className="mb-12 overflow-x-auto pb-4">
        <div className="flex justify-between min-w-max md:min-w-0 relative px-4">
          <div className="absolute top-6 left-8 right-8 h-1 bg-gray-300 -z-10" />
          {marketingSteps.map((step) => (
            <button
              key={step.step}
              onClick={() => setSelectedStep(step.step)}
              className="flex flex-col items-center mx-2"
              aria-label={`View step ${step.step}: ${step.title}`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-2 transition-all font-bold text-lg ${
                  selectedStep === step.step
                    ? 'bg-fig-purple text-white shadow-lg scale-110'
                    : selectedStep > step.step
                    ? 'bg-sage-green text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {step.step}
              </motion.div>
              <span className={`text-sm font-semibold whitespace-nowrap ${
                selectedStep === step.step ? 'text-fig-purple' : 'text-gray-600'
              }`}>
                {step.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Detail View */}
      {currentStep && (
        <motion.div
          key={selectedStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-3xl font-bold text-fig-purple mb-6">
            STEP {currentStep.step}: {currentStep.title}
          </h3>

          <div className="mb-8">
            <h4 className="font-bold text-lg mb-3 text-charcoal">Key Actions:</h4>
            <ul className="space-y-2">
              {currentStep.tips.map((tip, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <span className="text-aussie-gold mr-2 text-xl">→</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-sm border-l-4 border-green-600">
              <h4 className="font-bold text-lg mb-3 text-green-700">
                DO:
              </h4>
              <ul className="space-y-2">
                {currentStep.dos.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <span className="text-green-600 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-sm border-l-4 border-red-600">
              <h4 className="font-bold text-lg mb-3 text-red-700">
                DON'T:
              </h4>
              <ul className="space-y-2">
                {currentStep.donts.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <span className="text-red-600 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
