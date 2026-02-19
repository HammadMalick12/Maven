import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const Clients = () => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Our Valued Clients",
    "description": "Trusted by leading companies across various industries",
    "numberOfItems": 12,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Cleaning Industry Partner", "image": "/images/Cleaning.jpg" },
      { "@type": "ListItem", "position": 2, "name": "Cleaning Solutions Provider", "image": "/images/Cleaning1.jpg" },
      { "@type": "ListItem", "position": 3, "name": "Cleaning Services Company", "image": "/images/Cleaning2.jpg" },
      { "@type": "ListItem", "position": 4, "name": "Beauty Industry Partner", "image": "/images/Beauty.jpg" },
      { "@type": "ListItem", "position": 5, "name": "Beauty Solutions Provider", "image": "/images/Beauty1.jpg" },
      { "@type": "ListItem", "position": 6, "name": "Beauty Services Company", "image": "/images/Beauty2.jpg" },
      { "@type": "ListItem", "position": 7, "name": "Property Industry Partner", "image": "/images/Property.jpg" },
      { "@type": "ListItem", "position": 8, "name": "Property Solutions Provider", "image": "/images/Property2.jpg" },
      { "@type": "ListItem", "position": 9, "name": "Ticket Industry Partner", "image": "/images/Ticket.jpg" },
      { "@type": "ListItem", "position": 10, "name": "Ticket Solutions Provider", "image": "/images/Ticket1.jpg" },
      { "@type": "ListItem", "position": 11, "name": "Ticket Services Company", "image": "/images/Ticket2.jpg" },
      { "@type": "ListItem", "position": 12, "name": "Neon Industry Partner", "image": "/images/Neon.jpg" }
    ]
  };

  const clients = [
    { id: 1, src: "/images/Cleaning.jpg", alt: "Cleaning Industry Partner" },
    { id: 2, src: "/images/Cleaning1.jpg", alt: "Cleaning Solutions Provider" },
    { id: 3, src: "/images/Cleaning2.jpg", alt: "Cleaning Services Company" },
    { id: 4, src: "/images/Beauty.jpg", alt: "Beauty Industry Partner" },
    { id: 5, src: "/images/Beauty2.jpg", alt: "Beauty Solutions Provider" },
    { id: 6, src: "/images/Beauty3.jpg", alt: "Beauty Services Company" },
    { id: 7, src: "/images/Property.jpg", alt: "Property Industry Partner" },
    { id: 8, src: "/images/Property2.jpg", alt: "Property Solutions Provider" },
    { id: 9, src: "/images/Ticket.jpg", alt: "Ticket Industry Partner" },
    { id: 10, src: "/images/Ticket1.jpg", alt: "Ticket Solutions Provider" },
    { id: 11, src: "/images/Ticket2.jpg", alt: "Ticket Services Company" },
    { id: 12, src: "/images/Neon.jpg", alt: "Neon Industry Partner" },
  ];

  return (
    <>
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <section 
        className="py-16 sm:py-20 bg-white font-roboto"
        aria-label="Our Clients Section"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <Container>
          <SectionHeading
            title="Our Valued Clients"
            subtitle="Trusted by industry leaders across the globe"
          />

          {/* Simple grid layout - 6 columns on desktop, responsive on mobile */}
          <div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            {clients.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-lg p-4 flex items-center justify-center border border-gray-100"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={client.id.toString()} />
                
                <img
                  src={client.src}
                  alt={client.alt}
                  className="w-full h-16 sm:h-20 object-contain"
                  loading="lazy"
                  decoding="async"
                  width="200"
                  height="100"
                  itemProp="image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/fallback-logo.png";
                  }}
                />
                
                {/* Hidden description for SEO */}
                <span className="sr-only" itemProp="name">{client.alt}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Clients;