import React from "react";

export function Testimonials() {
  const items = [
    { name: "Selam", text: "Great service! My dog looks forward to his walks. እጅግ ደስ ብሎኛል" },
    { name: "Bekele", text: "Professional and kind walkers. Reliable every time." },
    { name: "Hanna", text: "They handled my anxious puppy with patience. Highly recommend." },
  ];

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">What Addis Owners Say — የደንበኞቻችን አስተያየት</h2>
        <p className="text-muted-foreground mt-2">Real feedback from local pet parents.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {items.map((t) => (
          <blockquote key={t.name} className="rounded-xl border p-4 bg-background">
            <div className="text-sm text-muted-foreground">&quot;{t.text}&quot;</div>
            <div className="mt-3 font-semibold">— {t.name}</div>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
