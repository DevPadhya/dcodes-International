"use client";

import React, { useState, useEffect } from "react";
import db from "@/lib/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { User, Mail, Phone, MessageSquare, Send, Check, RefreshCw } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// CAPTCHA Component
const CaptchaComponent = ({ onValidate }: { onValidate: (isValid: boolean) => void }) => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);

  const generateRandomString = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const generateCaptcha = () => {
    const newCaptcha = generateRandomString();
    setCaptchaText(newCaptcha);
    setUserInput('');
    setIsValid(false);
    onValidate(false);
  };

  useEffect(() => {
    generateCaptcha();
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
          className="h-16 px-6 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center border border-white min-w-[160px]"
          style={{
            fontFamily: 'monospace',
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#1e3a8a',
            letterSpacing: '3px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            transform: 'rotate(-2deg)',
            background: 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%)',
            userSelect: 'none',
            pointerEvents: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
          }}
          draggable="false"
        >
          {captchaText}
        </div>
        
        <Button
          type="button"
          onClick={generateCaptcha}
          variant="outline"
          className="h-16 w-16 border-white hover:border-white/40 bg-transparent hover:bg-white/5 text-white transition-all duration-300 rounded-xl"
        >
          <RefreshCw className="w-5 h-5" />
        </Button>
      </div>

      {/* CAPTCHA Input */}
      <div className="relative group">
        <Input
          type="text"
          placeholder="Type the characters above"
          value={userInput}
          onChange={handleInputChange}
          className={`h-16 border-white/10 focus:border-white/30 bg-transparent text-white placeholder:text-white/30 font-normal focus:ring-0 focus:ring-offset-0 transition-all duration-300 rounded-xl ${
            userInput && (isValid ? 'border-green-500/50' : 'border-red-500/50')
          }`}
        />
        {userInput && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {isValid ? (
              <Check className="w-5 h-5 text-green-400" />
            ) : (
              <div className="w-5 h-5 rounded-full border-2 border-red-400 flex items-center justify-center">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
            )}
          </div>
        )}
      </div>
      
      {userInput && !isValid && (
        <p className="text-red-400 text-sm font-normal">
          Characters don't match. Please try again.
        </p>
      )}
    </div>
  );
};

const ConnectUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    mobile: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCaptchaValidation = (isValid: boolean) => {
    setIsCaptchaValid(isValid);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isCaptchaValid) {
      toast.error("Please complete the security verification", {
        style: {
          background: '#000',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.1)'
        }
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, "connectRequests"), {
        ...formData,
        createdAt: Timestamp.now(),
        ipAddress: 'client-submitted',
        userAgent: navigator.userAgent,
      });
      toast.success("Your request has been submitted successfully", {
        style: {
          background: '#000',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.1)'
        }
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          service: "",
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
          background: '#000',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.1)'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: "web", label: "Web Development" },
    { value: "mobile", label: "Mobile Development" },
    { value: "seo", label: "SEO & Marketing" },
    { value: "digital marketing", label: "Digital Marketing" },
    // {value: de}
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
        {/* Subtle background pattern */}
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
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.02)_0%,transparent_50%)]" />

      {/* Main Content */}
      <div className="relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-24 text-white">
            <h1 className="text-6xl lg:text-8xl font-extralight text-white mb-8 tracking-[0.3em]">
              CONNECT
            </h1>
            <div className="w-32 h-px text-white bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-12" />
            <p className="text-white/60 font-normal text-lg tracking-wide max-w-2xl mx-auto leading-relaxed">
