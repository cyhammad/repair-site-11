"use client";
import React from "react";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const FixedCallButtons = () => {
  const telPhone = siteConfig.phone.replace(/[^+\d]/g, "");
  const waPhone = siteConfig.phone.replace(/\D/g, "");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <Link
        href={`tel:${telPhone}`}
        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Call us"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
      </Link>

      {/* WhatsApp Button */}
      <Link
        href={`https://wa.me/${waPhone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </Link>
    </div>
  );
};

export default FixedCallButtons;