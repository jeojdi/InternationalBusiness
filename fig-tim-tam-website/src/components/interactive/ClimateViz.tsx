'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

type ZoneName = 'Tropical North' | 'Temperate Coast' | 'Arid Interior'

const climateZones: Record<ZoneName, { temp: number; rainfall: number; icon: string; description: string }> = {
  'Tropical North': {
    temp: 31,
    rainfall: 1500,
    icon: '🌴',
    description: 'Hot and humid year-round with distinct wet and dry seasons. Perfect for tropical fig varieties.',
  },
  'Temperate Coast': {
    temp: 22,
    rainfall: 800,
    icon: '🌊',
    description: 'Mild climate ideal for fig cultivation and major population centers. Where most Australians live.',
  },
  'Arid Interior': {
    temp: 28,
    rainfall: 250,
    icon: '🏜️',
    description: 'Hot days, cool nights with minimal rainfall. Home to hardy desert fig varieties.',
  },
}

export default function ClimateViz() {
  const [selectedZone, setSelectedZone] = useState<ZoneName>('Temperate Coast')

  const zone = climateZones[selectedZone]

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-charcoal">Climate Zone Selector</h3>
        <div className="space-y-4">
          {(Object.keys(climateZones) as ZoneName[]).map((zoneName) => (
            <button
              key={zoneName}
              onClick={() => setSelectedZone(zoneName)}
              className={`w-full p-4 rounded-lg text-left transition-all ${
                selectedZone === zoneName
                  ? 'bg-fig-purple text-white shadow-lg scale-105'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <span className="text-3xl mr-3">{climateZones[zoneName].icon}</span>
              <span className="font-semibold">{zoneName}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-cream to-white p-8 rounded-lg shadow-lg">
        <motion.div
          key={selectedZone}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-fig-purple mb-6 flex items-center">
            <span className="text-5xl mr-3">{zone.icon}</span>
            {selectedZone}
          </h3>

          {/* Temperature Gauge */}
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-2 font-semibold">Average Temperature</p>
            <div className="flex items-end gap-4">
              <span className="text-6xl font-bold text-aussie-gold">
                {zone.temp}°C
              </span>
              <div className="flex-1 mb-4">
                <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-400 via-yellow-400 to-red-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${(zone.temp / 45) * 100}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Rainfall Meter */}
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-2 font-semibold">Annual Rainfall</p>
            <div className="flex items-end gap-4">
              <span className="text-6xl font-bold text-sage-green">
                {zone.rainfall}<span className="text-3xl">mm</span>
              </span>
              <div className="flex-1 mb-4">
                <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-yellow-200 via-blue-400 to-blue-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${(zone.rainfall / 2000) * 100}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-aussie-gold pl-4">
            {zone.description}
          </p>
        </motion.div>
      </div>
    </div>
  )
}
