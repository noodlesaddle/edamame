"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Navbar } from "@/components/navBar";
import { Timeline } from "@/components/ui/timeline";

const timelineItems = [
  {
    title: "2010",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Established our company in Ulaanbaatar, Mongolia, with a vision to
          bring premium Mongolian horse meat to the Japanese market.
        </p>
        <img
          src="https://via.placeholder.com/500x500.png?text=Company+Establishment"
          alt="Company Establishment"
          width={500}
          height={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    ),
  },
  {
    title: "2012",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Successfully completed our first export of premium horse meat to
          Japan, establishing key partnerships with Japanese distributors.
        </p>
        <img
          src="https://via.placeholder.com/500x500.png?text=Export+to+Japan"
          alt="Export to Japan"
          width={500}
          height={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    ),
  },
  {
    title: "2015",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Achieved ISO 22000 certification and implemented HACCP systems across
          all our processing facilities.
        </p>
        <img
          src="https://via.placeholder.com/500x500.png?text=ISO+Certification"
          alt="ISO Certification"
          width={500}
          height={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    ),
  },
  {
    title: "2018",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Successfully launched our first export of premium Mongolian horse meat
          to Japan, solidifying our position in the market.
        </p>
        <img
          src="https://via.placeholder.com/500x500.png?text=Horse+Meat+Processing"
          alt="Horse Meat Processing"
          width={500}
          height={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Implemented sustainable farming practices and received certification
          for ethical animal handling.
        </p>
        <img
          src="https://via.placeholder.com/500x500.png?text=Sustainable+Farming"
          alt="Sustainable Farming"
          width={500}
          height={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Launched our e-commerce platform and implemented blockchain technology
          for supply chain transparency.
        </p>
        <img
          src="https://via.placeholder.com/500x500.png?text=E-commerce+Launch"
          alt="E-commerce Launch"
          width={500}
          height={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    ),
  },
];
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative">
      <Navbar />
      <BackgroundBeams />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About Our Company</CardTitle>
            <CardDescription>
              Bridging Mongolia and Japan through premium horse meat
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Founded in 2010, our company specializes in exporting high-quality
              horse meat from the vast steppes of Mongolia to discerning
              customers in Japan. We pride ourselves on our ethical sourcing
              practices, stringent quality control, and deep respect for both
              Mongolian traditions and Japanese culinary excellence.
            </p>
          </CardContent>
        </Card>
        <div className="py-20">
          <Timeline data={timelineItems} />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                To provide the finest Mongolian horse meat to the Japanese
                market, while supporting local communities and maintaining the
                highest standards of animal welfare and sustainability.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why Choose Us?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ethically sourced from free-roaming horses</li>
                <li>Strict quality control measures</li>
                <li>Full traceability from pasture to plate</li>
                <li>Compliance with international food safety standards</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        <div className="text-center">
          <Button size="lg">Contact Us for More Information</Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 p-6 bg-white dark:bg-gray-800 text-center relative z-10">
        <p>&copy; 2025 Mongolian Horse Meat Exports. All rights reserved.</p>
      </footer>
    </div>
  );
}
