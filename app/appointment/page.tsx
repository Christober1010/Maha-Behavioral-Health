"use client";

import React, { useState } from "react";
import {
  Calendar,
  User,
  Clock,
  Phone,
  Info,
  Check,
  ArrowLeft,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import { ScrollAnimation } from "@/components/scroll-animations";
import Link from "next/link";

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
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  // Validation function per field
  const validateField = (name: string, value: string | boolean): string => {
    switch (name) {
      case "firstName":
      case "lastName":
        if (!value || (typeof value === "string" && value.trim() === ""))
          return `${
            name === "firstName" ? "First Name" : "Last Name"
          }  is required.`;
        return "";

      case "emergencyContact":
        if (!value || (typeof value === "string" && value.trim() === ""))
          return "This field is required.";
        return "";

      case "email":
        if (!value || (typeof value === "string" && value.trim() === ""))
          return "Email is required.";
        if (
          typeof value === "string" &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
        )
          return "Please enter a valid email.";
        return "";

      case "phone":
        if (!value || (typeof value === "string" && value.trim() === ""))
          return "Phone number is required.";

        if (typeof value === "string") {
          // Basic phone validation regex (allows digits, spaces, dashes, parentheses)
          const phonePattern = /^[0-9\s\-()]+$/;
          const digitsOnly = value.replace(/\D/g, ""); // remove non-digit chars

          if (!phonePattern.test(value))
            return "Phone number contains invalid characters.";

          if (digitsOnly.length < 10)
            return "Phone number must be at least 10 digits.";
        }
        return "";

      case "emergencyPhone":
        if (!value || (typeof value === "string" && value.trim() === ""))
          return "Phone number is required.";
        if (
          typeof value === "string" &&
          !/^\+?[\d\s\-()]{7,15}$/.test(value.trim())
        )
          return "Please enter a valid phone number.";
        return "";

      case "dateOfBirth":
        if (!value || (typeof value === "string" && value.trim() === ""))
          return "Date of Birth is required.";
        if (typeof value === "string") {
          const dob = new Date(value);
          const now = new Date();
          if (dob > now) return "Date of Birth cannot be in the future.";
          // Removed minimum age check, so anyone of any age is allowed
        }
        return "";

      case "preferredDate":
        if (!value || (typeof value === "string" && value.trim() === ""))
          return "Preferred Date is required.";

        if (typeof value === "string") {
          const preferredDate = new Date(value);
          const today = new Date();
          // Clear time from today for date comparison only
          today.setHours(0, 0, 0, 0);
          if (preferredDate < today)
            return "Preferred Date cannot be in the past.";
        }
        return "";

      case "preferredTime":
        if (!value || (typeof value === "string" && value.trim() === ""))
          return "Preferred Time is required.";

        if (typeof value === "string") {
          // If preferredDate is today, ensure preferredTime is not past current time
          const { preferredDate } = formData; // you need access to formData in validation
          if (preferredDate) {
            const now = new Date();
            const preferredDateTime = new Date(preferredDate);

            // Extract hour and minute from preferredTime string, e.g. "9:00 AM"
            const [time, meridian] = value.split(" ");
            let [hours, minutes] = time.split(":").map(Number);
            if (meridian === "PM" && hours !== 12) hours += 12;
            if (meridian === "AM" && hours === 12) hours = 0;

            preferredDateTime.setHours(hours, minutes, 0, 0);

            if (preferredDateTime < now)
              return "Preferred Time cannot be in the past.";
          }
        }
        return "";

      case "serviceType":
        if (!value || (typeof value === "string" && value.trim() === ""))
          return "This field is required.";
        return "";

      case "concerns":
        if (!value || (typeof value === "string" && value.trim() === ""))
          return "Please describe your primary concerns.";
        return "";
      default:
        return "";
    }
  };

  // Validate entire form
  const validateAll = (): Record<string, string> => {
    const errors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) errors[key] = error;
    });
    setFormErrors(errors);
    return errors;
  };

  // Handle input changes with immediate validation
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    const error = validateField(field, value);
    setFormErrors((prev) => ({ ...prev, [field]: error }));
  };

  // Check if form has no errors and all required fields filled
  const isFormValid = (): boolean => {
    const errors = validateAll();
    return Object.keys(errors).length === 0;
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!isFormValid()) {
      toast.error("Please fix the errors in the form before submitting.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await emailjs.send(
        "service_dfpgbka",
        "template_6wf1i1n",
        formData,
        "CLQd9TLdKQaQH43vx"
      );
      console.log("SUCCESS!", response.status, response.text);
      toast.success("Your appointment request was sent successfully!");
      setFormData({
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
      });
      setFormErrors({});
      router.push("/");
    } catch (error) {
      console.error("FAILED...", error);
      toast.error(
        "Something went wrong while sending the form. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center mb-12">
              <Link
                href="/"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Schedule Your Consultation
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Take the first step towards better care. Fill out this form to
                schedule your initial consultation.
              </p>
            </div>
          </ScrollAnimation>
          {/* Form Card */}
          <ScrollAnimation animation="slideUp" delay={200}>
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <Calendar className="h-6 w-6 mr-3" />
                  Appointment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  {/* Personal Information */}
                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <User className="h-5 w-5 mr-2 text-purple-600" />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* First Name */}
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          placeholder="Enter your first name"
                          aria-invalid={!!formErrors.firstName}
                          aria-describedby="firstName-error"
                        />
                        {formErrors.firstName && (
                          <p
                            id="firstName-error"
                            className="text-red-600 text-sm mt-1"
                          >
                            {formErrors.firstName}
                          </p>
                        )}
                      </div>

                      {/* Last Name */}
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          placeholder="Enter your last name"
                          aria-invalid={!!formErrors.lastName}
                          aria-describedby="lastName-error"
                        />
                        {formErrors.lastName && (
                          <p
                            id="lastName-error"
                            className="text-red-600 text-sm mt-1"
                          >
                            {formErrors.lastName}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email *
                        </label>
                        <Input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="your.email@example.com"
                          aria-invalid={!!formErrors.email}
                          aria-describedby="email-error"
                        />
                        {formErrors.email && (
                          <p
                            id="email-error"
                            className="text-red-600 text-sm mt-1"
                          >
                            {formErrors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="(555) 123-4567"
                          aria-invalid={!!formErrors.phone}
                          aria-describedby="phone-error"
                        />
                        {formErrors.phone && (
                          <p
                            id="phone-error"
                            className="text-red-600 text-sm mt-1"
                          >
                            {formErrors.phone}
                          </p>
                        )}
                      </div>

                      {/* Date of Birth */}
                      <div>
                        <label
                          htmlFor="dateOfBirth"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Date of Birth *
                        </label>
                        <Input
                          type="date"
                          id="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={(e) =>
                            handleInputChange("dateOfBirth", e.target.value)
                          }
                          aria-invalid={!!formErrors.dateOfBirth}
                          aria-describedby="dob-error"
                        />
                        {formErrors.dateOfBirth && (
                          <p
                            id="dob-error"
                            className="text-red-600 text-sm mt-1"
                          >
                            {formErrors.dateOfBirth}
                          </p>
                        )}
                      </div>
                    </div>
                  </section>

                  {/* Appointment Details */}
                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-purple-600" />
                      Appointment Details
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {/* Preferred Date */}
                      <div>
                        <label
                          htmlFor="preferredDate"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Preferred Appointment Date *
                        </label>
                        <Input
                          type="date"
                          id="preferredDate"
                          value={formData.preferredDate}
                          onChange={(e) =>
                            handleInputChange("preferredDate", e.target.value)
                          }
                          aria-invalid={!!formErrors.preferredDate}
                          aria-describedby="preferredDate-error"
                        />
                        {formErrors.preferredDate && (
                          <p
                            id="preferredDate-error"
                            className="text-red-600 text-sm mt-1"
                          >
                            {formErrors.preferredDate}
                          </p>
                        )}
                      </div>

                      {/* Preferred Time */}
                      <div>
                        <label
                          htmlFor="preferredTime"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Preferred Time *
                        </label>
                        <Input
                          type="time"
                          id="preferredTime"
                          value={formData.preferredTime}
                          onChange={(e) =>
                            handleInputChange("preferredTime", e.target.value)
                          }
                          aria-invalid={!!formErrors.preferredTime}
                          aria-describedby="preferredTime-error"
                        />
                        {formErrors.preferredTime && (
                          <p
                            id="preferredTime-error"
                            className="text-red-600 text-sm mt-1"
                          >
                            {formErrors.preferredTime}
                          </p>
                        )}
                      </div>

                      {/* Service Type */}
                      <div>
                        <label
                          htmlFor="serviceType"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Service Type *
                        </label>
                        <Select
                          value={formData.serviceType}
                          onValueChange={(value) =>
                            handleInputChange("serviceType", value)
                          }
                          aria-invalid={!!formErrors.serviceType}
                          aria-describedby="serviceType-error"
                        >
                          <SelectTrigger id="serviceType" className="w-full">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ABA Therapy">
                              ABA Therapy
                            </SelectItem>
                            <SelectItem value="Social Skills Groups">
                              Social Skills Groups{" "}
                            </SelectItem>
                            <SelectItem value="Family Support Services">
                              Family Support Services{" "}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        {formErrors.serviceType && (
                          <p
                            id="serviceType-error"
                            className="text-red-600 text-sm mt-1"
                          >
                            {formErrors.serviceType}
                          </p>
                        )}
                      </div>
                    </div>
                  </section>

                  {/* Emergency Contact */}
                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-purple-600" />
                      Emergency Contact Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Emergency Contact Name */}
                      <div>
                        <label
                          htmlFor="emergencyContact"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Emergency Contact Name *
                        </label>
                        <Input
                          id="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={(e) =>
                            handleInputChange(
                              "emergencyContact",
                              e.target.value
                            )
                          }
                          placeholder="Emergency contact name"
                          aria-invalid={!!formErrors.emergencyContact}
                          aria-describedby="emergencyContact-error"
                        />
                        {formErrors.emergencyContact && (
                          <p
                            id="emergencyContact-error"
                            className="text-red-600 text-sm mt-1"
                          >
                            {formErrors.emergencyContact}
                          </p>
                        )}
                      </div>

                      {/* Emergency Contact Phone */}
                      <div>
                        <label
                          htmlFor="emergencyPhone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Emergency Contact Phone *
                        </label>
                        <Input
                          id="emergencyPhone"
                          value={formData.emergencyPhone}
                          onChange={(e) =>
                            handleInputChange("emergencyPhone", e.target.value)
                          }
                          placeholder="Emergency phone number"
                          aria-invalid={!!formErrors.emergencyPhone}
                          aria-describedby="emergencyPhone-error"
                        />
                        {formErrors.emergencyPhone && (
                          <p
                            id="emergencyPhone-error"
                            className="text-red-600 text-sm mt-1"
                          >
                            {formErrors.emergencyPhone}
                          </p>
                        )}
                      </div>
                    </div>
                  </section>

                  {/* Concerns */}
                  <section>
                    <label
                      htmlFor="concerns"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Primary Concerns or Reasons for Seeking Therapy *
                    </label>
                    <Textarea
                      id="concerns"
                      value={formData.concerns}
                      onChange={(e) =>
                        handleInputChange("concerns", e.target.value)
                      }
                      rows={4}
                      placeholder="Describe your concerns..."
                      aria-invalid={!!formErrors.concerns}
                      aria-describedby="concerns-error"
                    />
                    {formErrors.concerns && (
                      <p
                        id="concerns-error"
                        className="text-red-600 text-sm mt-1"
                      >
                        {formErrors.concerns}
                      </p>
                    )}
                  </section>

                  {/* Previous Therapy Checkbox */}
                  <section>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.previousTherapy}
                        onChange={(e) =>
                          handleInputChange("previousTherapy", e.target.checked)
                        }
                        className="form-checkbox h-5 w-5 text-purple-600"
                      />
                      <span className="ml-2 text-gray-700">
                        Have you previously received therapy?
                      </span>
                    </label>
                  </section>

                  {/* Medications */}
                  <section>
                    <label
                      htmlFor="medications"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Current Medications
                    </label>
                    <Textarea
                      id="medications"
                      value={formData.medications}
                      onChange={(e) =>
                        handleInputChange("medications", e.target.value)
                      }
                      rows={2}
                      placeholder="List any medications you are currently taking"
                    />
                  </section>

                  {/* Additional Info */}
                  <section>
                    <label
                      htmlFor="additionalInfo"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Additional Information or Questions
                    </label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) =>
                        handleInputChange("additionalInfo", e.target.value)
                      }
                      rows={3}
                      placeholder="Anything else you want us to know?"
                    />
                  </section>

                  <Button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      Object.values(formErrors).some((error) => error !== "") ||
                      !formData.firstName ||
                      !formData.lastName ||
                      !formData.email ||
                      !formData.phone ||
                      !formData.dateOfBirth ||
                      !formData.preferredDate ||
                      !formData.preferredTime ||
                      !formData.serviceType ||
                      !formData.emergencyContact ||
                      !formData.emergencyPhone ||
                      !formData.concerns
                    }
                    className="w-full"
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : "Submit Appointment Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
