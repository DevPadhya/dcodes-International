import { useState, useEffect } from 'react';
import { FileText, Monitor, Settings, TrendingUp } from 'lucide-react';

export default function WorkProcessUI() {
  const [activeStep, setActiveStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  const steps = [
    {
      number: "01",
      title: "Select Project",
      description: " Define your project goals and scope clearly to set the foundation for success.",
      icon: FileText
    },
    {
      number: "02", 
      title: "Analyze & Research",
      description: "Conduct in-depth requirement analysis and market research to make informed, data-driven decisions.",
      icon: Monitor
    },
    {
      number: "03",
      title: "Execute Plan", 
      description: "Implement strategies with precision, continuous monitoring, and agile adjustments for optimal outcomes.",
      icon: Settings
    },
    {
      number: "04",
      title: "Deliver Excellence",
      description: "Provide polished, high-quality results that exceed expectations and create tangible business impact.", 
      icon: TrendingUp
    }
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-bl from-gray-900 via-black to-gray-900 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-medium text-white uppercase tracking-[0.2em]">
              Work Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-2">
How We Deliver 
            <span className="font-medium text-gray-300"> Exceptional </span>
              Results
          </h2>
          <div className="w-12 h-px bg-gray-500 mx-auto mt-6"></div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          
          {/* Progress Line */}
          <div className="absolute top-16 left-0 w-full h-px bg-gray-200 hidden lg:block">
            <div 
              className="h-full bg-blue-500 transition-all duration-1000 ease-out"
              style={{ 
                width: mounted ? `${((activeStep + 1) / steps.length) * 100}%` : '0%' 
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isPassed = index < activeStep;
              
              return (
                <div
                  key={index}
                  className={`relative group cursor-pointer transition-all duration-700 ${
                    mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex justify-center mb-8">
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-500
                      ${isActive || isPassed
                        ? 'bg-gray-900 text-white' 
                        : 'bg-white border border-gray-200 text-gray-400 group-hover:border-gray-300'
                      }
                    `}>
                      {step.number}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`
                    text-center transition-all duration-500 group-hover:transform group-hover:scale-105
                    ${isActive ? 'scale-105' : ''}
                  `}>
                    
                    {/* Icon */}
                    <div className={`
                      w-12 h-12 mx-auto mb-6 flex items-center justify-center transition-all duration-500
                      ${isActive 
                        ? 'text-blue-400' 
                        : 'text-gray-400 group-hover:text-gray-600'
                      }
                    `}>
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className={`
                      text-lg font-medium mb-4 transition-all duration-500
                      ${isActive ? 'text-blue-600' : 'text-gray-600 group-hover:text-gray-800'}
                    `}>
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className={`
                      text-sm leading-relaxed transition-all duration-500 max-w-xs mx-auto
                      ${isActive ? 'text-blue-400' : 'text-gray-400 group-hover:text-gray-500'}
                    `}>
                      {step.description}
                    </p>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-16 gap-3">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${index === activeStep 
                  ? 'bg-gray-900' 
                  : 'bg-gray-300 hover:bg-gray-400'
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}