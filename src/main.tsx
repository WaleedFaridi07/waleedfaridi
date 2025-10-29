import { render } from "react-dom";
import App from "./App.tsx";
import "./index.css";

function initApp() {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Root element not found");
    return;
  }
  
  try {
    render(<App />, rootElement);
  } catch (error) {
    console.error("Failed to initialize React app:", error);
  }
}

// Ensure DOM is ready before initializing
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
