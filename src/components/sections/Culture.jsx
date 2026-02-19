import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const Culture = () => {
  return (
    <section className="py-16 sm:py-20 bg-white font-roboto">
      <Container>
        <SectionHeading
          title="Our Vision & Culture"
          subtitle="Our culture fosters innovation and collaboration"
        />

        {/* First Row - Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          <div className="flex justify-center order-1 md:order-1">
            <img
              src="/images/Ourmission.jpg"
              alt="Maven Technologies - Our Mission"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-40 sm:h-48 md:h-56 object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="order-2 md:order-2 text-center md:text-left px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              <span className="text-black">Our</span>{" "}
              <span style={{ color: "#000080" }}>Mission</span>
            </h2>
            <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed text-justify">
              To empower businesses through innovative technology solutions that drive growth, 
              efficiency, and digital transformation. We strive to deliver excellence in every 
              project while fostering long-term partnerships with our clients.
            </p>
          </div>
        </div>

        {/* Second Row - Culture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="flex justify-center order-1 md:order-1">
            <img
              src="/images/Culture.jpg"
              alt="Maven Technologies - Our Culture"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-40 sm:h-48 md:h-56 object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="order-2 md:order-2 text-center md:text-left px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              <span className="text-black">Our</span>{" "}
              <span style={{ color: "#000080" }}>Culture</span>
            </h2>
            <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed text-justify">
              We believe in creating an environment where creativity thrives, collaboration 
              flourishes, and every team member feels valued. Our culture is built on trust, 
              transparency, and continuous learning, enabling us to achieve remarkable results together.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Culture;