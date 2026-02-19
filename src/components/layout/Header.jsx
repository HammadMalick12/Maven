import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [dropdownCloseTimeout, setDropdownCloseTimeout] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToFooter = () => {
    // Check if we're on the home page
    if (location.pathname === '/') {
      const footerElement = document.getElementById('footer');
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page first, then scroll to footer
      window.location.href = '/#footer';
    }
  };

  const handleDropdownOpen = () => {
    // Clear any existing timeout
    if (dropdownCloseTimeout) {
      clearTimeout(dropdownCloseTimeout);
      setDropdownCloseTimeout(null);
    }
    setIsServicesDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    // Set a timeout before closing the dropdown
    const timeout = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 300); // 300ms delay - gives user time to move mouse to dropdown
    setDropdownCloseTimeout(timeout);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownCloseTimeout) {
        clearTimeout(dropdownCloseTimeout);
      }
    };
  }, [dropdownCloseTimeout]);

  // Updated navigation items with correct paths
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Why Us", href: "/why-us" },
  ];

  const services = [
    "Mobile App Development",
    "Custom Web Development",
    "Engineered Solutions",
    "DevOps Services",
    "AI-Powered Solutions",
    "Social Media Marketing",
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 transition-all duration-300
        ${isScrolled
          ? "bg-[#0b4a7d]/95 backdrop-blur-md shadow-md"
          : "bg-[#0b4a7d]/90 backdrop-blur-sm"
        }
      `}
    >
      <Container>
        <div className="flex items-center justify-between h-full px-2 sm:px-4">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center flex-shrink-0">
            <span className="font-poppins text-xl sm:text-3xl font-bold text-gray-100 leading-tight tracking-wider">
              Maven
            </span>
            <span className="font-bodoni text-[0.5rem] sm:text-[0.6rem] font-light text-gray-300 leading-none tracking-wider">
              Innovate Build Succeed
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12 xl:space-x-16 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative group"
                    onMouseEnter={handleDropdownOpen}
                    onMouseLeave={handleDropdownClose}
                  >
                    <Link
                      to={item.href}
                      className="text-gray-100 hover:text-white transition text-[16px] lg:text-[18px] font-bold tracking-wide relative group whitespace-nowrap"
                    >
                      {item.name}
                      {/* Animated underline effect */}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    {/* Modern Professional Dropdown Menu */}
                    {isServicesDropdownOpen && (
                      <div
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 lg:mt-6 min-w-[250px] lg:min-w-[280px] w-max bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in-up"
                        onMouseEnter={handleDropdownOpen}
                        onMouseLeave={handleDropdownClose}
                      >
                        {/* Elegant top border accent */}
                        <div className="h-1 bg-gradient-to-r from-[#0b4a7d] via-[#0d5a9d] to-[#0b4a7d]"></div>

                        {/* Services in clean vertical hierarchy */}
                        <div className="py-2 lg:py-3">
                          {services.map((service, index) => {
                            // Create a URL-friendly slug from service name
                            const serviceSlug = service.toLowerCase().replace(/\s+/g, '-');
                            return (
                              <Link
                                key={service}
                                to={`/service/${serviceSlug}`}
                                className="group/item px-4 lg:px-8 py-2.5 lg:py-3.5 text-gray-900 hover:bg-gradient-to-r hover:from-[#f0f7ff] hover:to-[#e6f2ff] transition-all duration-300 flex items-center border-b border-gray-100 last:border-0 whitespace-nowrap"
                                onClick={() => setIsServicesDropdownOpen(false)}
                              >
                                {/* Service text with modern typography */}
                                <span className="text-[14px] lg:text-[15px] font-medium group-hover/item:text-[#0b4a7d] transition-all duration-300">
                                  {service}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-100 hover:text-white transition text-[16px] lg:text-[18px] font-bold tracking-wide relative group whitespace-nowrap"
                  >
                    {item.name}
                    {/* Animated underline effect */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button - Top Right */}
          <div className="hidden md:block flex-shrink-0">
            <button
              onClick={scrollToFooter}
              className="bg-white text-[#000080] hover:bg-gray-100 px-4 lg:px-8 py-2 lg:py-3 font-bold text-sm lg:text-lg transition-all duration-300 focus:outline-none rounded-md whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-100 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 sm:top-20 left-0 right-0 bg-[#0b4a7d] shadow-lg py-4 animate-slide-up">
            <Container>
              <nav className="flex flex-col space-y-3 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-100 hover:text-white transition py-2 text-[16px] sm:text-[18px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Mobile menu contact button */}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToFooter();
                  }}
                  className="w-full bg-white text-[#000080] hover:bg-gray-100 py-3 font-bold text-base sm:text-lg transition-all duration-300 focus:outline-none rounded-md mt-2"
                >
                  Contact Us
                </button>
              </nav>
            </Container>
          </div>
        )}
      </Container>
    </header>
  );
};

const Container = ({ children }) => (
  <div className="container mx-auto px-2 sm:px-4 h-full">{children}</div>
);

export default Header;