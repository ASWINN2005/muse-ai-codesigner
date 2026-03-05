import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Add this block right here:
if (window.puter) {
  // Use the App ID you just generated
  window.puter.js.init('app-951570a7-ed1d-43ab-9bb1-3024160a25f4');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
