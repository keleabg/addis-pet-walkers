import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const services = [
    {
      title: "Daily Walk",
      desc: "30-minute neighbourhood walk to keep your dog happy and healthy.",
      price: "ETB 150",
    },
    {
      title: "Puppy Visit",
      desc: "Gentle shorter walks and play sessions for puppies.",
      price: "ETB 120",
    },
    {
      title: "Extended Walk",
      desc: "45-60 minute longer adventures for energetic dogs.",
      price: "ETB 250",
    },
    {
      title: "Special Needs Care",
      desc: "Personalised attention for elderly or special-care pets.",
      price: "ETB 300",
    },
  ];

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Our Services — አገልግሎቶቻችን</h2>
        <p className="text-muted-foreground mt-2">Tailored walks and care across Addis Ababa neighbourhoods.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Card key={s.title} className="p-4">
            <div className="flex flex-col gap-3">
              <div className="text-lg font-semibold">{s.title}</div>
              <div className="text-sm text-muted-foreground">{s.desc}</div>
              <div className="mt-2 flex items-center justify-between">
                <div className="text-sm font-medium">{s.price}</div>
                <Button asChild size="sm">
                  <a href="#contact">Book</a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 text-sm text-muted-foreground">
        <strong>Service areas:</strong> Bole, Kazanchis, Kirkos, Arada, Merkato and surrounding neighbourhoods. We cover more areas on request.
      </div>
    </section>
  );
}
