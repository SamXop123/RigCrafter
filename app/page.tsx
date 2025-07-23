import RigBuilder from "@/components/rig-builder"
import HeroSection from "@/components/hero-section"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black"></div>
      <div className="relative z-10">
        <main className="container mx-auto px-4">
          <HeroSection />
          <RigBuilder />
        </main>
        <Footer />
      </div>
    </div>
  )
}

