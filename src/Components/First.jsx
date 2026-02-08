// // import React, { useState, useEffect, useRef } from "react";
// // import { motion, useInView } from "framer-motion";

// // // Images
// // import first from "../assets/images/—Pngtree—black and white background with_15450361 (1).webp";
// // import second from "../assets/images/burning-lamp-hangs-dark-blurred-background-space-text.webp";
// // import forth from "../assets/images/view-male-engineer-work-engineers-day-celebration.webp";
// // import fifth from "../assets/images/electrician-working-switchboard-with-electrical-connection-cable-copy-space.webp";
// // import sixth from "../assets/images/male-electrician-overalls-focused-work-switchboard-with-fuses-using-tablet (3).webp";

// // import Mobile1 from "../assets/images/Mobile1.webp";
// // import Mobile2 from "../assets/images/Mobile2.webp";
// // import Mobile3 from "../assets/images/Mobile3.webp";
// // import Mobile4 from "../assets/images/Mobile4.webp";
// // import Mobile5 from "../assets/images/Mobile5.webp";

// // // Typing Effect Hook
// // const useTypingEffect = (
// //   textArray,
// //   speed = 40,
// //   backSpeed = 20,
// //   backDelay = 5000,
// //   pause = 1000
// // ) => {
// //   const [displayedText, setDisplayedText] = useState("");
// //   const [isDeleting, setIsDeleting] = useState(false);
// //   const [loopNum, setLoopNum] = useState(0);
// //   const [typingSpeed, setTypingSpeed] = useState(speed);

// //   const textIndex = loopNum % textArray.length;
// //   const fullText = textArray[textIndex];

// //   useEffect(() => {
// //     const handleType = () => {
// //       const updatedText = isDeleting
// //         ? fullText.substring(0, displayedText.length - 1)
// //         : fullText.substring(0, displayedText.length + 1);

// //       setDisplayedText(updatedText);

// //       if (!isDeleting && updatedText === fullText) {
// //         setTypingSpeed(backDelay);
// //         setIsDeleting(true);
// //       } else if (isDeleting && updatedText === "") {
// //         setIsDeleting(false);
// //         setLoopNum(loopNum + 1);
// //         setTypingSpeed(pause);
// //       } else {
// //         setTypingSpeed(isDeleting ? backSpeed : speed);
// //       }
// //     };

// //     const timer = setTimeout(handleType, typingSpeed);
// //     return () => clearTimeout(timer);
// //   }, [displayedText, isDeleting, loopNum, fullText, speed, backSpeed, backDelay, pause]);

// //   return displayedText;
// // };

// // function First() {
// //   const images = [forth, fifth, sixth, first, second];
// //   const Mobileimages = [Mobile5, Mobile2, Mobile3, Mobile4, Mobile1];

// //   // 👉 Detect Mobile
// //   const isMobile = window.innerWidth < 640;
// //   const selectedImages = isMobile ? Mobileimages : images;

// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const typedText = useTypingEffect([
// //     "Expert electrical services for homes and businesses.",
// //     "Professional wiring, installations, and repairs you can trust.",
// //     "Lighting, panels, and smart home systems done right.",
// //     "Safe and reliable solutions for every electrical project.",
// //     "Certified electricians ensuring your property stays powered.",
// //     "Upgrades, maintenance, and inspections to prevent hazards.",
// //     "Efficient, precise, and fast — keeping your world connected."
// //   ]);

// //   // Viewport trigger
// //   const ref = useRef(null);
// //   const isInView = useInView(ref, { once: true, margin: "-100px" });

// //   // Auto slide
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prev) => (prev + 1) % selectedImages.length);
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, [selectedImages.length]);

// //   // Parallax
// //   const [parallax, setParallax] = useState({ x: 0, y: 0 });
// //   const handleMouseMove = (e) => {
// //     const isMobileScreen = window.innerWidth < 640;
// //     const x = (e.clientX / window.innerWidth - 0.5) * (isMobileScreen ? 3 : 10);
// //     const y = (e.clientY / window.innerHeight - 0.5) * (isMobileScreen ? 3 : 10);
// //     setParallax({ x, y });
// //   };

// //   const scrollToContact = () => {
// //     const section = document.getElementById("contact");
// //     if (section) section.scrollIntoView({ behavior: "smooth" });
// //   };

