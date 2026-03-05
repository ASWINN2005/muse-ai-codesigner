import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import puter from '@heyputer/puter.js'

// This ensures puter and its .js submodule exist before calling init
const initializePuter = () => {
  if (puter && puter.js) {
    puter.js.init('app-951570a7-ed1d-43ab-9bb1-3024160a25f4');
  } else {
    console.warn("Puter.js not ready, retrying...");
    setTimeout(initializePuter, 100);
  }
};

initializePuter();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
