import React from "react";

export function Gallery() {
  const photos = [
    `https://images.unsplash.com/photo-1507149833265-60c372daea22?w=800&h=600&fit=crop&auto=format`,
    `https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=800&h=600&fit=crop&auto=format`,
    `https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop&auto=format`,
    `https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&h=600&fit=crop&auto=format`,
  ];

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Gallery — ጋለሪ</h2>
        <p className="text-muted-foreground mt-2">Moments from our walks around Addis Ababa.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((p, i) => (
          <div key={i} className="rounded-lg overflow-hidden border">
            <img src={p} alt={`Pet photo ${i + 1}`} className="w-full h-36 object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
