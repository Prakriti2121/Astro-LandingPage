import React from "react";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen">
      <div className="absolute bg-cover bg-center w-full h-full bg-[url(/assets/backgroundimg.png)]">
        <div className="container mx-auto relative flex flex-col items-center justify-center w-full h-full p-4 md:p-8">
          <div className="text-3xl md:text-5xl text-white font-serif font-normal text-center -mt-32">
            <h3>Embrace Nature, Secure Tomorrow</h3>
          </div>
          <div className="pt-4 md:pt-10">
            <Button variant="rounded">Donate Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
