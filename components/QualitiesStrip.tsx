"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ShieldCheck, Zap } from "lucide-react";

const QualitiesStrip = () => {
  const qualities = [
    {
      icon: <Zap className="size-10" />,
      title: "Fast Service",
      description: "Instant response to your call.",
    },
    {
      icon: <ShieldCheck className="size-10" />,
      title: "Reliable Repairs",
      description: "Best replacement parts used.",
    },
    {
      icon: <CheckCircle2 className="size-10" />,
      title: "100% Satisfaction",
      description: "Runs like new again.",
    },
    {
      icon: <Sparkles className="size-10" />,
      title: "Customer Care",
      description: "We are here to help you.",
    },
  ];
  const container = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.08 },
    },
  } as const;
  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  } as const;
  return (
    <motion.section
      className="flex flex-col gap-10 relative items-center bg-[url('/repair.png')] bg-cover bg-center bg-no-repeat bg-fixed w-full py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={container}
    >
      <motion.div
        className="absolute inset-0 bg-black/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      />
      <motion.span
        className="text-white text-2xl z-10 font-bold px-5 text-center"
        variants={item}
      >
        Why we are the best in the business?
      </motion.span>
      <motion.div className="grid grid-cols-2 max-w-7xl z-10 w-full px-5 gap-5" variants={container}>
        {qualities.map((quality, idx) => (
          <motion.div
            key={quality.title + idx}
            variants={item}
            whileHover={{ y: -3 }}
            className="flex flex-col bg-white/20 text-center items-center justify-center gap-4 border p-4 text-white border-white rounded-xl backdrop-blur-sm"
          >
            {quality.icon}
            <span className="text-xl font-bold">{quality.title}</span>
            <span className="text-sm">{quality.description}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default QualitiesStrip;
