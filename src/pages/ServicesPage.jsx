import React from "react";
import { Helmet } from 'react-helmet';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import TechStack from "../components/sections/TechStack";
import CtaSection from "../components/sections/CtaSection";
import useScrollAnimation from "../components/Hooks/useScrollAnimation.js";

const ServicesPage = () => {
  useScrollAnimation();
  
  return (
    <>
      <Helmet>
        <title>Our Services - Maven Technologies | Web, Mobile, DevOps & AI Solutions</title>
        <meta name="description" content="Explore Maven Technologies' comprehensive services: Custom Web Development, Mobile App Development, DevOps, AI-Powered Solutions, and Social Media Marketing for US, UK, Canada & Australian clients." />
        <meta name="keywords" content="web development services, mobile app development, DevOps services, AI solutions, social media marketing, software development company" />
        <meta property="og:title" content="Our Services - Maven Technologies" />
        <meta property="og:description" content="Professional technology services for global businesses. Web, Mobile, DevOps, AI & Marketing solutions." />
        <meta property="og:url" content="https://maventechnologies.com/services" />
        <link rel="canonical" href="https://maventechnologies.com/services" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <CtaSection />
      </main>
    </>
  );
};

export default ServicesPage;