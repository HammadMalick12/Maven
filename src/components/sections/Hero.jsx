import React from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/bg.jpg"
          alt="Modern Office - Maven Technologies"
          className="w-full h-full object-cover"
          loading="eager" // Hero image should load immediately
          decoding="async"
          fetchpriority="high" // High priority for LCP
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white px-4 sm:px-6">
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-6 animate-on-scroll">
            <span className="text-white">Innovate Build Succeed.</span>
            <br className="hidden sm:block" />
            <span className="text-white/90 text-xl sm:text-2xl font-medium block mt-4">
              Whatever Your Business Needs, We've Got It Covered.
            </span>
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default Hero;