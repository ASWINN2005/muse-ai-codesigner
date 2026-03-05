import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Check for puter immediately
if (window.puter) {
    window.puter.js.init('app-951570a7-ed1d-43ab-9bb1-3024160a25f4');
} else {
    console.warn("Puter script not detected. Check your index.html!");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
