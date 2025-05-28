"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "./scroll-animations";
import { siteData } from "@/data/site-data";
import {
  Brain,
  MessageCircle,
  Hand,
  Users,
  Heart,
  Home,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const iconMap = {
  Brain,
  MessageCircle,
  Hand,
  Users,
  Heart,
  Home,
};

export function ServicesSection() {
  const { services } = siteData;
  const router = useRouter();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Our Specialized Services
          </h2>
          <ScrollAnimation animation="fadeIn" delay={200}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive autism and behavioral health services designed to
              support growth and development
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];

            return (
              <ScrollAnimation
                key={service.id}
                animation="slideUp"
                delay={index * 150}
              >
                <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg hover:-translate-y-3 overflow-hidden">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-black" />
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-grow justify-between">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Button always at bottom */}
                    <Button
                      onClick={() => router.push("/appointment")} // or "/contact"
                      className={`mt-auto w-full bg-gradient-to-r ${service.color} hover:shadow-lg text-white transition-all duration-300 transform hover:scale-105`}
                    >
                      Start Therapy
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
