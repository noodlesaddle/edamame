"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import {
  IconHome,
  IconUser,
  IconMeat,
  IconCertificate,
  IconStar,
  IconMessage,
  IconHotelService,
} from "@tabler/icons-react";
import Image from "next/image"; // Import Image component from next/image
import logo from "@/public/logo1.png"; // Adjust the path to your logo image

export function FloatingNavDemo() {
  const navItems = [
    {
      name: (
        <>
          <Image src={logo} alt="Logo" width={40} height={40} />{" "}
        </>
      ),
      link: "/",
      icon: <IconHome className="h-6 w-6 text-blue-950 dark:text-white" />,
    },
    {
      name: "About Us",
      link: "#about",
      icon: <IconUser className="h-6 w-6 text-blue-950 dark:text-white" />,
    },
    {
      name: "Products",
      link: "#products",
      icon: <IconMeat className="h-6 w-6 text-blue-950 dark:text-white" />,
    },
    {
      name: "Services",
      link: "#services",
      icon: (
        <IconHotelService className="h-6 w-6 text-blue-950 dark:text-white" />
      ),
    },
    {
      name: "Quality Standards",
      link: "#quality-standards",
      icon: (
        <IconCertificate className="h-6 w-6 text-blue-950 dark:text-white" />
      ),
    },
    {
      name: "Testimonials",
      link: "#testimonials",
      icon: <IconStar className="h-6 w-6 text-blue-950 dark:text-white" />,
    },
    {
      name: <p className="mr-4">Contact Us</p>,
      link: "#contact",
      icon: <IconMessage className="h-6 w-6 text-blue-950 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
