import React from "react";
import Button from "./Button";

const Features = () => {
  return (
    <section className="text-5xl font-serif font-normal text-primary mt-16">
      <div className="text-center">What's New</div>
      <div className="flex flex-col md:flex-row mt-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 md:p-6 flex flex-col">
          <div className="flex flex-col h-full">
            <a href="#">
              <img
                src="../src/assets/Godawari.png"
                alt="Botanical Garden"
                className="w-full object-cover rounded-lg"
              />
            </a>
            <div className="p-3">
              <a href="#">
                <h2 className="text-lg font-bold text-gray-900 font-sans tracking-normal dark:text-white leading-7">
                  Navigating Wonders of Godawari's Botanical Garden
                </h2>
              </a>
              <div className="flex items-center justify-between">
                <div className="text-primary font-medium text-xs font-sans text-left ">
                  TRAVEL & BEAUTY
                </div>
                <div>
                  <Button variant="tertiary">Read More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-1/2 flex flex-col mt-6 ">
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row items-start pb-5">
            <a href="#" className="w-full sm:w-1/2">
              <img
                src="../src/assets/Homestay.png"
                alt="Homestay"
                className="w-full h-[160px] object-cover rounded-lg"
              />
            </a>
            <div className="w-full sm:w-1/2 p-4">
              <a href="#">
                <h1 className="text-lg font-bold text-gray-900 font-sans tracking-normal dark:text-white leading-7 ">
                  A Tranquil Two-Day Sojourn in a Himalayan Homestay
                </h1>
              </a>
              <div className="flex flex-row justify-between items-center mt-2 sm:mt-0">
                <div className="text-primary text-xs font-sans text-left tracking-tight pt-4">
                  ECOSYSTEM & LIFESTYLE
                </div>
                <div className="-mr-4 sm:-mr-16">
                  <Button variant="tertiary">Read More</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start pb-5">
            <a href="#" className="w-full sm:w-1/2">
              <img
                src="../src/assets/Butterfly.png"
                alt="Butterfly"
                className="w-full h-[160px] object-cover rounded-lg"
              />
            </a>
            <div className="w-full sm:w-1/2 pl-4 ">
              <a href="#">
                <h1 className="text-lg font-bold text-gray-900 font-sans tracking-normal dark:text-white leading-7 ">
                  Exploring the Rich Tapestry of Butterfly Species in Nepal
                </h1>
              </a>
              <div className="flex flex-row justify-between items-center mt-2 sm:mt-0">
                <div className="text-primary text-xs font-sans text-left tracking-tight pt-4">
                  BIODIVERSITY
                </div>
                <div className="-mr-4 sm:-mr-14">
                  <Button variant="tertiary">Read More</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start ">
            <a href="#" className="w-full sm:w-1/2">
              <img
                src="../src/assets/WildLife.png"
                alt="WildLife"
                className="w-full h-[160px] object-cover rounded-lg"
              />
            </a>
            <div className="w-full sm:w-1/2 p-4">
              <a href="#">
                <h1 className="text-lg font-bold text-gray-900 font-sans tracking-normal dark:text-white leading-7 ">
                  Uniting for Wildlife Conservation with Wild Whisper
                </h1>
              </a>
              <div className="flex flex-row justify-between items-center mt-2 sm:mt-0">
                <div className="text-primary text-xs font-sans text-left tracking-tight pt-4">
                  CONSERVATION
                </div>
                <div className="-mr-4 sm:-mr-16">
                  <Button variant="tertiary">Read More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
