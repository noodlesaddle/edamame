"use client";

import React from "react";
import { motion } from "framer-motion";

export const HoverEffect = ({
  items,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {item.description}
          </p>
          <a
            href={item.link}
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Learn more →
          </a>
        </motion.div>
      ))}
    </div>
  );
};
