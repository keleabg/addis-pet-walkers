import React from "react";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  const walkers = [
    { name: "Amanuel", title: "Lead Walker", bio: "5 years experience, certified in pet first aid." },
    { name: "Lulit", title: "Puppy Specialist", bio: "Gentle, patient, loves puppies and training basics." },
    { name: "Dawit", title: "Community Walker", bio: "Local routes expert and animal lover." },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">About Us — ስለ እኛ</h2>
        <p className="text-muted-foreground mt-2">Our mission is simple: safe, joyful walks for every pet in Addis Ababa.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {walkers.map((w) => (
          <Card key={w.name} className="p-4 flex flex-col items-start">
            <div className="flex items-center gap-3 w-full">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 text-white flex items-center justify-center font-semibold">{w.name.charAt(0)}</div>
              <div>
                <div className="font-semibold">{w.name}</div>
                <div className="text-xs text-muted-foreground">{w.title}</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{w.bio}</p>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-sm">
        <strong>Safety & Training:</strong> All walkers are background-checked and trained in animal handling and first aid.
      </div>
    </section>
  );
}
