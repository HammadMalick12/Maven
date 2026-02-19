import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const TechStack = () => {
  const Technologies = [
    { id: "react", name: "React", image: "/images/React.jpg" },
    { id: "node", name: "Node.js", image: "/images/node.jpg" },
    { id: "python", name: "Python", image: "/images/Python.jpg" },
    { id: "aws", name: "AWS", image: "/images/Aws.jpg" },
    { id: "docker", name: "Docker", image: "/images/Docker.jpg" },
    { id: "dotnet", name: ".NET", image: "/images/Net.jpg" },
    { id: "azure", name: "Azure", image: "/images/Azure.jpg" },
    { id: "flutter", name: "Flutter", image: "/images/Flutter.jpg" },
    { id: "tailwind", name: "Tailwind", image: "/images/Tailwind.jpg" },
    { id: "mysql", name: "MySQL", image: "/images/Mysql.jpg" },
    { id: "tiktok", name: "TikTok", image: "/images/Tiktok.jpg" },
    { id: "facebook", name: "Facebook", image: "/images/Facebook.jpg" },
    { id: "instagram", name: "Instagram", image: "/images/Instagram.jpg" },
    { id: "googleads", name: "Google Ads", image: "/images/GoogleAds.jpg" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-bg">
      <Container>
        <SectionHeading
          title="Technology Stack"
          subtitle="Tools and technologies we master"
        />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6 px-4 sm:px-0">
          {Technologies.map((tech, index) => (
            <div
              key={tech.id}
              className="animate-on-scroll bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={tech.image}
                alt={`${tech.name} technology logo used by Maven Technologies`}
                loading="lazy"
                decoding="async"
                className="w-full h-16 sm:h-20 md:h-24 object-contain"
              />
              <p className="text-center text-xs sm:text-sm mt-2 font-medium text-gray-700">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechStack;