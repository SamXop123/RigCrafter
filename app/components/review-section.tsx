"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

type Review = {
  id: string;
  customer: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  avatar?: string;
};

// Example reviews data - in a real app, this would come from an API
const reviews: Review[] = [
  {
    id: '1',
    customer: 'Alex Johnson',
    rating: 5,
    date: '2025-07-15',
    title: 'Incredible PC Building Experience',
    content: 'RigCrafter made building my dream gaming PC so simple. The recommendations were spot-on and saved me hours of research.',
    avatar: '/avatars/alex.jpg',
  },
  {
    id: '2',
    customer: 'Sarah Chen',
    rating: 4,
    date: '2025-07-03',
    title: 'Great Tool for First-Time Builders',
    content: 'As someone who had never built a PC before, RigCrafter guided me through the entire process with clear explanations.',
    avatar: '/avatars/sarah.jpg',
  },
  {
    id: '3',
    customer: 'Michael Rivera',
    rating: 5,
    date: '2025-06-22',
    title: 'Professional-Grade Recommendations',
    content: 'I needed a workstation for video editing, and the custom build RigCrafter suggested performs better than pre-built options costing much more.',
    avatar: '/avatars/michael.jpg',
  },
];

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div className="p-6">
        <div className="flex items-center gap-4">
          {review.avatar ? (
            <img 
              src={review.avatar} 
              alt={review.customer} 
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              {review.customer.charAt(0)}
            </div>
          )}
          <div>
            <h4 className="font-semibold">{review.customer}</h4>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
              <span className="ml-2 text-xs text-gray-500">{review.date}</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-medium">{review.title}</h3>
          <p className="mt-2 text-sm text-gray-500">{review.content}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function ReviewSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Customer Reviews</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              See what our customers are saying about their experience with RigCrafter
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
}