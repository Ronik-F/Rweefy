"use client";

import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactFAQ from "@/components/contact/ContactFAQ";

export default function ContactContent() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white px-6 md:px-10 lg:px-14 overflow-x-hidden selection:bg-white selection:text-[#0a0a0a]">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/3 w-[900px] h-[500px] bg-white/[0.015] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[400px] bg-white/[0.01] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Header & Live Clock */}
        <ContactHero />

        {/* 2-Column Core Interface: Form (7 cols) + Details (5 cols) */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-5">
            <ContactDetails />
          </div>
        </div>

        {/* FAQ & Collaboration Standards */}
        <ContactFAQ />
      </div>
    </main>
  );
}
