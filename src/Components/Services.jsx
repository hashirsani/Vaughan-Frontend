import React, { useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Services Data
  const servicesList = [
    { title: "Web Development", tech: "React, Node.js, Next.js, TailwindCSS", detail: "We build fast, responsive, and SEO-friendly websites that offer exceptional performance and scalability using the latest web technologies.", icon: "💻" },
    { title: "Mobile Apps", tech: "React Native, Flutter, Kotlin, Swift", detail: "Our team crafts high-quality native and cross-platform mobile applications that provide seamless user experiences on Android and iOS.", icon: "📱" },
    { title: "UI/UX Design", tech: "Figma, Adobe XD, Photoshop, Illustrator", detail: "We design visually stunning and intuitive user interfaces focused on enhancing usability, engagement, and overall brand identity.", icon: "🎨" },
    { title: "Backend APIs", tech: "Node.js, Express, Django, Spring Boot", detail: "We create secure, scalable, and efficient RESTful and GraphQL APIs to power your web and mobile applications with robust backend systems.", icon: "🛠️" },
    { title: "Cloud Solutions", tech: "AWS, Azure, Firebase, Google Cloud", detail: "We help businesses migrate, deploy, and scale their infrastructure on the cloud for better reliability, speed, and global reach.", icon: "☁️" },
    { title: "AI & ML", tech: "Python, TensorFlow, PyTorch, Scikit-learn", detail: "Our AI specialists develop intelligent systems that automate tasks, analyze data, and deliver smart predictions to drive innovation.", icon: "🤖" },
    { title: "E-commerce Solutions", tech: "Shopify, WooCommerce, Magento, Stripe", detail: "We build powerful e-commerce platforms that integrate secure payment gateways, inventory systems, and smooth shopping experiences.", icon: "🛒" },
    { title: "IT Consulting", tech: "Agile, Scrum, ITIL, DevOps", detail: "We provide expert IT consulting to help organizations streamline processes, adopt modern tools, and achieve digital transformation goals.", icon: "🧑‍💼" },
    { title: "Digital Marketing", tech: "SEO, SEM, Google Analytics, Facebook Ads", detail: "We create targeted digital marketing campaigns that boost your brand visibility, engagement, and conversions across online platforms.", icon: "📈" },
    { title: "DevOps Services", tech: "Docker, Kubernetes, Jenkins, GitHub Actions", detail: "Our DevOps engineers implement CI/CD pipelines and automation tools to optimize deployment, monitoring, and software delivery cycles.", icon: "⚙️" },
  ];

  // Logic to determine which services to display
  const displayedServices = showAllServices ? servicesList : servicesList.slice(0, 4);

  return (
    <div id="services" className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Internal Style for interactions */}
      <style jsx="true">
        {`
          .service-card:hover {
            cursor: pointer;
          }
        `}
      </style>

      <section className="px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Our Core Services 🚀
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-2xl">
              We provide a wide range of cutting-edge software solutions tailored to scale your business using top-notch technologies.
            </p>
          </motion.div>

          <motion.div
            layout // Enable Framer Motion layout animations for grid changes
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {displayedServices.map((service, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.1 }}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)} // Toggle expand on card click
                  className={`service-card bg-white rounded-xl shadow-lg p-6 flex flex-col justify-start cursor-pointer transition-all duration-500 border-t-4 border-indigo-500 hover:shadow-2xl hover:border-indigo-700 ${
                    isExpanded ? "row-span-2" : "h-auto"
                  }`}
                >
                  <div className="w-14 h-14 flex items-center justify-center mb-4 text-3xl bg-indigo-50 rounded-full border border-indigo-200">
                    <span>{service.icon}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Technology/Detail Block */}
                  <div className="flex-grow">
                    <p className="text-gray-700 text-md leading-relaxed">
                      {isExpanded ? service.detail : <span className="font-semibold text-indigo-600">{service.tech}</span>}
                    </p>
                  </div>

                  {/* Button at the bottom */}
                  <button className="mt-4 flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:text-purple-600 transition-colors cursor-pointer">
                    {isExpanded ? "Show Less ↑" : "View Details ↓"}
                  </button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Show More/Less Button */}
          <div className="flex justify-center mt-16">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(109, 40, 217, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setShowAllServices(!showAllServices);
                setExpandedIndex(null); // Collapse all cards when toggling view
              }}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
            >
              {showAllServices ? "Show Less Services" : "Explore All Services"}
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;