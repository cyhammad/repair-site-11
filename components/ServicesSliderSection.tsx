"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Wrench,
  WashingMachine,
  Refrigerator,
  Microwave,
  Fan,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Washing Machine Repair",
    desc: "Drum issues, leaks, and no-spin fixed fast.",
    icon: <Wrench className="size-5" />,
  },
  {
    title: "Refrigerator Repair",
    desc: "Cooling, compressor, and thermostat problems.",
    icon: <Refrigerator className="size-5" />,
  },
  {
    title: "Oven & Microwave Repair",
    desc: "Heating issues and control faults resolved.",
    icon: <Microwave className="size-5" />,
  },
  {
    title: "AC & HVAC Service",
    desc: "AC not cooling? We diagnose and fix expertly.",
    icon: <Fan className="size-5" />,
  },
  {
    title: "Dishwasher Repair",
    desc: "Drain, spray-arm, and control fixes.",
    icon: <Sparkles className="size-5" />,
  },
];

export default function ServicesSliderSection() {
  return (
    <section id="services" className="relative py-16">
      <Carousel>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex items-end justify-between gap-4"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Appliance Services We Offer
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                From emergency breakdowns to routine maintenance, our certified
                technicians deliver reliable repairs that extend the life of
                your appliances.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col p-5">
            <CarouselContent>
              {services.map((s) => (
                <CarouselItem key={s.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full rounded-2xl border bg-background/70 backdrop-blur-md shadow-sm overflow-hidden"
                  >
                    <div className="p-6 flex flex-col gap-3">
                      <div className="inline-flex items-center gap-2 text-primary">
                        <span className="rounded-full border border-primary/30 bg-primary/10 p-2">
                          {s.icon}
                        </span>
                        <span className="text-sm font-medium">
                          Trusted Repair
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {s.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                      <div className="mt-auto pt-2 inline-flex items-center gap-2 text-xs text-muted-foreground">
                        <ShieldCheck className="size-4" /> Warranty Included
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
