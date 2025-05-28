"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "./scroll-animations"
import { siteData } from "@/data/site-data"

export function TeamSection() {
  const { team } = siteData

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your mental health and wellbeing
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <ScrollAnimation key={member.name} animation="slideUp" delay={index * 150}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-100 group-hover:border-blue-600 transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.credentials}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span key={specialtyIndex} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
