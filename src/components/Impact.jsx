import React from "react";
import Button from "./Button";

const Impact = () => {
  return (
    <section id="hero" className="mt-14 relative w-full h-[80vh]">
      <div className="absolute  bg-cover bg-center w-full h-full bg-[url(/assets/Animalbg.png)]">
        <div className="relative flex flex-col w-full h-full p-6 md:p-12 lg:p-24">
          <div className="font-serif text-primary text-5xl font-normal">
            <h3>If you want, you can.</h3>
          </div>
          <div className="text-sm md:text-lg font-sans font-normal leading-7 text-white text-justify md:w-1/2 py-4 md:py-6">
            
              Embark on a transformative journey with us as we pledge to
              safeguard our planet's natural treasures. Join our community of
              conservationists and be a vital part of the movement to preserve
              and nurture the beauty of nature. Together, let's make a lasting
              impact on the world we cherish. Join us on this meaningful journey
              towards a sustainable and harmonious future.
      
          </div>
          <div className="pt-4 md:pt-6 lg:pt-8 ">
            <Button>Donate Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
