"use client";
import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { navLinks } from "@/lib/links";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Phone, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
      >
        <motion.div
          className="bg-secondary-foreground text-white text-sm flex items-center justify-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 }}
        >
          <div className="max-w-7xl px-4 py-2 flex items-center justify-end gap-4 w-full">
            {(() => {
              const telPhone = siteConfig.phone.replace(/[^+\d]/g, "");
              const waPhone = siteConfig.phone.replace(/\D/g, "");
              return (
                <>
                  <Link
                    href={`tel:${telPhone}`}
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <motion.span initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                      <Phone className="size-4 text-primary" />
                    </motion.span>
                    Call Us
                  </Link>
                  <Link
                    href={`https://wa.me/${waPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <motion.span initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.03 }}>
                      <MessageCircle className="size-4 text-primary" />
                    </motion.span>
                    WhatsApp
                  </Link>
                </>
              );
            })()}
          </div>
        </motion.div>
        <motion.nav
          className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b"
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 26, delay: 0.08 }}
        >
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="font-semibold text-lg flex items-center gap-2"
            >
              <motion.span initial={{ rotate: -15, scale: 0.9 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.12 }}>
                <Sparkles className="size-5" />
              </motion.span>
              {siteConfig.name}
            </Link>
            <motion.ul
              className="hidden md:flex items-center gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: -6 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.05, delayChildren: 0.15 },
                },
              }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{ hidden: { opacity: 0, y: -6 }, visible: { opacity: 1, y: 0 } }}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <Link href={link.href} className="hover:text-primary">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Open menu">
                    <motion.span whileTap={{ scale: 0.9 }}>
                      <Menu />
                    </motion.span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="top">
                  <SheetHeader>
                    <SheetTitle>
                      <Link
                        href="/"
                        className="font-semibold text-lg flex items-center gap-2"
                      >
                        <motion.span initial={{ rotate: -15, scale: 0.9 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
                          <Sparkles className="size-5" />
                        </motion.span>
                        {siteConfig.name}
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="px-5 flex flex-col gap-4">
                    <motion.div
                      className="flex flex-col p-4 gap-3 bg-primary/15 rounded-md"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0, y: -8 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { staggerChildren: 0.06, delayChildren: 0.05 },
                        },
                      }}
                    >
                      {navLinks.map((link) => (
                        <motion.div
                          key={link.href}
                          variants={{ hidden: { opacity: 0, y: -6 }, visible: { opacity: 1, y: 0 } }}
                          whileHover={{ x: 2 }}
                        >
                          <Link
                            href={link.href}
                            className="hover:text-primary"
                            aria-label={link.label}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                    <div className="py-10 border-t flex flex-col gap-3">
                      <Link
                        href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                        className="inline-flex items-center gap-2 hover:underline"
                      >
                        <Phone className="size-4" /> {siteConfig.phone}
                      </Link>
                      <Link
                        href={`https://wa.me/${siteConfig.phone.replace(
                          /\D/g,
                          ""
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:underline"
                      >
                        <MessageCircle className="size-4" /> WhatsApp
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </motion.nav>
      </motion.div>
      <div className="h-24" />
    </>
  );
};

export default Header;
