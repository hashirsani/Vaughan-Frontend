// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Products = () => {
//   const [filter, setFilter] = useState("All");

//   const categories = ["All", "Cricket Balls", "Sports Nets", "Bowling Machines", "Equipment"];

//   const productList = [
//     {
//       id: 1,
//       name: "Pro-Seam Leather Ball",
//       category: "Cricket Balls",
//       price: "RS 2,500",
//       specs: "Grade A Alum Tanned | 156-160g",
//       image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=600",
//       tag: "Tournament Grade"
//     },
//     {
//       id: 2,
//       name: "Heavy-Duty Boundary Net",
//       category: "Sports Nets",
//       price: "RS 15,000",
//       specs: "UV Resistant | 2mm Polyethylene",
//       image: "https://images.unsplash.com/photo-1626245914948-67018c1584c3?q=80&w=600",
//       tag: "High Durability"
//     },
//     {
//       id: 3,
//       name: "Velocity-X Bowling Machine",
//       category: "Bowling Machines",
//       price: "RS 145,000",
//       specs: "Speed: 150km/h | Spin Control",
//       image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=600",
//       tag: "Elite Choice"
//     },
//     // Add more items as needed...
//   ];

//   const filteredProducts = filter === "All" 
//     ? productList 
//     : productList.filter(p => p.category === filter);

//   return (
//     <div className="min-h-screen bg-slate-900 text-white pt-24 pb-20 px-6 sm:px-10 lg:px-16">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <div className="mb-12 border-l-4 border-[#39FF14] pl-6">
//           <h1 className="text-5xl font-black uppercase tracking-tighter italic">
//             Equipment <span className="text-[#39FF14]">Depot</span>
//           </h1>
//           <p className="text-slate-400 mt-2 text-xl font-medium">Performance gear for professional athletes.</p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap gap-4 mb-10">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setFilter(cat)}
//               className={`px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all
//                 ${filter === cat 
//                   ? "bg-[#39FF14] text-black skew-x-[-12deg]" 
//                   : "bg-slate-800 text-slate-300 hover:bg-slate-700"}
//               `}
//             >
//               <span className="inline-block skew-x-[12deg]">{cat}</span>
//             </button>
//           ))}
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProducts.map((product) => (
//             <motion.div
//               layout
//               key={product.id}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="group bg-slate-800 border border-slate-700 hover:border-[#39FF14] transition-all overflow-hidden"
//             >
//               {/* Image Area */}
//               <div className="relative h-64 overflow-hidden bg-slate-700">
//                 <img 
//                   src={product.image} 
//                   alt={product.name} 
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
//                 />
//                 <div className="absolute top-4 left-4 bg-black/80 text-[#39FF14] text-[10px] font-black uppercase px-2 py-1 tracking-tighter">
//                   {product.tag}
//                 </div>
//               </div>

//               {/* Info Area */}
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-xl font-bold uppercase leading-tight">{product.name}</h3>
//                   <span className="text-[#39FF14] font-black">{product.price}</span>
//                 </div>
//                 <p className="text-slate-400 text-sm font-mono mb-6">
//                   {product.specs}
//                 </p>
                
//                 <button className="w-full bg-transparent border-2 border-[#39FF14] text-[#39FF14] py-3 font-black uppercase tracking-widest group-hover:bg-[#39FF14] group-hover:text-black transition-all">
//                   Add to Quote
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;


import React, { useState } from "react";
import { motion } from "framer-motion";
import ball from "../assets/images/balls.jfif";
import net from "../assets/images/Net.jfif";
import machine from "../assets/images/bowl.jfif";

const Products = () => {
  const [filter, setFilter] = useState("All");

  
  // Theme Colors
  const DARK_BG = "#051A0D";
  const BUTTON_GREEN = "#388E3C";
  const ACCENT_NEON = "#39FF14";

  const productList = [
    {
  id: "All Support balls",
  name: "All Support balls",
  // Aggregated Category for high-level navigation
  category: "Professional Equipment", 
  // Technical specs generalized for the entire performance line
  specs: "International Standard Weight | Multi-Layer Construction | High-Abrasion Resistance",
  // Action: Use a high-fidelity image of a Cricket ball and Football together
  image: ball,
  tag: "Certified Match Grade"
},
    {
      id: 2,
      name: "Heavy-Duty Nets For All Sports",
      category: "Sports Nets",
      specs: "HDPE High-Impact Twine | UV-Stabilized | Reinforced Edging | Available in Custom Sizes",
      image: net,
      tag: "High Durability"
    },
    {
      id: 3,
      name: "Cricket Bowling Machine",
      category: "Bowling Machines",
      specs: "150km/h Max Velocity | Precision Spin Control | AC/DC Dual Power",
      image: machine,
      tag: "Elite Choice"
    }
  ];

  const filteredProducts = filter === "All" 
    ? productList 
    : productList.filter(p => p.category === filter);

  return (
    <div
    id="products"
    className="min-h-screen bg-green-50 dark:bg-[#051A0D] text-gray-900 dark:text-white pt-24 pb-20 px-6 sm:px-10 lg:px-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12 border-l-8 border-[#388E3C] pl-6"
        >
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
            Equipment <span style={{ color: BUTTON_GREEN }}>Depot</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-xl font-medium max-w-2xl">
            Precision engineering for the modern athlete. High-performance gear designed for durability and elite play.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative flex flex-col bg-white dark:bg-[#0A2514] rounded-2xl overflow-hidden shadow-xl border border-transparent hover:border-[#388E3C] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#388E3C] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                  {product.tag}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-[#388E3C] transition-colors leading-none">
                    {product.name}
                  </h3>
                </div>
                
                <p className="text-[#388E3C] dark:text-[#39FF14] font-mono text-sm mb-6 uppercase tracking-widest">
                  {product.specs}
                </p>

                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;