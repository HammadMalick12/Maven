import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// SEO Component
import HelmetSetup from "./components/seo/HelmetSetup";

// Lazy-loaded page components
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/ServicesPage"));
const ServiceDetail = lazy(() => import("./components/sections/ServiceDetail"));
const WhyUs = lazy(() => import("./pages/WhyUsPage"));

// Page loader spinner
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
  </div>
);

function App() {
  return (
    <>
      <HelmetSetup />
      <Header />
      
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/why-us" element={<WhyUs />} />
        </Routes>
      </Suspense>
      
      <Footer />
    </>
  );
}

export default App;