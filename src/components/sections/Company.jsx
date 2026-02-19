import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const WhyChooseMaven = () => {
  const getPrincipleImage = (id) => {
    switch (id) {
      case 1: return "/images/Excellence.jpg";
      case 2: return "/images/Clientssuccess.jpg";
      case 3: return "/images/Transparent.jpg";
      case 4: return "/images/Innovation.jpg";
      default: return "/images/excellence.jpg";
    }
  };

  const principles = [
    {
      id: 1,
      title: "Excellence in Delivery",
      description: "We never compromise on quality, ensuring every project exceeds expectations through rigorous testing and attention to detail. Our team follows industry best practices and maintains high standards throughout the development lifecycle. We conduct thorough code reviews and testing procedures to eliminate bugs and issues. Client satisfaction is our top priority, and we go above and beyond to deliver exceptional results.",
      color: "#000080"
    },
    {
      id: 2,
      title: "Client Success First",
      description: "Your success is our success. We partner with you to understand your goals and deliver solutions that drive real business results. Our client-centric approach ensures we align our work with your strategic objectives. We take time to understand your industry, challenges, and unique requirements. Regular feedback sessions help us refine and improve our solutions continuously",
      color: "#000080"
    },
    {
      id: 3,
      title: "Transparent Communication",
      description: "Honest and open dialogue always. We keep you informed at every stage with clear updates, timelines, and realistic expectations. Our project management tools provide complete visibility into progress and milestones. We welcome questions and feedback, fostering a collaborative environment. No hidden agendas or surprises - just straightforward, honest communication",
      color: "#000080"
    },
    {
      id: 4,
      title: "Continuous Innovation",
      description: "Always learning, always improving. We stay ahead of technology trends to bring you cutting-edge solutions. Our team regularly attends workshops, conferences, and training sessions. We experiment with new tools and frameworks to find better ways of solving problems. Innovation is embedded in our culture, encouraging creative thinking and bold ideas",
      color: "#000080"
    }
  ];

  const stats = [
    { id: 1, value: "50+", label: "Projects Delivered" },
    { id: 2, value: "30+", label: "Happy Clients" },
    { id: 3, value: "3+", label: "Years Experience" }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <SectionHeading
          title="Why Choose Maven"
          subtitle="What sets us apart from the competition"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto px-4 sm:px-0">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl sm:text-4xl font-bold text-navy-900 mb-2">{stat.value}</div>
              <div className="text-gray-900 font-medium text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8 sm:space-y-12">
          {principles.map((principle, index) => (
            <div
              key={principle.id}
              className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="md:max-w-2xl w-full px-4 sm:px-0">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="w-1 sm:w-1.5 h-12 sm:h-14 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#000080" }}
                  ></div>
                  <div className="flex-1">
                    <h3 className="font-poppins text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#000080" }}>
                      {principle.title}
                    </h3>
                    <p className="text-gray-900 text-base sm:text-lg leading-relaxed text-justify">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-2/5 w-full px-4 sm:px-0">
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={getPrincipleImage(principle.id)}
                    alt={principle.title}
                    className="w-full h-56 sm:h-64 md:h-80 object-cover hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 text-center px-4 sm:px-0">
          <div className="bg-gradient-to-r from-navy-700 to-blue-600 rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Work With Us?</h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">Let's discuss how we can help transform your business</p>
            <button className="bg-white text-navy-900 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg hover:scale-105 transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseMaven;