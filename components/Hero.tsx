"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold neon-text"
      >
        NeonType
      </motion.h1>

      <p className="text-gray-400 mt-6">
        Futuristic typing practice platform.
      </p>

      <div className="flex justify-center gap-4 mt-8">
        <button className="neon-button">Start Typing</button>
        <button className="neon-button">Leaderboard</button>
      </div>
    </section>
  );
}