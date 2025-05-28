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

const gradientMap: Record<string, string> = {
  "blue-purple": "bg-gradient-to-r from-blue-500 to-purple-500",
  "green-blue": "bg-gradient-to-r from-green-500 to-blue-500",
  "purple-pink": "bg-gradient-to-r from-purple-500 to-pink-500",
  "orange-red": "bg-gradient-to-r from-orange-500 to-red-500",
  "teal-green": "bg-gradient-to-r from-teal-500 to-green-500",
}

export function HowToStartSection() {
  const { howToStart } = siteData

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {howToStart.title}
            </h2>
            <ScrollAnimation animation="fadeIn" delay={200}>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {howToStart.subtitle}
              </p>
            </ScrollAnimation>
          </div>

          <div className="space-y-12">
            {howToStart.steps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap]
              const isEven = index % 2 === 0
              const colorClass = gradientMap[step.color]

              return (
                <ScrollAnimation
                  key={step.number}
                  animation={isEven ? "slideLeft" : "slideRight"}
                  delay={300 + index * 200}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      <div
                        className={`flex flex-col ${
                          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                        } items-center gap-8`}
                      >
                        {/* Text Content */}
                        <div className="flex-1 p-6 sm:p-8 md:p-10">
                          <div className="flex items-center mb-6">
                            <div
                              className={`w-14 h-14 sm:w-16 sm:h-16 ${colorClass} rounded-full flex items-center justify-center mr-4`}
                            >
                              <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-500">Step {step.number}</span>
                              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{step.title}</h3>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed mb-4 text-base sm:text-lg">
                            {step.description}
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>Duration: {step.duration}</span>
                          </div>
                        </div>

                        {/* Visual Element */}
                        <div className="flex-1 relative h-48 sm:h-56 md:h-64 lg:h-80 w-full">
                          <div className={`lg:absolute inset-0 ${colorClass} opacity-20`} />
                          <div className="lg:absolute inset-0 flex items-center justify-center">
                            <div
                              className={`w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 ${colorClass} rounded-full flex items-center justify-center shadow-2xl`}
                            >
                              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                                {step.number}
                              </span>
                            </div>
                          </div>
                          {/* Decorative elements */}
                          <div className="lg:absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 bg-white/30 rounded-full animate-pulse" />
                          <div
                            className="lg:absolute bottom-4 left-4 w-4 h-4 sm:w-6 sm:h-6 bg-white/30 rounded-full animate-pulse"
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
