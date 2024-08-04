import React from "react";
import Button from "./Button";

const Impact = () => {
  return (
    <section id="hero" className="mt-10 relative w-full h-[80vh]">
      <div className="absolute inset-0 bg-cover bg-center w-full h-full bg-[url(/src/assets/Animalbg.png)]">
        <div className="relative z-10 flex flex-col w-full h-full p-6 md:p-12 lg:p-24">
          <div className="text-3xl md:text-4xl lg:text-5xl text-primary font-family font-sans">
            <h3>If you want, you can.</h3>
          </div>
          <div className="text-base md:text-lg lg:text-xl text-white md:text-justify md:w-[100vh] py-4 md:py-6">
            <p>
              Embark on a transformative journey with us as we pledge to
              safeguard our planet's natural treasures. Join our community of
              conservationists and be a vital part of the movement to preserve
              and nurture the beauty of nature. Together, let's make a lasting
              impact on the world we cherish. Join us on this meaningful journey
              towards a sustainable and harmonious future.
            </p>
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
