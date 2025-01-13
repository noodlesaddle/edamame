"use client";
import React from "react";
import CanvasComponent from "../components/threeCanvas";
import { FloatingNavDemo } from "@/components/navBar";

export default function Home() {
  return (
    <>
      <section className="h-full max-h-fit relative w-full">
        <nav className="fixed top-0 inset-x-0 z-50">
          <FloatingNavDemo />
        </nav>
        <CanvasComponent />
      </section>
    </>
  );
}
