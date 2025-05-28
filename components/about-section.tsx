"use client"

import { ScrollAnimation } from "./scroll-animations"
import { siteData } from "@/data/site-data"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const { about } = siteData

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Maha Behavioral Health</h2>
            <ScrollAnimation animation="fadeIn" delay={200}>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{about.mission}</p>
            </ScrollAnimation>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollAnimation animation="slideLeft" delay={300}>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{about.vision}</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={400}>
              <div className="relative">
                <img
                  src="https://www.mahabehavioralhealth.com/images/Maha_Fb_adv_v3.0_022825.gif"
                  alt="Mental health care"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute inset-0 bg-blue-600/20 rounded-lg" />
              </div>
            </ScrollAnimation>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ScrollAnimation animation="fadeIn" delay={200}>
              <p className="text-lg text-gray-600">The principles that guide everything we do</p>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.map((value, index) => (
              <ScrollAnimation key={value.title} animation="slideUp" delay={300 + index * 100}>
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-blue-600 mb-3">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
