"use client"

import { ScrollAnimation } from "./scroll-animations"
import { siteData } from "@/data/site-data"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Clock, Heart, CheckCircle, Sparkles } from "lucide-react"

const iconMap = {
  Users,
  Clock,
  Heart,
}

export function AutismInfoSection() {
  const { autismInfo } = siteData

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full opacity-10 animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-teal-300 to-green-300 rounded-full opacity-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <Sparkles className="absolute top-32 right-32 h-8 w-8 text-purple-300 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              {autismInfo.title}
            </h2>
            <ScrollAnimation animation="fadeIn" delay={200}>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">{autismInfo.description}</p>
            </ScrollAnimation>
          </div>

          {/* Facts Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {autismInfo.facts.map((fact, index) => {
              const IconComponent = iconMap[fact.icon as keyof typeof iconMap]

              return (
                <ScrollAnimation key={fact.title} animation="slideUp" delay={300 + index * 150}>
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                        {fact.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{fact.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              )
            })}
          </div>

          {/* Characteristics */}
          <ScrollAnimation animation="fadeIn" delay={600}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8">
                Common Characteristics of Autism
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {autismInfo.characteristics.map((characteristic, index) => (
                  <ScrollAnimation key={index} animation="slideLeft" delay={800 + index * 100}>
                    <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-all duration-300">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{characteristic}</span>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
