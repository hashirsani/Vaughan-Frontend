// import React, { useRef, useState } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { Instagram, Send, Loader2 } from 'lucide-react';

// const GREEN = "#388E3C";

// const ContactUs = () => {
//   const contactRef = useRef(null);
//   const contactInView = useInView(contactRef, { once: true, amount: 0.1 });
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState({ message: "", type: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     // API logic remains same...
//     setLoading(false);
//   };

//   return (
//     <div id="contact" className="min-h-screen bg-white dark:bg-[#020c06] text-gray-900 dark:text-gray-100 transition-colors duration-500">
//       <section ref={contactRef} className="py-20 px-6 max-w-7xl mx-auto">
        
//         {/* Header Section: Added for clarity */}
//         <div className="mb-16 text-center lg:text-left">
//           <motion.span 
//             initial={{ opacity: 0 }} 
//             animate={contactInView ? { opacity: 1 } : {}}
//             className="text-green-600 font-bold tracking-widest uppercase text-sm"
//           >
//             Get In Touch
//           </motion.span>
//           <h2 className="text-4xl md:text-5xl font-black mt-2">Ready to Transform Your Space?</h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
//           {/* LEFT: Info Panel (Span 5) */}
//           <motion.div 
//             className="lg:col-span-5 space-y-10"
//             initial={{ opacity: 0, x: -30 }}
//             animate={contactInView ? { opacity: 1, x: 0 } : {}}
//           >
//             <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
//               Ditch the maintenance. We create high-performance, evergreen environments for your property.
//             </p>

//             <div className="space-y-8">
//               <ContactMethod icon={<FaEnvelope />} label="Email Us" value="info@vaughanelectricalexperts.ca" />
//               <ContactMethod icon={<FaPhone />} label="Call Us" value="0307 6201810" />
              
//               {/* Address with Clean Link */}
//               <div className="flex gap-4 items-start group">
//                 <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600"><FaMapMarkerAlt size={24}/></div>
//                 <div>
//                   <h4 className="font-bold text-lg">Our HQ</h4>
//                   <a href="https://maps.google.com/?q=136G4+Johar+Town+Lahore" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors">
//                     136G4 Johar Town, Lahore
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <hr className="border-gray-200 dark:border-gray-800 w-24" />

//             {/* Social Block: Separated and Enhanced */}
//             <div>
//               <p className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-tighter">Social Channels</p>
//               <a href="https://www.instagram.com/mehmooddeals/" target="_blank" rel="noopener noreferrer" 
//                  className="inline-flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent hover:border-pink-500/50 transition-all group">
//                 <div className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm group-hover:scale-110 transition-transform">
//                   <Instagram size={24} className="text-pink-600" />
//                 </div>
//                 <div>
//                   <span className="block font-bold">@mehmooddeals</span>
//                   <span className="text-xs text-gray-500">View Recent Projects</span>
//                 </div>
//               </a>
//             </div>
//           </motion.div>

//           {/* RIGHT: The Form (Span 7) */}
//           <motion.div 
//             className="lg:col-span-7 bg-white dark:bg-green-950/20 p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5 backdrop-blur-sm"
//             initial={{ opacity: 0, y: 30 }}
//             animate={contactInView ? { opacity: 1, y: 0 } : {}}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <InputField label="Full Name" name="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} />
//                 <InputField label="Email Address" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-gray-500 ml-1">Project Brief</label>
//                 <textarea 
//                   name="message" rows="5" value={formData.message} onChange={handleChange}
//                   className="w-full p-4 bg-gray-50 dark:bg-black/20 border-2 border-transparent focus:border-green-600 rounded-2xl outline-none transition-all resize-none"
//                   placeholder="Tell us about your project requirements..."
//                 />
//               </div>

//               <motion.button
//                 type="submit"
//                 disabled={loading}
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-black rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all"
//               >
//                 {loading ? <Loader2 className="animate-spin" /> : <><Send size={18} /> Send Inquiry</>}
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// // Sub-components for cleaner code
// const ContactMethod = ({ icon, label, value }) => (
//   <div className="flex gap-4 items-start group">
//     <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
//       {React.cloneElement(icon, { size: 24 })}
//     </div>
//     <div>
//       <h4 className="font-bold text-lg">{label}</h4>
//       <p className="text-gray-600 dark:text-gray-400">{value}</p>
//     </div>
//   </div>
// );

// const InputField = ({ label, ...props }) => (
//   <div className="space-y-2">
//     <label className="text-sm font-bold text-gray-500 ml-1">{label}</label>
//     <input 
//       {...props} 
//       className="w-full p-4 bg-gray-50 dark:bg-black/20 border-2 border-transparent focus:border-green-600 rounded-2xl outline-none transition-all"
//     />
//   </div>
// );

// export default ContactUs;



import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook } from "react-icons/fa";
import { Instagram, Send, Loader2 } from 'lucide-react';

const GREEN = "#388E3C";

const ContactUs = () => {
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true, amount: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Add your API logic here
    setTimeout(() => setLoading(false), 2000); 
  };

  return (
    <div id="contact" className="min-h-screen bg-white dark:bg-[#020c06] text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <section ref={contactRef} className="py-20 px-6 max-w-7xl mx-auto">
        
        <div className="mb-16 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={contactInView ? { opacity: 1 } : {}}
            className="text-green-600 font-bold tracking-widest uppercase text-sm"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black mt-2">Ready to Transform Your Space?</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Info Panel */}
          <motion.div 
            className="lg:col-span-5 space-y-10"
            initial={{ opacity: 0, x: -30 }}
            animate={contactInView ? { opacity: 1, x: 0 } : {}}
          >
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Ditch the maintenance. We create high-performance, evergreen environments for your property.
            </p>

            <div className="space-y-8">
              {/* Functional Email Link */}
              <ContactMethod 
                icon={<FaEnvelope />} 
                label="Email Us" 
                value="info@vaughanelectricalexperts.ca" 
                href="mailto:info@vaughanelectricalexperts.ca"
              />
              
              {/* THE FIX: Functional Click-to-Dial Link */}
              <ContactMethod 
                icon={<FaPhone />} 
                label="Call Us" 
                value="0307 6201810" 
                href="tel:+923076201810" 
              />
              
              <ContactMethod 
                icon={<FaMapMarkerAlt />} 
                label="Our HQ" 
                value="136G4 Johar Town, Lahore" 
                href="https://www.google.com/maps/search/?api=1&query=136G4+Johar+Town+Lahore"
              />
            </div>

            <hr className="border-gray-200 dark:border-gray-800 w-24" />

            {/* Social Block: Instagram & Facebook */}
            <div className="space-y-4">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Social Channels</p>
              <div className="flex flex-col gap-3">
                <SocialLink 
                  href="https://www.instagram.com/mehmooddeals/" 
                  icon={<Instagram size={20} />} 
                  label="Mehmood Deals" 
                  subLabel="Instagram"
                  hoverColor="hover:border-pink-500/50"
                  iconColor="text-pink-600"
                />
                <SocialLink 
                  href="https://www.facebook.com/mehmooddeals" 
                  icon={<FaFacebook size={20} />} 
                  label="Mehmood Deals" 
                  subLabel="Facebook"
                  hoverColor="hover:border-blue-500/50"
                  iconColor="text-blue-600"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: The Form */}
          <motion.div 
            className="lg:col-span-7 bg-white dark:bg-green-950/20 p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Full Name" name="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} />
                <InputField label="Email Address" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 ml-1">Project Brief</label>
                <textarea 
                  name="message" rows="5" value={formData.message} onChange={handleChange}
                  className="w-full p-4 bg-gray-50 dark:bg-black/20 border-2 border-transparent focus:border-green-600 rounded-2xl outline-none transition-all resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-black rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : <><Send size={18} /> Send Inquiry</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// BETTERED SUB-COMPONENTS
const ContactMethod = ({ icon, label, value, href }) => (
  <a 
    href={href} 
    target={href.startsWith('http') ? "_blank" : undefined}
    rel="noopener noreferrer"
    className="flex gap-4 items-start group cursor-pointer no-underline"
  >
    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h4 className="font-bold text-lg text-gray-900 dark:text-white">{label}</h4>
      <p className="text-gray-600 dark:text-gray-400 group-hover:text-green-600 transition-colors">{value}</p>
    </div>
  </a>
);

const SocialLink = ({ href, icon, label, subLabel, hoverColor, iconColor }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" 
     className={`inline-flex items-center gap-4 p-3 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent ${hoverColor} transition-all group w-fit`}>
    <div className={`p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm group-hover:scale-110 transition-transform ${iconColor}`}>
      {icon}
    </div>
    <div className="pr-4">
      <span className="block font-bold text-sm">{label}</span>
      <span className="text-[10px] uppercase tracking-tighter text-gray-500 font-bold">{subLabel}</span>
    </div>
  </a>
);

const InputField = ({ label, ...props }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-gray-500 ml-1">{label}</label>
    <input 
      {...props} 
      required
      className="w-full p-4 bg-gray-50 dark:bg-black/20 border-2 border-transparent focus:border-green-600 rounded-2xl outline-none transition-all"
    />
  </div>
);

export default ContactUs;