"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Daily Walk");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [petDetails, setPetDetails] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const booking = { name, email, phone, service, date, time, petDetails, createdAt: new Date().toISOString() };

    // Save to localStorage as a simple persistence layer
    const prev = JSON.parse(localStorage.getItem("paw_addis_bookings") || "[]");
    prev.push(booking);
    localStorage.setItem("paw_addis_bookings", JSON.stringify(prev));

    // Construct mailto for email notification
    const subject = encodeURIComponent(`New Booking: ${service} - ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nTime: ${time}\nPet details: ${petDetails}`);
    window.location.href = `mailto:info@pawaddis.et?subject=${subject}&body=${body}`;

    setShowDialog(true);
    // reset minimal fields
    setName("");
    setEmail("");
    setPhone("");
    setPetDetails("");
  };

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Contact & Booking — ያግኙን</h2>
        <p className="text-muted-foreground mt-2">Request a walk and we will confirm via email. ይህንን ቅጽ ይሙሉ.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name — ሙሉ ስም" required />
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email — ኢሜይል" required />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number — ስልክ" required />
          <select value={service} onChange={(e) => setService(e.target.value)} className="border rounded-md px-3 py-2 bg-transparent">
            <option>Daily Walk</option>
            <option>Puppy Visit</option>
            <option>Extended Walk</option>
            <option>Special Needs Care</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>

        <textarea value={petDetails} onChange={(e) => setPetDetails(e.target.value)} placeholder="Pet details (breed, age, notes) — የታካሚ መረጃ" className="min-h-[100px] rounded-md border px-3 py-2 bg-transparent text-sm" />

        <div className="flex items-center justify-between gap-3">
          <Button type="submit">Send Booking Request</Button>
          <div className="text-xs text-muted-foreground">Operating hours: Mon–Sat 7:00–18:00</div>
        </div>
      </form>

      <Dialog open={showDialog} onOpenChange={(open) => setShowDialog(open)}>
        <DialogContent>
          <DialogTitle>Booking saved</DialogTitle>
          <DialogDescription>Thank you! We saved your booking and opened your email client to send confirmation. እናመሰግናለን!</DialogDescription>
          <div className="mt-4 flex justify-end">
            <DialogClose asChild>
              <Button onClick={() => setShowDialog(false)}>Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>

      <div className="mt-6 text-sm">
        <div>Phone: +251 9XX XXX XXX</div>
        <div>Email: info@pawaddis.et</div>
        <div className="mt-2">Service areas shown on map: central Addis (Bole, Arada, Kirkos, Kazanchis)</div>
      </div>
    </section>
  );
}
