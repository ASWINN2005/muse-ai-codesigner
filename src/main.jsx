import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import puter from '@heyputer/puter.js'

// Safe Guard: Only init if not already initialized
if (!window.puter_initialized) {
    puter.js.init('app-951570a7-ed1d-43ab-9bb1-3024160a25f4');
    window.puter_initialized = true;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
