'use client'

export default function DownloadCTA() {
  const basePath = process.env.NODE_ENV === 'production' ? '/InternationalBusiness' : ''

  return (
    <section className="py-20 bg-fig-purple relative overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-sage-green/20" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Download the Complete Analysis
        </h2>
        <p className="text-cream text-xl mb-8">
          Get the full 18-page business report including detailed research,
          citations, and strategic recommendations.
        </p>
        <a
          href={`${basePath}/business-report.pdf`}
          download="Fig-Tim-Tam-Business-Report.pdf"
          className="inline-block bg-white text-fig-purple px-8 py-4 rounded-md text-lg font-semibold hover:bg-cream transition-colors shadow-lg"
          aria-label="Download 18-page Fig Tim Tam business report PDF"
        >
          Download PDF (18 pages)
        </a>
      </div>
    </section>
  )
}
