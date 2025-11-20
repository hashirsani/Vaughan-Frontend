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
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {/* Loader always appears ON TOP */}
//       <Loader visible={loading} />

//       {/* Website is always rendered but hidden when loading */}
//       <div className={`website-wrapper ${loading ? "hidden-site" : "show-site"}`}>
//         <Upper />
//         <First />
//         <Properties />
//         <Services />
//         <Reason />
//         <Percs></Percs>
//         <Bottom />
//         <ContactUs />
//       </div>
//     </>
//   );
// }

// export default App;




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
    // Show loader until EVERYTHING is loaded (images, CSS, fonts, components)
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {/* Loader always on top */}
      <Loader visible={loading} />

      {/* Website stays hidden until loading finishes */}
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
