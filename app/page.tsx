"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { Testimonials } from "@/components/testimonials";
import { Gallery } from "@/components/gallery";
import { BlogPreview } from "@/components/blog-preview";
import { ContactSection } from "@/components/contact-section";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <div className="divide-y">
        <ServicesSection />
        <AboutSection />
        <Testimonials />
        <Gallery />
        <BlogPreview />
        <ContactSection />
      </div>

      <footer className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <div className="font-semibold">Paw Addis</div>
            <div>Trusted pet walking across Addis Ababa</div>
          </div>
          <div>
            <div>Phone: +251 9XX XXX XXX</div>
            <div>Email: info@pawaddis.et</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
