import React from "react";
import { TbAlertTriangle, TbPlug, TbBulb } from "react-icons/tb";
import { GiAutoRepair } from "react-icons/gi";

const GOLD = "#FEC509";
const GOLD_HOVER = "#E5AE00";

const Percs = () => {
  const steps = [
    { title: "Identify problem", desc: "This box could corrode over loose connection, dust", icon: <TbAlertTriangle />, step: "Step 01" },
    { title: "Provide time & cost", desc: "This box could corrode over loose connection, dust", icon: <TbPlug />, step: "Step 02" },
    { title: "Implement service", desc: "This box could corrode over loose connection, dust", icon: <GiAutoRepair />, step: "Step 03" },
    { title: "Final Quality Check", desc: "This box could corrode over loose connection, dust", icon: <TbBulb />, step: "Step 04" },
  ];

  return (
    <div id="perks" className="w-full py-20 bg-[#1A1A1A]">
      <h1 className="text-center text-3xl sm:text-4xl font-bold mb-3 text-white">
        We provide electrical
      </h1>
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-14 text-white">
        professional electric services
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
              bg-[#111111] 
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
              style={{ backgroundColor: GOLD, color: "#000" }}
              onMouseEnter={(e) => {
                e.currentTarget.classList.add("jump-animation");
                e.currentTarget.style.backgroundColor = GOLD_HOVER;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = GOLD;
              }}
              onAnimationEnd={(e) => {
                e.currentTarget.classList.remove("jump-animation");
              }}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              {item.title}
            </h2>

            <p className="text-sm mt-2 text-[#BFBFBF]">
              {item.desc}
            </p>

            {/* Step Badge */}
            <div
              className="
                mt-8     /* More space between text and button */
                inline-block 
                font-semibold 
                rounded-sm 
                shadow-md 
                text-xs sm:text-sm 
                px-4 py-2
              "
              style={{ backgroundColor: GOLD, color: "#000" }}
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
