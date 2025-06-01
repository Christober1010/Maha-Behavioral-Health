"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteData } from "@/data/site-data";
import { Menu, Phone } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Get Started", href: "#how-to-start" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo + Site Name */}
          <Link href="/" className="flex items-center space-x-3 min-w-0">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shadow-md flex items-center justify-center flex-shrink-0">
              <Image
                src="https://www.mahabehavioralhealth.com/images/mahalogo_v1_small.jpg"
                alt="Maha Behavioral Health Logo"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <span className="text-lg md:text-2xl font-extrabold text-gray-900 select-none truncate">
              Maha Behavioral Health Services
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition-colors duration-250 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href={`tel:${siteData.contact.phone}`}
              className="w-full flex items-center justify-center space-x-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors py-2 px-4"
            >
              <Phone className="h-5 w-5" />
              <span>{siteData.contact.phone}</span>
            </a>
            <Link href="/appointment" passHref>
              <Button
                size="sm"
                className="group relative rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all duration-300 overflow-hidden hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                {/* Button text */}
                <span className="relative z-10">Book Appointment</span>

                {/* Ripple effect on hover */}
                <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden rounded-full border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
                aria-label="Open Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="p-6">
              <nav className="flex flex-col space-y-6 mt-10">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="pt-8 border-t border-gray-200 mt-10 flex flex-col gap-4">
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="w-full flex items-center justify-center space-x-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors py-2 px-4"
                >
                  <Phone className="h-5 w-5" />
                  <span>{siteData.contact.phone}</span>
                </a>
                <Link href="/appointment" passHref>
                  <Button
                    size="sm"
                    className="group relative rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all duration-300 overflow-hidden hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25"
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                    {/* Button text */}
                    <span className="relative z-10">Book Appointment</span>

                    {/* Ripple effect on hover */}
                    <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
