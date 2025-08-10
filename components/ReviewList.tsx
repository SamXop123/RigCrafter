'use client';

import React, { useEffect, useState } from 'react';

// Star SVG component with your app's purple theme
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill={filled ? "currentColor" : "none"} 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={filled ? "text-purple-500" : "text-zinc-700"}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Sample review data - in a real app, these would come from an API or database
const SAMPLE_REVIEWS = [
  {
    id: '1',
    name: 'John Doe',
    date: '2025-07-15',
    rating: 5,
    comment: 'Excellent service and products. Highly recommended for all your rig needs!'
  },
  {
    id: '2',
    name: 'Sarah Smith',
    date: '2025-07-10',
    rating: 4,
    comment: 'Great quality and fast shipping. Would definitely order again.'
  },
  {
    id: '3',
    name: 'Michael Johnson',
    date: '2025-07-05',
    rating: 5,
    comment: 'The customer service team was incredibly helpful in guiding me to the right products for my setup.'
  }
];

type Review = {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
};

const ReviewItem = ({ review }: { review: Review }) => {
  return (
    <div className="border-b border-zinc-800 pb-6 mb-6 last:border-b-0 hover:bg-zinc-900/50 p-4 rounded-lg transition-colors">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-white">{review.name}</h3>
        <span className="text-sm text-zinc-500">{review.date}</span>
      </div>
      
      <div className="flex items-center mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon key={star} filled={star <= review.rating} />
        ))}
      </div>
      
      <p className="text-zinc-300">{review.comment}</p>
    </div>
  );
};

const ReviewList = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, fetch from API
    const fetchReviews = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setReviews(SAMPLE_REVIEWS);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchReviews();
  }, []);
  
  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-zinc-800 rounded w-1/4 mb-2"></div>
            <div className="h-3 bg-zinc-800 rounded w-1/3 mb-3"></div>
            <div className="h-20 bg-zinc-800 rounded mb-3"></div>
            <div className="h-3 bg-zinc-800 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    );
  }
  
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-white">Customer Feedback</h2>
      
      {reviews.length === 0 ? (
        <div className="bg-zinc-900 p-6 text-center rounded-lg border border-zinc-800">
          <p className="text-zinc-400">No reviews yet. Be the first to leave a review!</p>
        </div>
      ) : (
        <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800">
          {reviews.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewList;