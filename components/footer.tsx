"use client";

import Link from "next/link";
import { siteData } from "@/data/site-data";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  const { contact, insurance } = siteData;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Image
                  src="https://www.mahabehavioralhealth.com/images/mahalogo_v1_small.jpg"
                  alt="Maha Behavioral Health Logo"
                  width={64}
                  height={64}
                  className="object-cover rounded-full"
                />
              </div>
              <span className="text-xl font-bold">Maha Behavioral Health</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing compassionate, evidence-based mental health care to help
              you achieve lasting wellness and resilience.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#services"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/appointment"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">{contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">{contact.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>{contact.address.street}</p>
                  <p>
                    {contact.address.city}, {contact.address.state}{" "}
                    {contact.address.zip}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Insurance */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Insurance Accepted</h3>
            <ul className="space-y-2">
              {insurance.slice(0, 6).map((provider, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {provider}
                </li>
              ))}
              <li className="text-blue-400 text-sm">+ More providers</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Maha Behavioral Health. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/hipaa"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                HIPAA Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
