import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <section
      id="footer"
      className="w-full h-auto bg-[#d9d9d9]  flex flex-col md:flex-row items-center gap-16 "
    >
      <div className="flex items-center mx-14">
        <img
          src="../src/assets/logopanda.png"
          alt="Logo"
          className="w-56 h-auto -mt-12 mr-4"
        />
        <div className="text-black font-sans text-xs">
          <p className="mx-32 font-semibold text-sm mt-3 ">
            Find us on social media
          </p>
          <div className="flex flex-col mt-3 mx-32 mb-12">
            <div className="flex items-center mb-2">
              <img
                src="../src/assets/instagramicon.png"
                className="w-6 h-6 mr-2"
                alt="Instagram Logo"
              />
              Instagram
            </div>
            <div className="flex items-center mb-2">
              <img
                src="../src/assets/fbicon.png"
                className="w-6 h-6 mr-2"
                alt="Facebook Logo"
              />
              Facebook
            </div>
            <div className="flex items-center mb-2">
              <img
                src="../src/assets/twitter.png"
                className="w-6 h-6 mr-2"
                alt="Twitter Logo"
              />
              Twitter
            </div>
            <div className="flex items-center">
              <img
                src="../src/assets/tiktok.png"
                className="w-6 h-6 mr-2"
                alt="Tiktok Logo"
              />
              Tiktok
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center -mx-20">
        <div className="text-black font-sans text-xs">
          <p className="mx-24  font-semibold mt-3 text-sm">Explore</p>
          <div className="flex flex-col mt-3 mx-16 mb-12">
            <div className="flex items-center mb-2">
              <span className="w-6 h-6 mr-2"></span>
              Aboutus
            </div>
            <div className="flex items-center mb-2">
              <span className="w-6 h-6 mr-2"></span>
              Program
            </div>
            <div className="flex items-center mb-2">
              <span className="w-6 h-6 mr-2"></span>
              Blogs
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 mr-2"></span>
              ContactUs
            </div>
          </div>
        </div>
        <div className="ml-16 -mt-8">
          <Button variant="rounded">Donate Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
