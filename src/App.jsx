// import React, { useState, useEffect } from 'react';
// import First from './Components/First';
// import Upper from './Components/Upper';
// import Properties from './Components/Properties';
// import Reason from './Components/Reason';
// import ContactUs from './Components/ContactUs';
// import Bottom from './Components/Bottom';
// import Services from './Components/Services';
// import Loader from './Components/Loader';
// import Percs from './Components/Percs';

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Detect mobile (anything below 820px)
//     const isMobile = window.innerWidth < 820;

//     if (isMobile) {
//       // Mobile: Skip full load waiting → Hide loader fast
//       setTimeout(() => setLoading(false), 2000);
//     } else {
//       // Desktop: Wait until EVERYTHING is loaded
//       window.onload = () => setLoading(false);

//       // Fallback in case something delays loading
//       setTimeout(() => setLoading(false), 7000);
//     }
//   }, []);

//   return (
//     <>
//       <Loader visible={loading} />
//       <div className={`website-wrapper ${loading ? "hidden-site" : "show-site"}`}>
//         <Upper />
//         <First />
//         <Properties />
//         <Services />
//         <Reason />
//         <Percs />
//         <Bottom />
//         <ContactUs />
//       </div>
//     </>
//   );
// }

// export default App;




import React, { useState, useEffect } from 'react';

// Component Imports
import First from './Components/First';
import Upper from './Components/Upper';
import Properties from './Components/Properties';
import Reason from './Components/Reason';
import ContactUs from './Components/ContactUs';
import Bottom from './Components/Bottom';
import Services from './Components/Services';
import Loader from './Components/Loader';
import Percs from './Components/Percs';
import FloatingThemeToggle from './Components/FloatingThemeToggle'; // <--- NEW IMPORT
import Products from './Components/Product';

function App() {
  const [loading, setLoading] = useState(true);

  // --- 1. THEME STATE LOGIC (Added) ---
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // ------------------------------------

  // --- 2. YOUR EXISTING LOADER LOGIC (Preserved) ---
  useEffect(() => {
    // Detect mobile (anything below 820px)
    const isMobile = window.innerWidth < 820;

    if (isMobile) {
      // Mobile: Skip full load waiting → Hide loader fast
      setTimeout(() => setLoading(false), 2000);
    } else {
      // Desktop: Wait until EVERYTHING is loaded
      window.onload = () => setLoading(false);

      // Fallback in case something delays loading
      setTimeout(() => setLoading(false), 7000);
    }
  }, []);

  return (
    <>
      <Loader visible={loading} />
      
      {/* 3. WRAPPER UPDATE: 
         Added 'bg-gray-50 dark:bg-black' to handle the background color globally.
         Added 'transition-colors' so the switch is smooth.
      */}
      <div className={`website-wrapper ${loading ? "hidden-site" : "show-site"} bg-gray-50 dark:bg-black transition-colors duration-300 min-h-screen relative`}>
        
        {/* Pass props to Navbar so the icon syncs */}
        <Upper theme={theme} toggleTheme={toggleTheme} />
        
        {/* Render the Floating Button */}
        <FloatingThemeToggle theme={theme} toggleTheme={toggleTheme} />

        <First />
        <Properties />
        <Services />
        <Products />
        <Reason />
        <Percs />
        <Bottom />
        <ContactUs />
        
      </div>
    </>
  );
}

export default App;