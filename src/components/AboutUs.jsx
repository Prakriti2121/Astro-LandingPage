import React from "react";
import Accordion from "../components/Accordion.jsx";

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="mt-16 mx-4 sm:mx-8 md:mx-12 lg:mx-32 lg:h-[30rem] p-4 sm:p-6 border border-gray-600 rounded-lg shadow-custom-black bg-aboutusBg"
    >
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col">
          <div className="space-y-3">
            <h3 className="text-2xl font-serif sm:text-3xl text-center md:text-left font-semibold">
              About Us
            </h3>
            <p className="font-sans sm:text-lg text-center md:text-left">
              Our mission is to conserve nature and reduce the most
              <br />
              pressing threats to the diversity of life on Earth.
            </p>
          </div>
          <div className="flex-1">
            <Accordion />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 sm:p-6  flex flex-col">
          <div className="flex flex-col gap-4">
            <img
              src="../src/assets/forest.png"
              alt="Forest"
              className="w-full h-auto object-cover rounded-lg"
            />
            <img
              src="../src/assets/ocean.png"
              alt="Ocean"
              className="w-full h-auto object-cover rounded-lg"
            />
            <img
              src="../src/assets/tiger.png"
              alt="Tiger"s
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
