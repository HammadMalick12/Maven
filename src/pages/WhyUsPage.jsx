import React from "react";
import { Helmet } from 'react-helmet';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Culture from "../components/sections/Culture";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Company from "../components/sections/Company";
import CtaSection from "../components/sections/CtaSection";
import useScrollAnimation from "../components/Hooks/useScrollAnimation.js";
import Clients from "../components/sections/Clients";

const WhyUsPage = () => {
  useScrollAnimation();
  
  return (
    <>
      <Helmet>
        <title>Why Choose Maven Technologies - Our Expertise & Values</title>
        <meta name="description" content="Discover why clients in US, UK, Canada, and Australia choose Maven Technologies. Expert team with 3+ years experience, cutting-edge technology, transparent communication, and 24/7 support." />
        <meta name="keywords" content="why choose us, software company values, expert development team, technology partners, client success" />
        <meta property="og:title" content="Why Choose Maven Technologies" />
        <meta property="og:description" content="Learn about our expertise, company values, and what makes us the preferred technology partner for global businesses." />
        <meta property="og:url" content="https://maventechnologies.com/why-us" />
        <link rel="canonical" href="https://maventechnologies.com/why-us" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Culture />
        <Company />
        <Clients />
        <CtaSection />
      </main>
    </>
  );
};

export default WhyUsPage;