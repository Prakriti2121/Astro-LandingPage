import React from "react";
import Button from "../components/Button";


const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen ">
      <div className="absolute inset-0 bg-cover bg-center w-full h-full bg-[url(/src/assets/backgroundimg.png)]">
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6">
          <div className="text-5xl text-white font-family -mt-36">
           <h3> Embrace Nature,Secure Tomorrow</h3>
          </div>
          <div className="pt-6">
          <Button variant="rounded">Donate Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
