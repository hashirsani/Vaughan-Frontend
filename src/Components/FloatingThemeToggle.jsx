import React from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const FloatingThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      // --- ANIMATIONS ---
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 10 }} // Slight rotation on hover
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      
      // --- EVENTS ---
      onClick={toggleTheme}
      
      // --- STYLING ---
      // Fixed Position: Bottom Right (z-index 9999 ensures it sits on top of everything)
      className={`
        fixed bottom-6 right-6 z-[9999] 
        p-4 rounded-full shadow-2xl cursor-pointer
        border-2 border-[#FEC509]
        transition-colors duration-300
        flex items-center justify-center
        
        ${theme === "dark" 
          ? "bg-black text-[#FEC509] shadow-orange-500/20"  // Dark Mode Style
          : "bg-white text-gray-800 shadow-gray-400/50"     // Light Mode Style
        }
      `}
      aria-label="Toggle Theme"
    >
      {/* Icon Logic: Show Sun in Dark Mode (to switch to light), Moon in Light Mode */}
      {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </motion.button>
  );
};

export default FloatingThemeToggle;