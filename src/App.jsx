import React, { useState, useEffect } from 'react';
import First from './Components/First';
import Upper from './Components/Upper';
import Properties from './Components/Properties';
import Reason from './Components/Reason';
import ContactUs from './Components/ContactUs';
import Bottom from './Components/Bottom';
import Services from './Components/Services';
import Loader from './Components/Loader';
import Percs from './Components/Percs';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Detect mobile (anything below 820px)
    const isMobile = window.innerWidth < 820;

    if (isMobile) {
      // Mobile: Skip full load waiting → Hide loader fast
      setTimeout(() => setLoading(false), 5000);
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
      <div className={`website-wrapper ${loading ? "hidden-site" : "show-site"}`}>
        <Upper />
        <First />
        <Properties />
        <Services />
        <Reason />
        <Percs />
        <Bottom />
        <ContactUs />
      </div>
    </>
  );
}

export default App;
