import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="bg-white/60 backdrop-blur-lg border border-slate-200 shadow-md hover:shadow-xl hover:border-indigo-300 transition-all duration-300 rounded-2xl p-6 flex flex-col gap-3"
    >
      <h1 className="text-slate-900 text-xl font-semibold">{title}</h1>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
};

export default Card;
