"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "./scroll-animations";
import { siteData } from "@/data/site-data";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const { testimonials } = siteData;

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from people whose lives have been transformed through
              our care
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation
              key={testimonial.name}
              animation="slideUp"
              delay={index * 150}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <CardContent className="p-6 relative flex flex-col h-full">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-200 group-hover:text-blue-300 transition-colors duration-300" />

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Make text area flex-grow to push name/service down */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic flex-grow">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900 mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-blue-600">
                      {testimonial.service}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
