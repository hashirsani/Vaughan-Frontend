// // import React, { useRef } from "react";
// // import { TbMoneybag } from "react-icons/tb";
// // import { GiAutoRepair, GiLaurelsTrophy } from "react-icons/gi";
// // import { FaAward } from "react-icons/fa6";
// // import backgroundImage from "../assets/images/Électricité _ quels sont les dangers _.jpeg";
// // import { motion, useInView } from "framer-motion";
// // import box1 from "../assets/images/box1.jpg";
// // import box2 from "../assets/images/box2.jpg";
// // import box3 from "../assets/images/box3.jpg";

// // function Properties() {
// //   const array = [
// //     { pic: <TbMoneybag />, text: "Affordable price", back: box1 },
// //     { pic: <FaAward />, text: "100% Guarantee", back: box2 },
// //     { pic: <GiAutoRepair />, text: "24/7 Availability", back: box3 },
// //     { pic: <GiLaurelsTrophy />, text: "Award Winning", back: null }, // ❗ No background for comparison
// //   ];

// //   const sectionRef = useRef(null);
// //   const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

// //   const containerVariant = {
// //     hidden: { opacity: 0, y: 80 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 1,
// //         ease: [0.25, 0.1, 0.25, 1],
// //       },
// //     },
// //   };

// //   return (
// //     <div
// //       ref={sectionRef}
// //       className="
// //         w-full flex justify-center items-center
// //         bg-cover bg-center relative
// //         px-4 sm:px-0 py-8 sm:py-12
// //         min-h-[427px] lg:min-h-[500px] bg-black      "
// //       style={{
// //         //backgroundImage: `url(${backgroundImage})`,
// //       }}
// //     >
// //       <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

// //       <motion.div
// //         variants={containerVariant}
// //         initial="hidden"
// //         animate={isInView ? "visible" : "hidden"}
// //         className="relative flex flex-wrap gap-4 sm:gap-8 justify-center items-center z-10"
// //       >
// //         {array.map((item, index) => (
// //   <div
// //     key={index}
// //     className="
// //       group relative overflow-hidden
// //       flex flex-col justify-center items-center
// //       space-y-3 sm:space-y-4
// //       p-3 sm:p-4
// //       rounded-lg shadow-lg
// //       h-[180px] sm:h-[200px]
// //       w-full sm:w-[300px]
// //       cursor-pointer
// //       border border-[#FEC509]/40
// //       transition-all duration-300
// //       bg-[#1D1E22]
// //       backdrop-blur-sm
// //       hover:scale-[1.04]
// //     "
// //   >

// //     {/* BLUR + DARK OVERLAY (this fixes everything) */}
// //     {item.back && (
// //       <div
// //         className="
// //           absolute inset-0
          
// //           h-52
// //         "
// //       ></div>
// //     )}

// //     {/* FOREGROUND CONTENT */}
// //     <div className="relative z-20 flex flex-col items-center">
// //       <div
// //         className="
// //           text-[#FEC509]
// //           text-4xl sm:text-5xl
// //         "
// //       >
// //         {item.pic}
// //       </div>

// //       <span
// //         className="
// //           text-[#FEC509]
// //           font-bold 
// //           text-2xl sm:text-3xl 
// //           text-center
// //         "
// //       >
// //         {item.text}
// //       </span>
// //     </div>
// //   </div>
// // ))}

// //       </motion.div>
// //     </div>
// //   );
// // }

// // export default Properties;




// import React, { useRef } from "react";
// import { TbMoneybag } from "react-icons/tb";
// import { GiAutoRepair, GiLaurelsTrophy } from "react-icons/gi";
// import { FaAward } from "react-icons/fa6";
// import { motion, useInView } from "framer-motion";
// import box1 from "../assets/images/box1.jpg";
// import box2 from "../assets/images/box2.jpg";
// import box3 from "../assets/images/box3.jpg";

// function Properties() {
//   const array = [
//     { pic: <TbMoneybag />, text: "Affordable price", back: box1 },
//     { pic: <FaAward />, text: "100% Guarantee", back: box2 },
//     { pic: <GiAutoRepair />, text: "24/7 Availability", back: box3 },
//     { pic: <GiLaurelsTrophy />, text: "Award Winning", back: null },
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
//         relative
//         px-4 sm:px-0 py-8 sm:py-12
//         min-h-[427px] lg:min-h-[500px] 
        
