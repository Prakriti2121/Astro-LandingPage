import React from 'react';
import Button from './Button';

const Features = () => {
  return (
    <section className="text-4xl font-Vollkorn text-primary mt-16">
      <div className='text-center'>What's New</div>
      <div className="flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col">
          <div className="flex flex-col h-full">
            <a href="#">
              <img
                src="../src/assets/Godawari.png"
                alt="Botanical Garden"
                className="w-full md:w-[570px] h-[250px] md:h-[400px] object-cover rounded-lg"
              />
            </a>
            <div className="p-3">
              <a href="#">
                <h2 className="text-lg font-bold text-gray-900 tracking-normal dark:text-white leading-6">
                  Navigating Wonders of Godawari's Botanical Garden
                </h2>
              </a>
              <div className="flex flex-row justify-between pt-4">
                <div className="text-primary text-xs font-sans text-left pt-4">
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
        <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col md:-ml-7">
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row items-start pb-3">
            <a href="#" className="w-full sm:w-1/2">
              <img
                src="../src/assets/Homestay.png"
                alt="Homestay"
                className="w-full h-[160px] object-cover rounded-lg"
              />
            </a>
            <div className="w-full sm:w-1/2 p-5">
              <a href="#">
                <h1 className="text-base font-bold text-gray-900 tracking-tight dark:text-white leading-5 text-left">
                  A Tranquil Two-Day Sojourn in a Himalayan Homestay
                </h1>
              </a>
              <div className="flex flex-row justify-between items-center mt-2 sm:mt-0">
                <div className="text-primary text-xs font-sans text-left tracking-tight pt-4">
                  ECOSYSTEM & LIFESTYLE
                </div>
                <div className="-mr-4 sm:-mr-14">
                  <Button variant="tertiary">Read More</Button>
                </div>
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row items-start pb-3">
            <a href="#" className="w-full sm:w-1/2">
              <img
                src="../src/assets/Butterfly.png"
                alt="Butterfly"
                className="w-full h-[160px] object-cover rounded-lg"
              />
            </a>
            <div className="w-full sm:w-1/2 p-5">
              <a href="#">
                <h1 className="text-base font-bold text-gray-900 tracking-tight dark:text-white leading-5 text-left">
                  Exploring the Rich Tapestry of Butterfly Species in Nepal
                </h1>
              </a>
              <div className="flex flex-row justify-between items-center mt-2 sm:mt-0">
                <div className="text-primary text-xs font-sans text-left tracking-tight pt-4">
                  BIODIVERSITY
                </div>
                <div className="-mr-4 sm:-mr-14 ">
                  <Button variant="tertiary">Read More</Button>
                </div>
              </div>
            </div>
          </div>
          {/* Row 3 */}
          <div className="flex flex-col sm:flex-row items-start pb-3">
            <a href="#" className="w-full sm:w-1/2">
              <img
                src="../src/assets/WildLife.png"
                alt="WildLife"
                className="w-full h-[160px] object-cover rounded-lg"
              />
            </a>
            <div className="w-full sm:w-1/2 p-5">
              <a href="#">
                <h1 className="text-base font-bold text-gray-900 tracking-tight dark:text-white leading-5 text-left">
                  Uniting for Wildlife Conservation with Wild Whisper
                </h1>
              </a>
              <div className="flex flex-row justify-between items-center mt-2 sm:mt-0">
                <div className="text-primary text-xs font-sans text-left tracking-tight pt-4">
                  CONSERVATION
                </div>
                <div className="-mr-4 sm:-mr-14">
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
