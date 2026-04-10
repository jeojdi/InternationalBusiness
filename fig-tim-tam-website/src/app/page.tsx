import Hero from '@/components/sections/Hero'
import ProductTeaser from '@/components/sections/ProductTeaser'
import QuickStats from '@/components/sections/QuickStats'
import DownloadCTA from '@/components/sections/DownloadCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="min-h-screen">
        <ProductTeaser />
        <QuickStats />
        <DownloadCTA />
      </div>
    </>
  )
}
