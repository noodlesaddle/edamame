"use client";
import React from "react";
import CanvasComponent from "../components/threeCanvas";
import { Navbar } from "@/components/navBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen overflow-hidden">
        <CanvasComponent />
      </div>
    </>
  );
}
