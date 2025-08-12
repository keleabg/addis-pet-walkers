"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <header className={cn("backdrop-blur-sm sticky top-0 z-40 bg-white/60 dark:bg-black/60 border-b")}>
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center text-white font-bold">PA</div>
          <div>
            <div className="text-sm font-semibold">Paw Addis</div>
            <div className="text-xs text-muted-foreground">Pet walking — Addis Ababa</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="text-muted-foreground hover:text-foreground">Services</a>
          <a href="#about" className="text-muted-foreground hover:text-foreground">About</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground">Testimonials</a>
          <a href="#gallery" className="text-muted-foreground hover:text-foreground">Gallery</a>
          <a href="#blog" className="text-muted-foreground hover:text-foreground">Blog</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" variant="outline">
            <a href="#contact">Book a Walk</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
