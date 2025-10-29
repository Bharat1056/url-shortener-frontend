import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaLink className="text-indigo-500 text-3xl" />,
    title: "Simple URL Shortening",
    desc: "Create short, memorable URLs in seconds. Our clean interface and quick setup let you shorten and share links effortlessly.",
  },
  {
    icon: <FaShareAlt className="text-green-500 text-3xl" />,
    title: "Powerful Analytics",
    desc: "Track every click with detailed analytics — including location, referral, and engagement data to optimize your reach.",
  },
  {
    icon: <FaEdit className="text-purple-500 text-3xl" />,
    title: "Enhanced Security",
    desc: "All links are encrypted and protected with advanced security layers to ensure safe and reliable sharing.",
  },
  {
    icon: <FaChartLine className="text-rose-500 text-3xl" />,
    title: "Fast & Reliable",
    desc: "Experience instant redirects with our globally distributed infrastructure, ensuring uptime and speed worldwide.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-50 px-5 sm:px-8 lg:px-14 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
          About <span className="italic text-indigo-600">TinyPath</span>
        </h1>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-10">
          TinyPath makes URL shortening simple and efficient. Create, manage,
          and track your links effortlessly with our intuitive tools and
          real-time analytics. Designed for creators, marketers, and teams —
          TinyPath helps you measure engagement and share smarter.
        </p>

        <div className="space-y-8">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-800 mb-1">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
