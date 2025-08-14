"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function ContactUs() {
  const telPhone = siteConfig.phone.replace(/[^+\d]/g, "");
  const waPhone = siteConfig.phone.replace(/\D/g, "");

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Book a Technician</h2>
          <p className="text-muted-foreground mt-2">
            Tell us what went wrong—our specialist will call back within minutes with an ETA and a transparent quote.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href={`tel:${telPhone}`} className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90">
              <Phone className="size-4" /> Call {siteConfig.phone}
            </Link>
            <Link
              href={`https://wa.me/${waPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

