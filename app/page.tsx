"use client";
import React from "react";

import { Navbar } from "@/components/navBar";
import HeroSection from "@/components/heroSection";
import ProductsPage from "@/components/products";
import ProcessPage from "@/components/processSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section
        id="products"
        className="relative w-full   items-center  justify-center text-center px-4"
      >
        <ProductsPage />
      </section>
      <section
        id="process"
        className="relative w-full   items-center  justify-center text-center px-4"
      >
        <ProcessPage />
      </section>
    </>
  );
}
