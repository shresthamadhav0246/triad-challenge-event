// import React, { useState, useEffect } from 'react';


// const SimpleWebsite = () => {
//   const [text, setText] = useState('Hello, world!');

//   const changeText = () => {
//     setText('Your new text here');
//   };

//   useEffect(() => {
//     // Function to load a script
//     const loadScript = (src, defer) => {
//       const script = document.createElement('script');
//       script.src = src;
//       if (defer) script.defer = true;
//       document.body.appendChild(script);
//       return script;
//     };

//     // Load the scripts
//     const botpressScript = loadScript('https://cdn.botpress.cloud/webchat/v1/inject.js', false);
//     const botpressConfigScript = loadScript('https://mediafiles.botpress.cloud/167c7b8b-e9d3-40ac-be2c-5791f34e45e7/webchat/config.js', true);

//     // Remove the scripts on component unmount
//     return () => {
//       document.body.removeChild(botpressScript);
//       document.body.removeChild(botpressConfigScript);
//     };
//   }, []); // Empty array means this effect will only run once, similar to componentDidMount

//   return (
//     <div>
//       <h1>Welcome to My Simple Website</h1>
//       <p id="para">{text}</p>
//       <button onClick={changeText}>Click me!</button>
//     </div>
//   );
// };

// export default SimpleWebsite;