Let’s Turn Your Vision Into Reality
            </p>
            Share your project details with us, and together we’ll craft innovative, high-impact solutions that drive growth and success for your business.

          </div>

          {/* Form */}
          <div className="max-w-3xl mx-auto">
            <div className="border border-white/10 rounded-2xl backdrop-blur-sm bg-white/[0.02] p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Personal Information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Name Field */}
                  <div className="space-y-4">
                    <Label htmlFor="name" className="text-white/80 font-normal text-sm tracking-[0.2em] uppercase">
                      Full Name
                    </Label>
                    <div className="relative group">
                      <User className="w-5 h-5 text-white/30 group-focus-within:text-white/60 absolute left-4 top-1/2 transform -translate-y-1/2 z-10 transition-colors duration-300" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="pl-12 h-16 border-white/10 focus:border-white/30 bg-transparent text-white placeholder:text-white/30 font-normal focus:ring-0 focus:ring-offset-0 transition-all duration-300 rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-4">
                    <Label htmlFor="email" className="text-white/80 font-normal text-sm tracking-[0.2em] uppercase">
                      Email Address
                    </Label>
                    <div className="relative group">
                      <Mail className="w-5 h-5 text-white/30 group-focus-within:text-white/60 absolute left-4 top-1/2 transform -translate-y-1/2 z-10 transition-colors duration-300" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="pl-12 h-16 border-white/10 focus:border-white/30 bg-transparent text-white placeholder:text-white/30 font-normal focus:ring-0 focus:ring-offset-0 transition-all duration-300 rounded-xl"
                      />
                    </div>
                  </div>

                </div>

                {/* Service & Contact */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                  {/* Service Select */}
                  <div className="space-y-4">
                    <Label className="text-white/80 font-normal text-sm tracking-[0.2em] uppercase">
                      Service Required
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange("service", value)} required>
                      <SelectTrigger className="h-16 border-white/10 focus:border-white/30 bg-transparent text-white font-normal focus:ring-0 focus:ring-offset-0 rounded-xl">
                        <SelectValue placeholder="Select a service" className="text-white" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/95 backdrop-blur-xl border-white text-white rounded-xl">
                        {services.map((service) => (
                          <SelectItem 
                            key={service.value} 
                            value={service.value}
                            className="font-normal focus:bg-white text-white hover:bg-white/5 hover:text-white py-3"
                          >
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Mobile Field */}
                  <div className="space-y-4">
                    <Label htmlFor="mobile" className="text-white/80 font-normal text-sm tracking-[0.2em] uppercase">
                      Phone Number
                    </Label>
                    <div className="relative group">
                      <Phone className="w-5 h-5 text-white/30 group-focus-within:text-white/60 absolute left-4 top-1/2 transform -translate-y-1/2 z-10 transition-colors duration-300" />
                      <Input
                        id="mobile"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.mobile}
                        onChange={(e) => handleChange("mobile", e.target.value)}
                        required
                        className="pl-12 h-16 border-white/10 focus:border-white/30 bg-transparent text-white placeholder:text-white/30 font-normal focus:ring-0 focus:ring-offset-0 transition-all duration-300 rounded-xl"
                      />
                    </div>
                  </div>

                </div>

                {/* Message Field */}
                <div className="space-y-4">
                  <Label htmlFor="message" className="text-white/80 font-normal text-sm tracking-[0.2em] uppercase">
                    Project Details <span className="text-white/40 normal-case font-extralight">(Optional)</span>
                  </Label>
                  <div className="relative group">
                    <MessageSquare className="w-5 h-5 text-white/30 group-focus-within:text-white/60 absolute left-4 top-6 z-10 transition-colors duration-300" />
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={6}
                      className="pl-12 pt-6 border-white/10 focus:border-white/30 bg-transparent text-white placeholder:text-white/30 resize-none font-normal focus:ring-0 focus:ring-offset-0 transition-all duration-300 rounded-xl"
                    />
                  </div>
                </div>

                {/* CAPTCHA Section */}
                <CaptchaComponent onValidate={handleCaptchaValidation} />

                {/* Submit Button */}
                <div className="pt-8">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isCaptchaValid}
                    className={`w-full font-normal tracking-[0.3em] uppercase transition-all duration-500 h-16 group relative overflow-hidden rounded-xl ${
                      isCaptchaValid 
                        ? 'bg-white hover:bg-white/95 text-black' 
                        : 'bg-white text-white/50 cursor-not-allowed'
                    }`}
                  >
                    <div className="relative flex items-center justify-center gap-4">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span className="text-black">Send Message</span>
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                        </>
                      )}
                    </div>
                  </Button>
                  {!isCaptchaValid && (
                    <p className="text-white/40 text-sm font-normal mt-2 text-center">
                      Please complete the security verification to submit the form
                    </p>
                  )}
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectUsForm;