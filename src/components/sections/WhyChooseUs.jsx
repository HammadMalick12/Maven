import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { whyChooseUs } from "../data/index.js";

const WhyChooseUs = () => {
  const getWhyChooseUsImage = (id) => {
    switch(id) {
      case 1: return "/images/Itteam.jpg";
      case 2: return "/images/Cutting.jpg";
      case 3: return "/images/team.jpg";
      case 4: return "/images/Support.jpg";
      default: return "/images/Custom.jpg";
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-white font-roboto">
      <Container>
        <SectionHeading
          title="Why Choose Us"
          subtitle="What makes us different from the rest"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
          {whyChooseUs.map((item, index) => (
            <Card
              key={item.id}
              className="p-0 overflow-hidden animate-on-scroll group"
              hover={true}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-0 overflow-hidden h-40 sm:h-48">
                <img
                  src={getWhyChooseUsImage(item.id)}
                  alt={`${item.title} - Why choose Maven Technologies`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-900 text-sm sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;