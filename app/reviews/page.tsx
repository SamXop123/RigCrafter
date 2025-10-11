import React from 'react';
import ReviewForm from '@/components/ReviewForm';
import ReviewList from '@/components/ReviewList';
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"

export const metadata = {
  title: 'Customer Reviews | RigCrafter',
  description: 'Read and submit reviews for our products and services',
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black/30 to-black"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      <div className="relative z-10">
        <Header />
        <main>
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-white">Customer Reviews</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ReviewList />
              </div>
              
              <div className="lg:col-span-1 bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6 text-white">Share Your Experience</h2>
                <ReviewForm />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}