"use client"

import { useEffect, useRef } from "react"
import { siteData } from "@/data/site-data"

export function InsuranceCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  const { insuranceLogos } = siteData

  return (
    <div className="w-full overflow-hidden bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
      <div className="text-center mb-4">
        <p className="text-sm font-medium text-gray-600">Insurance Plans Accepted</p>
      </div>
      <div ref={scrollRef} className="flex space-x-8 overflow-hidden" style={{ scrollBehavior: "auto" }}>
        {/* Duplicate the logos for seamless loop */}
        {[...insuranceLogos, ...insuranceLogos].map((insurance, index) => (
          <div
            key={`${insurance.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center w-32 h-16  rounded-lg  transition-shadow duration-300"
          >
            <img
              src={insurance.logo || "/placeholder.svg"}
              alt={insurance.name}
              className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
