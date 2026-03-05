import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import puter from '@heyputer/puter.js' // Add this import

// Initialize immediately with your App ID
puter.js.init('app-951570a7-ed1d-43ab-9bb1-3024160a25f4');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
