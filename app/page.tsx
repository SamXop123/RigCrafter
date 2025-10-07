import RigBuilder from "@/components/rig-builder"
import HeroSection from "@/components/hero-section"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"

export default function Home() {
  return (
    // CHANGE 1: Simplify the wrapper background to a solid dark color (or leave it to the body/layout)
    // Removed: "absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black/30 to-black"
    <div className="min-h-screen text-white relative bg-black"> 
      {/* Removed the absolute gradient overlay div */}
      <div className="relative z-10">
        <Header/>
        <main className="container mx-auto px-4">
          <HeroSection />
          <RigBuilder />
        </main>
        <Footer />
      </div>
    </div>
  )
}