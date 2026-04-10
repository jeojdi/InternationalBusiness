export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <address className="text-center not-italic">
          <p className="text-lg font-bold text-aussie-gold mb-2">Fig Tim Tam</p>
          <p className="text-sm mb-4">
            Celebrating 65,000 years of Indigenous Australian heritage
          </p>
          <p className="text-xs text-gray-400">
            A school project by <span className="font-medium">James Yang</span> &{' '}
            <span className="font-medium">Adyan Zunnurain</span>
            <br />
            International Business - Ms. Locicero
            <br />
            <span aria-label="Copyright 2026">&copy; 2026</span>
          </p>
        </address>
      </div>
    </footer>
  )
}
