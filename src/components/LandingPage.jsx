import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";

const LandingPage = () => {
  const navigate = useNavigate();

  const dashBoardNavigateHandler = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-white via-indigo-50 to-white lg:px-14 sm:px-8 px-4">
      {/* Hero Section */}
      <div className="lg:flex-row flex-col lg:py-8 pt-20 lg:gap-12 gap-10 flex justify-between items-center">
        {/* Text Section */}
        <div className="flex-1 space-y-5">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold text-slate-800 md:text-6xl sm:text-5xl text-4xl leading-tight"
          >
            Simplify <span className="text-indigo-600">URL Shortening</span> for
            Effortless Sharing.
          </motion.h1>

          <p className="text-slate-600 text-base md:w-[80%] leading-relaxed">
            TinyPath makes sharing smarter. Generate concise, trackable links
            with real-time analytics to enhance your online presence — quickly
            and beautifully.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={dashBoardNavigateHandler}
              className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium rounded-md py-2.5 px-6 shadow-lg transition-all"
            >
              Manage Links
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={dashBoardNavigateHandler}
              className="border border-indigo-500 text-indigo-600 font-medium rounded-md py-2.5 px-6 hover:bg-indigo-50 transition-all"
            >
              Create Short Link
            </motion.button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[380px] object-cover rounded-2xl shadow-lg shadow-indigo-200"
            src="/images/img2.png"
            alt="TinyPath illustration"
          />
        </div>
      </div>

      {/* Trusted Section */}
      <div className="sm:pt-16 pt-10">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-slate-800 font-semibold text-2xl sm:text-3xl text-center max-w-3xl mx-auto leading-snug"
        >
          Trusted by individuals and teams at the world’s best companies
        </motion.p>

        {/* Cards Section */}
        <div className="pt-10 pb-12 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <Card
            title="Simple URL Shortening"
            desc="Create short, memorable URLs in seconds with a clean, intuitive interface designed for efficiency."
          />
          <Card
            title="Powerful Analytics"
            desc="Track clicks, traffic sources, and user engagement in real-time with our analytics dashboard."
          />
          <Card
            title="Enhanced Security"
            desc="Every link is protected with advanced encryption — ensuring your data remains private and secure."
          />
          <Card
            title="Fast and Reliable"
            desc="Experience instant redirects and 99.9% uptime powered by our robust and scalable infrastructure."
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
