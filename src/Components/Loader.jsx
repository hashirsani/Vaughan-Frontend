// // import React from "react";
// // import "./Loader.css";

// // const Loader = ({ visible }) => {
// //   return (
// //     <div
// //       style={{
// //         height: "100vh",
// //         width: "100vw",
// //         background: "linear-gradient(135deg, #000000, #1a1a1a)",
// //         display: visible ? "flex" : "none",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         position: "fixed",
// //         top: 0,
// //         left: 0,
// //         zIndex: 9999,
// //       }}
// //     >
// //       <div className="fancy-loader">
// //         <div></div>
// //         <div></div>
// //         <div></div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Loader;






// import React from "react";
// import "./Loader.css";

// const Loader = ({ visible }) => {
//   // If not visible, return null immediately to unmount from DOM (Performance Gain)
//   // or use the 'hidden' class if you prefer to keep it in the DOM.
//   if (!visible) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[9999] flex justify-center items-center 
//                  transition-colors duration-300
//                  bg-gradient-to-br from-gray-50 to-gray-200 
//                  dark:from-black dark:to-[#1a1a1a]"
//     >
//       <div className="fancy-loader">
//         {/* Note: If your CSS uses hardcoded 'white' for the spinner color, 
//            it might be invisible in Light Mode.
           
//            Ensure your ./Loader.css uses your Gold Accent (#FEC509) 
//            or a color that works on both backgrounds.
//         */}
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//     </div>
//   );
// };

// export default Loader;



import React from "react";
import "./Loader.css";

const Loader = ({ visible }) => {
  // If not visible, return null immediately (Performance)
  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex justify-center items-center 
                 transition-colors duration-300
                 
                 /* LIGHT MODE: Soft, Fresh Green Gradient */
                 bg-gradient-to-br from-green-50 to-green-100 
                 
                 /* DARK MODE: Deep Forest/Night Gradient */
                 dark:from-[#051a0d] dark:to-[#0a3315]"
    >
      <div className="fancy-loader">
        {/* ⚠️ CSS ACTION REQUIRED: 
           Open 'Loader.css' and find the class for these divs.
           Change 'background-color' to #388E3C (Lush Green)
           so the spinner matches the new theme.
        */}
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;