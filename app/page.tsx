import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import Features from '@/components/Features'
import Process from '@/components/Process'
import Benefits from '@/components/Benefits'
import Pricing from '@/components/Pricing'
import Upload from '@/components/Upload'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Testimonials />
      <Features />
      <Process />
      <Benefits />
      <Pricing />
      <Upload />
      <FAQ />
      <Footer />
    </main>
  )
}
