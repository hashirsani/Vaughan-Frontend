// // import React from 'react';
// // import { Zap } from 'lucide-react';
// // import electricianPic from "../assets/images/19+ Essential Electrical Home Maintenance Tips to Keep Your Space Safe and Sparkling! (1).webp";
// // import box from "../assets/images/Blogs 9.webp";

// // const GOLD_ACCENT = "#FEC509";
// // const BLACK_TEXT = "#000000";
// // const GOLD_HOVER = "#E5AE00";

// // const Bottom = () => {
// //   return (
// //     <div className='bg-white flex justify-center hover:cursor-pointer'>

// //       <section className="w-full flex flex-col lg:flex-row pt-12 lg:pt-20">

// //         {/* Left Side */}
// //         <div className="w-full lg:w-1/2 flex flex-col md:flex-row h-auto lg:h-[400px]">

// //           {/* Electrician Image */}
// //           <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-full">
// //             <img
// //               src={electricianPic}
// //               alt="Electrician at work"
// //               className="w-full h-full object-cover"
// //             />
// //           </div>

// //           {/* Content Box */}
// //           <div className="w-full md:w-1/2 bg-black text-white p-6 sm:p-8 flex flex-col justify-center items-start relative overflow-hidden mt-4 md:mt-0">

// //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 z-10 leading-snug">
// //               We provide professional electric services for our customer
// //             </h2>

// //             <Zap
// //               size={150}
// //               className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-8 opacity-60 z-0"
// //               style={{ color: GOLD_ACCENT }}
// //               strokeWidth={1}
// //             />
// //           </div>

// //         </div>

// //         {/* Right Side */}
// //         <div
// //           className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-[400px] mt-6 lg:mt-0 bg-cover bg-center"
// //           style={{ backgroundImage: `url(${box})` }}
// //         >
// //           <div className="absolute inset-0 bg-black/60" />

// //           <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-8 lg:p-12 text-white z-10">
// //             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
// //               Outstanding residential &<br />
// //               commercial services<br />
// //               for your family
// //             </h1>
// //           </div>
// //         </div>

// //       </section>
// //     </div>
// //   );
// // };

// // export default Bottom;




// import React from 'react';
// import { Zap } from 'lucide-react';
// import electricianPic from "../assets/images/19+ Essential Electrical Home Maintenance Tips to Keep Your Space Safe and Sparkling! (1).webp";
// import box from "../assets/images/Blogs 9.webp";

// // Constants are fine, but consider moving these to a global theme config in the future.
// const GOLD_ACCENT = "#FEC509";

// const Bottom = () => {
//   return (
//     <div className='w-full transition-colors duration-300 ease-in-out bg-white dark:bg-gray-900 flex justify-center hover:cursor-pointer'>

//       <section className="w-full flex flex-col lg:flex-row pt-12 lg:pt-20">

//         {/* Left Side */}
//         <div className="w-full lg:w-1/2 flex flex-col md:flex-row h-auto lg:h-[400px]">

//           {/* Electrician Image */}
//           <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-full relative">
//             <img
//               src={electricianPic}
//               alt="Electrician at work"
//               className="w-full h-full object-cover"
//             />
//             {/* Optional: Dark mode overlay for image to reduce brightness */}
//             <div className="absolute inset-0 bg-transparent dark:bg-black/20" />
//           </div>

//           {/* Content Box 
//               logic: In light mode, it's black. 
//               In dark mode, we keep it dark (gray-800) to distinguish it from the main bg (gray-900).
//           */}
//           <div className="w-full md:w-1/2 bg-black dark:bg-gray-800 text-white p-6 sm:p-8 flex flex-col justify-center items-start relative overflow-hidden mt-4 md:mt-0 transition-colors duration-300">

//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 z-10 leading-snug text-white dark:text-gray-100">
//               We provide professional electric services for our customer
//             </h2>

//             <Zap
//               size={150}
//               className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-8 opacity-60 z-0"
//               style={{ color: GOLD_ACCENT }}
//               strokeWidth={1}
//             />
//           </div>

//         </div>

//         {/* Right Side 
//             Note: This has a background image with an overlay. 
//             We do not need to invert colors here, as the text is always white on a dark overlay.
//         */}
//         <div
//           className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-[400px] mt-6 lg:mt-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${box})` }}
//         >
//           {/* Strengthen overlay slightly in dark mode for better eye comfort */}
//           <div className="absolute inset-0 bg-black/60 dark:bg-black/70 transition-colors duration-300" />

//           <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-8 lg:p-12 text-white z-10">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-white dark:text-gray-100">
//               Outstanding residential &<br />
//               commercial services<br />
//               for your family
//             </h1>
//           </div>
//         </div>

//       </section>
//     </div>
//   );
// };

// export default Bottom;




import React from 'react';
import { Leaf } from 'lucide-react'; // Swapped Zap for Leaf
// ⚠️ ACTION: Replace these with images of a landscaper and a nice lawn!
import gardenerPic from "../assets/images/Protect Your Pet-Friendly Yard_ Expert Tips for Phoenix Turf.jfif";
import grassBox from "../assets/images/Blogs 9.jfif";

const GREEN_ACCENT = "#388E3C"; // Lush Green Accent

const Bottom = () => {
  return (
    // Main Container: Green-50 in Light, Gray-900 in Dark
    <div className='w-full transition-colors duration-300 ease-in-out bg-green-50 dark:bg-[#051a0d] flex justify-center hover:cursor-pointer'>

      <section className="w-full flex flex-col lg:flex-row pt-12 lg:pt-20">

        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row h-auto lg:h-[400px]">

          {/* Gardener Image */}
          <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-full relative">
            <img
              src={gardenerPic}
              alt="Landscaper at work"
              className="w-full h-full object-cover"
            />
            {/* Dark mode overlay */}
            <div className="absolute inset-0 bg-transparent dark:bg-black/20" />
          </div>

          {/* Content Box 
              Changed from Black -> Deep Forest Green (#1b4d2d)
              This matches the "Nature" theme better than stark black.
          */}
          <div className="w-full md:w-1/2 bg-[#1b4d2d] dark:bg-[#051a0d] text-white p-6 sm:p-8 flex flex-col justify-center items-start relative overflow-hidden mt-4 md:mt-0 transition-colors duration-300">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 z-10 leading-snug text-white">
              We provide professional landscaping services for our customers
            </h2>

            {/* Background Icon */}
            <Leaf
              size={150}
              className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-8 opacity-40 z-0"
              style={{ color: GREEN_ACCENT }} 
              strokeWidth={1}
            />
          </div>

        </div>

        {/* Right Side */}
        <div
          className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-[400px] mt-6 lg:mt-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${grassBox})` }}
        >
          {/* Overlay: Slightly Green tint in light mode, Darker in dark mode */}
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70 transition-colors duration-300" />

          <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-8 lg:p-12 text-white z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-white">
              Outstanding residential &<br />
              commercial turf<br />
              for your family
            </h1>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Bottom;