import Timeline from '@/components/interactive/Timeline'
import DownloadCTA from '@/components/sections/DownloadCTA'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Strategy - Fig Tim Tam',
  description: 'A step-by-step guide to launching Fig Tim Tam in Australia. Marketing timeline, language guide, and cultural considerations.',
}

export default function MarketingPage() {
  return (
    <div className="pt-24 pb-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-fig-purple mb-4">
          Marketing Strategy
        </h1>
        <p className="text-xl text-charcoal/70 mb-12">
          A step-by-step guide to launching Fig Tim Tam in Australia
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Marketing Timeline</h2>
          <p className="text-lg text-charcoal/70 mb-8">
            Click each step to see detailed tactics and cultural considerations
          </p>
          <ErrorBoundary>
            <Timeline />
          </ErrorBoundary>
        </section>

        <section className="mb-16 bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Language Guide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-aussie-gold pl-4">
              <p className="font-bold text-lg mb-1">"G'day!"</p>
              <p className="text-gray-600">Universal Australian greeting - use it!</p>
            </div>
            <div className="border-l-4 border-sage-green pl-4">
              <p className="font-bold text-lg mb-1">"Arvo"</p>
              <p className="text-gray-600">Afternoon - casual, friendly</p>
            </div>
            <div className="border-l-4 border-fig-purple pl-4">
              <p className="font-bold text-lg mb-1">"Servo"</p>
              <p className="text-gray-600">Gas station/petrol station - distribution point</p>
            </div>
            <div className="border-l-4 border-earth-brown pl-4">
              <p className="font-bold text-lg mb-1">"Biscuit" not "Cookie"</p>
              <p className="text-gray-600">IMPORTANT: Tim Tams are biscuits in Australia!</p>
            </div>
          </div>
        </section>

        <DownloadCTA />
      </div>
    </div>
  )
}
