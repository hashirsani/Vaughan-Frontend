// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Services = () => {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const [showAll, setShowAll] = useState(false);
  
//   // THEME COLOR: Lush Green
//   const GREEN = "#388E3C";

//   // --- NEW GRASS-BASED SERVICES ---
//   const servicesList = [
//     {
//       title: "Residential Lawns",
//       icon: "🏡",
//       services: [
//         "Front Yard Turf Installation",
//         "Backyard Transformations",
//         "Rooftop & Balcony Turf",
//         "Drought-Resistant Landscaping",
//         "Poolside Turf",
//       ],
//     },
//     {
//       title: "Pet Turf Solutions",
//       icon: "🐕",
//       services: [
//         "Odor-Control Technology",
//         "High-Drainage Systems",
//         "Antimicrobial Infill",
//         "Mud-Free Play Areas",
//         "Durable & Non-Toxic Turf",
//       ],
//     },
//     {
//       title: "Putting Greens & Sport",
//       icon: "⛳",
//       services: [
//         "Custom Backyard Putting Greens",
//         "Professional Golf Turf",
//         "Bocce Ball Courts",
//         "Sports Field Installation",
//         "Gym & Crossfit Turf",
//       ],
//     },
//     {
//       title: "Commercial Landscapes",
//       icon: "🏢",
//       services: [
//         "Office Building Entrances",
//         "Event Spaces & Trade Shows",
//         "Shopping Center Greenery",
//         "Playground Safety Surface",
//         "Public Park Turf",
//       ],
//     },
//     {
//       title: "Maintenance & Cleaning",
//       icon: "🧹",
//       services: [
//         "Turf Deep Cleaning",
//         "Infill Replenishment",
//         "Seam Repairs",
//         "Deodorizing Treatments",
//         "Weed Barrier Maintenance",
//       ],
//     },
//     {
//       title: "Hardscaping & Pavers",
//       icon: "🧱",
//       services: [
//         "Paver Walkway Integration",
//         "Retaining Walls",
//         "Stone Borders",
//         "Concrete & Turf Grid Design",
//       ],
//     },
//   ];

//   // Show first 3 if showAll is false
//   const visibleItems = showAll ? servicesList : servicesList.slice(0, 3);

//   return (
//     <div
//       id="services"
//       // Section BG: Green-50 in Light, Dark Forest (#051a0d) in Dark Mode
//       className="min-h-screen bg-green-50 dark:bg-[#051a0d] pt-24 pb-20 text-gray-900 dark:text-white transition-colors duration-300 hover:cursor-pointer"
//     >
//       <section className="px-6 sm:px-10 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           {/* Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-center mb-16"
//           >
//             <h2
//               className="text-4xl font-extrabold mb-4"
//               style={{ color: GREEN }}
//             >
//               Our Landscaping Services 🌱
//             </h2>
//             <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-2xl transition-colors duration-300">
//               Professional, eco-friendly, and stunning artificial grass solutions for your
//               home or business.
//             </p>
//           </motion.div>

//           {/* CATEGORY GRID */}
//           <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
//             {visibleItems.map((service, index) => {
//               const realIndex = servicesList.indexOf(service);
//               const isExpanded = expandedIndex === realIndex;

//               return (
//                 <motion.div
//                   key={realIndex}
//                   layout
//                   onClick={() =>
//                     setExpandedIndex(isExpanded ? null : realIndex)
//                   }
//                   className={`service-card 
//                     relative
//                     rounded-xl shadow-lg p-6
//                     flex flex-col justify-start self-start cursor-pointer transition-all duration-500
                    
//                     /* CARD THEME: White in Light, Dark Green (#0f2e1b) in Dark Mode */
//                     bg-white dark:bg-[#0f2e1b]
//                     text-black dark:text-white
                    
//                     /* Border & Hover Logic: Using GREEN now */
//                     border-t-4 border-[#388E3C] 
//                     hover:shadow-2xl hover:shadow-green-100/50 dark:hover:shadow-none
//                     hover:border-[#2E7D32]
                    
//                     ${isExpanded ? "min-h-fit" : "min-h-[220px]"}
//                   `}
//                 >
//                   {/* Icon Circle */}
//                   <div
//                     className="w-14 h-14 flex items-center justify-center mb-4 text-3xl rounded-full border border-green-100 dark:border-green-900 transition-colors duration-300"
//                     style={{
//                        borderColor: GREEN,
//                     }}
//                   >
//                     {/* BG: Light Green in Light Mode, Dark Forest in Dark Mode */}
//                     <div className="w-full h-full rounded-full flex items-center justify-center bg-green-50 dark:bg-[#051a0d] transition-colors duration-300">
//                         <span>{service.icon}</span>
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">
//                     {service.title}
//                   </h3>

//                   {/* Expanded Services List */}
//                   {isExpanded && (
//                     <ul className="mt-2 space-y-2">
//                       {service.services.map((s, i) => (
//                         <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
//                           <span className="text-[#388E3C]">🌿</span> {s}
//                         </li>
//                       ))}
//                     </ul>
//                   )}

//                   {/* Button */}
//                   <button
//                     className="mt-4 px-4 py-2 rounded-md text-sm font-semibold border border-[#388E3C] transition-colors hover:bg-green-50 dark:hover:bg-green-900/30"
//                     style={{ color: GREEN }}
//                   >
//                     {isExpanded ? "Show Less" : "Show More"}
//                   </button>
//                 </motion.div>
//               );
//             })}
//           </motion.div>

