"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Timer, ThumbsUp, Wrench } from "lucide-react";

export default function WhyChooseUs() {
  const items = [
    {
      icon: <ShieldCheck className="size-5" />,
      title: "Certified & Insured",
      desc: "Your appliances are repaired by vetted, certified, and fully insured technicians.",
    },
    {
      icon: <Timer className="size-5" />,
      title: "Fast Turnaround",
      desc: "Same‑day or next‑day appointments with real‑time ETAs and professional communication.",
    },
    {
      icon: <Wrench className="size-5" />,
      title: "Top‑Quality Parts",
      desc: "We use high‑quality, manufacturer‑approved parts for durable, long‑lasting repairs.",
    },
    {
      icon: <ThumbsUp className="size-5" />,
      title: "Upfront Pricing",
      desc: "No surprises—transparent quotes before we start and warranty on our workmanship.",
    },
  ];

  return (
    <section id="why-us" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Why Customers Choose Us</h2>
          <p className="text-muted-foreground mt-2">
            We combine speed, skill, and service to deliver an experience that keeps your household running smoothly.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl border bg-background/70 backdrop-blur p-6 shadow-sm"
            >
              <div className="inline-flex items-center gap-2 text-primary">
                <span className="rounded-full border border-primary/30 bg-primary/10 p-2">{it.icon}</span>
                <span className="text-xs font-medium">Trusted</span>
              </div>
              <h3 className="mt-3 font-semibold">{it.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