// //   return (
// //     <section
// //       ref={ref}
// //       onMouseMove={handleMouseMove}
// //       className="relative w-full h-screen overflow-hidden hover:cursor-pointer"
// //       id="home"
// //     >
// //       {/* BACKGROUND IMAGES */}
// //       {selectedImages.map((img, index) => (
// //         <motion.img
// //           key={index}
// //           src={img}
// //           className="absolute w-full h-full object-cover"
// //           style={{
// //             imageRendering: "auto",
// //             filter: index === currentIndex ? "blur(0.5px)" : "blur(12px)",
// //           }}
// //           initial={{ opacity: 0, scale: 1.05 }}
// //           animate={{
// //             opacity: index === currentIndex && isInView ? 1 : 0,
// //             scale: index === currentIndex && isInView ? 1.08 : 1.0,
// //             x: parallax.x,
// //             y: parallax.y,
// //           }}
// //           transition={{ duration: 3, ease: "easeInOut" }}
// //         />
// //       ))}

// //       {/* DARK OVERLAY */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

// //       {/* CONTENT */}
// //       <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-16 md:px-28">
// //         <motion.h1
// //           initial={{ opacity: 0, x: -80 }}
// //           animate={isInView ? { opacity: 1, x: 0 } : {}}
// //           transition={{ duration: 1 }}
// //           className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white max-w-full sm:max-w-3xl leading-tight"
// //         >
// //           Powering Homes With{" "}
// //           <span className="text-[#FEC509]">Smart Electrical Solutions</span>
// //         </motion.h1>

// //         <motion.p
// //           initial={{ opacity: 0, x: -80 }}
// //           animate={isInView ? { opacity: 1, x: 0 } : {}}
// //           transition={{ delay: 0.4, duration: 1 }}
// //           className="text-base sm:text-lg md:text-2xl text-white max-w-full sm:max-w-2xl mt-4 sm:mt-6"
// //         >
// //           {typedText}
// //         </motion.p>

// //         <motion.button
// //           whileHover={{ scale: 1.07, backgroundColor: "#E5AE00" }}
// //           whileTap={{ scale: 0.95 }}
// //           onClick={scrollToContact}
// //           className="mt-6 sm:mt-8 px-6 sm:px-10 py-3 sm:py-4 w-full sm:w-auto bg-[#FEC509] text-[#000000] text-lg font-semibold rounded-lg shadow-xl cursor-pointer"
// //         >
// //           Get Started →
// //         </motion.button>
// //       </div>
// //     </section>
// //   );
// // }

// // export default First;




// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";

// // Images
// import first from "../assets/images/—Pngtree—black and white background with_15450361 (1).webp";
// import second from "../assets/images/burning-lamp-hangs-dark-blurred-background-space-text.webp";
// import forth from "../assets/images/view-male-engineer-work-engineers-day-celebration.webp";
// import fifth from "../assets/images/electrician-working-switchboard-with-electrical-connection-cable-copy-space.webp";
// import sixth from "../assets/images/male-electrician-overalls-focused-work-switchboard-with-fuses-using-tablet (3).webp";

// import Mobile1 from "../assets/images/Mobile1.webp";
// import Mobile2 from "../assets/images/Mobile2.webp";
// import Mobile3 from "../assets/images/Mobile3.webp";
// import Mobile4 from "../assets/images/Mobile4.webp";
// import Mobile5 from "../assets/images/Mobile5.webp";

// // Typing Effect Hook
// const useTypingEffect = (
//   textArray,
//   speed = 40,
//   backSpeed = 20,
//   backDelay = 5000,
//   pause = 1000
// ) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [typingSpeed, setTypingSpeed] = useState(speed);

//   const textIndex = loopNum % textArray.length;
//   const fullText = textArray[textIndex];

//   useEffect(() => {
//     const handleType = () => {
//       const updatedText = isDeleting
//         ? fullText.substring(0, displayedText.length - 1)
//         : fullText.substring(0, displayedText.length + 1);

//       setDisplayedText(updatedText);

//       if (!isDeleting && updatedText === fullText) {
//         setTypingSpeed(backDelay);
//         setIsDeleting(true);
//       } else if (isDeleting && updatedText === "") {
//         setIsDeleting(false);
//         setLoopNum(loopNum + 1);
//         setTypingSpeed(pause);
//       } else {
//         setTypingSpeed(isDeleting ? backSpeed : speed);
//       }
//     };

//     const timer = setTimeout(handleType, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [displayedText, isDeleting, loopNum, fullText, speed, backSpeed, backDelay, pause]);

