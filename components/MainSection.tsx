"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import {
  Users,
  BadgeCheck,
  Zap,
  Star,
  ShieldCheck,
  Phone,
  MessageCircle,
  CheckCircle2,
  ChevronsDown,
  Smile,
} from "lucide-react";

const MainSection = () => {
  const telPhone = siteConfig.phone.replace(/[^+\d]/g, "");
  const waPhone = siteConfig.phone.replace(/\D/g, "");

  const container = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
  } as const;

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  } as const;

  return (
    <section className="relative w-full pb-10 min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,theme(colors.primary/15),transparent_60%),radial-gradient(900px_400px_at_90%_0%,theme(colors.accent/20),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background" />
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to next section"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full border bg-background/70 backdrop-blur px-3 py-2 text-xs shadow-sm hover:bg-background/90"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          delay: 0.8,
          duration: 1.8,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <ChevronsDown className="size-4" />
        <span className="hidden sm:inline">Scroll</span>
      </motion.a>

      <div className="max-w-7xl mx-auto px-2 pt-12 md:pt-16 pb-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <div className="flex flex-col relative gap-6 p-5 rounded-lg overflow-hidden text-white bg-[url('/kitchen.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="absolute inset-0 bg-black/80" />
            <div className="flex flex-col z-10 gap-6">
              <motion.h1
                variants={item}
                className="text-4xl leading-tight sm:text-5xl md:text-6xl font-extrabold tracking-tight"
              >
                Premium Appliance Repair, Faster Than Your Next Load
              </motion.h1>
              <motion.p
                variants={item}
                className="text-base sm:text-lg text-white/90 max-w-2xl"
              >
                Certified technicians for all major brands. Same‑day
                appointments, transparent pricing, and workmanship we stand
                behind.
              </motion.p>

              <motion.div
                variants={item}
                className="flex flex-wrap items-center gap-3"
              >
                <Button asChild className="h-11 px-5">
                  <Link
                    href={`tel:${telPhone}`}
                    className="inline-flex items-center gap-2"
                  >
                    <Phone className="size-4" /> Call
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 px-5 bg-green-600 text-white hover:bg-green-500 border-transparent"
                >
                  <Link
                    href={`https://wa.me/${waPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MessageCircle className="size-4" /> WhatsApp
                  </Link>
                </Button>
              </motion.div>

              <motion.ul
                variants={item}
                className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm"
              >
                <li className="inline-flex items-center gap-2">
                  <ShieldCheck className="size-4 text-primary" /> Reliable
                  Repairs
                </li>
                <li className="inline-flex items-center gap-2">
                  <Zap className="size-4 text-primary" /> Fast Service
                </li>
                <li className="inline-flex items-center gap-2">
                  <BadgeCheck className="size-4 text-primary" /> 100%
                  Satisfaction
                </li>
              </motion.ul>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -top-10 -right-10 size-40 rounded-full bg-primary/15 blur-3xl" />
            <motion.div
              variants={item}
              className="grid grid-cols-2 gap-4 md:gap-5 auto-rows-[1fr]"
            >
              <KpiCard
                className="col-span-2"
                highlight
                icon={<Users className="size-5" />}
                value="5,000+"
                label="Happy Customers"
              />
              <KpiCard
                icon={<Star className="size-5" />}
                value="15+"
                label="Years Experience"
              />
              <KpiCard
                icon={<CheckCircle2 className="size-5" />}
                value="98%"
                label="Success Rate"
              />
              <KpiCard
                icon={<Zap className="size-5" />}
                value="24/7"
                label="Same‑Day Service"
              />
              <KpiCard
                icon={<Smile className="size-5" />}
                value="100%"
                label="Satisfaction Guaranteed"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function KpiCard({
  icon,
  value,
  label,
  highlight,
  className,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  highlight?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.5 }}
      className={`group relative ${className ?? ""}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/30 via-primary/10 to-transparent opacity-80" />
      <div className="relative rounded-2xl border bg-background/70 backdrop-blur-md shadow-md overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="flex items-start gap-4 p-5 md:p-6">
          <div className="shrink-0 rounded-full border border-primary/30 bg-primary/10 text-primary p-2">
            {icon}
          </div>
          <div className="flex flex-col">
            <div
              className={`${
                highlight ? "text-3xl sm:text-4xl" : "text-2xl"
              } font-extrabold tracking-tight`}
            >
              {value}
            </div>
            <div className="text-xs text-muted-foreground">{label}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default MainSection;
