import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const initApp = () => {
  // Use the global 'window.puter' instead of an import
  if (window.puter && window.puter.js) {
    window.puter.js.init('app-951570a7-ed1d-43ab-9bb1-3024160a25f4');
    
    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } else {
    // If not ready, wait 100ms and try again
    setTimeout(initApp, 100);
  }
};

initApp();