//         /* THEME BACKGROUND: Gray-50 in Light, Black in Dark */
//         bg-gray-50 dark:bg-black 
//         transition-colors duration-300
//       "
//     >
//       {/* Optional: Add a subtle grid or pattern here if you want texture in light mode */}
      
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
//               group relative overflow-hidden
//               flex flex-col justify-center items-center
//               space-y-3 sm:space-y-4
//               p-3 sm:p-4
//               rounded-lg shadow-lg
//               h-[180px] sm:h-[200px]
//               w-full sm:w-[300px]
//               cursor-pointer
//               transition-all duration-300
              
//               /* BORDERS: Light gray in Light Mode, Gold/40 in Dark Mode */
//               border border-gray-200 dark:border-[#FEC509]/40
              
//               /* CARD BG: White in Light Mode, Dark Gray in Dark Mode */
//               bg-white dark:bg-[#1D1E22]
//               backdrop-blur-sm
              
//               hover:scale-[1.04]
//               hover:shadow-xl
//             "
//           >

//             {/* BACKGROUND IMAGE LOGIC (Optional) 
//                 If you want the images to show, uncomment this. 
//                 I added 'opacity-10' so it doesn't make text unreadable.
//             */}
//             {/* {item.back && (
//               <div
//                 className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-20 transition-opacity"
//                 style={{ backgroundImage: `url(${item.back})` }}
//               ></div>
//             )} 
//             */}

//             {/* FOREGROUND CONTENT */}
//             <div className="relative z-20 flex flex-col items-center">
//               <div
//                 className="
//                   /* ICON COLOR: Always Gold (#FEC509) because it looks good on White AND Black */
//                   text-[#FEC509]
//                   text-4xl sm:text-5xl
//                   mb-2
//                 "
//               >
//                 {item.pic}
//               </div>

//               <span
//                 className="
//                   font-bold 
//                   text-2xl sm:text-3xl 
//                   text-center
//                   transition-colors duration-300
                  
//                   /* TEXT COLOR: Dark Gray in Light Mode, Gold (or White) in Dark Mode 
//                      Using Gold here as per your original design preference.
//                   */
//                   text-gray-800 dark:text-[#FEC509]
//                 "
//               >
//                 {item.text}
//               </span>
//             </div>
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
import { motion, useInView } from "framer-motion";
import box1 from "../assets/images/box1.jpg";
import box2 from "../assets/images/box2.jpg";
import box3 from "../assets/images/box3.jpg";

function Properties() {
  const array = [
    { pic: <TbMoneybag />, text: "Affordable price", back: box1 },
    { pic: <FaAward />, text: "100% Guarantee", back: box2 },
    { pic: <GiAutoRepair />, text: "24/7 Availability", back: box3 },
    { pic: <GiLaurelsTrophy />, text: "Award Winning", back: null },
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
        relative
        px-4 sm:px-0 py-8 sm:py-12
        min-h-[427px] lg:min-h-[500px] 
        
        /* THEME BACKGROUND: 
           Light: Very subtle green tint (Fresh/Outdoor feel)
           Dark: Deep Forest Green (Premium Night feel) 
        */
        bg-green-50/30 dark:bg-[#051a0d] 
        transition-colors duration-300
      "
    >
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
              transition-all duration-300
              
              /* BORDERS: 
                 Light: Subtle Green border 
                 Dark: Brighter Green for visibility 
              */
              border border-green-100 dark:border-[#388E3C]/30
              
              /* CARD BG: 
                 Light: Pure White 
                 Dark: Dark Green/Gray Mix 
              */
              bg-white dark:bg-[#0f2e1b]
              backdrop-blur-sm
              
              hover:scale-[1.04]
              hover:shadow-xl hover:shadow-green-100/50 dark:hover:shadow-none
            "
          >

            {/* FOREGROUND CONTENT */}
            <div className="relative z-20 flex flex-col items-center">
              <div
                className="
                  /* ICON COLOR: Lush Grass Green (#388E3C) */
                  text-[#388E3C] dark:text-[#4ade80]
                  text-4xl sm:text-5xl
                  mb-2
                  transition-colors duration-300
                "
              >
                {item.pic}
              </div>

              <span
                className="
                  font-bold 
                  text-2xl sm:text-3xl 
                  text-center
                  transition-colors duration-300
                  
                  /* TEXT COLOR: 
                     Light: Dark Gray (Sharp contrast)
                     Dark: White (Clean night look)
                  */
                  text-gray-800 dark:text-white
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