// // import React from "react";
// // import backgroundImage from "../assets/images/pic.jpeg";
// // import { TbHeadset, TbClock } from "react-icons/tb";
// // import { FaShieldAlt, FaTag } from "react-icons/fa";

// // function Reason() {
// //   const features = [
// //     { icon: <TbHeadset />, text: "Custom support" },
// //     { icon: <FaShieldAlt />, text: "Insured expert" },
// //     { icon: <FaTag />, text: "Flat rate" },
// //     { icon: <TbClock />, text: "24/7 Available" },
// //   ];

// //   return (
// //     <div className="h-screen w-full flex bg-[#1D1E22]">
// //       {/* Left side 45% with image */}
// //       <div
// //         className="w-[45%] h-full bg-cover bg-center"
// //         style={{ backgroundImage: `url(${backgroundImage})` }}
// //       ></div>

// //       {/* Right side 55% for content */}
// //       <div className="w-[55%] h-full flex justify-center items-center">
// //         <div className="py-16 px-6 bg-[#1D1E22] text-white max-w-lg">
// //           {/* Heading */}
// //           <div className="mb-8 text-left">
// //             <p className="text-sm text-gray-400 mb-2 leading-relaxed">
// //               WHY CHOOSE OUR BIDUT
// //             </p>
// //             <h2 className="text-5xl font-bold mb-5 leading-tight">
// //               Great reason for the people choose our biddut
// //             </h2>
// //             <p className="text-gray-300 text-lg leading-relaxed">
// //               For more than a decade, we’ve been building the fueling network of
// //               the future. We have delivered more places to charge than anyone
// //               else, and people count on us for charging systemic solutions
// //               consistently and efficiently.
// //             </p>
// //           </div>

// //           {/* Features Grid */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
// //             {features.map((feature, index) => (
// //               <button
// //                 key={index}
// //                 className="w-[240px] h-[83px] flex items-center gap-4 bg-white text-black rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#DD0733] hover:text-white justify-center"
// //               >
// //                 <span className="text-3xl">{feature.icon}</span>
// //                 <span className="font-bold text-xl">{feature.text}</span>
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
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
//   const features = [
//     { icon: <TbHeadset />, text: "Custom support" },
//     { icon: <FaShieldAlt />, text: "Insured expert" },
//     { icon: <FaTag />, text: "Flat rate" },
//     { icon: <TbClock />, text: "24/7 Available" },
//   ];

//   return (
//     <div className="h-screen w-full flex bg-[#1D1E22] overflow-hidden">

//       {/* Left image sliding in from LEFT when in view */}
//       <motion.div
//         initial={{ x: -150, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="w-[45%] h-full bg-cover bg-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       />

//       {/* Right side content sliding in from RIGHT when in view */}
//       <motion.div
//         initial={{ x: 150, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="w-[55%] h-full flex justify-center items-center"
//       >
//         <div className="py-16 px-6 bg-[#1D1E22] text-white max-w-lg">
//           {/* Heading */}
//           <div className="mb-8 text-left">
//             <p className="text-sm text-gray-400 mb-2 leading-relaxed">
//               WHY CHOOSE OUR BIDUT
//             </p>
//             <h2 className="text-5xl font-bold mb-5 leading-tight">
//               Great reason for the people choose our biddut
//             </h2>
//             <p className="text-gray-300 text-lg leading-relaxed">
//               For more than a decade, we’ve been building the fueling network of
//               the future. We have delivered more places to charge than anyone
//               else, and people count on us for charging systemic solutions
//               consistently and efficiently.
//             </p>
//           </div>

//           {/* Features Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
//             {features.map((feature, index) => (
//               <motion.button
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
//                 className="w-[240px] h-[83px] flex items-center gap-4 
//                            bg-white text-black rounded-lg cursor-pointer 
//                            transition-all duration-300 hover:bg-[#DD0733] 
//                            hover:text-white justify-center"
//               >
//                 <span className="text-3xl">{feature.icon}</span>
//                 <span className="font-bold text-xl">{feature.text}</span>
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
import backgroundImage from "../assets/images/pic.jpeg";
import { TbHeadset, TbClock } from "react-icons/tb";
import { FaShieldAlt, FaTag } from "react-icons/fa";
import { motion } from "framer-motion";

function Reason() {
  const features = [
    { icon: <TbHeadset />, text: "Custom support" },
    { icon: <FaShieldAlt />, text: "Insured expert" },
    { icon: <FaTag />, text: "Flat rate" },
    { icon: <TbClock />, text: "24/7 Available" },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row bg-[#1D1E22] overflow-hidden min-h-screen lg:min-h-[600px]">

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
        <div className="py-8 lg:py-16 px-4 lg:px-6 bg-[#1D1E22] text-white max-w-lg">
          {/* Heading */}
          <div className="mb-6 lg:mb-8 text-left">
            <p className="text-sm sm:text-base text-gray-400 mb-2 leading-relaxed">
              WHY CHOOSE OUR BIDUT
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-5 leading-tight">
              Great reason for the people choose our biddut
            </h2>
            <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
              For more than a decade, we’ve been building the fueling network of
              the future. We have delivered more places to charge than anyone
              else, and people count on us for charging systemic solutions
              consistently and efficiently.
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
                className="w-full sm:w-[240px] h-[70px] sm:h-[83px] flex items-center gap-3 sm:gap-4 
                           bg-white text-black rounded-lg cursor-pointer 
                           transition-all duration-300 hover:bg-[#DD0733] 
                           hover:text-white justify-center"
              >
                <span className="text-2xl sm:text-3xl">{feature.icon}</span>
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
