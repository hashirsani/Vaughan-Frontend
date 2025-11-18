// import React from 'react';
// import { Zap } from 'lucide-react';
// import electricianPic from "../assets/images/19+ Essential Electrical Home Maintenance Tips to Keep Your Space Safe and Sparkling! (1).webp";
// import box from "../assets/images/Blogs 9.webp";

// const Bottom = () => {
//   return (
//     <div className='h-[75vh] bg-white flex items-center justify-center'>   {/* MAIN DIV = 75% of screen height */}

//       <section className="w-full h-[400px] flex flex-col lg:flex-row pt-20"> 
//         {/* SECTION = FIXED 340px HEIGHT */}

//         {/* Left Side */}
//         <div className="w-full lg:w-1/2 flex flex-col md:flex-row">

//           <div className="w-full md:w-1/2 h-full">
//             <img
//               src={electricianPic}
//               alt="Electrician at work"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className="w-full md:w-1/2 bg-red-600 text-white p-8 flex flex-col justify-center items-start relative overflow-hidden">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-6 z-10">
//               We provide professional electric services for our customer
//             </h2>

//             <a
//               href="#"
//               className="bg-gray-900 text-white py-3 px-6 font-semibold uppercase hover:bg-gray-800 transition-colors z-10"
//             >
//               Explore More
//             </a>

//             <Zap
//               size={200}
//               className="absolute -bottom-10 -right-8 text-red-500 opacity-60 z-0"
//               strokeWidth={1}
//             />
//           </div>

//         </div>

//         {/* Right Side */}
//         <div
//           className="w-full lg:w-1/2 relative h-full bg-cover bg-center"
//           style={{ backgroundImage: `url(${box})` }}
//         >
//           <div className="absolute inset-0 bg-black/40" />

//           <div className="absolute inset-0 flex flex-col justify-center p-8 lg:p-12 text-white z-10">
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
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
import { Zap } from 'lucide-react';
import electricianPic from "../assets/images/19+ Essential Electrical Home Maintenance Tips to Keep Your Space Safe and Sparkling! (1).webp";
import box from "../assets/images/Blogs 9.webp";

const Bottom = () => {
  return (
    <div className='bg-white flex justify-center'>
      {/* MAIN DIV: full width, auto height on mobile */}
      <section className="w-full flex flex-col lg:flex-row pt-12 lg:pt-20">

        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row h-auto lg:h-[400px]">

          {/* Electrician Image */}
          <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-full">
            <img
              src={electricianPic}
              alt="Electrician at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Red content box */}
          <div className="w-full md:w-1/2 bg-red-600 text-white p-6 sm:p-8 flex flex-col justify-center items-start relative overflow-hidden mt-4 md:mt-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 z-10 leading-snug">
              We provide professional electric services for our customer
            </h2>

            <a
              href="#"
              className="bg-gray-900 text-white py-2 sm:py-3 px-4 sm:px-6 font-semibold uppercase hover:bg-gray-800 transition-colors z-10"
            >
              Explore More
            </a>

            <Zap
              size={150}
              className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-8 text-red-500 opacity-60 z-0"
              strokeWidth={1}
            />
          </div>

        </div>

        {/* Right Side */}
        <div
          className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-[400px] mt-6 lg:mt-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${box})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text on top */}
          <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-8 lg:p-12 text-white z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
              Outstanding residential &<br />
              commercial services<br />
              for your family
            </h1>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Bottom;
