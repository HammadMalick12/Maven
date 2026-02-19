import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/sections/Hero';
import Team from '../components/sections/Team';
import TechStack from '../components/sections/TechStack';
import Culture from '../components/sections/Culture';
import CtaSection from '../components/sections/CtaSection';
import Faq from '../components/sections/Faq';
import useScrollAnimation from '../components/Hooks/useScrollAnimation';
import WhyChooseUs from "../components/sections/WhyChooseUs";

const Home = () => {
  useScrollAnimation();

  return (
    <>
      <Helmet>
        <title>Maven Technologies - Innovative Software Solutions for Global Clients</title>
        <meta
          name="description"
          content="Maven Technologies provides web development, mobile apps, DevOps, AI solutions, and social media marketing for US, UK, Canada, and Australian clients."
        />
        <meta
          property="og:title"
          content="Maven Technologies - Innovative Software Solutions"
        />
        <meta
          property="og:description"
          content="Custom software solutions for global businesses. Web, Mobile, DevOps, AI & Marketing."
        />
        <link rel="canonical" href="https://maventechnologies.com" />
      </Helmet>
      <main>
        <Hero />
        <Team />
        <WhyChooseUs />
        <TechStack />
        <Culture />
        <CtaSection />
        <Faq />
      </main>
    </>
  );
};

export default Home;
