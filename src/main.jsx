import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Improved initialization check
const initPuter = () => {
  if (window.puter && window.puter.js) {
    window.puter.js.init('app-951570a7-ed1d-43ab-9bb1-3024160a25f4');
    console.log("Puter initialized successfully!");
  } else {
    // If it's not ready yet, wait 100ms and try again
    setTimeout(initPuter, 100);
  }
};

initPuter();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
