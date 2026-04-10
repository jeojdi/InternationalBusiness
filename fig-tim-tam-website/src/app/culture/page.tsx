import HofstedeRadar from '@/components/interactive/HofstedeRadar'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cultural Insights - Fig Tim Tam',
  description: 'Understanding Australian consumer culture through Hofstede\'s cultural dimensions. Marketing implications and cultural analysis.',
}

export default function CulturePage() {
  return (
    <div className="pt-24 pb-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-fig-purple mb-4">
          Cultural Insights
        </h1>
        <p className="text-xl text-charcoal/70 mb-12">
          Understanding Australian consumer culture through Hofstede's dimensions
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Hofstede Cultural Dimensions</h2>
          <p className="text-lg text-charcoal/70 mb-6">
            Click on any dimension to see detailed marketing implications.
          </p>
          <ErrorBoundary>
            <HofstedeRadar />
          </ErrorBoundary>
        </section>

        <section className="bg-white rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Key Cultural Insights</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-fig-purple mb-2">Individualism (90) - Very High</h3>
              <p className="text-charcoal/70">
                Australians value personal choice and self-reliance. Marketing should focus on individual benefits and personal enjoyment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-sage-green mb-2">Indulgence (71) - High</h3>
              <p className="text-charcoal/70">
                Australians give themselves permission to indulge guilt-free. Use bright, joyful visuals and frame products as uncomplicated rewards.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-aussie-gold mb-2">Power Distance (36) - Low</h3>
              <p className="text-charcoal/70">
                Flat hierarchies mean approachable, casual communication works best. Use first names and avoid overly formal language.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
