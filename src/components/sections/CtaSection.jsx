import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <Container>
        <div className="text-center text-white">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto animate-on-scroll">
            Let's discuss how we can help you achieve your technology goals
          </p>
          <div className="animate-on-scroll">
            <Button variant="white" size="lg" className="bg-white text-primary hover:bg-bg">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;