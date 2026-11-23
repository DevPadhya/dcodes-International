import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Facebook, Instagram } from 'lucide-react';


const Footer = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Where Are We',
      content: 'B 203, Ganesh Glory 11,<br />Jagatpur Road, SG Highway,<br />Ahmedabad, Gujarat - 382470',
      href: 'https://www.google.com/maps/place/Dcodes+Technologies+-+IT+%26+Digital+marketing+company+in+Ahmedabad/@23.1129007,72.5404468,771m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395e838fec06f32f:0xf5637809fb96630a!8m2!3d23.1129007!4d72.5404468!16s%2Fg%2F11lmj9bvgh?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D',
      hoverColor: 'group-hover:bg-red-400'
    },
    {
      icon: Mail,
      label: 'Email',
      content: 'info@dcodestech.com',
      href: 'mailto:info@dcodestech.com',
      hoverColor: 'group-hover:bg-blue-600'
    },
    {
      icon: Phone,
      label: 'Call Us',
      content: '+91 6353 653 977',
      href: 'tel:+916353653977',
      hoverColor: 'group-hover:bg-green-600'
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/AboutUs' },
    { name: 'Careers', href: '/careers' },
  ];

  const solutionLinks = [
    { name: 'App Development', href: '/services/appDevelopment' },
    { name: 'Web Development', href: '/services/webDevelopment' },
    { name: 'ERP System', href: '/services/erpSystem' },
    { name: 'Digital Marketing', href: '/services/digitalMarketing' },
  ];

  const resourceLinks = [
    { name: 'Blog', href: '/blog' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/connect' },
    { name: 'Privacy Policy', href: '/PrivacyPolicy' },
    { name: 'Terms of Use', href: '/TermsAndConditions' },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/dcodes-technologies/",
      color: "hover:bg-blue-600",
      icon: <Linkedin className="w-4 h-4" />,
      label: "LinkedIn"
    },
    {
      href: "https://www.facebook.com/share/1F89hvr99T/",
      color: "hover:bg-blue-500",
      icon: <Facebook className="w-4 h-4" />,
      label: "Facebook"
    },
    {
      href: "https://www.instagram.com/dcodes_technologies",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500",
      icon: <Instagram className="w-4 h-4" />,
      label: "Instagram"
    },
    {
      href: "https://maps.app.goo.gl/4vsyS6bLETJGWhDF6",
      color: "hover:bg-red-600",
      icon: <MapPin className="w-4 h-4" />,
      label: "Google Business"
    },
    {
      href: "https://clutch.co/profile/dcodes-technologies",
      color: "hover:bg-[#EF4335]",
      icon: <span className="text-sm font-bold leading-none">C</span>,
      label: "Clutch"
    }
  ];

  const ContactItem = ({ icon: Icon, label, content, href, hoverColor }: typeof contactInfo[0]) => (
    <div className="flex items-center space-x-4 group mb-6">
      <div className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors duration-300 ${hoverColor}`}>
        {Icon && (
          <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300" />
        )}
      </div>

      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{label}</p>
        {href ? (
          <a
            href={href}
            className="text-gray-300 hover:text-white text-sm font-normal transition-colors"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <p
            className="text-gray-400 text-sm leading-relaxed font-normal group-hover:text-white transition-colors"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </div>
  );

  const LinkSection = ({ title, links }: { title: string; links: typeof companyLinks }) => (
    <div>
      <h3 className="text-white text-lg font-normal mb-6 tracking-wide">{title}</h3>
      <nav className="space-y-3">
        {links.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block text-gray-400 hover:text-white text-sm font-normal transition-all duration-300 hover:translate-x-1"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );

  return (
    <div className="relative">
      {/* Micro-CTA Section */}
      <section className="text-white py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-4 tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-normal">
            Let's build your next digital innovation together.
          </p>
          <a
            href="/connect"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-xl"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 mb-16">

            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-4xl font-normal tracking-tight mb-3">
                  <span className="font-thin">D</span>
                  <span className="font-medium">codes</span>
                </h2>
                <div className="w-20 h-0.5 bg-gradient-to-r from-gray-600 to-white mb-4"></div>
                <p className="text-gray-400 text-sm font-normal tracking-widest uppercase">
                  Driving tech innovation
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                {contactInfo.map((item, index) => (
                  <ContactItem key={index} {...item} />
                ))}

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/916353653977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-4"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              <LinkSection title="Company" links={companyLinks} />
              <LinkSection title="Solutions" links={solutionLinks} />
              <LinkSection title="Resources" links={resourceLinks} />
              <LinkSection title="Support" links={supportLinks} />
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Left Side */}
            <div className="text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start space-y-2 mb-4">
                <p className="text-white text-sm">
                  Dcodes Technologies — Driving Tech Innovation, Building Global Impact.
                </p>
                <p className="text-gray-400 text-sm">
                  Pioneering next-generation software solutions for enterprises worldwide.
                </p>
              </div>
              <p className="text-gray-500 text-sm mb-2">
                © 2025 Dcodes Technologies. All rights reserved. |
                <a href="/PrivacyPolicy" className="hover:text-white mx-1">Privacy Policy</a> |
                <a href="/TermsAndConditions" className="hover:text-white mx-1">Terms of Use</a> |
                <a href="/sitemap" className="hover:text-white mx-1">Sitemap</a>
              </p>
              <p className="text-gray-500 text-xs flex items-center justify-center lg:justify-start space-x-1">
                <span>🌏</span>
                <span>Headquartered in Ahmedabad, India — Serving Clients Globally</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-2 me-5">
              <span className="text-gray-500 text-xs tracking-wider uppercase me-4">Follow Us</span>
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group ${item.color} `}
                  aria-label={item.label}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;