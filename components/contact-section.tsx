"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ScrollAnimation } from "./scroll-animations";
import { siteData } from "@/data/site-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactSection() {
  const { contact } = siteData;
  const router = useRouter();

  return (
    <>
      <style jsx>{`
        @keyframes glowingShadow {
          0% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.7);
          }
          25% {
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.7);
          }
          50% {
            box-shadow: 0 0 40px rgba(20, 184, 166, 0.7);
          }
          75% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.7);
          }
          100% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.7);
          }
        }
      `}</style>

      <section className="py-20 bg-white px-6">
        <ScrollAnimation animation="fadeIn">
          <div
            className="bg-blue-50 hover:bg-blue-100 py-12 px-6 rounded-xl max-w-5xl mx-auto text-center"
            style={{
              animation: "glowingShadow 6s ease-in-out infinite alternate",
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Still have questions ?
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Our team of Experienced Behavioral Health Professionals are ready
              to support!
            </p>
            <Link href="/appointment">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102"
              >
                Book an appointment{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 transform group-hover:translate-x-4 group-hover:scale-110" />
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
}
