import React from "react";
import Button from "./Button";
import logo from "../../public/assets/logopanda.png";
import instagram from "../../public/assets/instagramicon.png";
import facebook from "../../public/assets/fbicon.png";
import twitter from "../../public/assets/twitter.png";
import tiktok from "../../public/assets/tiktok.png";



const Footer = () => {
  return (
    <section
      id="footer"
      className="w-full bg-[#d9d9d9] flex flex-col md:flex-row items-center"
    >
      <div className="pl-24 pr-36">
        <img
          src={logo.src}
          alt="Logo"
          className="w-56 h-auto "
        />
        </div>
        <div className="text-black font-sans font-semibold pt-4 text-sm pr-36 ">
          <p >
            Find us on social media
          </p>
          <div className="flex flex-col">
            <div className="flex items-center font-normal pt-2">
              <img
                src={instagram.src}
                className="w-6 h-6 mr-2"
                alt="Instagram Logo"
              />
              Instagram
            </div>
            <div className="flex items-center font-normal mb-2">
              <img
                src={facebook.src}
                className="w-6 h-6 mr-2"
                alt="Facebook Logo"
              />
              Facebook
            </div>
            <div className="flex items-center font-normal mb-2">
              <img
                src={twitter.src}
                className="w-6 h-6 mr-2"
                alt="Twitter Logo"
              />
              Twitter
            </div>
            <div className="flex items-center font-normal mb-2">
              <img
                src={tiktok.src}
                className="w-6 h-6 mr-2"
                alt="Tiktok Logo"
              />
              Tiktok
          </div>
        </div>
      </div>
      <div className="flex items-center pt-4 ">
        <div className="text-black font-sans text-sm ">
          <p className="ml-8 font-semibold">Explore</p>
          <div className="flex flex-col text-sm">
            <div className="flex items-center  font-sans font-normal pt-2 mb-2">
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
        <div className="ml-64">
          <Button variant="rounded">Donate Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
