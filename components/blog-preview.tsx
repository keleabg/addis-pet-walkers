import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function BlogPreview() {
  const posts = [
    { title: "Top 5 Dog-Friendly Spots in Addis", excerpt: "Discover parks and cafés where your pet is welcome." },
    { title: "Puppy Socialization Tips", excerpt: "How to set your puppy up for confident walks." },
  ];

  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">From the Blog — ብሎግ</h2>
        <p className="text-muted-foreground mt-2">Tips and updates for Addis pet parents.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <Card key={p.title} className="p-4">
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-lg">{p.title}</div>
              <div className="text-sm text-muted-foreground">{p.excerpt}</div>
              <div className="mt-3">
                <Button variant="ghost" asChild size="sm">
                  <a href="#blog">Read</a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