//           {/* SHOW MORE / SHOW LESS BUTTON */}
//           <div className="flex justify-center mt-14">
//             <button
//               onClick={() => {
//                 setShowAll(!showAll);
//                 setExpandedIndex(null); // reset expansions
//               }}
//               className="px-8 py-3 rounded-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#2E7D32]"
//               style={{ backgroundColor: GREEN }}
//             >
//               {showAll ? "Show Less" : "Show More Services"}
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;



import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTableTennisPaddleBall } from "react-icons/fa6";
import { FaBasketballBall } from "react-icons/fa";

// ⚠️ PLACEHOLDER IMAGES: Replace these imports with your real service photos!
// For now, I am using a generic placeholder URL so the code works immediately.
const PLACEHOLDER_IMG = "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=600";
import Home from "../assets/images/Inspiração.jfif";
import Paddle from "../assets/images/download (2).jfif";
import Baskit from "../assets/images/Basketball court.jfif";
import footbal from "../assets/images/Talipô Campinas-SP.jfif";
import Cricket from "../assets/images/download (3).jfif";
import Bad from "../assets/images/Let Us Help You Create the Perfect Court for Your Needs.jfif";

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  
  const GREEN = "#388E3C";

  const servicesList = [
    {
      title: "Residential Lawns",
      icon: "🏡",
      image: Home, // <--- Add specific image imports here later
      services: [
        "Front Yard Turf Installation",
        "Backyard Transformations",
        "Rooftop & Balcony Turf",
        "Drought-Resistant Landscaping",
        "Poolside Turf",
      ],
    },
    {
      title: "Paddle Court Turf",
      icon: "🏓",
      image: Paddle,
      services: [
        "Odor-Control Technology",
        "High-Drainage Systems",
        "Antimicrobial Infill",
        "Mud-Free Play Areas",
        "Durable & Non-Toxic Turf",
      ],
    },
   {
      title: "Basketball Courts",
      icon: "🏀", 
      image: Baskit, 
      services: [
        "Custom Backyard Courts",
        "High-Performance Sport Tiles",
        "Shock Absorbent Underlayment",
        "Team Logo & Line Marking",
        "Hoop Installation & Lighting",
      ],
    },
    {
  title: "Football & Soccer Turf",
  icon: "⚽", 
  image: footbal, 
  services: [
    "FIFA-Grade Surface Installation",
    "Professional Training Grounds",
    "High-Density Shock Pad Underlay",
    "Permanent Precision Line Marking",
    "Low-Abrasion Performance Fibers",
  ],
},
    {
  title: "Cricket Pitch & Outfields",
  icon: "🏏", 
  image: Cricket, 
  services: [
    "Tournament-Grade Pitch Installation",
    "High-Density Nylon for Realistic Spin",
    "Dynamic Shock Pad Integration",
    "Laser-Guided Base Leveling",
    "UV-Stable Boundary & Crease Marking",
  ],
},
    {
  title: "Badminton Court Systems",
  icon: "🏸", 
  image: Bad,
  services: [
    "Professional Outdoor Turf Courts",
    "Non-Slip Performance Surfaces",
    "Precision Boundary Line Marking",
    "High-Density Shock Absorption",
    "Weatherproof Net Post Installation",
  ],
},
  ];

  const visibleItems = showAll ? servicesList : servicesList.slice(0, 3);

  return (
    <div
      id="services"
      className="min-h-screen bg-green-50 dark:bg-[#051a0d] pt-24 pb-20 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <section className="px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl font-extrabold mb-4"
              style={{ color: GREEN }}
            >
              Our Landscaping Services 🌱
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-2xl transition-colors duration-300">
              Professional, eco-friendly, and stunning artificial grass solutions.
            </p>
          </motion.div>

          {/* GRID */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {visibleItems.map((service, index) => {
              const realIndex = servicesList.indexOf(service);
              const isExpanded = expandedIndex === realIndex;

              return (
                <motion.div
                  key={realIndex}
                  layout
                  onClick={() => setExpandedIndex(isExpanded ? null : realIndex)}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-300
                    
                    /* Card Colors */
                    bg-white dark:bg-[#0f2e1b]
                    
                    /* Hover Lift */
                    hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-100/50 dark:hover:shadow-none
                  `}
                >
                  {/* --- IMAGE SECTION (Top) --- */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Gradient (Better Text Readability if you add text over image later) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>

                    {/* Floating Icon Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white dark:bg-[#051a0d] rounded-full flex items-center justify-center shadow-md text-2xl border-2 border-green-500">
                      {service.icon}
                    </div>
                  </div>

                  {/* --- CONTENT SECTION (Bottom) --- */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#388E3C] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                       Expert installation and premium materials for your {service.title.toLowerCase()}.
                    </p>

                    {/* Expanded List */}
                    {isExpanded && (
                      <motion.ul 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-2 space-y-2 mb-4 border-t border-gray-100 dark:border-green-900/30 pt-4"
                      >
                        {service.services.map((s, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="text-[#388E3C]">🌿</span> {s}
                          </li>
                        ))}
                      </motion.ul>
                    )}

                    {/* Button */}
                    <button
                      className="w-full py-2 rounded-lg text-sm font-bold border border-[#388E3C] text-[#388E3C] transition-colors hover:bg-[#388E3C] hover:text-white"
                    >
                      {isExpanded ? "Show Less" : "View Details"}
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </motion.div>

          {/* VIEW ALL BUTTON */}
          <div className="flex justify-center mt-14">
            <button
              onClick={() => {
                setShowAll(!showAll);
                setExpandedIndex(null);
              }}
              className="px-8 py-3 rounded-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#2E7D32]"
              style={{ backgroundColor: GREEN }}
            >
              {showAll ? "Show Less" : "View All Services"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;