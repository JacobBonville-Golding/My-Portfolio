import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="page">
      <div className="intro">
        <p className="eyebrow">Jake Bonville-Golding</p>
        <h1>Web developer</h1>
        <p>
          A portfolio of thoughtful websites and interactive projects. More to
          come as this site takes shape.
        </p>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
