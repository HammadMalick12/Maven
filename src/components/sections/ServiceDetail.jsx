import React from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../ui/Container";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { services } from "../data/index.js";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // Find the service based on slug (not ID)
  const service = services.find(s => {
    const slug = s.title.toLowerCase().replace(/\s+/g, '-');
    return slug === serviceId;
  }) || services[0];

  // Map service titles to image paths (using slug pattern)
  const getServiceImage = (title) => {
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

  return (
    <>
      <Header />

      {/* Service Detail Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-bg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center px-4 sm:px-0">

            {/* Left Side - Content */}
            <div className="space-y-4 sm:space-y-6">
              {/* Back link */}
              <Link
                to="/services"
                className="inline-flex items-center text-black font-bold hover:gap-2 transition-all group text-sm sm:text-base"
              >
                <FiArrowRight className="rotate-180 mr-2 group-hover:-translate-x-1 transition" />
                Back to Services
              </Link>

              {/* Title with gradient */}
              <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {service.title}
                </span>
              </h1>

              {/* Description */}
              <p className="text-gray-900 text-base sm:text-lg leading-relaxed">
                {service.description}
              </p>

              {/* Key Benefits */}
              <div className="pt-2 sm:pt-4">
                <h2 className="font-poppins text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">
                  Why Choose Our {service.title}?
                </h2>
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
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-custom font-semibold text-sm sm:text-base hover:bg-accent transition-all hover:scale-105 shadow-lg"
                >
                  Get Started with {service.title}
                </Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative mt-8 sm:mt-0">
              {/* Decorative elements - hidden on mobile */}
              <div className="hidden sm:block absolute -top-8 -right-8 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>

              {/* Main Image */}
              <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={getServiceImage(service.title)}
                  alt={service.title}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20"></div>
              </div>

              {/* Floating Stats Card - adjusted for mobile */}
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
        </Container>
      </section>

      {/* Related Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 px-4 sm:px-0">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Related Services
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {services.filter(s => s.id !== service.id).slice(0, 3).map((relService) => {
              const relSlug = relService.title.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link
                  key={relService.id}
                  to={`/service/${relSlug}`}
                  className="group block"
                >
                  <div className="bg-bg rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                    <div className="h-40 sm:h-48 overflow-hidden">
                      <img
                        src={getServiceImage(relService.title)}
                        alt={relService.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="font-poppins text-lg sm:text-xl font-semibold text-text-primary mb-2">
                        {relService.title}
                      </h3>
                      <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                        {relService.description}
                      </p>
                      <span className="text-blue font-semibold text-sm sm:text-base inline-flex items-center group-hover:gap-2 transition-all">
                        Learn More 
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default ServiceDetail;