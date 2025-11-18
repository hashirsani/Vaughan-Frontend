// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const ContactUs = () => {
//   const contactRef = useRef(null);
//   const contactInView = useInView(contactRef, { once: true, amount: 0.1 });

//   return (
//     <div id="contact" className="min-h-screen bg-gray-900 text-white overflow-hidden">
//       <section
//         ref={contactRef}
//         className="py-20 md:py-32 px-6 sm:px-10 lg:px-16"
//       >
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={contactInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1, delay: 0.2 }}
//           >
//             <h2 className="text-4xl font-extrabold text-white mb-6">
//               Ready to Start Your Project?
//             </h2>
//             <p className="text-xl text-gray-300 mb-10">
//               Let's discuss how Fluxion Studio can transform your digital vision into reality. Reach out today for a free consultation.
//             </p>

//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <FaEnvelope className="text-indigo-400 text-2xl" />
//                 <div>
//                   <h4 className="font-semibold text-gray-200">Email Us</h4>
//                   <p className="text-gray-400">info@fluxionstudio.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <FaPhone className="text-indigo-400 text-2xl" />
//                 <div>
//                   <h4 className="font-semibold text-gray-200">Call Us</h4>
//                   <p className="text-gray-400">+92 3XX-XXXXXXX (Pakistan)</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <FaMapMarkerAlt className="text-indigo-400 text-2xl mt-1" />
//                 <div>
//                   <h4 className="font-semibold text-gray-200">Our Location</h4>
//                   <p className="text-gray-400 max-w-xs">
//                     Software Technology Park, Lahore, Punjab, Pakistan
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={contactInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1, delay: 0.4 }}
//             className="bg-gray-800 p-8 md:p-10 rounded-xl shadow-2xl"
//           >
//             <h3 className="text-2xl font-bold text-indigo-400 mb-6">
//               Send Us a Message
//             </h3>

//             <form className="space-y-5">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-300 mb-1"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   placeholder="Your Name"
//                   className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-300 mb-1"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="you@example.com"
//                   className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-300 mb-1"
//                 >
//                   Your Project Details
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   placeholder="Tell us about your project needs..."
//                   className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
//                 ></textarea>
//               </div>

//               <motion.button
//                 type="submit"
//                 whileHover={{ scale: 1.02, backgroundColor: "#6366f1" }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 cursor-pointer"
//               >
//                 Send Inquiry
//               </motion.button>
//             </form>
//           </motion.div>

//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactUs;


import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true, amount: 0.1 });

  return (
    <div id="contact" className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <section
        ref={contactRef}
        className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={contactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-10">
              Let's discuss how Fluxion Studio can transform your digital vision into reality. Reach out today for a free consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start sm:items-center space-x-4">
                <FaEnvelope className="text-indigo-400 text-2xl flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-200">Email Us</h4>
                  <p className="text-gray-400">info@fluxionstudio.com</p>
                </div>
              </div>

              <div className="flex items-start sm:items-center space-x-4">
                <FaPhone className="text-indigo-400 text-2xl flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-200">Call Us</h4>
                  <p className="text-gray-400">+92 3XX-XXXXXXX (Pakistan)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-indigo-400 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-200">Our Location</h4>
                  <p className="text-gray-400 max-w-xs sm:max-w-sm">
                    Software Technology Park, Lahore, Punjab, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={contactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base font-medium text-gray-300 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-3 sm:p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full p-3 sm:p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base font-medium text-gray-300 mb-1"
                >
                  Your Project Details
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell us about your project needs..."
                  className="w-full p-3 sm:p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, backgroundColor: "#6366f1" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 sm:py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 cursor-pointer"
              >
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default ContactUs;
