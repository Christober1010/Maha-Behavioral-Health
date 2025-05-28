"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale"
  delay?: number
}

export function ScrollAnimation({ children, className = "", animation = "fadeIn", delay = 0 }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10px 0px",
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay, isVisible])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out"

    if (!isVisible) {
      switch (animation) {
        case "fadeIn":
          return `${baseClasses} opacity-0`
        case "slideUp":
          return `${baseClasses} opacity-0 translate-y-8`
        case "slideLeft":
          return `${baseClasses} opacity-0 translate-x-8`
        case "slideRight":
          return `${baseClasses} opacity-0 -translate-x-8`
        case "scale":
          return `${baseClasses} opacity-0 scale-95`
        default:
          return `${baseClasses} opacity-0`
      }
    } else {
      return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
    }
  }

  return (
    <div ref={elementRef} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}

export function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
}: {
  children: React.ReactNode
  className?: string
  speed?: number
}) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed
      element.style.transform = `translateY(${rate}px)`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
