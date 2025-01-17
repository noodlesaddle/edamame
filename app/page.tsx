"use client";
import React from "react";
import CanvasComponent from "../components/threeCanvas";
import { Navbar } from "@/components/navBar";
import HeroSection from "@/components/heroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
