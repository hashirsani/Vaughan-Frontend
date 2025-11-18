// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";

// // Images
// import first from "../assets/images/—Pngtree—black and white background with_15450361.webp";
// import second from "../assets/images/second.webp";
// import forth from "../assets/images/Close-up hand of electrical engineering using measuring to checking electricity_ _ Premium Photo.webp";
// import fifth from "../assets/images/Baixar eletricista engenheiro com plano para Verifica elétrico fornecem dentro frente do ao controle fusível quadro de distribuição gratuitamente.webp";
// import sixth from "../assets/images/fifth.webp";
// import seventh from "../assets/images/seventh.webp";

// const useTypingEffect = (textArray, speed = 40, backSpeed = 20, backDelay = 2500) => {
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
//         setTypingSpeed(speed);
//       } else {
//         setTypingSpeed(isDeleting ? backSpeed : speed);
//       }
//     };

//     const timer = setTimeout(handleType, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [displayedText, isDeleting, loopNum, fullText, speed, backSpeed, backDelay]);

//   return displayedText;
// };

// function First() {
//   const images = [first, second, forth, fifth, sixth, seventh];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const typedText = useTypingEffect([
//     "Innovative digital solutions for all your business needs. We specialize in software development, web and mobile apps, UI/UX design, and IT consulting — delivering fast, reliable, and high-quality results.",
//   ]);

//   // VIEWPORT TRIGGER
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   // KEN BURNS AUTO SLIDE
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   // PARALLAX
//   const [parallax, setParallax] = useState({ x: 0, y: 0 });
//   const handleMouseMove = (e) => {
//     const x = (e.clientX / window.innerWidth - 0.5) * 10;
//     const y = (e.clientY / window.innerHeight - 0.5) * 10;
//     setParallax({ x, y });
//   };

//   return (
//     <section
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       className="relative w-full h-screen overflow-hidden"
//       id="home"
//     >

//       {/* BACKGROUND IMAGES WITH ALL EFFECTS */}
//       {images.map((img, index) => (
//         <motion.img
//           key={index}
//           src={img}
//           className="absolute w-full h-full object-cover"
//           initial={{ opacity: 0, scale: 1.4, filter: "blur(12px)" }}
//           animate={{
//             opacity: index === currentIndex && isInView ? 1 : 0,
//             scale: index === currentIndex && isInView ? 1.1 : 1.3, // Slow Ken Burns zoom
//             filter:
//               index === currentIndex && isInView
//                 ? "blur(0px)"
//                 : "blur(12px)",
//             x: parallax.x, // Parallax
//             y: parallax.y,
//           }}
//           transition={{ duration: 3, ease: "easeInOut" }}
//         />
//       ))}

//       {/* DARK-TO-LIGHT GRADIENT OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/20"></div>

//       {/* CONTENT */}
//       <div className="absolute inset-0 flex flex-col items-start justify-center px-8 sm:px-16 md:px-28">

//         <motion.h1
//           initial={{ opacity: 0, x: -80 }}
//           animate={isInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 1 }}
//           className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white max-w-3xl leading-tight"
//         >
//           Driving Innovation Through{" "}
//           <span className="text-indigo-400">Intelligent Software</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, x: -80 }}
//           animate={isInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ delay: 0.4, duration: 1 }}
//           className="text-lg sm:text-2xl text-gray-200 max-w-2xl mt-6"
//         >
//           {typedText}
//         </motion.p>

//         <motion.button
//           whileHover={{ scale: 1.07 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-8 px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-lg shadow-xl cursor-pointer"
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

// Images
import first from "../assets/images/—Pngtree—black and white background with_15450361.webp";
import second from "../assets/images/second.webp";
import forth from "../assets/images/Close-up hand of electrical engineering using measuring to checking electricity_ _ Premium Photo.webp";
import fifth from "../assets/images/Baixar eletricista engenheiro com plano para Verifica elétrico fornecem dentro frente do ao controle fusível quadro de distribuição gratuitamente.webp";
import sixth from "../assets/images/fifth.webp";
import seventh from "../assets/images/seventh.webp";

const useTypingEffect = (textArray, speed = 40, backSpeed = 20, backDelay = 2500) => {
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
        setTypingSpeed(speed);
      } else {
        setTypingSpeed(isDeleting ? backSpeed : speed);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, fullText, speed, backSpeed, backDelay]);

  return displayedText;
};

function First() {
  const images = [first, second, forth, fifth, sixth, seventh];
  const [currentIndex, setCurrentIndex] = useState(0);

  const typedText = useTypingEffect([
    "Innovative digital solutions for all your business needs. We specialize in software development, web and mobile apps, UI/UX design, and IT consulting — delivering fast, reliable, and high-quality results.",
  ]);

  // VIEWPORT TRIGGER
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // KEN BURNS AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // PARALLAX
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const isMobile = window.innerWidth < 640;
    const x = (e.clientX / window.innerWidth - 0.5) * (isMobile ? 3 : 10);
    const y = (e.clientY / window.innerHeight - 0.5) * (isMobile ? 3 : 10);
    setParallax({ x, y });
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen overflow-hidden"
      id="home"
    >
      {/* BACKGROUND IMAGES */}
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.4, filter: "blur(12px)" }}
          animate={{
            opacity: index === currentIndex && isInView ? 1 : 0,
            scale:
              index === currentIndex && isInView
                ? window.innerWidth < 640
                  ? 1.05
                  : 1.1
                : 1.3,
            filter: index === currentIndex && isInView ? "blur(0px)" : "blur(12px)",
            x: parallax.x,
            y: parallax.y,
          }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      ))}

      {/* DARK GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/20"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-16 md:px-28">
        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white max-w-full sm:max-w-3xl leading-tight"
        >
          Driving Innovation Through{" "}
          <span className="text-indigo-400">Intelligent Software</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-full sm:max-w-2xl mt-4 sm:mt-6"
        >
          {typedText}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 sm:mt-8 px-6 sm:px-10 py-3 sm:py-4 w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-lg shadow-xl cursor-pointer"
        >
          Get Started →
        </motion.button>
      </div>
    </section>
  );
}

export default First;
