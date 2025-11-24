import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../assets/images/Landscape png.png";
import mobileLogo from "../assets/images/Icon logo png.png"

const Upper = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const [activeLink, setActiveLink] = useState(null);

  const links = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Perks", id: "perks" },
    { name: "Contact Us", id: "contact" },
  ];

  const logoText = "Fluxion Studio";
  const phoneNumber = "+14379810224";

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click (mobile only)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveLink(id);
    }
  };

  const menuVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      bg-black/70 backdrop-blur-lg border-b border-[#FEC509]/20 shadow-lg hover:cursor-pointer`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        {/* Logo for Desktop */}
<div
  className="hidden md:block text-2xl font-extrabold cursor-pointer text-[#FEC509]"
  onClick={() => handleScrollTo("home")}
>
  <img
    src={Logo}
    alt="Fluxion Studio Logo"
    className="h-[70px] w-48  "
  />
</div>

{/* Logo for Mobile */}
<div
  className="md:hidden flex items-center"
  onClick={() => handleScrollTo("home")}
>
  <img
    src={mobileLogo}
    alt="Fluxion Studio Mobile Logo"
    className="h-16 w-16"
  />
</div>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 font-medium items-center">
            {links.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleScrollTo(link.id)}
                  className={`block w-full py-3 px-4 rounded-lg transition-all border-l-4
                  ${
                    activeLink === link.id
                      ? "bg-[#FEC509] text-black border-black"
                      : "text-white hover:bg-black/40 hover:border-[#FEC509]"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="tel:+14379810224"
            className="ml-8 px-6 py-3 flex items-center space-x-2 bg-[#FEC509] text-black 
  font-semibold rounded-lg shadow-md hover:bg-[#e6b607] transition"
          >
            <Phone size={18} />
            <span>Call Us</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-white hover:bg-black/40 transition"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>




      <motion.div
  ref={menuRef}
  initial="closed"
  animate={menuOpen ? "open" : "closed"}
  variants={menuVariants}
  transition={{ duration: 0.3 }}
  className="fixed top-0 right-0 h-screen w-72 bg-black shadow-2xl md:hidden text-white z-50"
>
  <div className="p-6 h-full flex flex-col">
    
    {/* Close Button */}
    <div className="flex justify-end pt-2">
      <button
        onClick={() => setMenuOpen(false)}
        className="text-white p-2 rounded-lg hover:bg-black/40"
      >
        <X size={28} />
      </button>
    </div>

    {/* Centered Mobile Logo */}
    <div className="flex justify-center mt-4 mb-6">
      <img
        src={mobileLogo}
        alt="Mobile Logo"
        className="h-20 w-20"
      />
    </div>

    {/* Menu Links */}
    <ul className="flex flex-col items-start space-y-3 text-lg font-semibold flex-1">
      {links.map((link, index) => (
        <motion.li
          key={link.name}
          className="w-full"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
        >
          <button
            onClick={() => handleScrollTo(link.id)}
            className={`block w-full py-3 px-4 rounded-lg border-l-4 transition-all
            ${
              activeLink === link.id
                ? "bg-[#FEC509] text-black border-black"
                : "hover:bg-black/40 hover:border-[#FEC509] text-white"
            }`}
          >
            {link.name}
          </button>
        </motion.li>
      ))}

      <li className="w-full">
        <a
          href="tel:+14379810224"
          className="w-full py-3 mt-4 flex items-center justify-center space-x-2 
          bg-[#FEC509] text-black font-bold rounded-lg hover:bg-[#e6b607] shadow-md"
        >
          <Phone size={20} />
          <span>Call Us</span>
        </a>
      </li>
    </ul>
  </div>
</motion.div>


      {/* Overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Upper;
