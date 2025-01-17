"use client";
import React from "react";

import { Navbar } from "@/components/navBar";
import HeroSection from "@/components/heroSection";
import ProductsPage from "@/components/products";
import ProcessPage from "@/components/processSection";
import { ContactSection } from "@/components/contactSection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
      <section id="contact" className="relative w-full mt-24 px-4">
        <ContactSection />
      </section>
      <footer className="bg-gray-800 text-sm mt-12 text-white">
        <div className="container mx-auto px-4 py-10 md:py-12">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company info */}
            <div>
              <span>
                <img
                  src="/logo1.png"
                  alt="BolorKhee"
                  className="h-12 w-12 filter brightness-0 invert"
                />
                <h2 className="font-bold mt-2">BolorKhee LLC</h2>
              </span>

              <p className="text-sm text-gray-400 mt-2">
                Sukhbaatar District, Ulaanbaatar, Mongolia
              </p>
              <p className="text-sm text-gray-400">
                info@bolorkhee.com | www.bolorkhee.com
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className=" font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/#products"
                    className="text-gray-400 hover:text-white"
                  >
                    Our Products
                  </a>
                </li>
                <li>
                  <a
                    href="/#process"
                    className="text-gray-400 hover:text-white"
                  >
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-2">
              <h3 className="font-semibold mb-3">Stay Updated</h3>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates on our
                premium horse meat products.
              </p>
              <div className="flex items-center space-x-2 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-700 text-white"
                />
                <Button className="bg-yellow-600 text-white">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-6" />

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} BolorKhee LLC. All rights
              reserved.
            </p>
            <p className="md:ml-auto">
              Developed by{" "}
              <span className="font-semibold">
                <a
                  href="https://github.com/noodlesaddle/"
                  className="hover:text-white"
                >
                  Noodlesaddle
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
