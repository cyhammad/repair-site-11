"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 max-w-xl bg-primary p-5 rounded-xl"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">About Our Repair Experts</h2>
          <p className="text-muted-foreground">
            We’re a local team of certified appliance technicians committed to dependable, same‑day service.
            Our mission is simple: quick diagnostics, honest pricing, and repairs that last.
          </p>
          <p className="text-muted-foreground">
            With years of hands‑on experience across all major brands, we restore your home comfort and keep your appliances performing at their best.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 bg-[radial-gradient(120px_80px_at_20%_10%,theme(colors.primary/25),transparent_60%),radial-gradient(140px_90px_at_85%_20%,theme(colors.accent/25),transparent_60%)]" />
          <div className="absolute inset-0 -z-10 rounded-3xl blur-2xl opacity-40 bg-gradient-to-br from-primary/30 via-accent/30 to-transparent" />
          <Image
            src="/kitchen.jpg"
            alt="Certified home appliance repair experts at work"
            width={900}
            height={900}
            className="w-full h-auto border aspect-square object-cover shadow-xl"
            style={{
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            }}
            priority
          />

          <motion.div
            className="absolute -top-3 -left-3 md:-left-6"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            animate={{ y: [0, -6, 0] }}
            transition-end={{}}
          >
            <div className="rounded-xl border bg-background/80 backdrop-blur px-4 py-3 shadow-sm">
              <div className="text-xs text-muted-foreground">Happy Customers</div>
              <div className="text-lg font-bold tracking-tight">5,000+</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-6 -right-2 md:-right-6"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            animate={{ y: [0, -8, 0] }}
          >
            <div className="rounded-xl border bg-background/80 backdrop-blur px-4 py-3 shadow-sm">
              <div className="text-xs text-muted-foreground">Years Experience</div>
              <div className="text-lg font-bold tracking-tight">15+</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-2 left-6 md:left-12"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            animate={{ y: [0, -7, 0] }}
          >
            <div className="rounded-xl border bg-background/80 backdrop-blur px-4 py-3 shadow-sm">
              <div className="text-xs text-muted-foreground">Success Rate</div>
              <div className="text-lg font-bold tracking-tight">98%</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

