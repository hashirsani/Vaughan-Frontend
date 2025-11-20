import React, { useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const GOLD = "#FEC509";

  // --- NEW CATEGORY-BASED SERVICES ---
  const servicesList = [
    {
      title: "A/C & HVAC Services",
      icon: "❄️",
      services: [
        "A/C Installation",
        "A/C Repair",
        "Heater Installation",
        "Appliance Installation",
        "Commercial Services",
      ],
    },
    {
      title: "Electrical Installation",
      icon: "⚡",
      services: [
        "Electrical Panel Installation",
        "EV Charging Station Installation",
        "Lighting Installation",
        "Circuit Breaker Installation & Replacement",
        "Outlet Installation",
        "Wiring Installation",
      ],
    },
    {
      title: "Electrical Repair",
      icon: "🛠️",
      services: [
        "Electrical Panel Repair",
        "Lighting Repair",
        "Doorbell Repair",
        "Circuit Breaker Repair",
        "Outlet Repair",
        "Wiring Repair",
      ],
    },
    {
      title: "Smart Home & Automation",
      icon: "🏠",
      services: [
        "Motorized Blinds Installation",
        "Garage Control Integration",
        "Home Automation System Repair",
        "Lighting Control System Installation",
        "Smart Thermostat Installation",
        "Video Doorbell Installation",
      ],
    },
    {
      title: "Security & Safety",
      icon: "🛡️",
      services: [
        "Security System Installation",
        "Security System Repair",
        "Smoke Detector Installation",
        "Doorbell Installation & Replacement",
        "Virtual Consultations",
      ],
    },
    {
      title: "Home Entertainment",
      icon: "📺",
      services: [
        "Home Theatre Installation",
        "Whole-Home Audio/Video Installation",
      ],
    },
    {
      title: "Networking & Communication",
      icon: "🌐",
      services: [
        "Home Network Integration",
        "Home Phone System Installation",
      ],
    },
  ];

  // Show first 3 if showAll is false
  const visibleItems = showAll ? servicesList : servicesList.slice(0, 3);

  return (
    <div
      id="services"
      className="min-h-screen bg-[#1D1E22] pt-24 pb-20 text-white"
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
              style={{ color: GOLD }}
            >
              Our Electrical Services ⚡
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-2xl">
              Professional, reliable, and expert electrical solutions for your
              home or business.
            </p>
          </motion.div>

          {/* CATEGORY GRID */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {visibleItems.map((service, index) => {
              const realIndex = servicesList.indexOf(service);
              const isExpanded = expandedIndex === realIndex;

              return (
                <motion.div
                  key={realIndex}
                  layout
                  onClick={() =>
                    setExpandedIndex(isExpanded ? null : realIndex)
                  }
                  className={`service-card bg-white text-black rounded-xl shadow-lg p-6
                    flex flex-col justify-start self-start cursor-pointer transition-all duration-500
                    border-t-4 border-[#FEC509] hover:shadow-2xl hover:border-[#d6a408]
                    ${isExpanded ? "min-h-fit" : "min-h-[220px]"}
                  `}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 flex items-center justify-center mb-4 text-3xl rounded-full border"
                    style={{
                      background: "#FFF7DA",
                      borderColor: GOLD,
                    }}
                  >
                    <span>{service.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                  {/* Expanded Services */}
                  {isExpanded && (
                    <ul className="mt-2 text-gray-700 space-y-2">
                      {service.services.map((s, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-yellow-500">•</span> {s}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Button */}
                  <button
                    className="mt-4 px-4 py-2 rounded-md text-sm font-semibold border border-[#FEC509]"
                    style={{ color: GOLD }}
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* SHOW MORE / SHOW LESS BUTTON */}
          <div className="flex justify-center mt-14">
            <button
              onClick={() => {
                setShowAll(!showAll);
                setExpandedIndex(null); // reset expansions
              }}
              className="px-8 py-3 rounded-lg font-semibold text-black shadow-lg transition-all duration-300"
              style={{ backgroundColor: GOLD }}
            >
              {showAll ? "Show Less" : "Show More Services"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
