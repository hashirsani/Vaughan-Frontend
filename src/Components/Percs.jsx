// // import React from "react";
// // import { TbAlertTriangle, TbPlug, TbBulb } from "react-icons/tb";
// // import { GiAutoRepair } from "react-icons/gi";

// // const GOLD = "#FEC509";
// // const GOLD_HOVER = "#E5AE00";

// // const Percs = () => {
// //   const steps = [
// //     { title: "Identify problem", desc: "We inspect your issue thoroughly to find the exact root cause—no guesswork, only precision", icon: <TbAlertTriangle />, step: "Step 01" },
// //     { title: "Provide time & cost", desc: "We share a clear, upfront estimate with accurate timing and transparent pricing—no surprises later.", icon: <TbPlug />, step: "Step 02" },
// //     { title: "Implement service", desc: "Our certified technicians get to work with professional tools and dependable expertise from start to finish.", icon: <GiAutoRepair />, step: "Step 03" },
// //     { title: "Final Quality Check", desc: "We double-check every detail to ensure flawless performance and lasting reliability before we leave.", icon: <TbBulb />, step: "Step 04" },
// //   ];

// //   return (
// //     <div id="perks" className="w-full py-20 bg-[#1A1A1A] hover:cursor-pointer">
// //       <h1 className="text-center text-3xl sm:text-4xl font-bold mb-3 text-white">
// //         We provide electrical
// //       </h1>
// //       <h2 className="text-center text-3xl sm:text-4xl font-bold mb-14 text-white">
// //         professional electric services
// //       </h2>

// //       <div className="flex justify-center gap-6 sm:gap-12 flex-wrap px-4 sm:px-6">
// //         {steps.map((item, index) => (
// //           <div
// //             key={index}
// //             className="
// //               relative 
// //               w-full 
// //               sm:w-[253px] 
// //               sm:h-[400px]     /* Taller boxes on desktop */
// //               lg:h-[390px]     /* Even taller on large screens */
// //               bg-[#111111] 
// //               rounded-lg 
// //               p-6 
// //               sm:p-8 
// //               text-center 
// //               transition-all 
// //               duration-300 
// //               hover:-translate-y-2
// //               flex flex-col justify-between
// //             "
// //           >
// //             {/* Icon Circle */}
// //             <div
// //               className="mx-auto mb-4 sm:mb-6 h-16 w-16 sm:h-20 sm:w-20 rounded-full flex justify-center items-center text-3xl sm:text-4xl transition-all duration-300"
// //               style={{ backgroundColor: GOLD, color: "#000" }}
// //               onMouseEnter={(e) => {
// //                 e.currentTarget.classList.add("jump-animation");
// //                 e.currentTarget.style.backgroundColor = GOLD_HOVER;
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.currentTarget.style.backgroundColor = GOLD;
// //               }}
// //               onAnimationEnd={(e) => {
// //                 e.currentTarget.classList.remove("jump-animation");
// //               }}
// //             >
// //               {item.icon}
// //             </div>

// //             {/* Title */}
// //             <h2 className="text-lg sm:text-xl font-semibold text-white">
// //               {item.title}
// //             </h2>

// //             <p className="text-sm mt-2 text-[#BFBFBF]">
// //               {item.desc}
// //             </p>

// //             {/* Step Badge */}
// //             <div
// //               className="
// //                 mt-8     /* More space between text and button */
// //                 inline-block 
// //                 font-semibold 
// //                 rounded-sm 
// //                 shadow-md 
// //                 text-xs sm:text-sm 
// //                 px-4 py-2
// //               "
// //               style={{ backgroundColor: GOLD, color: "#000" }}
// //             >
// //               {item.step}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Percs;



// import React from "react";
// import { TbAlertTriangle, TbPlug, TbBulb } from "react-icons/tb";
// import { GiAutoRepair } from "react-icons/gi";

// const GOLD = "#FEC509";
// const GOLD_HOVER = "#E5AE00";

// const Percs = () => {
//   const steps = [
//     { title: "Identify problem", desc: "We inspect your issue thoroughly to find the exact root cause—no guesswork, only precision", icon: <TbAlertTriangle />, step: "Step 01" },
//     { title: "Provide time & cost", desc: "We share a clear, upfront estimate with accurate timing and transparent pricing—no surprises later.", icon: <TbPlug />, step: "Step 02" },
//     { title: "Implement service", desc: "Our certified technicians get to work with professional tools and dependable expertise from start to finish.", icon: <GiAutoRepair />, step: "Step 03" },
//     { title: "Final Quality Check", desc: "We double-check every detail to ensure flawless performance and lasting reliability before we leave.", icon: <TbBulb />, step: "Step 04" },
//   ];

//   return (
//     // Section BG: Light Gray in Light Mode, Your Dark Gray (#1A1A1A) in Dark Mode
//     <div id="perks" className="w-full py-20 bg-gray-50 dark:bg-[#1A1A1A] transition-colors duration-300 hover:cursor-pointer">
      
//       {/* Headings: Dark text in Light Mode, White in Dark Mode */}
//       <h1 className="text-center text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">
//         We provide electrical
//       </h1>
//       <h2 className="text-center text-3xl sm:text-4xl font-bold mb-14 text-gray-900 dark:text-white transition-colors duration-300">
//         professional electric services
//       </h2>

//       <div className="flex justify-center gap-6 sm:gap-12 flex-wrap px-4 sm:px-6">
//         {steps.map((item, index) => (
//           <div
//             key={index}
//             className="
//               relative 
//               w-full 
//               sm:w-[253px] 
//               sm:h-[400px]     /* Taller boxes on desktop */
//               lg:h-[390px]     /* Even taller on large screens */
              
