"use client";
import React from "react";
import CanvasComponent from "./threeCanvas";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Premium Horse Meat from Mongolia \nA Tradition of Quality and Excellence`;

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden items-center  justify-center text-center px-4">
      <CanvasComponent />
      <TextGenerateEffect words={words} />
    </section>
  );
};

export default HeroSection;
