"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/ui/languageSwitcher";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 md:h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo1.png" alt="BolorKhee" className="h-10 w-10" />
            <span className="font-bold text-sky-950">BolorKhee LLC</span>
          </Link>
        </div>
        <nav className="hidden text-sky-950 md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/about">About Us</Link>
          <Link href="/#products">Our Products</Link>
          <Link href="/#process">Our Process</Link>
          <Link
            href="/#contact"
            className="text-yellow-600 border border-yellow-600 rounded-full px-4 py-2"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileNav />
            </SheetContent>
          </Sheet>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-4">
      <Link href="/" className="font-bold  mb-12">
        <img src="/logo1.png" alt="BolorKhee" className="h-12 w-12" />
      </Link>
      <nav className="flex text-sky-950 flex-col space-y-6">
        <Link href="/about">About Us</Link>
        <Link href="/#products">Our Products</Link>
        <Link href="/#process">Our Process</Link>
        <Link className="text-yellow-600 font-bold" href="/#contact">
          Contact
        </Link>
      </nav>
    </div>
  );
}