//               /* CARD BG: White with shadow in Light Mode, Dark (#111111) in Dark Mode */
//               bg-white dark:bg-[#111111]
//               shadow-xl dark:shadow-none
//               border border-gray-100 dark:border-none

//               rounded-lg 
//               p-6 
//               sm:p-8 
//               text-center 
//               transition-all 
//               duration-300 
//               hover:-translate-y-2
//               flex flex-col justify-between
//             "
//           >
//             {/* Icon Circle */}
//             <div
//               className="mx-auto mb-4 sm:mb-6 h-16 w-16 sm:h-20 sm:w-20 rounded-full flex justify-center items-center text-3xl sm:text-4xl transition-all duration-300"
//               style={{ backgroundColor: GOLD, color: "#000" }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.classList.add("jump-animation");
//                 e.currentTarget.style.backgroundColor = GOLD_HOVER;
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = GOLD;
//               }}
//               onAnimationEnd={(e) => {
//                 e.currentTarget.classList.remove("jump-animation");
//               }}
//             >
//               {item.icon}
//             </div>

//             {/* Title: Dark in Light Mode, White in Dark Mode */}
//             <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
//               {item.title}
//             </h2>

//             {/* Desc: Gray-600 in Light Mode, Your Light Gray (#BFBFBF) in Dark Mode */}
//             <p className="text-sm mt-2 text-gray-600 dark:text-[#BFBFBF] transition-colors duration-300">
//               {item.desc}
//             </p>

//             {/* Step Badge */}
//             <div
//               className="
//                 mt-8     /* More space between text and button */
//                 inline-block 
//                 font-semibold 
//                 rounded-sm 
//                 shadow-md 
//                 text-xs sm:text-sm 
//                 px-4 py-2
//               "
//               style={{ backgroundColor: GOLD, color: "#000" }}
//             >
//               {item.step}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Percs;





import React from "react";
import { TbRuler, TbCalculator, TbChecks } from "react-icons/tb";
import { GiGrass } from "react-icons/gi";

// THEME COLORS
const GREEN = "#388E3C";
const GREEN_HOVER = "#2E7D32";

const Percs = () => {
  const steps = [
    { 
      title: "Site Assessment", 
      desc: "We measure your lawn, check soil conditions, and plan drainage to ensure a perfect base for your new turf.", 
      icon: <TbRuler />, 
      step: "Step 01" 
    },
    { 
      title: "Clear Estimate", 
      desc: "We provide a transparent, all-inclusive quote covering materials, labor, and waste removal—no hidden fees.", 
      icon: <TbCalculator />, 
      step: "Step 02" 
    },
    { 
      title: "Precision Installation", 
      desc: "Our team excavates, compacts the base, and lays your premium turf with invisible seams and secure edging.", 
      icon: <GiGrass />, 
      step: "Step 03" 
    },
    { 
      title: "Final Grooming", 
      desc: "We power-brush the fibers for a natural lift, clean the site, and ensure every detail meets our high standards.", 
      icon: <TbChecks />, 
      step: "Step 04" 
    },
  ];

  return (
    // Section BG: Green-50 in Light Mode, Dark Forest (#051a0d) in Dark Mode
    <div id="perks" className="w-full py-20 bg-green-50 dark:bg-[#051a0d] transition-colors duration-300 hover:cursor-pointer">
      
      {/* Headings */}
      <h1 className="text-center text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">
        Our Installation
      </h1>
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-14 text-gray-900 dark:text-white transition-colors duration-300">
        process for perfect lawns
      </h2>

      <div className="flex justify-center gap-6 sm:gap-12 flex-wrap px-4 sm:px-6">
        {steps.map((item, index) => (
          <div
            key={index}
            className="
              relative 
              w-full 
              sm:w-[253px] 
              sm:h-[400px]     /* Taller boxes on desktop */
              lg:h-[390px]     /* Even taller on large screens */
              
              /* CARD BG: White in Light Mode, Dark Green (#0f2e1b) in Dark Mode */
              bg-white dark:bg-[#0f2e1b]
              shadow-xl shadow-green-100/50 dark:shadow-none
              border border-green-100 dark:border-none

              rounded-lg 
              p-6 
              sm:p-8 
              text-center 
              transition-all 
              duration-300 
              hover:-translate-y-2
              flex flex-col justify-between
            "
          >
            {/* Icon Circle */}
            <div
              className="mx-auto mb-4 sm:mb-6 h-16 w-16 sm:h-20 sm:w-20 rounded-full flex justify-center items-center text-3xl sm:text-4xl transition-all duration-300"
              style={{ backgroundColor: GREEN, color: "#fff" }} // White icon on Green BG
              onMouseEnter={(e) => {
                e.currentTarget.classList.add("jump-animation");
                e.currentTarget.style.backgroundColor = GREEN_HOVER;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = GREEN;
              }}
              onAnimationEnd={(e) => {
                e.currentTarget.classList.remove("jump-animation");
              }}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              {item.title}
            </h2>

            {/* Desc */}
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300 transition-colors duration-300">
              {item.desc}
            </p>

            {/* Step Badge */}
            <div
              className="
                mt-8    
                inline-block 
                font-semibold 
                rounded-sm 
                shadow-md 
                text-xs sm:text-sm 
                px-4 py-2
              "
              style={{ backgroundColor: GREEN, color: "#fff" }}
            >
              {item.step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Percs;