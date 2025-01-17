"use client";
import React from "react";
import CanvasComponent from "./threeCanvas";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Premium Horse Meat from Mongolia \nA Tradition of Quality and Excellence`;
const text =
  " Sourced from the pristine grasslands of Mongolia, our horse meat meets the highest international standards, offering unmatched quality, flavor, and sustainability.";
const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden items-center  justify-center text-center px-4">
      <CanvasComponent />
      <TextGenerateEffect words={words} text={text} />
    </section>
  );
};

export default HeroSection;
