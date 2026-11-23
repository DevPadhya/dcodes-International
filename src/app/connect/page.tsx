"use client";

import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { User, Mail, Phone, MessageSquare, Send, Check, ArrowLeft, RefreshCw, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import MapComponent from "@/components/MapComponent";

const SITE = "https://www.dcodestech.com";
const PAGE_URL = `${SITE}/connect`;
const PAGE_TITLE = "Contact Dcodes Technologies | Tell Us About Your Project";
const PAGE_DESC =
  "Tell us about your project. Contact Dcodes Technologies for websites, custom software, ERP, mobile apps and digital marketing. Send a brief or call us.";

// ⚠️ Real sales email confirm karo (href ma "sale@" hatu, screen par "sales@" hatu)
const SALES_EMAIL = "sale@dcodestech.com";
const PHONE_DISPLAY = "+91 6353 653 977";

const safeJson = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${PAGE_URL}#page`,
      name: "Contact Dcodes Technologies",
      url: PAGE_URL,
      about: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Dcodes Technologies",
      url: SITE,
      logo: `${SITE}/logo.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "B-203, Ganesh Glory 11",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: SALES_EMAIL,
          telephone: "+91-6353-653-977",
        },
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "info@dcodestech.com",
        },
        {
          "@type": "ContactPoint",
          contactType: "human resources",
          email: "hr@dcodestech.com",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Contact", item: PAGE_URL },
      ],
    },
  ],
};

// ===== SEO: React 19 hoists these into <head> and they are server-rendered =====
const seo = (
  <>
    <title>{PAGE_TITLE}</title>
    <meta name="description" content={PAGE_DESC} />
    <meta
      name="robots"
      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    />
    <link rel="canonical" href={PAGE_URL} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={PAGE_URL} />
    <meta property="og:site_name" content="Dcodes Technologies" />
    <meta property="og:title" content="Contact Dcodes Technologies" />
    <meta property="og:description" content="Tell us about your project and we will reply with next steps." />
    <meta property="og:image" content={`${SITE}/og-contact.jpg`} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Contact Dcodes Technologies" />
    <meta name="twitter:description" content="Websites, custom software, ERP, mobile apps and digital marketing. Send us a brief." />
    <meta name="twitter:image" content={`${SITE}/og-contact.jpg`} />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJson(jsonLd) }}
    />
  </>
);

// CAPTCHA Component
const CaptchaComponent = ({ onValidate }: { onValidate: (isValid: boolean) => void }) => {
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  const generateRandomString = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const generateCaptcha = () => {
    const newCaptcha = generateRandomString();
    setCaptchaText(newCaptcha);
    setUserInput("");
    setIsValid(false);
    onValidate(false);
  };

  useEffect(() => {
    generateCaptcha();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);
    const valid = value === captchaText;
    setIsValid(valid);
    onValidate(valid);
  };

  return (
    <div className="space-y-4">
      <Label className="text-white/80 font-normal text-sm tracking-[0.2em] uppercase">
        Security Verification
      </Label>

      {/* CAPTCHA Display */}
      <div className="flex items-center gap-4">
        <div
          className="h-16 px-6 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center border border-white/20 min-w-[160px]"
          style={{
            fontFamily: "monospace",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#1e3a8a",
            letterSpacing: "3px",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            background: "linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%)",
            userSelect: "none",
            pointerEvents: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
          }}
          draggable="false"
          aria-label={`CAPTCHA security code: ${captchaText}`}
        >
          {captchaText}
        </div>

        <Button
          type="button"
          onClick={generateCaptcha}
          variant="outline"
          className="h-16 w-16 border-white/20 hover:border-white/40 bg-transparent hover:bg-white/5 text-white transition-all duration-300 rounded-xl"
          aria-label="Generate new CAPTCHA code"
        >
          <RefreshCw className="w-5 h-5" />
        </Button>
      </div>

      {/* CAPTCHA Input */}
      <div className="relative group">
        <input
          type="text"
          placeholder="Type the characters above"
          value={userInput}
          onChange={handleInputChange}
          className={`w-full h-16 px-4 border rounded-xl bg-transparent text-white placeholder:text-white/30 font-normal focus:outline-none focus:ring-0 transition-all duration-300 ${
            userInput && (isValid ? "border-green-500/50" : "border-red-500/50")
          }`}
          aria-label="CAPTCHA verification input"
          aria-describedby="captcha-description"
        />
        <div id="captcha-description" className="sr-only">
          Enter the characters shown in the image above to verify you are human
        </div>
        {userInput && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2" role="status" aria-live="polite">
            {isValid ? (
              <Check className="w-5 h-5 text-green-400" aria-label="CAPTCHA verification passed" />
            ) : (
              <div className="w-5 h-5 rounded-full border-2 border-red-400 flex items-center justify-center" aria-label="CAPTCHA verification failed">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
            )}
          </div>
        )}
      </div>

      {userInput && !isValid && (
        <p className="text-red-400 text-sm font-normal" role="alert">
          Characters don't match. Please try again.
        </p>
      )}
    </div>
  );
};

const ConnectPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "", // "service" or "product"
    service: "",
    product: "",
    mobile: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleInquiryTypeChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: value,
      service: "",
      product: "",
    }));
  };

  const handleCaptchaValidation = (isValid: boolean) => {
    setIsCaptchaValid(isValid);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isCaptchaValid) {
      toast.error("Please complete the security verification", {
        style: {
          background: "#000",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
        },
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "connectRequests"), {
        ...formData,
        createdAt: Timestamp.now(),
        ipAddress: "client-submitted",
        userAgent: navigator.userAgent,
      });
      toast.success("Your request has been submitted successfully", {
        style: {
          background: "#000",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
        },
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          inquiryType: "",
          service: "",
          product: "",
          mobile: "",
          message: "",
        });
        setIsSubmitted(false);
        setIsCaptchaValid(false);
      }, 4000);
    } catch (error) {
      console.error("Error adding document:", error);
      toast.error("Failed to submit request. Please try again.", {
        style: {
          background: "#000",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: "web", label: "Web Development" },
    { value: "mobile", label: "Mobile App Development" },
    { value: "ui-ux", label: "UI/UX Design" },
    { value: "ecommerce", label: "E-commerce Solutions" },
    { value: "seo", label: "SEO & Digital Marketing" },
    { value: "consulting", label: "Technology Consulting" },
    { value: "other", label: "Other Services" },
  ];

  const products = [
    { value: "erp", label: "ERP Software" },
    { value: "crm", label: "CRM Software" },
    { value: "hrms", label: "HRMS Software" },
    { value: "event-management", label: "Event Management System" },
    { value: "hospital-management", label: "Hospital Management System" },
    { value: "inventory", label: "Inventory Management System" },
    { value: "other-product", label: "Other Product" },
  ];

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
        {seo}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_50%)]" />

        <div className="relative z-10 text-center max-w-lg mx-auto">
          <div className="mb-12">
            <div className="w-24 h-24 mx-auto mb-8 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/5">
              <Check className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-extralight text-white mb-6 tracking-[0.2em]">
              MESSAGE SENT
            </h1>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8" />
            <p className="text-white/60 font-normal text-lg leading-relaxed">
              Thank you for reaching out. We'll review your request and respond within 24 hours.
            </p>
          </div>

          <Link href="/">
            <button
              className="border border-white/20 hover:border-white/40 bg-transparent hover:bg-white/5 text-white font-normal tracking-widest uppercase transition-all duration-500 px-8 py-6 rounded-full"
              aria-label="Return to home page"
            >
              <ArrowLeft className="w-4 h-4 inline mr-3" />
              Back to Home
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen mt-16 bg-black relative overflow-hidden">
      {seo}

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.02)_0%,transparent_50%)]" />

      {/* Main Content */}
      <div className="relative z-10 px-4 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <header className="text-center mb-16 lg:mb-24">
            <h1 className="text-6xl lg:text-8xl font-extralight text-white mb-8 tracking-[0.3em]">
              CONNECT
              <span className="sr-only"> with Dcodes Technologies</span>
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-12" />
            <p className="text-white/60 font-normal text-lg tracking-wide max-w-2xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Share your project details and let's create something extraordinary together.
            </p>
          </header>

          {/* Form */}
          <div className="max-w-3xl mx-auto">
            <div className="border border-white/10 rounded-2xl backdrop-blur-sm bg-white/[0.02] p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Personal Information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                  {/* Name Field */}
                  <div className="space-y-4">
                    <label htmlFor="name" className="text-white/80 font-normal text-sm tracking-[0.2em] uppercase">
                      Full Name
                    </label>
                    <div className="relative group">
                      <User className="w-5 h-5 text-white/30 group-focus-within:text-white/60 absolute left-4 top-1/2 transform -translate-y-1/2 z-10 transition-colors duration-300" />
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="w-full pl-12 h-16 border border-white/10 focus:border-white/30 bg-transparent text-white placeholder:text-white/30 font-normal focus:outline-none focus:ring-0 transition-all duration-300 rounded-xl"
                        aria-label="Your full name"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-4">
                    <label htmlFor="email" className="text-white/80 font-normal text-sm tracking-[0.2em] uppercase">
                      Email Address
                    </label>
                    <div className="relative group">
                      <Mail className="w-5 h-5 text-white/30 group-focus-within:text-white/60 absolute left-4 top-1/2 transform -translate-y-1/2 z-10 transition-colors duration-300" />
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="w-full pl-12 h-16 border border-white/10 focus:border-white/30 bg-transparent text-white placeholder:text-white/30 font-normal focus:outline-none focus:ring-0 transition-all duration-300 rounded-xl"
                        aria-label="Your email address"
                        aria-required="true"
                      />
                    </div>
                  </div>

                </div>

                {/* You're Here For */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
                    <span className="text-white/80 font-normal text-sm tracking-[0.2em] uppercase">
                      You're Here For
                    </span>

                    <label className="flex items-center gap-3 cursor-pointer group">
                      <span className="relative flex items-center justify-center w-5 h-5">
                        <input
                          type="radio"
                          name="inquiryType"
                          value="service"
                          checked={formData.inquiryType === "service"}
                          onChange={(e) => handleInquiryTypeChange(e.target.value)}
                          required
                          className="peer sr-only"
                          aria-label="I need a service"
                        />
                        <span className="w-5 h-5 rounded-full border-2 border-white/30 peer-checked:border-white transition-colors duration-300" />
                        <span className="absolute w-2.5 h-2.5 rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform duration-200" />
                      </span>
                      <span className="text-white font-normal group-hover:text-white/80 transition-colors duration-300">
                        Service
                      </span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer group">
                      <span className="relative flex items-center justify-center w-5 h-5">
                        <input
                          type="radio"
                          name="inquiryType"
                          value="product"
                          checked={formData.inquiryType === "product"}
                          onChange={(e) => handleInquiryTypeChange(e.target.value)}
                          required
                          className="peer sr-only"
                          aria-label="I need a product"
                        />
                        <span className="w-5 h-5 rounded-full border-2 border-white/30 peer-checked:border-white transition-colors duration-300" />
                        <span className="absolute w-2.5 h-2.5 rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform duration-200" />
                      </span>
                      <span className="text-white font-normal group-hover:text-white/80 transition-colors duration-300">
                        Product
                      </span>
                    </label>
                  </div>

                  {/* Single dropdown - disabled until Service/Product is chosen */}
                  <select
                    value={formData.inquiryType === "service" ? formData.service : formData.inquiryType === "product" ? formData.product : ""}
                    onChange={(e) => handleChange(formData.inquiryType === "product" ? "product" : "service", e.target.value)}
                    disabled={!formData.inquiryType}
                    required
                    className="w-full h-16 px-4 border border-white/10 hover:border-white/30 focus:border-white/40 bg-transparent text-white font-normal focus:outline-none focus:ring-0 rounded-xl transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label={formData.inquiryType === "product" ? "Select a product" : "Select a service"}
                    aria-required="true"
                  >
                    <option value="" className="bg-black text-white">
                      {formData.inquiryType === "product"
                        ? "Select a product"
                        : formData.inquiryType === "service"
                        ? "Select a service"
                        : "Select for..."}
                    </option>
                    {(formData.inquiryType === "product" ? products : services).map((item) => (
                      <option key={item.value} value={item.value} className="bg-black text-white">
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Phone Field */}
                <div className="space-y-4">
                  <label htmlFor="mobile" className="text-white/80 font-normal text-sm tracking-[0.2em] uppercase">
                    Phone Number
                  </label>
                  <div className="relative group">
                    <Phone className="w-5 h-5 text-white/30 group-focus-within:text-white/60 absolute left-4 top-1/2 transform -translate-y-1/2 z-10 transition-colors duration-300" />
                    <input
                      id="mobile"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.mobile}
                      onChange={(e) => handleChange("mobile", e.target.value)}
                      required
                      className="w-full pl-12 h-16 border border-white/10 focus:border-white/30 bg-transparent text-white placeholder:text-white/30 font-normal focus:outline-none focus:ring-0 transition-all duration-300 rounded-xl"
                      aria-label="Your phone number"
                      aria-required="true"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-4">
                  <label htmlFor="message" className="text-white/80 font-normal text-sm tracking-[0.2em] uppercase">
                    Project Details <span className="text-white/40 normal-case font-extralight">(Optional)</span>
                  </label>
                  <div className="relative group">
                    <MessageSquare className="w-5 h-5 text-white/30 group-focus-within:text-white/60 absolute left-4 top-6 z-10 transition-colors duration-300" />
                    <textarea
                      id="message"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={6}
                      className="w-full pl-12 pt-6 border border-white/10 focus:border-white/30 bg-transparent text-white placeholder:text-white/30 resize-none font-normal focus:outline-none focus:ring-0 transition-all duration-300 rounded-xl"
                      aria-label="Project details and message"
                    />
                  </div>
                </div>

                {/* CAPTCHA Section */}
                <CaptchaComponent onValidate={handleCaptchaValidation} />

                {/* Submit Button */}
                <div className="pt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting || !isCaptchaValid}
                    className={`w-full font-normal tracking-[0.3em] uppercase transition-all duration-500 h-16 group relative overflow-hidden rounded-xl ${
                      isCaptchaValid
                        ? "bg-white hover:bg-white/95 text-black"
                        : "bg-white/20 text-white/50 cursor-not-allowed"
                    }`}
                    aria-label={isSubmitting ? "Sending your message..." : "Submit your contact form"}
                    aria-busy={isSubmitting}
                  >
                    <div className="relative flex items-center justify-center gap-4">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" aria-hidden="true"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                        </>
                      )}
                    </div>
                  </button>
                  {!isCaptchaValid && (
                    <p className="text-white/40 text-sm font-normal mt-2 text-center" role="alert">
                      Please complete the security verification to submit the form
                    </p>
                  )}
                </div>

              </form>
            </div>

            {/* Contact Information */}
            <div className="mt-16 pt-16 border-t border-white/5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                {/* Direct Contact */}
                <div className="space-y-8">
                  <h2 className="text-2xl font-extralight text-white tracking-[0.2em] mb-8">
                    DIRECT CONTACT
                  </h2>

                  {/* Phone/WhatsApp */}
                  <div className="group">
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors duration-300">
                        <Phone className="w-4 h-4 text-white/60" />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs font-normal tracking-wide uppercase mb-1">
                          Call / WhatsApp
                        </p>
                        <a
                          href="tel:+916353653977"
                          className="text-white font-normal text-lg hover:text-white/80 transition-colors duration-300"
                          aria-label={`Call Dcodes Technologies at ${PHONE_DISPLAY}`}
                        >
                          {PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Quick Link */}
                  <div className="pl-14">
                    <a
                      href="https://wa.me/916353653977"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300 text-sm font-normal"
                      aria-label="Message Dcodes Technologies on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Message on WhatsApp
                    </a>
                  </div>

                  {/* Office Address / Location */}
                  <div className="group pt-4">
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors duration-300">
                        <MapPin className="w-4 h-4 text-white/60" />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs font-normal tracking-wide uppercase mb-1">
                          Office Location
                        </p>
                        <p className="text-white font-normal text-lg">
                          B-203, Ganesh Glory 11
                        </p>
                      </div>
                    </div>
                    <div className="pl-14">
                      <a
                        href="https://google.com/maps?sca_esv=114ce2f88324942a&output=search&q=b+203+ganesh+glory+11&source=lnms&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832cK-OlyrFp0q_lDSVqWSWpBfB76Efuc1JKh3mTeuQNr6bwDDp1QVMUUATHxfdwqmcD5RsbV8xx1NXo7losxpAckBhT3mYytx8dUyvZTFKsIITlJvTMJQAEwJrOoxRkz1zdxOa4jq9FuWFWo25fCUfhAvFQAgiu8hviwxSnWIsZlt5WWKsg&entry=mc&ved=1t:200715&ictx=111"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300 text-sm font-normal"
                        aria-label="View Dcodes Technologies office location on Google Maps"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Contacts */}
                <div className="space-y-8">
                  <h2 className="text-2xl font-extralight text-white tracking-[0.2em] mb-8">
                    EMAIL CONTACT
                  </h2>

                  <div className="space-y-6">
                    {/* Sales */}
                    <div className="group">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors duration-300">
                          <Mail className="w-4 h-4 text-white/60" />
                        </div>
                        <div>
                          <p className="text-white/40 text-xs font-normal tracking-wide uppercase mb-1">
                            Sales Inquiries
                          </p>
                          <a
                            href={`mailto:${SALES_EMAIL}`}
                            className="text-white font-normal hover:text-white/80 transition-colors duration-300"
                            aria-label={`Email sales department at ${SALES_EMAIL}`}
                          >
                            {SALES_EMAIL}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Career */}
                    <div className="group">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors duration-300">
                          <User className="w-4 h-4 text-white/60" />
                        </div>
                        <div>
                          <p className="text-white/40 text-xs font-normal tracking-wide uppercase mb-1">
                            Career Opportunities
                          </p>
                          <a
                            href="mailto:hr@dcodestech.com"
                            className="text-white font-normal hover:text-white/80 transition-colors duration-300"
                            aria-label="Email HR department at hr@dcodestech.com"
                          >
                            hr@dcodestech.com
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* General Info */}
                    <div className="group">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors duration-300">
                          <MessageSquare className="w-4 h-4 text-white/60" />
                        </div>
                        <div>
                          <p className="text-white/40 text-xs font-normal tracking-wide uppercase mb-1">
                            General Information
                          </p>
                          <a
                            href="mailto:info@dcodestech.com"
                            className="text-white font-normal hover:text-white/80 transition-colors duration-300"
                            aria-label="Email general information at info@dcodestech.com"
                          >
                            info@dcodestech.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="text-center mt-16 pt-12 border-t border-white/5 space-y-6">
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm font-normal tracking-wide">
                <span>24-Hour Response</span>
                <div className="w-1 h-1 bg-white/40 rounded-full" aria-hidden="true"></div>
                <span>Confidential & Secure</span>
                <div className="w-1 h-1 bg-white/40 rounded-full" aria-hidden="true"></div>
                <span>No Spam Policy</span>
              </div>
              <p className="text-white/30 text-xs font-extralight tracking-widest uppercase">
                Your information is protected and will never be shared
              </p>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" aria-hidden="true"></div>
              <p className="text-white/20 text-xs font-extralight">
                Dcodes Technologies
              </p>
            </div>
          </div>
        </div>

        <MapComponent />

      </div>
    </main>
  );
};

export default ConnectPage;