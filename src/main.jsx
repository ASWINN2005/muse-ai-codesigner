import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const startApp = () => {
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

// Polling function to wait for Puter to fully load its internal .js property
const initPuterWithRetry = (retries = 0) => {
  if (window.puter && window.puter.js) {
    // SUCCESS: Puter is fully loaded
    window.puter.js.init('app-951570a7-ed1d-43ab-9bb1-3024160a25f4');
    console.log("Puter initialized successfully");
    startApp();
  } else if (retries < 50) { 
    // Wait 100ms and try again (up to 5 seconds total)
    setTimeout(() => initPuterWithRetry(retries + 1), 100);
  } else {
    // FALLBACK: Start the app anyway so the user doesn't see a black screen
    console.error("Puter failed to load after 5 seconds");
    startApp();
  }
};

initPuterWithRetry();
