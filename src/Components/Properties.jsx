// import React, { useRef } from "react";
// import { TbMoneybag } from "react-icons/tb";
// import { GiAutoRepair, GiLaurelsTrophy } from "react-icons/gi";
// import { FaAward } from "react-icons/fa6";
// import backgroundImage from "../assets/images/Électricité _ quels sont les dangers _.jpeg";
// import { motion, useInView } from "framer-motion";
// import box1 from "../assets/images/box1.jpg"
// import box2 from "../assets/images/box2.jpg"
// import box3 from "../assets/images/box3.jpg"
// function Properties() {
//   const array = [
//     { pic: <TbMoneybag />, text: "Affordable price",back: box1 },
//     { pic: <FaAward />, text: "100% Guarantee",back: box2 },
//     { pic: <GiAutoRepair />, text: "24/7 Availability",box3:box3 },
//     { pic: <GiLaurelsTrophy />, text: "Award Winning" },
//   ];

//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
//       className="
//         w-full flex justify-center items-center 
//         bg-cover bg-center relative 
//         px-4 sm:px-0 py-8 sm:py-12
//         min-h-[427px] lg:min-h-[500px]
//         hover:cursor-pointer
//       "
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//       }}
//     >
//       {/* Background blur overlay */}
//       <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

//       {/* Boxes */}
//       <motion.div
//         variants={containerVariant}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         className="relative flex flex-wrap gap-4 sm:gap-8 justify-center items-center z-10"
//       >
//         {array.map((item, index) => (
//           <div
//             key={index}
//             className="
//               group flex flex-col justify-center items-center 
//               space-y-3 sm:space-y-4 
//               p-3 sm:p-4 
//               rounded-lg shadow-lg
//               h-[180px] sm:h-[200px] 
//               w-full sm:w-[300px] 
//               cursor-pointer

//               bg-white/70 backdrop-blur-md
//               border border-[#FEC509]/40

//               transition-all duration-300
//               hover:bg-[#FEC509] hover:shadow-2xl hover:scale-[1.03]
//             "
//           >
//             {/* Icon */}
//             <div
//               className="
//                 text-black 
//                 text-4xl sm:text-5xl 
//                 transition-colors duration-300
//                 group-hover:text-black
//               "
//             >
//               {item.pic}
//             </div>

//             {/* Text */}
//             <span
//               className="
//                 text-black 
//                 font-bold 
//                 text-2xl sm:text-3xl 
//                 transition-colors duration-300 
//                 text-center
//                 group-hover:text-black
//               "
//             >
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
import box1 from "../assets/images/box1.jpg";
import box2 from "../assets/images/box2.jpg";
import box3 from "../assets/images/box3.jpg";

function Properties() {
  const array = [
    { pic: <TbMoneybag />, text: "Affordable price", back: box1 },
    { pic: <FaAward />, text: "100% Guarantee", back: box2 },
    { pic: <GiAutoRepair />, text: "24/7 Availability", back: box3 },
    { pic: <GiLaurelsTrophy />, text: "Award Winning", back: null }, // ❗ No background for comparison
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
      className="
        w-full flex justify-center items-center
        bg-cover bg-center relative
        px-4 sm:px-0 py-8 sm:py-12
        min-h-[427px] lg:min-h-[500px] bg-black      "
      style={{
        //backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative flex flex-wrap gap-4 sm:gap-8 justify-center items-center z-10"
      >
        {array.map((item, index) => (
  <div
    key={index}
    className="
      group relative overflow-hidden
      flex flex-col justify-center items-center
      space-y-3 sm:space-y-4
      p-3 sm:p-4
      rounded-lg shadow-lg
      h-[180px] sm:h-[200px]
      w-full sm:w-[300px]
      cursor-pointer
      border border-[#FEC509]/40
      transition-all duration-300
      bg-white/50
      backdrop-blur-sm
      hover:scale-[1.04]
    "
  >
    {/* BACKGROUND IMAGE */}
    {item.back && (
      <img
        src={item.back}
        className="
          absolute inset-0 w-full h-full object-cover
        "
        alt=""
      />
    )}

    {/* BLUR + DARK OVERLAY (this fixes everything) */}
    {item.back && (
      <div
        className="
          absolute inset-0
          h-52
        "
      ></div>
    )}

    {/* FOREGROUND CONTENT */}
    <div className="relative z-20 flex flex-col items-center">
      <div
        className="
          text-[#FEC509]
          text-4xl sm:text-5xl
        "
      >
        {item.pic}
      </div>

      <span
        className="
          text-[#FEC509]
          font-bold 
          text-2xl sm:text-3xl 
          text-center
        "
      >
        {item.text}
      </span>
    </div>
  </div>
))}

      </motion.div>
    </div>
  );
}

export default Properties;
