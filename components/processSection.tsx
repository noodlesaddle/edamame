"use client";

import { ProcessCard } from "@/components/ui/process-card";

import { Button } from "@/components/ui/button";
import {
  Beef,
  ClipboardCheck,
  Refrigerator,
  PackageCheck,
  Truck,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const processes = [
  {
    title: "Selection of Horses",
    description:
      "Carefully select horses from trusted Mongolian herders, ensuring they meet our strict quality and health standards.",
    icon: <Beef className="h-6 w-6 text-primary" />,
  },
  {
    title: "Quality Inspection",
    description:
      "Thorough veterinary checks and documentation of each horse's health history and breeding conditions.",
    icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
  },
  {
    title: "Processing",
    description:
      "State-of-the-art processing facility with strict hygiene controls and humane handling practices.",
    icon: <Refrigerator className="h-6 w-6 text-primary" />,
  },
  {
    title: "Quality Control",
    description:
      "Rigorous testing and inspection of meat quality, including texture, color, and safety parameters.",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
  },
  {
    title: "Packaging",
    description:
      "Vacuum-sealed packaging with complete traceability information and quality certifications.",
    icon: <PackageCheck className="h-6 w-6 text-primary" />,
  },
  {
    title: "Export Logistics",
    description:
      "Temperature-controlled transportation and efficient customs clearance to ensure freshness.",
    icon: <Truck className="h-6 w-6 text-primary" />,
  },
];

const certifications = [
  "ISO 22000:2018 Certified",
  "HACCP Compliant",
  "Japan Food Safety Certified",
  "Organic Processing Certified",
  "Animal Welfare Approved",
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900  text-sky-950">
      <section className="relative py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Process</h1>
        <p className="max-w-2xl mx-auto text-yellow-600">
          From selection to delivery, every step of our process is carefully
          monitored to ensure the highest quality horse meat for our Japanese
          customers.
        </p>
      </section>

      {/* Process Cards */}
      <section className="relative container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processes.map((process, index) => (
            <ProcessCard
              key={index}
              title={process.title}
              description={process.description}
              icon={process.icon}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 p-4 rounded-lg bg-primary/5"
              >
                <BadgeCheck className="h-5 w-5 text-primary" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
          <Button size="lg" className="mt-8 bg-yellow-600">
            Request Certification Details
          </Button>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="relative container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Commitment to Quality</h2>
        <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
          Every step of our process is designed to maintain the highest
          standards of quality and food safety. From the vast steppes of
          Mongolia to your plate in Japan, we ensure complete traceability and
          maintain the cold chain throughout the journey.
        </p>
      </section>

      {/* Footer */}
      <footer className="relative bg-white dark:bg-gray-800 text-center p-6 mt-12">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; 2025 Mongolian Horse Meat Exports. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
