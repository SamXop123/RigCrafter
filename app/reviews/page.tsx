import React from 'react';
import ReviewForm from '@/components/ReviewForm';
import ReviewList from '@/components/ReviewList';

export const metadata = {
  title: 'Customer Reviews | RigCrafter',
  description: 'Read and submit reviews for our products and services',
};

export default function ReviewsPage() {
  return (
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
  );
}