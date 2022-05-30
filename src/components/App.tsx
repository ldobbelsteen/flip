import "../styles.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import { FlipDocument } from "./FlipDocument";

const App = () => {
  return (
    <main>
      <FlipDocument />
    </main>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
