"use client";
import React from "react";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { navLinks } from "@/lib/links";
import { Wrench, Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";

const Footer = () => {
  const telPhone = siteConfig.phone.replace(/[^+\d]/g, "");
  const waPhone = siteConfig.phone.replace(/\D/g, "");

  const container = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, when: "beforeChildren", staggerChildren: 0.04 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const footerRef = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(footerRef, { amount: 0.08 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.footer
      ref={footerRef}
      className="bg-foreground text-background mt-auto"
      initial="hidden"
      animate={controls}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-10" variants={container}>
          <motion.div className="md:col-span-2 space-y-4" variants={item}>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Wrench className="size-5" /> {siteConfig.name}
            </div>
            <p className="text-sm text-background/80 max-w-prose">
              Reliable, fast, and professional UAE Appliances Service. We keep your
              home running with expert care and honest service.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href={`tel:${telPhone}`} className="inline-flex items-center gap-2 hover:text-primary">
                <Phone className="size-4" /> {siteConfig.phone}
              </Link>
              <Link
                href={`https://wa.me/${waPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </Link>
            </div>
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-background/80">
              <div className="inline-flex items-center gap-2"><MapPin className="size-4" /> Serving your local area</div>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="space-y-3" variants={item}>
            <h4 className="text-sm font-semibold">Need Help?</h4>
            <p className="text-sm text-background/80">
              Tell us the issue and we’ll arrange a quick visit.
            </p>
            <div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-background text-foreground hover:bg-background/90 transition-colors px-4 py-2 text-sm font-medium"
              >
                Request Service <ArrowRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-background/15 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/70"
          variants={item}
        >
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div className="inline-flex items-center gap-2">
            <span className="hidden sm:inline">Emergency repairs:</span>
            <Link href={`tel:${telPhone}`} className="hover:text-primary inline-flex items-center gap-1">
              <Phone className="size-3.5" /> {siteConfig.phone}
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;