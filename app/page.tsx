import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Pricing from "@/components/pricing"
import Contact from "@/components/contact"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  )
}
