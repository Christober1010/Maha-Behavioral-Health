"use client"

import { ScrollAnimation } from "./scroll-animations"
import { siteData } from "@/data/site-data"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ClipboardList, Target, Play, TrendingUp, Clock } from "lucide-react"

const iconMap = {
  Calendar,
  ClipboardList,
  Target,
  Play,
  TrendingUp,
}

export function HowToStartSection() {
  const { howToStart } = siteData

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {howToStart.title}
            </h2>
            <ScrollAnimation animation="fadeIn" delay={200}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{howToStart.subtitle}</p>
            </ScrollAnimation>
          </div>

          <div className="space-y-8">
            {howToStart.steps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap]
              const isEven = index % 2 === 0

              return (
                <ScrollAnimation
                  key={step.number}
                  animation={isEven ? "slideLeft" : "slideRight"}
                  delay={300 + index * 200}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}>
                        {/* Content */}
                        <div className="flex-1 p-8 lg:p-12">
                          <div className="flex items-center mb-6">
                            <div
                              className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mr-4`}
                            >
                              <IconComponent className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-500">Step {step.number}</span>
                              <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed mb-4 text-lg">{step.description}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>Duration: {step.duration}</span>
                          </div>
                        </div>

                        {/* Visual Element */}
                        <div className="flex-1 relative h-64 lg:h-80">
                          <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20`} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div
                              className={`w-32 h-32 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-2xl`}
                            >
                              <span className="text-4xl font-bold text-white">{step.number}</span>
                            </div>
                          </div>
                          {/* Decorative elements */}
                          <div className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full animate-pulse" />
                          <div
                            className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full animate-pulse"
                            style={{ animationDelay: "1s" }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
