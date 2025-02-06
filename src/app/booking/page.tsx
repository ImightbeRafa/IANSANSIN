// src/app/booking/page.tsx
"use client"

import React, { useState } from 'react';
import LandingPage from '@/app/components/booking/LandingPage';
import ContactForm from '@/app/components/ContactForm';

export default function BookingPage() {
  const handleFormSubmit = () => {
    // Redirect to the correct Calendly link
    window.location.href = 'https://calendly.com/rafa-iankupfer/asesoria-basica';
  };

  return (
    <main className="min-h-screen">
      <LandingPage />
      <section className="py-16 bg-gray-100" id="booking-form">
        <div className="container mx-auto px-4">
          <ContactForm onSubmit={handleFormSubmit} />
        </div>
      </section>
    </main>
  );
}