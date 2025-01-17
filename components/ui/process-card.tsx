"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProcessCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

export function ProcessCard({
  title,
  description,
  icon,
  index,
}: ProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <Card className="relative   border-none bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="p-6">
          <div className="mb-4 inline-block rounded-lg bg-yellow-600/10 p-3">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 to-primary" />
      </Card>
    </motion.div>
  );
}
