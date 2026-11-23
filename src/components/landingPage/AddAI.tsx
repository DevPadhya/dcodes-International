import Link from 'next/link'
import React from 'react'

const AboutUsSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-gray-900 flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Subtitle */}
        <div className="mb-8">
          <span className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 text-sm font-medium tracking-wide">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
            DIGITAL INNOVATION
          </span>
        </div>

        {/* Main Heading (ek j h2, be line) */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white leading-[0.9] tracking-tight">
            <span className="block">Add Smart AI Integration</span>
            <span className="block mt-4 bg-gradient-to-r from-white via-gray-300 to-blue-400 bg-clip-text text-transparent">
              to Your Business
            </span>
          </h2>
        </div>

        {/* Team Avatars & Trust Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-3">
              <img
                src="https://static.vecteezy.com/system/resources/previews/022/841/114/original/chatgpt-logo-transparent-background-free-png.png"
                alt="Team member"
                className="w-12 h-12 rounded-full border-3 border-white/20 shadow-lg backdrop-blur-sm"
              />
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png"
                alt="Team member"
                className="w-12 h-12 rounded-full border-3 border-white/20 shadow-lg backdrop-blur-sm"
              />
              <img
                src="https://images.seeklogo.com/logo-png/61/1/deepseek-ai-icon-logo-png_seeklogo-611473.png"
                alt="Team member"
                className="w-12 h-12 rounded-full border-3 border-white/20 shadow-lg backdrop-blur-sm"
              />
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-teal-500 border-3 border-white/20 shadow-lg">
                <span className="text-white font-semibold text-sm">+12</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Heading */}
        <div className="space-y-2 m-3">
          <p className="text-2xl md:text-2xl font-medium bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Accelerate your digital evolution with next-generation AI-powered IT solutions.
          </p>
        </div>

        <div className='text-white m-3  '>
          From automation and predictive analytics to intelligent chatbots we help you stay ahead in the AI era.
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/services/webDevelopment" className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
            <span className="flex items-center">
              Meet Our Technology

              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>

          <Link href="/AboutUs" className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold backdrop-blur-sm hover:bg-white/5 transition-all duration-300">
            See Real Results
          </Link>
        </div>

        {/* Floating Elements for Visual Interest */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
    </div>
  )
}

export default AboutUsSection