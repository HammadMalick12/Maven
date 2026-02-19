import React from "react";
import Container from "../ui/Container";

const OneStopSolution = () => {
  const solutions = [
    {
      id: 1,
      number: "01",
      title: "Idea",
      description: "We brainstorm and validate your concept with market research",
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      number: "02",
      title: "Create",
      description: "Design thinking and prototyping for user-centric solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      number: "03",
      title: "Build",
      description: "Agile development with cutting-edge technology stack",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      number: "04",
      title: "Grow",
      description: "Scale your business with data-driven strategies",
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 5,
      number: "05",
      title: "Support",
      description: "24/7 maintenance and continuous improvement",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center px-4 sm:px-0">
          <div className="space-y-6 sm:space-y-10">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  One Stop
                </span>
                <br />
                <span className="text-gray-1100">Production Solution</span>
              </h2>
              <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mt-3 sm:mt-4"></div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {solutions.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative flex items-start gap-4 sm:gap-6 p-3 sm:p-5 rounded-xl sm:rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-500`}></div>

                  <div className="relative flex-shrink-0">
                    <span className="text-5xl sm:text-7xl font-black text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
                      {item.number}
                    </span>
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {item.number}
                    </span>
                  </div>

                  <div className="flex-1 pt-1 sm:pt-2">
                    <h3 className="font-poppins text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-900 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:mt-20 lg:mr-12 mt-8 sm:mt-0">
            <div className="hidden sm:block absolute -top-12 -right-12 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
            <div className="hidden sm:block absolute -bottom-12 -left-12 w-60 h-60 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/team.jpg"
                  alt="Maven Technologies Team - Production Solution"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/30 mix-blend-overlay"></div>
              </div>
            </div>
            
            <div className="hidden sm:block absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 border-t-4 border-r-4 border-accent/30 rounded-tr-3xl -z-10"></div>
            <div className="hidden sm:block absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 border-b-4 border-l-4 border-primary/30 rounded-bl-3xl -z-10"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OneStopSolution;