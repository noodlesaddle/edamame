"use client";
import React from "react";
import CanvasComponent from "../components/threeCanvas";
import { Navbar } from "@/components/navBar";
import HeroSection from "@/components/heroSection";
import ProductsPage from "@/components/products";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section
        id="products"
        className="relative w-full h-screen  items-center  justify-center text-center px-4"
      >
        <ProductsPage />
      </section>
    </>
  );
}
