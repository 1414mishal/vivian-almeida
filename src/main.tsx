import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const splashStart = performance.now();
const MIN_SPLASH_MS = 850;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Fade out the inline splash once React has rendered. A minimum visible
// duration keeps it from flashing when the bundle is already cached.
requestAnimationFrame(() => {
  const elapsed = performance.now() - splashStart;
  const wait = Math.max(0, MIN_SPLASH_MS - elapsed);
  window.setTimeout(() => {
    const splash = document.getElementById("splash");
    if (!splash) return;
    splash.setAttribute("data-ready", "true");
    window.setTimeout(() => splash.remove(), 700);
  }, wait);
});
