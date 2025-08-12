"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 grid gap-10 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-rose-50 p-4 shadow-inner">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Paw Addis — Trusted Pet Walkers in Addis Ababa
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Experienced walkers, personalised care, and joyful walks across Addis Ababa. እኛ እንደ ቤት እንከታተላለን።
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="#contact">Book a Walk</a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#services">Learn More</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:w-96 mt-6">
            <div className="rounded-lg bg-white/80 p-4 shadow-sm">
              <div className="text-sm font-semibold">Experienced Walkers</div>
              <div className="text-xs text-muted-foreground">Trained, certified, pet-first approach</div>
            </div>
            <div className="rounded-lg bg-white/80 p-4 shadow-sm">
              <div className="text-sm font-semibold">Trusted & Reliable</div>
              <div className="text-xs text-muted-foreground">Background-checked walkers for peace of mind</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border">
            <img
              src={`https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=1200&h=800&fit=crop&auto=format`}
              alt="Happy dog being walked in Addis Ababa"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-xl bg-gradient-to-tr from-rose-300 to-amber-300 opacity-80 blur-lg transform rotate-6" />
        </div>
      </div>
    </section>
  );
}
