import React from "react";
import Container from "../ui/Container";
import { FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    "Mobile App Development",
    "Custom Web Development",
    "Engineered Solutions",
    "DevOps Services",
    "AI-Powered Solutions",
    "Social Media Marketing",
  ];

  const socialLinks = [
    { icon: FaTwitter, label: "Twitter", name: "Twitter" },
    { icon: FaLinkedin, label: "LinkedIn", name: "LinkedIn" },
    { icon: FaFacebookF, label: "Facebook", name: "Facebook" },
  ];

  const companyInfo = {
    name: "Maven",
    description: "Empowering businesses through innovative technology solutions and digital transformation.",
    email: "info@maventechnolgies.com",
  };

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyInfo.name,
    "url": "https://techsolutions.com",
    "logo": "https://techsolutions.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": companyInfo.phone,
      "contactType": "customer service",
      "email": companyInfo.email
    }
  };

  return (
    <>
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <footer 
        id="footer" 
        className="bg-[#0b4a7d] text-white pt-12 sm:pt-16 pb-6 sm:pb-8 font-roboto"
        aria-label="Site footer"
        itemScope
        itemType="https://schema.org/WPFooter"
      >
        <Container>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Grid with equal width columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-8 sm:mb-12">
              
              {/* Company Info */}
              <div 
                className="w-full text-center sm:text-left"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <h3 
                  className="font-poppins text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white"
                  itemProp="name"
                >
                  {companyInfo.name}
                </h3>
                <p 
                  className="text-white/80 mb-5 sm:mb-6 leading-relaxed font-medium max-w-xs mx-auto sm:mx-0"
                  itemProp="description"
                >
                  {companyInfo.description}
                </p>

                {/* Professional Social Icons - Display only */}
                <div 
                  className="flex justify-center sm:justify-start space-x-3 sm:space-x-4"
                >
                  {socialLinks.map((social) => (
                    <span
                      key={social.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
                    </span>
                  ))}
                </div>
              </div>
            
              {/* Services */}
              <div 
                className="w-full text-center sm:text-left"
                itemScope
                itemType="https://schema.org/SiteNavigationElement"
              >
                <h4 className="font-poppins text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white relative inline-block sm:block">
                  Our Services
                  <span className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-12 h-0.5 bg-white/50" aria-hidden="true"></span>
                </h4>
                <ul className="space-y-2 sm:space-y-3" role="list">
                  {services.map((service) => (
                    <li key={service} role="listitem">
                      <span
                        className="text-white/80 sm:text-white/90 font-medium text-sm sm:text-base inline-block"
                      >
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div 
                className="w-full text-center sm:text-left col-span-1 sm:col-span-2 lg:col-span-1"
                itemScope
                itemType="https://schema.org/ContactPoint"
              >
                <h4 className="font-poppins text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white relative inline-block sm:block">
                  Get In Touch
                  <span className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-12 h-0.5 bg-white/50" aria-hidden="true"></span>
                </h4>
                <ul className="space-y-3 sm:space-y-4 max-w-sm mx-auto sm:mx-0" role="list">
                  <li className="flex items-center sm:items-start justify-center sm:justify-start gap-2 sm:gap-3" role="listitem">
                    <svg 
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth={2} 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span
                      className="text-white font-medium text-sm sm:text-base break-all"
                      itemProp="email"
                    >
                      {companyInfo.email}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-white/30 pt-6 sm:pt-8 text-center">
              <p className="text-white font-semibold text-sm sm:text-base lg:text-lg">
                &copy; {currentYear} {companyInfo.name}. All rights reserved.
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;