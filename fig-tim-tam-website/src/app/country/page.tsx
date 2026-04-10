import Map3D from '@/components/interactive/Map3D'
import ClimateViz from '@/components/interactive/ClimateViz'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Country Analysis - Fig Tim Tam',
  description: 'Explore the regions of Australia where native figs grow for our Fig Tim Tam biscuits. Interactive 3D map and climate analysis.',
}

export default function CountryPage() {
  return (
    <div className="pt-24 pb-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-fig-purple mb-4">
          Country Analysis
        </h1>
        <p className="text-xl text-charcoal/70 mb-12">
          Explore the regions of Australia where native figs grow
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Geography - Native Fig Regions</h2>
          <p className="text-lg text-charcoal/70 mb-6">
            Click on the highlighted regions to learn about different native fig varieties used in our Fig Tim Tam.
          </p>
          <ErrorBoundary
            fallback={
              <div className="w-full h-[600px] rounded-lg bg-cream flex items-center justify-center border-2 border-fig-purple/20">
                <p className="text-charcoal">Interactive map unavailable</p>
              </div>
            }
          >
            <Map3D />
          </ErrorBoundary>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Climate & Geography</h2>
          <p className="text-lg text-charcoal/70 mb-6">
            Australia's diverse climate zones each support different fig varieties.
          </p>
          <ErrorBoundary>
            <ClimateViz />
          </ErrorBoundary>
        </section>

        <section className="mb-16 bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Key Demographics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-5xl font-bold text-fig-purple mb-2">30M</p>
              <p className="text-gray-600">Population</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-sage-green mb-2">$1.83T</p>
              <p className="text-gray-600">GDP (AUD)</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-aussie-gold mb-2">66.7%</p>
              <p className="text-gray-600">Employment Rate</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
