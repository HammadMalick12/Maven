import React, { useState } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { services } from "../data/index.js";
import { FiArrowRight, FiX, FiCheckCircle } from "react-icons/fi";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const getServiceImage = (id) => {
    switch(id) {
      case 1: return "/images/Mobile.jpg";
      case 2: return "/images/Custom.jpg";
      case 3: return "/images/Engineering.jpg";
      case 4: return "/images/Devops.jpg";
      case 5: return "/images/Ai.jpg";
      case 6: return "/images/Smm.jpg";
      default: return "/images/Devops.jpg";
    }
  };

  const getServiceDetailImage = (title) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    switch (slug) {
      case "mobile-app-development": return "/images/Mobile.jpg";
      case "custom-web-development": return "/images/Custom.jpg";
      case "engineered-solutions": return "/images/Engineering.jpg";
      case "devops-services": return "/images/Devops.jpg";
      case "ai-powered-solutions": return "/images/Ai.jpg";
      case "social-media-marketing": return "/images/Smm.jpg";
      default: return "/images/Devops.jpg";
    }
  };

  const benefits = [
    "Expert team with 3+ years experience",
    "Cutting-edge technology stack",
    "Scalable and future-proof solutions",
    "24/7 dedicated support",
    "Agile development methodology",
    "Cost-effective delivery"
  ];

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setShowDetail(true);
    // Smooth scroll to details section
    setTimeout(() => {
      document.getElementById('service-detail')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
  };

  const closeDetail = () => {
    setShowDetail(false);
    setSelectedService(null);
  };

  return (
    <>
      <section id="services" className="py-16 sm:py-20 bg-bg">
        <Container>
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive technology solutions tailored to your business needs"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="p-4 sm:p-8 animate-on-scroll [&_h3]:text-gray-900"
                hover={true}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Image with lazy loading */}
                <div className="mb-4 sm:mb-6 overflow-hidden rounded-xl h-40 sm:h-48">
                  <img
                    src={getServiceImage(service.id)}
                    alt={`${service.title} - Maven Technologies`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <h3 className="font-poppins text-lg sm:text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-text-secondary text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                  {service.description}
                </p>

                <button
                  onClick={() => handleLearnMore(service)}
                  className="text-gray-1000 font-semibold text-sm sm:text-base inline-flex items-center group gap-2 transition-all hover:gap-3 hover:text-accent cursor-pointer"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <FiArrowRight className="transition-all group-hover:translate-x-1" />
                </button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Detail Section - appears when a service is selected */}
      {showDetail && selectedService && (
        <section id="service-detail" className="py-16 sm:py-20 bg-white scroll-mt-20">
          <Container>
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeDetail}
                className="absolute top-0 right-0 z-10 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors"
                aria-label="Close details"
              >
                <FiX className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center px-4 sm:px-0">
                {/* Left Side - Content */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Title */}
                  <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {selectedService.title}
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="text-gray-900 text-base sm:text-lg leading-relaxed">
                    {selectedService.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="pt-2 sm:pt-4">
                    <h3 className="font-poppins text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">
                      Why Choose Our {selectedService.title}?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2 sm:gap-3">
                          <FiCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-1" />
                          <span className="text-gray-1000 text-sm sm:text-base">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 sm:pt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-custom font-semibold text-sm sm:text-base hover:bg-accent transition-all hover:scale-105 shadow-lg"
                    >
                      Get Started with {selectedService.title}
                    </a>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="relative mt-8 sm:mt-0">
                  {/* Decorative elements */}
                  <div className="hidden sm:block absolute -top-8 -right-8 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
                  <div className="hidden sm:block absolute -bottom-8 -left-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>

                  {/* Main Image */}
                  <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={getServiceDetailImage(selectedService.title)}
                      alt={selectedService.title}
                      className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20"></div>
                  </div>

                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-4 sm:-bottom-6 left-2 sm:-left-6 bg-white rounded-lg sm:rounded-xl shadow-xl p-3 sm:p-4 z-20">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-900 rounded-lg sm:rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-sm sm:text-xl">20+</span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Projects</p>
                        <p className="font-bold text-text-primary text-xs sm:text-sm">Successfully Delivered</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};

export default ServicesSection;