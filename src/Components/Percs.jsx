// import React from "react";
// import { TbAlertTriangle, TbPlug, TbBulb } from "react-icons/tb";
// import { GiAutoRepair } from "react-icons/gi";

// const Percs = () => {
//   const steps = [
//     {
//       title: "Identify problem",
//       desc: "This box could corrode over losse connection, dust",
//       icon: <TbAlertTriangle />,
//       step: "Step 01",
//       offset: "mt-0", // high
//     },
//     {
//       title: "Provide time & cost",
//       desc: "This box could corrode over losse connection, dust",
//       icon: <TbPlug />,
//       step: "Step 02",
//       offset: "mt-10", // lower
//     },
//     {
//       title: "Implement service",
//       desc: "This box could corrode over losse connection, dust",
//       icon: <GiAutoRepair />,
//       step: "Step 03",
//       offset: "mt-0", // high
//     },
//     {
//       title: "Identify problem",
//       desc: "This box could corrode over losse connection, dust",
//       icon: <TbBulb />,
//       step: "Step 04",
//       offset: "mt-10", // lower
//     },
//   ];

//   return (
//     <div id="perks" className="w-full py-20 bg-white">
//       {/* Heading */}
//       <h1 className="text-center text-4xl font-bold mb-3">
//         We provide electrical
//       </h1>
//       <h2 className="text-center text-4xl font-bold mb-14">
//         professional electric services
//       </h2>

//       {/* Cards */}
//       <div className="flex justify-center gap-12 flex-wrap px-6">
//         {steps.map((item, index) => (
//           <div
//             key={index}
//             className={`relative w-[253px] h-[275px] bg-gray-50 shadow-xl rounded-lg p-8 pt-14 text-center transition-all duration-300 hover:-translate-y-2 ${item.offset}`}
//           >
//             {/* Icon Circle */}
//             {/* <div className="
//               absolute -top-10 left-1/2 -translate-x-1/2 h-20 w-20
//               rounded-full flex justify-center items-center text-4xl
//               bg-black text-white transition-all duration-300
//               hover:bg-red-600
//             ">
//               {item.icon}
//             </div> */}
//             <div
//   className="
//     absolute -top-10 left-1/2 -translate-x-1/2 h-20 w-20
//     rounded-full flex justify-center items-center text-4xl
//     bg-black text-white transition-all duration-300
//     hover:bg-red-600
//   "
//   onMouseEnter={(e) => {
//     e.currentTarget.classList.add("jump-animation");
//   }}
//   onAnimationEnd={(e) => {
//     e.currentTarget.classList.remove("jump-animation");
//   }}
// >
//   {item.icon}
// </div>

//             {/* Title */}
//             <h2 className="text-xl font-semibold">{item.title}</h2>
//             <p className="text-gray-500 text-sm mt-2">{item.desc}</p>

//             {/* Step Badge */}
//             <div
//               className="
//               absolute -bottom-4 left-1/2 -translate-x-1/2
//               bg-red-600 text-white px-6 py-2 font-semibold rounded-sm shadow-md
//               transition-all duration-300
//             "
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
import { TbAlertTriangle, TbPlug, TbBulb } from "react-icons/tb";
import { GiAutoRepair } from "react-icons/gi";

const Percs = () => {
  const steps = [
    {
      title: "Identify problem",
      desc: "This box could corrode over loose connection, dust",
      icon: <TbAlertTriangle />,
      step: "Step 01",
      offset: "mt-0",
    },
    {
      title: "Provide time & cost",
      desc: "This box could corrode over loose connection, dust",
      icon: <TbPlug />,
      step: "Step 02",
      offset: "mt-10",
    },
    {
      title: "Implement service",
      desc: "This box could corrode over loose connection, dust",
      icon: <GiAutoRepair />,
      step: "Step 03",
      offset: "mt-0",
    },
    {
      title: "Identify problem",
      desc: "This box could corrode over loose connection, dust",
      icon: <TbBulb />,
      step: "Step 04",
      offset: "mt-10",
    },
  ];

  return (
    <div id="perks" className="w-full py-20 bg-white">
      {/* Heading */}
      <h1 className="text-center text-3xl sm:text-4xl font-bold mb-3">
        We provide electrical
      </h1>
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-14">
        professional electric services
      </h2>

      {/* Cards */}
      <div className="flex justify-center gap-6 sm:gap-12 flex-wrap px-4 sm:px-6">
        {steps.map((item, index) => (
          <div
            key={index}
            className={`relative w-full sm:w-[253px] h-64 sm:h-[275px] bg-gray-50 shadow-xl rounded-lg p-6 sm:p-8 pt-14 text-center transition-all duration-300 hover:-translate-y-2 ${
              item.offset
            }`}
          >
            {/* Icon Circle */}
            <div
              className="
                absolute -top-10 left-1/2 -translate-x-1/2 h-16 w-16 sm:h-20 sm:w-20
                rounded-full flex justify-center items-center text-3xl sm:text-4xl
                bg-black text-white transition-all duration-300
                hover:bg-red-600
              "
              onMouseEnter={(e) => {
                e.currentTarget.classList.add("jump-animation");
              }}
              onAnimationEnd={(e) => {
                e.currentTarget.classList.remove("jump-animation");
              }}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-500 text-sm mt-2">{item.desc}</p>

            {/* Step Badge */}
            <div
              className="
                absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2
                bg-red-600 text-white px-4 sm:px-6 py-1 sm:py-2 font-semibold rounded-sm shadow-md
                transition-all duration-300 text-xs sm:text-sm
              "
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
