// // import React from "react";
// // import { TbMoneybag } from "react-icons/tb";
// // import { GiAutoRepair, GiLaurelsTrophy } from "react-icons/gi";
// // import { FaAward } from "react-icons/fa6";
// // import backgroundImage from "../assets/images/Électricité _ quels sont les dangers _.jpeg";


// // function Properties() {
// //   const array = [
// //     { pic: <TbMoneybag />, text: "Affordable price" },
// //     { pic: <FaAward />, text: "100% Guarantee" },
// //     { pic: <GiAutoRepair />, text: "24/7 Availability" },
// //     { pic: <GiLaurelsTrophy />, text: "Award Winning" },
// //   ];

// //   return (
// //     <div
// //       className="h-[427px] w-full flex justify-center items-center bg-cover bg-center relative"
// //       style={{
// //         backgroundImage: `url(${backgroundImage})`,
// //       }}
// //     >
// //       {/* Overlay for blur */}
// //       <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

// //       <div className="relative flex flex-wrap gap-8 justify-center items-center z-10">
// //         {array.map((item, index) => (
// //           <div
// //             key={index}
// //             className="group flex flex-col justify-center items-center space-y-4 p-4 rounded-lg shadow-md h-[200px] w-[300px] cursor-pointer
// //                        bg-white/30 hover:bg-[#DD0733]/80 backdrop-blur-md transition-all duration-300 border border-white/50"
// //           >
// //             {/* Icon */}
// //             <div className="text-gray-800 group-hover:text-white text-5xl transition-colors duration-300">
// //               {item.pic}
// //             </div>

// //             {/* Text */}
// //             <span className="text-gray-800 group-hover:text-white font-bold text-3xl transition-colors duration-300">
// //               {item.text}
// //             </span>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Properties;

// import React, { useRef } from "react";
// import { TbMoneybag } from "react-icons/tb";
// import { GiAutoRepair, GiLaurelsTrophy } from "react-icons/gi";
// import { FaAward } from "react-icons/fa6";
// import backgroundImage from "../assets/images/Électricité _ quels sont les dangers _.jpeg";
// import { motion, useInView } from "framer-motion";

// function Properties() {
//   const array = [
//     { pic: <TbMoneybag />, text: "Affordable price" },
//     { pic: <FaAward />, text: "100% Guarantee" },
//     { pic: <GiAutoRepair />, text: "24/7 Availability" },
//     { pic: <GiLaurelsTrophy />, text: "Award Winning" },
//   ];

//   // Trigger animation once when section enters viewport
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

//   // Roll-up animation for ALL boxes together
//   const containerVariant = {
//     hidden: { opacity: 0, y: 80 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 1,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     },
//   };

//   return (
//     <div
//       ref={sectionRef}
//       className="h-[427px] w-full flex justify-center items-center bg-cover bg-center relative"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//       }}
//     >
//       {/* Background blur overlay */}
//       <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

//       {/* ALL BOXES animate together */}
//       <motion.div
//         variants={containerVariant}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         className="relative flex flex-wrap gap-8 justify-center items-center z-10"
//       >
//         {array.map((item, index) => (
//           <div
//             key={index}
//             className="group flex flex-col justify-center items-center space-y-4 p-4 rounded-lg shadow-md
//                        h-[200px] w-[300px] cursor-pointer bg-white/30 hover:bg-[#DD0733]/80
//                        backdrop-blur-md transition-all duration-300 border border-white/50"
//           >
//             <div className="text-gray-800 group-hover:text-white text-5xl transition-colors duration-300">
//               {item.pic}
//             </div>

//             <span className="text-gray-800 group-hover:text-white font-bold text-3xl transition-colors duration-300">
//               {item.text}
//             </span>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export default Properties;

import React, { useRef } from "react";
import { TbMoneybag } from "react-icons/tb";
import { GiAutoRepair, GiLaurelsTrophy } from "react-icons/gi";
import { FaAward } from "react-icons/fa6";
import backgroundImage from "../assets/images/Électricité _ quels sont les dangers _.jpeg";
import { motion, useInView } from "framer-motion";

function Properties() {
  const array = [
    { pic: <TbMoneybag />, text: "Affordable price" },
    { pic: <FaAward />, text: "100% Guarantee" },
    { pic: <GiAutoRepair />, text: "24/7 Availability" },
    { pic: <GiLaurelsTrophy />, text: "Award Winning" },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariant = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="w-full flex justify-center items-center bg-cover bg-center relative px-4 sm:px-0 py-8 sm:py-12
                 min-h-[427px] lg:min-h-[500px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Background blur overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      {/* Boxes */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative flex flex-wrap gap-4 sm:gap-8 justify-center items-center z-10"
      >
        {array.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col justify-center items-center space-y-3 sm:space-y-4 p-3 sm:p-4 rounded-lg shadow-md
                       h-[180px] sm:h-[200px] w-full sm:w-[300px] cursor-pointer bg-white/30 hover:bg-[#DD0733]/80
                       backdrop-blur-md transition-all duration-300 border border-white/50"
          >
            <div className="text-gray-800 group-hover:text-white text-4xl sm:text-5xl transition-colors duration-300">
              {item.pic}
            </div>

            <span className="text-gray-800 group-hover:text-white font-bold text-2xl sm:text-3xl transition-colors duration-300 text-center">
              {item.text}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Properties;
