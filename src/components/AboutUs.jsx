import React from "react";
import Accordion from "../components/Accordion.jsx";
import forest from "../../public/assets/forest.png";
import ocean from "../../public/assets/ocean.png";
import tiger from "../../public/assets/tiger.png";

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="my-14 mx-8 md:mx-32 p-8 md:p-20 rounded-lg shadow-custom-black bg-aboutusBg"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl md:text-5xl font-serif text-center md:text-left font-normal">
              About Us
            </h3>
            <p className="font-sans font-normal text-lg text-center tracking-tight pt-4 md:text-left">
              Our mission is to conserve nature and reduce the most pressing
              threats to the diversity of life on Earth.
            </p>
            <Accordion />
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <img
              src={forest.src}
              alt="Forest"
              className="object-cover rounded-lg"
            />
            <img
              src={ocean.src}
              alt="Ocean"
              className="w-full h-auto object-cover rounded-lg"
            />
            <img
              src={tiger.src}
              alt="Tiger"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
