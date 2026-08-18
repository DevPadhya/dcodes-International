"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const features = [
    {
        id: 1,
        title: "Real-time Dashboard",
        description: "Monitor sales, inventory, and customer data in real-time with interactive charts and analytics.",
        image: "dashboard.png",
        color: "bg-blue-500",
    },
    {
        id: 2,
        title: "Customer Management",
        description: "Centralized customer database with contact details, service history, and communication logs.",
        image: "customer.png",
        color: "bg-green-500",
    },

    {
        id: 3,
        title: "Sales Tracking",
        description: "Track leads, quotations, and conversions with automated follow-up reminders and pipeline view.",
        image: "sales.png",
        color: "bg-purple-500",
    },
    {
        id: 4,
        title: "Inventory Control",
        description: "Manage CNG kit inventory with stock alerts, supplier tracking, and automated reordering.",
        image: "inventory.png",
        color: "bg-orange-500",
    },
    {   
        id: 5,
        title: "Service Management",
        description: "Schedule installations, track service history, and manage technician assignments.",
        image: "service.png",
        color: "bg-pink-500",
    },
    {
        id: 6,
        title: "Reporting & Analytics",
        description: "Generate financial reports, performance metrics, and business insights with one click.",
        image: "report.png",
        color: "bg-cyan-500",
    },
] ;

export default function HeroSection() {
    const [activeFeature, setActiveFeature] = useState(0);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const toggleDropdown = (id: number) => {
  setOpenDropdown(openDropdown === id ? null : id);
        setActiveFeature(id - 1);
    };

    return (
        <section className="bg-gradient-to-t from-black to-gray-900 text-white py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Powerful Features for Your <span className="text-blue-400">CNG Business</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Discover how our ERP system transforms your operations with intelligent modules
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Side - Feature List */}
                    <div className="lg:w-2/5">
                        <div className="relative">
                            {/* Vertical Blue Line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-800 hidden lg:block">
                                <div
                                    className="absolute w-0.5 bg-blue-500 transition-all duration-500"
                                    style={{
                                        height: `${(activeFeature + 1) * (100 / features.length)}%`,
                                        top: '0'
                                    }}
                                />
                            </div>

                            {/* Mobile Horizontal Indicator */}
                            <div className="lg:hidden mb-6">
                                <div className="h-1 w-full bg-gray-800 rounded-full">
                                    <div
                                        className="h-1 bg-blue-500 rounded-full transition-all duration-500"
                                        style={{ width: `${(activeFeature + 1) * (100 / features.length)}%` }}
                                    />
                                </div>
                            </div>

                            {/* Feature Items */}
                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={feature.id}
                                        className="relative"
                                    >
                                        {/* Desktop Number Indicator */}
                                        <div className="hidden lg:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                                            <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center
                        border-2 transition-all duration-300
                        ${activeFeature === index
                                                    ? 'bg-blue-500 border-blue-500 scale-110'
                                                    : 'bg-black border-gray-700 hover:border-blue-400'
                                                }
                      `}>
                                                <span className={`font-bold ${activeFeature === index ? 'text-white' : 'text-gray-400'}`}>
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Mobile Number Indicator */}
                                        <div className="lg:hidden flex mb-2">
                                            <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        border-2 transition-all duration-300
                        ${activeFeature === index
                                                    ? 'bg-blue-500 border-blue-500'
                                                    : 'bg-black border-gray-700'
                                                }
                      `}>
                                                <span className={`font-bold ${activeFeature === index ? 'text-white' : 'text-gray-400'}`}>
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Feature Card */}
                                        <div
                                            className={`
                        lg:ml-16 p-4 rounded-xl cursor-pointer transition-all duration-300
                        border hover:border-gray-600
                        ${activeFeature === index
                                                    ? 'border-blue-500 bg-gray-900/50 shadow-lg shadow-blue-500/10'
                                                    : 'border-gray-800 bg-gray-900/30 hover:bg-gray-900/50'
                                                }
                      `}
                                            onClick={() => {
                                                toggleDropdown(feature.id);
                                                if (openDropdown !== feature.id) {
                                                    setActiveFeature(index);
                                                }
                                            }}
                                        >
                                            <div className="flex justify-between items-center">
                                                <h3 className={`text-lg md:text-xl font-semibold transition-colors ${activeFeature === index ? 'text-blue-400' : 'text-white'
                                                    }`}>
                                                    {feature.title}
                                                </h3>
                                                <button className="p-1 hover:bg-gray-800 rounded">
                                                    {openDropdown === feature.id ? (
                                                        <ChevronUp className="w-5 h-5 text-gray-400" />
                                                    ) : (
                                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                                    )}
                                                </button>
                                            </div>

                                            {/* Dropdown Content */}
                                            <div className={`
                        overflow-hidden transition-all duration-500 ease-in-out
                        ${openDropdown === feature.id ? 'max-h-48 mt-4 opacity-100' : 'max-h-0 opacity-0'}
                      `}>
                                                <p className="text-gray-400 text-sm md:text-base">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image Preview */}
                    <div className="lg:w-3/5">
                        <div className="sticky top-8">
                            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                                {/* Image Container with Slide Animation */}
                                <div className="relative h-64 md:h-80 lg:h-96">
                                    {features.map((feature, index) => (
                                        <div
                                            key={feature.id}
                                            className={`
                        absolute inset-0 transition-all duration-700 ease-in-out
                        ${activeFeature === index
                                                    ? 'opacity-100 scale-100 z-10'
                                                    : 'opacity-0 scale-95 z-0'
                                                }
                      `}
                                        >
                                            {/* Placeholder for Image - Replace with actual images */}
                                            <div className="w-full h-full bg-black/30 flex items-center justify-center overflow-hidden rounded-lg">
                                                <img
                                                    src={`${feature.image}`}
                                                    alt={feature.title}
                                                    className="max-w-full max-h-full object-contain p-4"
                                                />
                                            </div>

                                            {/* Image Indicator Dots */}
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                {features.map((_, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => {
                                                            setActiveFeature(idx);
                                                            setOpenDropdown(features[idx].id);
                                                        }}
                                                        className={`w-3 h-3 rounded-full transition-all ${activeFeature === idx
                                                            ? 'bg-blue-500 scale-125'
                                                            : 'bg-gray-700 hover:bg-gray-600'
                                                            }`}
                                                        aria-label={`View ${features[idx].title}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Preview Info */}
                                <div className="p-6 border-t border-gray-800">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-white">
                                                {features[activeFeature]?.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm">
                                                Module {activeFeature + 1} of {features.length}
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            {features.map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`w-8 h-1 rounded-full ${activeFeature === idx ? 'bg-blue-500' : 'bg-gray-700'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-300">
                                        {features[activeFeature]?.description}
                                    </p>
                                </div>
                            </div>

                            {/* Navigation Buttons for Mobile */}
                            <div className="flex justify-between mt-6 lg:hidden">
                                <button
                                    onClick={() => {
                                        const prev = activeFeature > 0 ? activeFeature - 1 : features.length - 1;
                                        setActiveFeature(prev);
                                        setOpenDropdown(features[prev].id);
                                    }}
                                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors flex items-center"
                                >
                                    ← Previous
                                </button>
                                <button
                                    onClick={() => {
                                        const next = activeFeature < features.length - 1 ? activeFeature + 1 : 0;
                                        setActiveFeature(next);
                                        setOpenDropdown(features[next].id);
                                    }}
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center"
                                >
                                    Next →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}