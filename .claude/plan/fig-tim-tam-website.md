# Fig Tim Tam Marketing Website - Implementation Plan

**Project**: Interactive marketing website for Fig Tim Tam product
**Tech Stack**: Next.js 14, React 18, Tailwind CSS, Framer Motion, Mapbox GL JS, Recharts
**Deployment**: GitHub Pages
**Timeline**: 6 phases

---

## Phase 1: Project Initialization & Setup (Day 1)

### 1.1 Initialize Next.js Project
```bash
npx create-next-app@latest fig-tim-tam-website --typescript --tailwind --app
cd fig-tim-tam-website
```

**Configuration selections**:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- `src/` directory: Yes
- App Router: Yes
- Import alias: Yes (@/*)

### 1.2 Install Dependencies
```bash
npm install framer-motion mapbox-gl recharts
npm install -D @types/mapbox-gl gh-pages
```

### 1.3 Configure Next.js for GitHub Pages

**File**: `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/InternationalBusiness',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

**File**: `package.json` (add scripts)
```json
{
  "homepage": "https://james.github.io/InternationalBusiness",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d out"
  }
}
```

### 1.4 Set Up Tailwind Configuration

**File**: `tailwind.config.ts`
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fig-purple': '#5D3A6B',
        'sage-green': '#7C9885',
        'aussie-gold': '#D4AF37',
        'earth-brown': '#8B6F47',
        'cream': '#F5F3EF',
        'charcoal': '#2C2C2C',
        'soft-pink': '#D4A5A5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['SF Pro Display', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

### 1.5 Create Folder Structure
```bash
mkdir -p src/components/{common,sections,interactive}
mkdir -p src/lib/{data,utils}
mkdir -p public/{images/{hero,geography,product,marketing},icons}
```

**Final structure**:
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              (Home)
│   ├── country/page.tsx
│   ├── culture/page.tsx
│   ├── product/page.tsx
│   └── marketing/page.tsx
├── components/
│   ├── common/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ProductTeaser.tsx
│   │   └── QuickStats.tsx
│   └── interactive/
│       ├── Map3D.tsx
│       ├── RadarChart.tsx
│       ├── Timeline.tsx
│       ├── ClimateViz.tsx
│       └── DataSlider.tsx
├── lib/
│   ├── data.ts               (All static data)
│   └── utils.ts
└── styles/
    └── globals.css
```

### 1.6 Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial Next.js setup with Tailwind and dependencies"
git branch -M main
git remote add origin https://github.com/james/InternationalBusiness.git
git push -u origin main
```

---

## Phase 2: Core Layout & Navigation (Day 2)

### 2.1 Create Root Layout

**File**: `src/app/layout.tsx`
```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/common/Navigation'
import Footer from '@/components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fig Tim Tam | Indigenous Australian Heritage Meets Iconic Biscuit',
  description: 'Discover the Fig Tim Tam - celebrating 65,000 years of Indigenous heritage with native figs and premium ingredients.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

### 2.2 Build Navigation Component

**File**: `src/components/common/Navigation.tsx`
```typescript
'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/country', label: 'Country' },
    { href: '/culture', label: 'Culture' },
    { href: '/product', label: 'Product' },
    { href: '/marketing', label: 'Marketing' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-fig-purple">
            Fig Tim Tam
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-charcoal hover:text-fig-purple transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-charcoal"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
```

### 2.3 Create Page Stubs

Create placeholder pages for all routes:
- `src/app/country/page.tsx`
- `src/app/culture/page.tsx`
- `src/app/product/page.tsx`
- `src/app/marketing/page.tsx`

Each with basic structure:
```typescript
export default function CountryPage() {
  return (
    <div className="pt-16">
      <h1>Country Analysis</h1>
    </div>
  )
}
```

---

## Phase 3: Homepage Implementation (Days 3-4)

### 3.1 Hero Section

**File**: `src/components/sections/Hero.tsx`
```typescript
'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-fig-purple to-sage-green">
      <div className="text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-cream text-2xl md:text-4xl mb-4"
        >
          Introducing the
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white text-6xl md:text-9xl font-bold mb-6"
        >
          Fig Tim Tam
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-cream text-lg md:text-2xl max-w-3xl mx-auto mb-8"
        >
          The first Tim Tam to celebrate Indigenous Australian heritage.
          Native figs meet iconic Australian tradition.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-aussie-gold text-charcoal px-8 py-4 rounded-full text-lg font-semibold hover:bg-earth-brown hover:text-white transition-colors"
        >
          Discover the Story ↓
        </motion.button>
      </div>
    </section>
  )
}
```

### 3.2 Product Teaser Section

**File**: `src/components/sections/ProductTeaser.tsx`
```typescript
'use client'
import { motion } from 'framer-motion'

const features = [
  { title: 'AUTHENTIC', stat: '65,000 years', desc: 'of heritage' },
  { title: 'PREMIUM', stat: 'AUD $4.50', desc: 'per pack' },
  { title: 'SUSTAINABLE', stat: '100%', desc: 'recyclable' },
]

export default function ProductTeaser() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-fig-purple font-bold text-xl mb-4">
                {feature.title}
              </h3>
              <p className="text-5xl font-bold text-charcoal mb-2">
                {feature.stat}
              </p>
              <p className="text-sage-green">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### 3.3 Quick Stats Section

**File**: `src/components/sections/QuickStats.tsx`
```typescript
'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  { value: 30, suffix: 'M', label: 'Population' },
  { value: 1.83, suffix: 'T', label: 'GDP (AUD)', prefix: '$' },
  { value: 71, suffix: '%', label: 'Indulgence Score' },
  { value: 18, suffix: '%', label: 'Market Growth' },
]

export default function QuickStats() {
  return (
    <section className="py-16 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-aussie-gold mb-2">
                {stat.prefix}{stat.value}{stat.suffix}
              </p>
              <p className="text-cream text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### 3.4 Assemble Homepage

**File**: `src/app/page.tsx`
```typescript
import Hero from '@/components/sections/Hero'
import ProductTeaser from '@/components/sections/ProductTeaser'
import QuickStats from '@/components/sections/QuickStats'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductTeaser />
      <QuickStats />
    </>
  )
}
```

---

## Phase 4: Interactive Map Component (Days 5-6)

### 4.1 Set Up Mapbox Environment

**File**: `.env.local`
```
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
```

### 4.2 Build 3D Map Component

**File**: `src/components/interactive/Map3D.tsx`
```typescript
'use client'
import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const figLocations = [
  {
    name: 'Kakadu National Park, NT',
    coords: [132.5, -12.6],
    variety: 'Cluster Fig (Ficus racemosa)',
    description: 'Traditional food source for 40,000+ years. Sweet, honey-like flavor.',
  },
  {
    name: 'Daintree, Queensland',
    coords: [145.3, -16.2],
    variety: 'Strangler Fig (Ficus watkinsiana)',
    description: 'Tropical rainforest species with unique growth pattern.',
  },
  {
    name: 'Byron Bay, NSW',
    coords: [153.6, -28.6],
    variety: 'Moreton Bay Fig (Ficus macrophylla)',
    description: 'Iconic coastal fig with massive canopy.',
  },
  {
    name: 'Grampians, Victoria',
    coords: [142.5, -37.2],
    variety: 'Rock Fig (Ficus platypoda)',
    description: 'Hardy fig species adapted to temperate climates.',
  },
  {
    name: 'Kimberley, WA',
    coords: [124.3, -17.5],
    variety: 'Desert Fig (Ficus brachypoda)',
    description: 'Drought-resistant species of the arid interior.',
  },
]

export default function Map3D() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<typeof figLocations[0] | null>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [133.7751, -25.2744], // Center of Australia
      zoom: 4,
      pitch: 60,
      bearing: 0,
    })

    map.current.on('load', () => {
      // Enable 3D terrain
      map.current!.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14,
      })
      map.current!.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })

      // Add markers for fig locations
      figLocations.forEach((location) => {
        const el = document.createElement('div')
        el.className = 'marker'
        el.style.backgroundImage = 'url(/icons/fig-pin.svg)'
        el.style.width = '40px'
        el.style.height = '40px'
        el.style.cursor = 'pointer'

        new mapboxgl.Marker(el)
          .setLngLat(location.coords as [number, number])
          .addTo(map.current!)

        el.addEventListener('click', () => {
          setSelectedLocation(location)
        })
      })
    })

    return () => map.current?.remove()
  }, [])

  return (
    <div className="relative w-full h-[600px]">
      <div ref={mapContainer} className="w-full h-full rounded-lg" />

      {selectedLocation && (
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-xl p-6 max-w-sm">
          <button
            onClick={() => setSelectedLocation(null)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          <h3 className="text-xl font-bold text-fig-purple mb-2">
            📍 {selectedLocation.name}
          </h3>
          <p className="text-lg font-semibold mb-2">{selectedLocation.variety}</p>
          <p className="text-gray-600">{selectedLocation.description}</p>
        </div>
      )}
    </div>
  )
}
```

### 4.3 Create Country Analysis Page

**File**: `src/app/country/page.tsx`
```typescript
import Map3D from '@/components/interactive/Map3D'

export default function CountryPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-fig-purple mb-4">
          Country Analysis
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Explore the regions of Australia where native figs grow
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Geography - Native Fig Regions</h2>
          <Map3D />
        </section>
      </div>
    </div>
  )
}
```

---

## Phase 5: Data Visualizations (Days 7-8)

### 5.1 Hofstede Radar Chart

**File**: `src/components/interactive/RadarChart.tsx`
```typescript
'use client'
import { useState } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

const hofstedeData = [
  { dimension: 'Power Distance', score: 36, shortName: 'PDI' },
  { dimension: 'Individualism', score: 90, shortName: 'IDV' },
  { dimension: 'Masculinity', score: 61, shortName: 'MAS' },
  { dimension: 'Uncertainty Avoidance', score: 51, shortName: 'UAI' },
  { dimension: 'Long-Term Orientation', score: 21, shortName: 'LTO' },
  { dimension: 'Indulgence', score: 71, shortName: 'IND' },
]

const dimensionDetails = {
  'Power Distance': {
    meaning: 'Australians prefer equality and accessible leadership. Low power distance means hierarchies are flat and bosses are approachable.',
    marketing: ['Use first names in communications', 'Avoid hierarchical messaging', 'Emphasize accessibility'],
  },
  'Individualism': {
    meaning: 'Extremely high individualism - Australians value personal choice, self-reliance, and individual rewards.',
    marketing: ['Focus on personal benefits', 'Use "you" messaging', 'Highlight individual enjoyment'],
  },
  // ... add other dimensions
}

export default function HofstedeRadar() {
  const [selectedDimension, setSelectedDimension] = useState<string | null>(null)

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={hofstedeData}>
            <PolarGrid stroke="#7C9885" />
            <PolarAngleAxis dataKey="shortName" />
            <PolarRadiusAxis angle={90} domain={[0, 100]} />
            <Radar
              name="Australia"
              dataKey="score"
              stroke="#5D3A6B"
              fill="#5D3A6B"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-2 mt-4">
          {hofstedeData.map((item) => (
            <button
              key={item.dimension}
              onClick={() => setSelectedDimension(item.dimension)}
              className="p-2 bg-cream rounded hover:bg-fig-purple hover:text-white transition-colors text-sm"
            >
              {item.shortName}: {item.score}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        {selectedDimension ? (
          <>
            <h3 className="text-2xl font-bold text-fig-purple mb-4">
              {selectedDimension}
            </h3>
            <p className="text-gray-700 mb-4">
              {dimensionDetails[selectedDimension as keyof typeof dimensionDetails]?.meaning}
            </p>
            <h4 className="font-bold mb-2">Marketing Implications:</h4>
            <ul className="list-disc list-inside space-y-1">
              {dimensionDetails[selectedDimension as keyof typeof dimensionDetails]?.marketing.map((tip, i) => (
                <li key={i} className="text-gray-600">{tip}</li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-gray-500 text-center py-12">
            Click on a dimension to see details
          </p>
        )}
      </div>
    </div>
  )
}
```

### 5.2 Climate Visualization

**File**: `src/components/interactive/ClimateViz.tsx`
```typescript
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const climateZones = {
  'Tropical North': {
    temp: 31,
    rainfall: 1500,
    icon: '🌴',
    description: 'Hot and humid year-round with distinct wet and dry seasons',
  },
  'Temperate Coast': {
    temp: 22,
    rainfall: 800,
    icon: '🌊',
    description: 'Mild climate ideal for fig cultivation and major population centers',
  },
  'Arid Interior': {
    temp: 28,
    rainfall: 250,
    icon: '🏜️',
    description: 'Hot days, cool nights with minimal rainfall',
  },
}

export default function ClimateViz() {
  const [selectedZone, setSelectedZone] = useState<keyof typeof climateZones>('Temperate Coast')

  const zone = climateZones[selectedZone]

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Climate Zone Selector</h3>
        <div className="space-y-4">
          {(Object.keys(climateZones) as Array<keyof typeof climateZones>).map((zoneName) => (
            <button
              key={zoneName}
              onClick={() => setSelectedZone(zoneName)}
              className={`w-full p-4 rounded-lg text-left transition-colors ${
                selectedZone === zoneName
                  ? 'bg-fig-purple text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <span className="text-2xl mr-3">{climateZones[zoneName].icon}</span>
              {zoneName}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-cream p-8 rounded-lg">
        <motion.div
          key={selectedZone}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-fig-purple mb-6">
            {selectedZone}
          </h3>

          {/* Temperature Gauge */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">Average Temperature</p>
            <div className="flex items-end">
              <span className="text-6xl font-bold text-aussie-gold">
                {zone.temp}°C
              </span>
              <div className="ml-4 flex-1">
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-400 to-red-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${(zone.temp / 40) * 100}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Rainfall Meter */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">Annual Rainfall</p>
            <div className="flex items-end">
              <span className="text-6xl font-bold text-sage-green">
                {zone.rainfall}mm
              </span>
              <div className="ml-4 flex-1">
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-yellow-300 to-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${(zone.rainfall / 2000) * 100}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-700">{zone.description}</p>
        </motion.div>
      </div>
    </div>
  )
}
```

### 5.3 Timeline Component

**File**: `src/components/interactive/Timeline.tsx`
```typescript
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const marketingSteps = [
  {
    step: 1,
    title: 'First Contact',
    tips: [
      'Use first names (low power distance)',
      'Be approachable, not hierarchical',
      'Come prepared with pricing/margins',
    ],
    dos: ['Be punctual', 'Use "G\'day" greeting', 'Focus on individual benefits'],
    donts: ['Overpromise', 'Use complex jargon', 'Arrive unprepared'],
  },
  {
    step: 2,
    title: 'Build Relationship',
    tips: [
      'Emphasize transparency',
      'Share personal stories',
      'Show genuine interest',
    ],
    dos: ['Be authentic', 'Use casual language', 'Build trust through consistency'],
    donts: ['Be overly formal', 'Rush the process', 'Hide information'],
  },
  // ... add more steps
]

