import React from "react";
import Logo from "../assets/logopanda.png";
import Layout from "../layouts/Layout.astro";
import Button from "../components/Button.jsx";

const Navbar = () => {
  const links = [
    { href: "#about", label: "About Us" },
    { href: "#program", label: "Program" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact Us" },
  ];
  return (
    <nav className="mx-auto p-6 container">
      <div className="flex items-center justify-between bg-white h-[3rem] ">
        <div className="py-2">
          <img
            src="../src/assets/logopanda.png"
            alt="Logo"
            className="w-auto h-20 py-auto"
          />
        </div>
        <div className="hidden space-x-6 md:flex justify-center text-sm">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-primary">
              {link.label}
            </a>
          ))}
        </div>
        <Button>Donate Now</Button>
      </div>
    </nav>
  );
};

export default Navbar;
