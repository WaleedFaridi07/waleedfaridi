import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

function initApp() {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Root element not found");
    return;
  }
  
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
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