//   return displayedText;
// };

// function First() {
//   const images = [forth, fifth, sixth, first, second];
//   const Mobileimages = [Mobile5, Mobile2, Mobile3, Mobile4, Mobile1];

//   // 👉 Detect Mobile (Moved into useEffect to avoid hydration errors if using Next.js/Server Side Rendering)
//   const [isMobile, setIsMobile] = useState(false);
  
//   useEffect(() => {
//       const checkMobile = () => setIsMobile(window.innerWidth < 640);
//       checkMobile();
//       window.addEventListener('resize', checkMobile);
//       return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const selectedImages = isMobile ? Mobileimages : images;

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const typedText = useTypingEffect([
//     "Expert electrical services for homes and businesses.",
//     "Professional wiring, installations, and repairs you can trust.",
//     "Lighting, panels, and smart home systems done right.",
//     "Safe and reliable solutions for every electrical project.",
//     "Certified electricians ensuring your property stays powered.",
//     "Upgrades, maintenance, and inspections to prevent hazards.",
//     "Efficient, precise, and fast — keeping your world connected."
//   ]);

//   // Viewport trigger
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   // Auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % selectedImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [selectedImages.length]);

//   // Parallax
//   const [parallax, setParallax] = useState({ x: 0, y: 0 });
//   const handleMouseMove = (e) => {
//     const isMobileScreen = window.innerWidth < 640;
//     const x = (e.clientX / window.innerWidth - 0.5) * (isMobileScreen ? 3 : 10);
//     const y = (e.clientY / window.innerHeight - 0.5) * (isMobileScreen ? 3 : 10);
//     setParallax({ x, y });
//   };

//   const scrollToContact = () => {
//     const section = document.getElementById("contact");
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       // Added bg-black to prevent white flash before image loads
//       className="relative w-full h-screen overflow-hidden hover:cursor-pointer bg-black" 
//       id="home"
//     >
//       {/* BACKGROUND IMAGES */}
//       {selectedImages.map((img, index) => (
//         <motion.img
//           key={index}
//           src={img}
//           className="absolute w-full h-full object-cover"
//           style={{
//             imageRendering: "auto",
//             filter: index === currentIndex ? "blur(0.5px)" : "blur(12px)",
//           }}
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{
//             opacity: index === currentIndex && isInView ? 1 : 0,
//             scale: index === currentIndex && isInView ? 1.08 : 1.0,
//             x: parallax.x,
//             y: parallax.y,
//           }}
//           transition={{ duration: 3, ease: "easeInOut" }}
//         />
//       ))}

//       {/* OVERLAY: Adjusted to handle Light/Dark mode subtleties if you really want them */}
//       {/* In light mode, we keep the dark overlay so text is readable. 
//           In dark mode, we make it slightly darker for comfort. */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20 dark:from-black/80 dark:via-black/60 dark:to-black/40 transition-colors duration-500"></div>

//       {/* CONTENT */}
//       <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-16 md:px-28 z-10">
//         <motion.h1
//           initial={{ opacity: 0, x: -80 }}
//           animate={isInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 1 }}
//           // Text remains WHITE because it is on a dark image background.
//           className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white max-w-full sm:max-w-3xl leading-tight drop-shadow-md"
//         >
//           Powering Homes With{" "}
//           <span className="text-[#FEC509]">Smart Electrical Solutions</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, x: -80 }}
//           animate={isInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ delay: 0.4, duration: 1 }}
//           // Text remains WHITE for readability on images
//           className="text-base sm:text-lg md:text-2xl text-gray-100 max-w-full sm:max-w-2xl mt-4 sm:mt-6 drop-shadow-sm"
//         >
//           {typedText}
//         </motion.p>

//         <motion.button
//           whileHover={{ scale: 1.07, backgroundColor: "#E5AE00" }}
//           whileTap={{ scale: 0.95 }}
//           onClick={scrollToContact}
//           className="mt-6 sm:mt-8 px-6 sm:px-10 py-3 sm:py-4 w-full sm:w-auto bg-[#FEC509] text-black font-semibold text-lg rounded-lg shadow-xl cursor-pointer"
//         >
//           Get Started →
//         </motion.button>
//       </div>
//     </section>
//   );
// }

// export default First;





import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// ⚠️ ACTION REQUIRED: Replace these image paths with your new Artificial Grass photos!
// Ideally: Bright backyards, close-ups of grass blades, kids playing, golf greens.
import grass1 from "../assets/images/download (3).jfif"; 
import grass2 from "../assets/images/Talipô Campinas-SP.jfif";
import grass3 from "../assets/images/Basketball court.jfif";
import grass4 from "../assets/images/download (2).jfif";
import grass5 from "../assets/images/Let Us Help You Create the Perfect Court for Your Needs.jfif";
import grass6 from "../assets/images/Inspiração.jfif";




// Mobile Images (Portrait crops of grass/lawns)
import Mobile1 from "../assets/images/download (3).jfif"; 
import Mobile2 from "../assets/images/Talipô Campinas-SP.jfif";
import Mobile3 from "../assets/images/Basketball court.jfif";
import Mobile4 from "../assets/images/download (2).jfif";
import Mobile5 from "../assets/images/Let Us Help You Create the Perfect Court for Your Needs.jfif";

// THEME COLORS
const GREEN = "#388E3C";
const GREEN_HOVER = "#2E7D32";

// Typing Effect Hook (Kept exactly the same)
const useTypingEffect = (
  textArray,
  speed = 40,
  backSpeed = 20,
  backDelay = 5000,
  pause = 1000
) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  const textIndex = loopNum % textArray.length;
  const fullText = textArray[textIndex];

  useEffect(() => {
    const handleType = () => {
      const updatedText = isDeleting
        ? fullText.substring(0, displayedText.length - 1)
        : fullText.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTypingSpeed(backDelay);
        setIsDeleting(true);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(pause);
      } else {
        setTypingSpeed(isDeleting ? backSpeed : speed);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, fullText, speed, backSpeed, backDelay, pause]);

  return displayedText;
};

function First() {
  // Use the Grass images here
  const images = [grass6,grass1, grass2, grass3, grass4, grass5];
  const Mobileimages = [Mobile1, Mobile2, Mobile3, Mobile4, Mobile5];

  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 640);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const selectedImages = isMobile ? Mobileimages : images;
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- UPDATED TEXT FOR LANDSCAPING ---
  const typedText = useTypingEffect([
    "Premium artificial turf for homes and businesses.",
    "Lush, green, and maintenance-free lawns.",
    "Pet-friendly, durable, and safe for kids.",
    "Save water and time with our eco-friendly solutions.",
    "Professional installation with invisible seams.",
    "Putting greens, playgrounds, and rooftop landscapes.",
    "Experience the perfect lawn, every single day."
  ]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % selectedImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [selectedImages.length]);

  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const isMobileScreen = window.innerWidth < 640;
    const x = (e.clientX / window.innerWidth - 0.5) * (isMobileScreen ? 3 : 10);
    const y = (e.clientY / window.innerHeight - 0.5) * (isMobileScreen ? 3 : 10);
    setParallax({ x, y });
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen overflow-hidden hover:cursor-pointer bg-black" 
      id="home"
    >
      {/* BACKGROUND IMAGES */}
      {selectedImages.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          className="absolute w-full h-full object-cover"
          style={{
            imageRendering: "auto",
            // Less blur than before so the beautiful grass is visible
            filter: index === currentIndex ? "blur(1px)" : "blur(5px)", 
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: index === currentIndex && isInView ? 1 : 0,
            scale: index === currentIndex && isInView ? 1.05 : 1.0, // Reduced scale effect for realism
            x: parallax.x,
            y: parallax.y,
          }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      ))}

      {/* OVERLAY: 
          Changed to a side gradient (Black -> Transparent).
          This allows white text to be readable on the left, 
          while the bright green grass shines through on the right.
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent transition-colors duration-500"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-16 md:px-28 z-10">
        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white max-w-full sm:max-w-3xl leading-tight drop-shadow-lg"
        >
          Experience the <br/>
          <span style={{ color: GREEN }}>Perfect Lawn</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-base sm:text-lg md:text-2xl text-gray-100 max-w-full sm:max-w-2xl mt-4 sm:mt-6 drop-shadow-md font-medium"
        >
          {typedText}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.07, backgroundColor: GREEN_HOVER }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContact}
          style={{ backgroundColor: GREEN }}
          className="mt-6 sm:mt-8 px-6 sm:px-10 py-3 sm:py-4 w-full sm:w-auto text-white font-bold text-lg rounded-lg shadow-xl cursor-pointer border border-transparent hover:border-white transition-all"
        >
          Get a Free Quote →
        </motion.button>
      </div>
    </section>
  );
}

export default First;