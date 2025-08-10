import ReviewSection from "@/app/components/review-section";
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"

export default function ReviewsPage() {
  return (
    <div className="min-h-screen text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black/30 to-black"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      <div className="relative z-10">
        <Header />
        <main>
          <ReviewSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
