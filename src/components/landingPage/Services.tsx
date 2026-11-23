import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight, Users, Target, BarChart3, Search, Minus } from 'lucide-react';
import Link from 'next/link';

const servicesData = [
  {
    id: '01',
    title: 'Social Media Marketing',
    icon: Users,
    description: 'Creative and data-driven campaigns that build brand awareness, boost engagement, and generate real business growth across all major platforms.',
    features: ['Content Strategy', 'Community Management', 'Analytics & Insights', 'Brand Storytelling'],
    accent: 'from-violet-400 to-purple-600',
    accentHover: 'from-violet-300 to-purple-500',
    path: '/services/digitalMarketing'
  },
  {
    id: '02', 
    title: 'Web Development',
    icon: Target,
    description: 'Custom, responsive, and high-performance websites built to align with your business goals and maximize your online potential worldwide.',
    features: ['Responsive Design', 'Frontend & Backend Development', 'Performance Optimization', 'SEO Friendly'],
    accent: 'from-emerald-400 to-teal-600',
    accentHover: 'from-emerald-300 to-teal-500',
    path: '/services/webDevelopment'
  },
  {
    id: '03',
    title: 'App Development',
    icon: BarChart3,
    description: 'Innovative and scalable mobile applications designed to engage users, simplify operations, and drive business growth across platforms.',
    features: ['iOS & Android Apps', 'Cross-Platform Solutions', 'UI/UX Design', 'Performance Optimization'],
    accent: 'from-orange-400 to-red-500',
    accentHover: 'from-orange-300 to-red-400',
    path: '/services/appDevelopment'
  },
  {
    id: '04',
    title: 'SEO (Search Engine Optimization)',
    icon: Search,
    description: 'Result-oriented SEO strategies that boost online visibility, attract quality traffic, and strengthen your brand authority in global markets.',
    features: ['Technical SEO', 'Content Optimization', 'Link Building', 'Performance Tracking'],
    accent: 'from-blue-400 to-indigo-600',
    accentHover: 'from-blue-300 to-indigo-500',
    path: '/services/digitalMarketing'
  },
];

const ServiceCard = ({ service, index }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const { id, title, icon: IconComponent, description, features, accent, accentHover, path } = service;

  return (
    <Link href={path} className="block group relative" style={{ animationDelay: `${index * 150}ms` }}>
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect */}
        <div className={`absolute -inset-0.5 bg-gradient-to-bl from-gray-900 via-black to-gray-900 ${accent} rounded-2xl opacity-0 blur-xl transition-all duration-700 group-hover:opacity-20`} />
        
        <Card className="relative h-[420px] bg-black border border-white/5 rounded-2xl overflow-hidden transition-all duration-700 ease-out group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-white/5 cursor-pointer">
          
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>
          
          <CardContent className="relative h-full p-8 flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  {/* Icon container with gradient border */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${isHovered ? accentHover : accent} rounded-xl opacity-0 transition-all duration-500 ${isHovered ? 'opacity-100' : ''}`} />
                  <div className="relative bg-black rounded-xl p-3 border border-white/10 transition-colors duration-500 group-hover:border-white/20">
                    <IconComponent className={`h-6 w-6 text-white transition-all duration-500 ${isHovered ? 'scale-110' : ''}`} />
                  </div>
                </div>
                <span className="text-white/40 text-sm font-mono tracking-wider">{id}</span>
              </div>
              
              {/* Arrow - only visible on hover */}
              <div className={`transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                <ArrowUpRight className="h-5 w-5 text-white/60" />
              </div>
            </div>

            {/* Title */}
            <div className="mb-6">
              <h3 className="text-white text-2xl font-bold leading-tight mb-2 transition-all duration-300 group-hover:text-white">
                {title}
              </h3>
              <div className={`h-0.5 bg-gradient-to-r ${accent} transition-all duration-700 ${isHovered ? 'w-12 opacity-100' : 'w-0 opacity-0'}`} />
            </div>

            {/* Description */}
            <div className="flex-1 mb-6">
              <p className={`text-white/70 text-sm leading-relaxed transition-all duration-500 ${isHovered ? 'text-white/90' : ''}`}>
                {description}
              </p>
            </div>

            {/* Bottom gradient line */}
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${accent} transition-all duration-700 ${isHovered ? 'w-full opacity-60' : 'w-0 opacity-0'}`} />
            
          </CardContent>
        </Card>
      </div>
    </Link>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-gray-900 via-black to-gray-900">
      
      {/* Subtle background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto mb-0 px-6 py-10">
        
        {/* Header */}
        <div className="mb-10 max-w-7xl">
          <div className="flex items-center space-x-3 mb-8">
            <div className="h-px bg-gradient-to-r from-white/20 to-transparent w-12" />
          </div>
          
          <h2 className="text-5xl md:text-7xl w-full font-bold text-white mb-6 leading-[0.9] tracking-tight">
            Your Trusted Technology Partner 
            <br />
            <span className="text-white/60">for Digital Presence</span>
          </h2>
          
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            At Dcodes Technologies, we are more than just a development company we're your long-term digital partner. With over a decade of experience, we provide complete IT solutions, including Website Development, Software Development, Web-based ERPs, Mobile App Development, SEO, and Digital Marketing.
          </p>
          <p className='text-white/60 text-lg leading-relaxed max-w-2xl'>
            Our mission is simple to deliver smart, scalable, and result-driven solutions that help <br /> businesses grow faster in the global market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 text-center">
          <div className="flex items-center justify-center space-x-3 text-white/30">
            <div className="h-px bg-white/10 w-8" />
            <span className="text-sm font-mono tracking-wider">Ready to start?</span>
            <div className="h-px bg-white/10 w-8" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;