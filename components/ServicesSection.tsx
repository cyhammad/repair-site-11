"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import {
  WashingMachine,
  Refrigerator,
  Microwave,
  Tv,
  Flame,
  Wind,
  Sparkles,
  Phone,
  MessageCircle,
} from "lucide-react";

const SERVICES = [
  { title: "Dishwasher Repair", desc: "Drain, spray-arm, and control faults fixed fast.", icon: <Sparkles className="size-5" />, img: "/kitchen.jpg" },
  { title: "Dryer Repair", desc: "No-heat, noisy drum, or belt issues resolved.", icon: <Wind className="size-5" />, img: "/kitchen.jpg" },
  { title: "Washing Machine Repair", desc: "Leaks, no-spin, and vibration problems diagnosed.", icon: <WashingMachine className="size-5" />, img: "/kitchen.jpg" },
  { title: "Stove / Cooker / Hotplate", desc: "Ignition, heating element, and thermostat repairs.", icon: <Flame className="size-5" />, img: "/kitchen.jpg" },
  { title: "Fridge Repair", desc: "Cooling loss, compressor, and thermostat service.", icon: <Refrigerator className="size-5" />, img: "/kitchen.jpg" },
  { title: "Oven Repair", desc: "Uneven heating, sensor, and control panel fixes.", icon: <Microwave className="size-5" />, img: "/kitchen.jpg" },
  { title: "TV Repair", desc: "No display, sound issues, and power faults handled.", icon: <Tv className="size-5" />, img: "/kitchen.jpg" },
];

export default function ServicesSection() {
  const telPhone = siteConfig.phone.replace(/[^+\d]/g, "");
  const waPhone = siteConfig.phone.replace(/\D/g, "");

  const container = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, when: "beforeChildren", staggerChildren: 0.06 } },
  } as const;
  const item = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } } as const;

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          variants={container}
          className="flex flex-col gap-3"
        >
          <motion.div className="inline-flex items-center gap-2" variants={item}>
            <span className="rounded-full border bg-background/70 backdrop-blur px-3 py-1 text-xs">Dubai</span>
            <span className="rounded-full border bg-background/70 backdrop-blur px-3 py-1 text-xs">Abu Dhabi</span>
          </motion.div>
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Expert Home Appliance Repair Services
          </motion.h2>
          <motion.p variants={item} className="text-muted-foreground max-w-3xl">
            Reliable dishwasher, dryer, washing machine, stove/cooker/hotplate, fridge, oven, and TV repairs in Dubai and Abu Dhabi. Certified
            technicians, same‑day availability, and warranty-backed workmanship. We diagnose fast, repair right, and keep your home running.
          </motion.p>

          <motion.div variants={container} className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <motion.div
                key={s.title}
                variants={item}
                whileHover={{ y: -3 }}
                className="rounded-2xl border bg-background/70 backdrop-blur shadow-sm overflow-hidden"
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={s.img}
                    alt={`${s.title} in Dubai and Abu Dhabi`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="inline-flex items-center gap-2 text-primary">
                    <span className="rounded-full border border-primary/30 bg-primary/10 p-2">{s.icon}</span>
                    <span className="text-xs font-medium">Trusted Repair</span>
                  </div>
                  <h3 className="mt-3 font-semibold tracking-tight">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild className="h-11 px-5">
              <Link href={`tel:${telPhone}`} className="inline-flex items-center gap-2">
                <Phone className="size-4" /> Call {siteConfig.phone}
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 px-5">
              <Link href={`https://wa.me/${waPhone}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <MessageCircle className="size-4" /> WhatsApp Us
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
