import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import puter from '@heyputer/puter.js'

// Robust Check: Some versions of the bundle wrap the object differently
const puterInstance = puter.default || puter;

const startApp = () => {
  if (puterInstance && puterInstance.js) {
    puterInstance.js.init('app-951570a7-ed1d-43ab-9bb1-3024160a25f4');
    console.log("Puter connected!");
  }
  
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

startApp();
