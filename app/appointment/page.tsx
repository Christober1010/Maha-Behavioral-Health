"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollAnimation } from "@/components/scroll-animations"
import { Calendar, Clock, User, FileText, Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    preferredDate: "",
    preferredTime: "",
    serviceType: "",
    insuranceProvider: "",
    emergencyContact: "",
    emergencyPhone: "",
    concerns: "",
    previousTherapy: false,
    medications: "",
    additionalInfo: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollAnimation animation="fadeIn">
            <div className="text-center mb-12">
              <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Schedule Your Consultation
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Take the first step towards better care. Fill out this form to schedule your initial consultation.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={200}>
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <Calendar className="h-6 w-6 mr-3" />
                  Appointment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <User className="h-5 w-5 mr-2 text-purple-600" />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <Input
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <Input
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="(555) 123-4567"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                        <Input
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Appointment Preferences */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-purple-600" />
                      Appointment Preferences
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                        <Input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                        <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                            <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                            <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                            <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                            <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                            <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                            <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
                        <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="aba-therapy">ABA Therapy</SelectItem>
                            <SelectItem value="speech-therapy">Speech & Language Therapy</SelectItem>
                            <SelectItem value="occupational-therapy">Occupational Therapy</SelectItem>
                            <SelectItem value="behavioral-consultation">Behavioral Consultation</SelectItem>
                            <SelectItem value="social-skills-groups">Social Skills Groups</SelectItem>
                            <SelectItem value="family-support">Family Support Services</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Insurance Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-purple-600" />
                      Insurance & Emergency Contact
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Provider</label>
                        <Select onValueChange={(value) => handleInputChange("insuranceProvider", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select insurance" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bcbs">Blue Cross Blue Shield</SelectItem>
                            <SelectItem value="aetna">Aetna</SelectItem>
                            <SelectItem value="cigna">Cigna</SelectItem>
                            <SelectItem value="united">UnitedHealthcare</SelectItem>
                            <SelectItem value="medicare">Medicare</SelectItem>
                            <SelectItem value="medicaid">Medicaid</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Name *</label>
                        <Input
                          value={formData.emergencyContact}
                          onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                          placeholder="Emergency contact name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Emergency Contact Phone *
                        </label>
                        <Input
                          type="tel"
                          value={formData.emergencyPhone}
                          onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                          placeholder="(555) 123-4567"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-purple-600" />
                      Medical Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Primary Concerns *</label>
                        <Textarea
                          value={formData.concerns}
                          onChange={(e) => handleInputChange("concerns", e.target.value)}
                          placeholder="Please describe your primary concerns and what you hope to achieve through therapy..."
                          rows={4}
                          required
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="previousTherapy"
                          checked={formData.previousTherapy}
                          onCheckedChange={(checked) => handleInputChange("previousTherapy", checked as boolean)}
                        />
                        <label htmlFor="previousTherapy" className="text-sm font-medium text-gray-700">
                          Have you received therapy services before?
                        </label>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Medications</label>
                        <Textarea
                          value={formData.medications}
                          onChange={(e) => handleInputChange("medications", e.target.value)}
                          placeholder="Please list any current medications..."
                          rows={2}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                        <Textarea
                          value={formData.additionalInfo}
                          onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                          placeholder="Any additional information you'd like us to know..."
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Schedule Consultation
                      <Calendar className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-sm text-gray-600 mt-4">
                      We'll contact you within 24 hours to confirm your appointment
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
