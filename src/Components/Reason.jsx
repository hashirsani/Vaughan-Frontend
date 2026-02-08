// // import React from "react";
// // import backgroundImage from "../assets/images/pic.jpeg";
// // import { TbHeadset, TbClock } from "react-icons/tb";
// // import { FaShieldAlt, FaTag } from "react-icons/fa";
// // import { motion } from "framer-motion";

// // function Reason() {
// //   const GOLD = "#FEC509";

// //   const features = [
// //     { icon: <TbHeadset />, text: "Custom support" },
// //     { icon: <FaShieldAlt />, text: "Insured expert" },
// //     { icon: <FaTag />, text: "Flat rate" },
// //     { icon: <TbClock />, text: "24/7 Available" },
// //   ];

// //   return (
// //     <div className="w-full flex flex-col lg:flex-row bg-[#1D1E22] overflow-hidden min-h-screen lg:min-h-[600px] hover:cursor-pointer">

// //       {/* Left image */}
// //       <motion.div
// //         initial={{ x: -150, opacity: 0 }}
// //         whileInView={{ x: 0, opacity: 1 }}
// //         viewport={{ once: true, amount: 0.3 }}
// //         transition={{ duration: 1.5, ease: "easeOut" }}
// //         className="w-full lg:w-[45%] h-64 sm:h-96 lg:h-auto bg-cover bg-center"
// //         style={{ backgroundImage: `url(${backgroundImage})`, minHeight: "300px" }}
// //       />

// //       {/* Right content */}
// //       <motion.div
// //         initial={{ x: 150, opacity: 0 }}
// //         whileInView={{ x: 0, opacity: 1 }}
// //         viewport={{ once: true, amount: 0.3 }}
// //         transition={{ duration: 1.5, ease: "easeOut" }}
// //         className="w-full lg:w-[55%] flex justify-center items-center px-4 py-8 lg:py-0"
// //       >
// //         <div className="py-8 lg:py-16 px-4 lg:px-6 bg-[#1D1E22] text-white max-w-lg">
          
// //           {/* Heading */}
// //           <div className="mb-6 lg:mb-8 text-left">
// //             <p className="text-sm sm:text-base mb-2 leading-relaxed" style={{ color: GOLD }}>
// //               WHY CHOOSE OUR SERVICE
// //             </p>

// //             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-5 leading-tight">
// //               Great reason for the people choose our service
// //             </h2>

// //             <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
// //               For more than a decade, we’ve been building the electrical service
// //               network of the future — delivering reliable, safe and professional
// //               solutions with guaranteed customer satisfaction.
// //             </p>
// //           </div>

// //           {/* Features Grid */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 justify-center">
// //             {features.map((feature, index) => (
// //               <motion.button
// //                 key={index}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true, amount: 0.3 }}
// //                 transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
// //                 className="
// //                   w-full sm:w-[240px] h-[70px] sm:h-[83px] 
// //                   flex items-center gap-3 sm:gap-4 
// //                   bg-white text-black rounded-lg cursor-pointer 
// //                   transition-all duration-300 
// //                   justify-center shadow-md

// //                   hover:bg-[#FEC509]
// //                   hover:text-black
// //                   hover:shadow-xl
// //                   border border-transparent hover:border-black
// //                 "
// //               >
// //                 <span className="text-2xl sm:text-3xl">{feature.icon}</span>
// //                 <span className="font-bold text-lg sm:text-xl">{feature.text}</span>
// //               </motion.button>
// //             ))}
// //           </div>

// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // }

// // export default Reason;




// import React from "react";
// import backgroundImage from "../assets/images/pic.jpeg";
// import { TbHeadset, TbClock } from "react-icons/tb";
// import { FaShieldAlt, FaTag } from "react-icons/fa";
// import { motion } from "framer-motion";

// function Reason() {
//   const GOLD = "#FEC509";

//   const features = [
//     { icon: <TbHeadset />, text: "Custom support" },
//     { icon: <FaShieldAlt />, text: "Insured expert" },
//     { icon: <FaTag />, text: "Flat rate" },
//     { icon: <TbClock />, text: "24/7 Available" },
//   ];

//   return (
//     <div className="w-full flex flex-col lg:flex-row bg-gray-50 dark:bg-[#1D1E22] transition-colors duration-300 overflow-hidden min-h-screen lg:min-h-[600px] hover:cursor-pointer">

//       {/* Left image */}
//       <motion.div
//         initial={{ x: -150, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="w-full lg:w-[45%] h-64 sm:h-96 lg:h-auto bg-cover bg-center"
//         style={{ backgroundImage: `url(${backgroundImage})`, minHeight: "300px" }}
//       />

//       {/* Right content */}
//       <motion.div
//         initial={{ x: 150, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="w-full lg:w-[55%] flex justify-center items-center px-4 py-8 lg:py-0"
//       >
//         <div className="py-8 lg:py-16 px-4 lg:px-6 bg-transparent text-gray-900 dark:text-white max-w-lg transition-colors duration-300">
          
