// import React, { useState, useEffect, useRef } from "react";
// import { Menu, X, Phone } from "lucide-react"; 
// import { motion } from "framer-motion";

// const Upper = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const menuRef = useRef(null);

//   // Detect scroll for navbar background
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       const isHamburger = e.target.closest('button[aria-label="Toggle Menu"]');
//       if (menuRef.current && !menuRef.current.contains(e.target) && !isHamburger) {
//         setMenuOpen(false);
//       }
//     };
//     if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
//     else document.removeEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [menuOpen]);

//   const links = [
//     { name: "Home", id: "home" },
//     { name: "Services", id: "services" },
//     { name: "Perks", id: "perks" },
//     { name: "Contact Us", id: "contact" },
//   ];

//   const logoText = "Fluxion Studio"; 
//   const phoneNumber = "+92 men-nai-dun-gi"; 
//   const ctaText = "Book Consultation"; 

//   const menuVariants = {
//     open: { x: 0 },
//     closed: { x: "100%" },
//   };

//   // Smooth scroll to section
//   const handleScrollTo = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//       setMenuOpen(false); // close mobile menu
//     }
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-black shadow-md" : "bg-transparent backdrop-blur-md"
//       }`}
//     >
//       {/* NAVBAR WRAPPER */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <div
//           className={`text-2xl font-extrabold cursor-pointer transition-colors duration-300 ${
//             scrolled ? "text-white" : "text-blue-800"
//           }`}
//           onClick={() => handleScrollTo("home")}
//         >
//           {logoText}
//         </div>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex items-center space-x-8">
//           <ul className="flex space-x-6 font-medium items-center">
//             {links.map((link) => (
//               <li key={link.name}>
//                 <button
//                   onClick={() => handleScrollTo(link.id)}
//                   className={`text-base relative py-2 transition-all duration-200 cursor-pointer ${
//                     scrolled ? "text-gray-200 hover:text-blue-500" : "text-gray-200 hover:text-blue-600"
//                   }`}
//                 >
//                   {link.name}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* PHONE */}
//           <a
//             href={`tel:${phoneNumber.replace(/[^0-9+]/g, "")}`}
//             className={`flex items-center space-x-2 text-lg font-semibold transition duration-300 ml-8 ${
//               scrolled ? "text-gray-200" : "text-gray-200"
//             }`}
//           >
//             <Phone size={18} className={scrolled ? "text-white" : "text-blue-600"} />
//             <span>{phoneNumber}</span>
//           </a>

//           {/* CTA BUTTON */}
//           <motion.button
//             whileHover={{ scale: 1.02, boxShadow: "0 4px 15px rgba(37, 99, 235, 0.4)" }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => handleScrollTo("contact")}
//             className={`ml-6 px-6 py-3 font-semibold rounded-lg shadow-md transition duration-300 cursor-pointer ${
//               scrolled ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"
//             }`}
//           >
//             {ctaText}
//           </motion.button>
//         </div>

//         {/* MOBILE HAMBURGER */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className={`p-2 rounded-lg transition cursor-pointer ${
//               scrolled ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-100"
//             }`}
//             aria-label="Toggle Menu"
//           >
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <motion.div
//         ref={menuRef}
//         initial="closed"
//         animate={menuOpen ? "open" : "closed"}
//         variants={menuVariants}
//         transition={{ type: "tween", duration: 0.3 }}
//         className="fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-40 md:hidden"
//       >
//         <div className="p-6">
//           <div className="flex justify-end pt-2">
//             <button
//               onClick={() => setMenuOpen(false)}
//               className="text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
//             >
//               <X size={28} />
//             </button>
//           </div>

//           <ul className="flex flex-col items-start space-y-2 text-lg font-semibold text-gray-800 mt-10">
//             {links.map((link) => (
//               <motion.li 
//                 key={link.name}
//                 className="w-full"
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.2, delay: 0.1 + links.indexOf(link) * 0.05 }}
//               >
//                 <button
//                   onClick={() => handleScrollTo(link.id)}
//                   className="block w-full py-3 px-4 rounded-lg transition-colors border-l-4 border-transparent hover:bg-gray-50 hover:border-blue-600"
//                 >
//                   {link.name}
//                 </button>
//               </motion.li>
//             ))}

//             <li className="w-full pt-6">
//               <motion.button
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => handleScrollTo("contact")}
//                 className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition duration-300 cursor-pointer"
//               >
//                 {ctaText}
//               </motion.button>
//             </li>
//           </ul>
//         </div>
//       </motion.div>

//       {/* OVERLAY */}
//       {menuOpen && (
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//           className="fixed inset-0 bg-black/50 z-30 md:hidden" 
//           onClick={() => setMenuOpen(false)}
//         />
//       )}
//     </nav>
//   );
// };

// export default Upper;


import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Phone } from "lucide-react"; 
import { motion } from "framer-motion";

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
  const phoneNumber = "+92 men-nai-dun-gi"; 
  const ctaText = "Book Consultation"; 

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu only on outside click
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
      setActiveLink(id); // Highlight the clicked link
      // menu stays open on mobile
    }
  };

  const menuVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-extrabold cursor-pointer"
          onClick={() => handleScrollTo("home")}
        >
          {logoText}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 font-medium items-center">
            {links.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleScrollTo(link.id)}
                  className={`block w-full py-3 px-4 rounded-lg transition-colors border-l-4 border-transparent hover:bg-gray-700 hover:border-blue-600 ${
                    activeLink === link.id ? "bg-white text-black" : "text-white"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <a
            href={`tel:${phoneNumber.replace(/[^0-9+]/g, "")}`}
            className="flex items-center space-x-2 text-lg font-semibold ml-8 text-white"
          >
            <Phone size={18} />
            <span>{phoneNumber}</span>
          </a>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 4px 15px rgba(37, 99, 235, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleScrollTo("contact")}
            className="ml-6 px-6 py-3 font-semibold rounded-lg shadow-md bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
          >
            {ctaText}
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-white hover:bg-gray-800 transition cursor-pointer"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        ref={menuRef}
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 h-screen w-72 bg-gray-900 shadow-2xl z-40 md:hidden text-white"
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-end pt-2">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white p-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
            >
              <X size={28} />
            </button>
          </div>

          <ul className="flex flex-col items-start space-y-2 text-lg font-semibold mt-10 flex-1">
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
                  className={`block w-full py-3 px-4 rounded-lg transition-colors border-l-4 border-transparent text-left ${
                    activeLink === link.id
                      ? "bg-white text-black"
                      : "hover:bg-gray-800 hover:border-blue-600 text-white"
                  }`}
                >
                  {link.name}
                </button>
              </motion.li>
            ))}
            <li className="w-full pt-6">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => handleScrollTo("contact")}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition duration-300 cursor-pointer"
              >
                {ctaText}
              </motion.button>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Overlay */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          // clicking overlay still closes menu
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Upper;
