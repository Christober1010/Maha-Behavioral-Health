"use client";

import { Button } from "@/components/ui/button";
import { ScrollAnimation, ParallaxSection } from "./scroll-animations";
import { InsuranceCarousel } from "./insurance-carousel";
import { siteData } from "@/data/site-data";
import { ArrowRight, Phone, Sparkles, Heart, Star } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const { hero } = siteData;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-blue-50 to-teal-100">
      {/* Animated Background Elements */}
      <ParallaxSection speed={1.2} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-teal-600/10" />
      </ParallaxSection>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse" />
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-teal-400 to-green-400 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Sparkle Effects */}
        <Sparkles className="absolute top-32 right-32 h-6 w-6 text-purple-400 animate-pulse" />
        <Star
          className="absolute bottom-32 left-32 h-4 w-4 text-blue-400 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <Heart
          className="absolute top-1/3 left-1/4 h-5 w-5 text-pink-400 animate-pulse"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <ScrollAnimation animation="slideUp" delay={100}>
            <div className="opacity-100 mb-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-6 leading-tight">
                {hero.title}
              </h1>
            </div>{" "}
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={300}>
            <p className="text-xl md:text-2xl font-medium mb-4 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
              {hero.subtitle}
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={500}>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {hero.description}
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={700}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/appointment">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102"
                >
                  {hero.cta.primary}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 transform group-hover:translate-x-4 group-hover:scale-110" />
                </Button>
              </Link>
              {/* <a
                href={`tel:${siteData.contact.phone.replace(/\s+/g, "")}`}
                className="w-fit"
              >
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2 rounded-full border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>{siteData.contact.phone}</span>
                </Button>
              </a> */}
            </div>
          </ScrollAnimation>

          {/* Insurance Carousel */}
          <ScrollAnimation animation="slideUp" delay={900}>
            <div className="max-w-6xl mx-auto">
              <InsuranceCarousel />
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div> */}
    </section>
  );
}
