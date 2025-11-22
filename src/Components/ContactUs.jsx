// import React, { useRef, useState, useEffect } from "react";
// import { motion, useInView } from "framer-motion";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const GOLD_ACCENT = "#FEC509";
// const BLACK_TEXT = "#000000";
// const GOLD_HOVER = "#E5AE00";

// const ContactUs = () => {
//   const contactRef = useRef(null);
//   const contactInView = useInView(contactRef, { once: true, amount: 0.1 });

//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [statusMessage, setStatusMessage] = useState("");
//   const [statusType, setStatusType] = useState(""); // "success" or "error"
//   const [backendStatus, setBackendStatus] = useState(""); // health check

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("https://vaughan-backend.onrender.com/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setStatusMessage(data.message);
//         setStatusType("success");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setStatusMessage(data.message || "Failed to send email.");
//         setStatusType("error");
//       }

//       setTimeout(() => setStatusMessage(""), 5000); // hide after 5s
//     } catch (err) {
//       setStatusMessage("Failed to send email. Try again!");
//       setStatusType("error");
//       setTimeout(() => setStatusMessage(""), 5000);
//       console.error(err);
//     }
//   };

//   // Check backend health on mount
//   useEffect(() => {
//     fetch("https://vaughan-backend.onrender.com/healthz")
//       .then((res) => res.text())
//       .then((data) => setBackendStatus(data))
//       .catch(() => setBackendStatus("Backend not reachable"));
//   }, []);

//   return (
//     <div id="contact" className="min-h-screen bg-gray-900 text-white overflow-hidden">
//       <section ref={contactRef} className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

//           {/* Left Side — Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={contactInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1, delay: 0.2 }}
//           >
//             <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
//               Ready to Start Your Project?
//             </h2>

//             <p className="text-lg sm:text-xl text-gray-300 mb-10">
//               Let's discuss how WE can power up your home or business with safe
//               and reliable electrical solutions.
//             </p>

//             <div className="space-y-6">
//               <div className="flex items-start sm:items-center space-x-4">
//                 <FaEnvelope className="text-2xl flex-shrink-0" style={{ color: GOLD_ACCENT }} />
//                 <div>
//                   <h4 className="font-semibold text-gray-200">Email Us</h4>
//                   <p className="text-gray-400">info@vaughanelectricalexperts.ca</p>
//                 </div>
//               </div>

//               <div className="flex items-start sm:items-center space-x-4">
//                 <FaPhone className="text-2xl flex-shrink-0" style={{ color: GOLD_ACCENT }} />
//                 <div>
//                   <h4 className="font-semibold text-gray-200">Call Us</h4>
//                   <p className="text-gray-400">+1 (437) 981-0224 (Canada)</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <FaMapMarkerAlt className="text-2xl mt-1 flex-shrink-0" style={{ color: GOLD_ACCENT }} />
//                 <div>
//                   <h4 className="font-semibold text-gray-200">Our Location</h4>
//                   <p className="text-gray-400 max-w-xs sm:max-w-sm">
//                     14 Cormel Street, Maple, Vaughan L6A 3K9
//                   </p>
//                 </div>
//               </div>

//               {backendStatus && (
//                 <p className="mt-4 text-sm text-gray-400">
//                   Backend status: {backendStatus}
//                 </p>
//               )}
//             </div>
//           </motion.div>

//           {/* Right Side — Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={contactInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1, delay: 0.4 }}
//             className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl"
//           >
//             <h3 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: GOLD_ACCENT }}>
//               Send Us a Message
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div>
//                 <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1">Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full p-3 sm:p-4 bg-gray-700 border border-gray-600 rounded-lg text-white
//                              focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-800
//                              focus:ring-[#FEC509] focus:border-[#FEC509] transition duration-200"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="you@example.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full p-3 sm:p-4 bg-gray-700 border border-gray-600 rounded-lg text-white
//                              focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-800
//                              focus:ring-[#FEC509] focus:border-[#FEC509] transition duration-200"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1">Your Project Details</label>
//                 <textarea
//                   name="message"
//                   rows="4"
//                   placeholder="Tell us about your project..."
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full p-3 sm:p-4 bg-gray-700 border border-gray-600 rounded-lg text-white
//                              focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-800
//                              focus:ring-[#FEC509] focus:border-[#FEC509] transition duration-200"
//                   required
//                 ></textarea>
//               </div>

//               {statusMessage && (
//                 <div className={`px-4 py-2 rounded mb-3 text-sm ${
//                   statusType === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
//                 }`}>
//                   {statusMessage}
//                 </div>
//               )}

//               <motion.button
//                 type="submit"
//                 whileHover={{ scale: 1.02, backgroundColor: GOLD_HOVER }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full py-3 sm:py-4 font-semibold rounded-lg shadow-lg transition duration-300 cursor-pointer"
//                 style={{ backgroundColor: GOLD_ACCENT, color: BLACK_TEXT }}
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





import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const GOLD_ACCENT = "#FEC509";
const BLACK_TEXT = "#000000";
const GOLD_HOVER = "#E5AE00";

const ContactUs = () => {
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"
  const [backendStatus, setBackendStatus] = useState(""); // health check
  const [loading, setLoading] = useState(false); // new loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // disable button while sending
    try {
      const res = await fetch("https://vaughan-backend.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatusMessage(data.message);
        setStatusType("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage(data.message || "Failed to send email.");
        setStatusType("error");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatusMessage("Network error. Try again!");
      setStatusType("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatusMessage(""), 5000); // hide after 5s
    }
  };

  // Check backend health on mount
  useEffect(() => {
    fetch("https://vaughan-backend.onrender.com/healthz")
      .then((res) => res.text())
      .then((data) => setBackendStatus(data))
      .catch(() => setBackendStatus("Backend not reachable"));
  }, []);

  return (
    <div id="contact" className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <section ref={contactRef} className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={contactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Ready to Start Your Project?
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 mb-10">
              Let's discuss how WE can power up your home or business with safe
              and reliable electrical solutions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start sm:items-center space-x-4">
                <FaEnvelope className="text-2xl flex-shrink-0" style={{ color: GOLD_ACCENT }} />
                <div>
                  <h4 className="font-semibold text-gray-200">Email Us</h4>
                  <p className="text-gray-400">info@vaughanelectricalexperts.ca</p>
                </div>
              </div>

              <div className="flex items-start sm:items-center space-x-4">
                <FaPhone className="text-2xl flex-shrink-0" style={{ color: GOLD_ACCENT }} />
                <div>
                  <h4 className="font-semibold text-gray-200">Call Us</h4>
                  <p className="text-gray-400">+1 (437) 981-0224 (Canada)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-2xl mt-1 flex-shrink-0" style={{ color: GOLD_ACCENT }} />
                <div>
                  <h4 className="font-semibold text-gray-200">Our Location</h4>
                  <p className="text-gray-400 max-w-xs sm:max-w-sm">
                    14 Cormel Street, Maple, Vaughan L6A 3K9
                  </p>
                </div>
              </div>

              {backendStatus && (
                <p className="mt-4 text-sm text-gray-400">
                  Backend status: {backendStatus}
                </p>
              )}
            </div>
          </motion.div>

          {/* Right Side — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={contactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: GOLD_ACCENT }}>
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 bg-gray-700 border border-gray-600 rounded-lg text-white
                             focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-800
                             focus:ring-[#FEC509] focus:border-[#FEC509] transition duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 bg-gray-700 border border-gray-600 rounded-lg text-white
                             focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-800
                             focus:ring-[#FEC509] focus:border-[#FEC509] transition duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1">Your Project Details</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 bg-gray-700 border border-gray-600 rounded-lg text-white
                             focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-800
                             focus:ring-[#FEC509] focus:border-[#FEC509] transition duration-200"
                  required
                ></textarea>
              </div>

              {statusMessage && (
                <div className={`px-4 py-2 rounded mb-3 text-sm ${
                  statusType === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                }`}>
                  {statusMessage}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={loading} // disable while sending
                whileHover={{ scale: 1.02, backgroundColor: GOLD_HOVER }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 sm:py-4 font-semibold rounded-lg shadow-lg transition duration-300 cursor-pointer"
                style={{ backgroundColor: GOLD_ACCENT, color: BLACK_TEXT }}
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
