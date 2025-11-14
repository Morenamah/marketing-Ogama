
import type React from 'react';

export enum Page {
  Home,
  Valuation,
  FAQ,
  Contact,
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}
