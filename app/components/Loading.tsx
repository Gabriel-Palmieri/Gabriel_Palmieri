'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#050607] text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-2">
          Welcome To My
          <span className="block text-[#f4f1ea]">Portfolio Website</span>
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-[#11191d] mt-4 rounded-full"
        />
      </motion.div>
    </div>
  );
} 
