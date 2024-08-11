import React from "react";
import Layout from "../layouts/Layout.astro";
import logo from "../../public/assets/logopanda.png";
import Button from "../components/Button.jsx";

const Navbar = () => {
  const links = [
    { href: "#about", label: "About Us" },
    { href: "#program", label: "Program" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact Us" },
  ];
  return (
    <nav className="mx-auto container">
      <div className="flex items-center justify-between bg-white">
        <div className="flex-shrink-0">
          <img
            src={logo.src}
            alt="Logo"
            className="w-28 h-auto"
          />
        </div>
        <div className="hidden md:flex gap-8 text-sm">
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