export default function Timeline() {
  const [selectedStep, setSelectedStep] = useState(1)

  const currentStep = marketingSteps.find(s => s.step === selectedStep)

  return (
    <div>
      {/* Horizontal Timeline */}
      <div className="flex justify-between mb-12 relative">
        <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 -z-10" />
        {marketingSteps.map((step) => (
          <button
            key={step.step}
            onClick={() => setSelectedStep(step.step)}
            className="flex flex-col items-center"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                selectedStep === step.step
                  ? 'bg-fig-purple text-white'
                  : 'bg-gray-300 text-gray-600'
              }`}
            >
              {step.step}
            </div>
            <span className="text-sm font-semibold">{step.title}</span>
          </button>
        ))}
      </div>

      {/* Detail View */}
      {currentStep && (
        <motion.div
          key={selectedStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold text-fig-purple mb-6">
            STEP {currentStep.step}: {currentStep.title}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-green-600">DO:</h4>
              <ul className="space-y-2">
                {currentStep.dos.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3 text-red-600">DON'T:</h4>
              <ul className="space-y-2">
                {currentStep.donts.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
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
```

---

## Phase 6: Content Population & Polish (Days 9-10)

### 6.1 Create Data File

**File**: `src/lib/data.ts`
```typescript
export const productData = {
  name: 'Fig Tim Tam',
  price: { min: 4.5, max: 5.0, currency: 'AUD' },
  description: 'The first Tim Tam to celebrate Indigenous Australian heritage',
  ingredients: [
    { name: 'Native Fig Paste', source: 'Indigenous Australian figs' },
    { name: 'Premium Chocolate', source: 'High-quality cocoa' },
    { name: 'Australian Wheat', source: 'Locally sourced' },
    { name: 'Dairy', source: 'Australian dairy farms' },
  ],
}

export const marketData = {
  population: 30000000,
  gdp: 1.83, // Trillion AUD
  employmentRate: 66.7,
  marketGrowth: 18,
}

export const hofstedeData = {
  powerDistance: 36,
  individualism: 90,
  masculinity: 61,
  uncertaintyAvoidance: 51,
  longTermOrientation: 21,
  indulgence: 71,
}
```

### 6.2 Add Global Styles

**File**: `src/app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-cream text-charcoal;
  }

  h1 {
    @apply text-5xl md:text-7xl font-bold;
  }

  h2 {
    @apply text-3xl md:text-5xl font-bold;
  }

  h3 {
    @apply text-2xl md:text-3xl font-semibold;
  }
}

@layer components {
  .section {
    @apply py-16 md:py-24;
  }

  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .btn-primary {
    @apply bg-aussie-gold text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-earth-brown hover:text-white transition-colors;
  }

  .btn-secondary {
    @apply bg-fig-purple text-white px-6 py-3 rounded-full font-semibold hover:bg-sage-green transition-colors;
  }

  .card {
    @apply bg-white rounded-lg shadow-lg p-6;
  }
}

/* Mapbox marker custom styles */
.marker {
  background-size: cover;
  cursor: pointer;
  transition: transform 0.2s;
}

.marker:hover {
  transform: scale(1.1);
}

/* Animations for reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 6.3 Add PDF Download Feature

**File**: `src/components/sections/DownloadCTA.tsx`
```typescript
export default function DownloadCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-fig-purple to-sage-green">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          📄 Download the Complete Analysis
        </h2>
        <p className="text-cream text-xl mb-8">
          Get the full 18-page business report including detailed research,
          citations, and strategic recommendations.
        </p>
        <a
          href="/Business report - Adyan&James-2.pdf"
          download
          className="inline-block bg-aussie-gold text-charcoal px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition-colors"
        >
          Download PDF (18 pages, 2.5MB)
        </a>
      </div>
    </section>
  )
}
```

### 6.4 Optimize Images

Create a script to optimize images:
```bash
# Install image optimization tool
npm install -D sharp

# Create optimization script
# scripts/optimize-images.js
```

---

## Phase 7: Testing & Deployment (Days 11-12)

### 7.1 Test Checklist

**Cross-Browser Testing**:
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)

**Mobile Testing**:
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Responsive breakpoints (320px, 768px, 1024px, 1440px)

**Functionality Testing**:
- [ ] All navigation links work
- [ ] 3D map loads and is interactive
- [ ] Radar chart displays correctly
- [ ] Climate visualization animates
- [ ] Timeline navigation works
- [ ] PDF download works
- [ ] All animations trigger on scroll
- [ ] Mobile menu works

**Performance Testing**:
- [ ] Run Lighthouse audit (target 90+)
- [ ] Check bundle size (target < 500KB gzipped)
- [ ] Test page load time (target < 2s)

**Accessibility Testing**:
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast meets WCAG AA
- [ ] Alt text on all images
- [ ] ARIA labels on interactive elements

### 7.2 Build & Deploy

```bash
# Test build locally
npm run build
npx serve out

# Deploy to GitHub Pages
npm run deploy
```

### 7.3 Post-Deployment Verification

- [ ] Visit live site at https://james.github.io/InternationalBusiness
- [ ] Test all features on live site
- [ ] Verify PDF download works
- [ ] Check mobile responsiveness on real devices
- [ ] Confirm analytics are tracking (if configured)

---

## Additional Implementation Notes

### Asset Sources

**Free Stock Photos**:
- Unsplash: https://unsplash.com/s/photos/australia
- Pexels: https://www.pexels.com/search/australian-outback/

**Icons**:
- Heroicons: https://heroicons.com/
- Lucide Icons: https://lucide.dev/

**Mapbox Setup**:
1. Create free account at https://www.mapbox.com/
2. Get access token
3. Add to `.env.local`

### Performance Optimization

**Image Optimization**:
```typescript
// Use Next.js Image component with placeholders
import Image from 'next/image'

<Image
  src="/images/hero/tim-tam.jpg"
  alt="Fig Tim Tam"
  width={800}
  height={600}
  placeholder="blur"
/>
```

**Code Splitting**:
```typescript
// Lazy load heavy components
import dynamic from 'next/dynamic'

const Map3D = dynamic(() => import('@/components/interactive/Map3D'), {
  ssr: false,
  loading: () => <p>Loading map...</p>
})
```

### SEO Optimization

**File**: `src/app/layout.tsx` (metadata)
```typescript
export const metadata: Metadata = {
  title: 'Fig Tim Tam | Indigenous Australian Heritage',
  description: 'Discover the Fig Tim Tam - celebrating 65,000 years of Indigenous heritage',
  keywords: ['Tim Tam', 'Australian snacks', 'Indigenous food', 'native figs'],
  openGraph: {
    title: 'Fig Tim Tam',
    description: 'Indigenous Australian heritage meets iconic tradition',
    images: ['/images/og-image.jpg'],
  },
}
```

---

## Troubleshooting Common Issues

### Mapbox Not Loading
- Verify `NEXT_PUBLIC_MAPBOX_TOKEN` is set correctly
- Check browser console for errors
- Ensure `mapbox-gl` CSS is imported

### GitHub Pages 404 Error
- Verify `basePath` in `next.config.js` matches repo name
- Ensure `output: 'export'` is set
- Check GitHub Pages settings point to correct branch

### Animations Not Working
- Verify Framer Motion is installed
- Check for `prefers-reduced-motion` setting
- Ensure viewport detection is working

### Build Fails
- Clear `.next` folder: `rm -rf .next`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run build`

---

## Timeline Summary

| Phase | Duration | Key Deliverables |
|-------|----------|------------------|
| 1. Setup | 1 day | Next.js project, dependencies, config |
| 2. Layout | 1 day | Navigation, routing, page structure |
| 3. Homepage | 2 days | Hero, stats, product teaser |
| 4. Map | 2 days | 3D interactive map with fig locations |
| 5. Visualizations | 2 days | Radar chart, climate viz, timeline |
| 6. Content | 2 days | All pages populated, polish |
| 7. Testing | 2 days | QA, optimization, deployment |
| **Total** | **12 days** | **Live production website** |

---

## Success Criteria

**Technical**:
- ✅ Static site deployed on GitHub Pages
- ✅ Lighthouse score 90+ on all metrics
- ✅ Mobile responsive (tested on real devices)
- ✅ Cross-browser compatible

**Content**:
- ✅ All information from PDF report integrated
- ✅ 5 complete pages (Home, Country, Culture, Product, Marketing)
- ✅ PDF downloadable
- ✅ All images optimized and loaded

**Interactivity**:
- ✅ 3D terrain map with clickable regions
- ✅ Hofstede radar chart with explanations
- ✅ Climate visualization with animations
- ✅ Marketing timeline with detailed steps
- ✅ Smooth animations throughout

**Design**:
- ✅ Apple-inspired minimalist aesthetic
- ✅ Fig color palette consistently applied
- ✅ Professional typography and spacing
- ✅ No generic "AI effects"

---

## Next Steps After This Plan

Once this plan is approved:

1. **Confirm deadline**: When does the project need to be complete?
2. **Gather Mapbox token**: Sign up for free Mapbox account
3. **Start Phase 1**: Initialize Next.js project
4. **Daily check-ins**: Review progress and adjust timeline if needed
5. **Iterate**: Refine features based on feedback

**Ready to start building?** I can help you execute this plan step-by-step, starting with Phase 1 project initialization.