//           {/* Heading */}
//           <div className="mb-6 lg:mb-8 text-left">
//             <p className="text-sm sm:text-base mb-2 leading-relaxed font-semibold" style={{ color: GOLD }}>
//               WHY CHOOSE OUR SERVICE
//             </p>

//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-5 leading-tight text-gray-900 dark:text-white transition-colors duration-300">
//               Great reason for the people choose our service
//             </h2>

//             <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-lg leading-relaxed transition-colors duration-300">
//               For more than a decade, we’ve been building the electrical service
//               network of the future — delivering reliable, safe and professional
//               solutions with guaranteed customer satisfaction.
//             </p>
//           </div>

//           {/* Features Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 justify-center">
//             {features.map((feature, index) => (
//               <motion.button
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
//                 className="
//                   w-full sm:w-[240px] h-[70px] sm:h-[83px] 
//                   flex items-center gap-3 sm:gap-4 
                  
//                   /* BUTTON STYLE: 
//                      Light Mode: White with gray border & shadow
//                      Dark Mode: White (high contrast)
//                   */
//                   bg-white text-black 
//                   border border-gray-200 dark:border-transparent
//                   rounded-lg cursor-pointer 
//                   transition-all duration-300 
//                   justify-center shadow-md

//                   hover:bg-[#FEC509]
//                   hover:text-black
//                   hover:shadow-xl
//                   hover:border-black dark:hover:border-black
//                 "
//               >
//                 <span className="text-2xl sm:text-3xl text-[#FEC509] group-hover:text-black transition-colors">{feature.icon}</span>
//                 <span className="font-bold text-lg sm:text-xl">{feature.text}</span>
//               </motion.button>
//             ))}
//           </div>

//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Reason;



import React from "react";
import backgroundImage from "../assets/images/download.jfif";
import { TbHeadset, TbClock } from "react-icons/tb";
import { FaShieldAlt, FaTag } from "react-icons/fa";
import { motion } from "framer-motion";

function Reason() {
  // THEME COLOR: Lush Green
  const GREEN = "#388E3C";

  const features = [
    { icon: <TbHeadset />, text: "Expert Design" },     // Changed for Grass context
    { icon: <FaShieldAlt />, text: "15-Year Warranty" }, // Changed for Grass context
    { icon: <FaTag />, text: "Competitive Pricing" },
    { icon: <TbClock />, text: "All-Weather Durability" }, // Changed for Grass context
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row bg-green-50 dark:bg-[#051a0d] transition-colors duration-300 overflow-hidden min-h-screen lg:min-h-[600px] hover:cursor-pointer">

      {/* Left image */}
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full lg:w-[45%] h-64 sm:h-96 lg:h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})`, minHeight: "300px" }}
      />

      {/* Right content */}
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full lg:w-[55%] flex justify-center items-center px-4 py-8 lg:py-0"
      >
        <div className="py-8 lg:py-16 px-4 lg:px-6 bg-transparent text-gray-900 dark:text-white max-w-lg transition-colors duration-300">
          
          {/* Heading */}
          <div className="mb-6 lg:mb-8 text-left">
            <p className="text-sm sm:text-base mb-2 leading-relaxed font-semibold" style={{ color: GREEN }}>
              WHY CHOOSE OUR TURF
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-5 leading-tight text-gray-900 dark:text-white transition-colors duration-300">
              Transform your outdoor space with premium quality
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-lg leading-relaxed transition-colors duration-300">
              For more than a decade, we’ve been creating lush, maintenance-free landscapes. 
              Enjoy a perfect green lawn all year round—safe for pets, kids, and the environment.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 justify-center">
            {features.map((feature, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
                className="
                  w-full sm:w-[240px] h-[70px] sm:h-[83px] 
                  flex items-center gap-3 sm:gap-4 
                  
                  /* BUTTON STYLE: 
                     Light Mode: White with subtle green border
                     Dark Mode: White (Clean look)
                  */
                  bg-white text-black 
                  border border-green-100 dark:border-transparent
                  rounded-lg cursor-pointer 
                  transition-all duration-300 
                  justify-center shadow-md

                  /* HOVER EFFECTS: Green BG, White Text */
                  hover:bg-[#388E3C]
                  hover:text-white
                  hover:shadow-xl hover:shadow-green-900/20
                  hover:border-[#388E3C] dark:hover:border-[#388E3C]
                  group
                "
              >
                {/* Icons inherit color logic */}
                <span className="text-2xl sm:text-3xl text-[#388E3C] group-hover:text-white transition-colors">{feature.icon}</span>
                <span className="font-bold text-lg sm:text-xl">{feature.text}</span>
              </motion.button>
            ))}
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default Reason;