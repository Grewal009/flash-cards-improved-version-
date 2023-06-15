import React from "react";
import ReactDOM from "react-dom/client";

import FlashCards from "./src/FlashCards";

const App = () => {
  return (
    <div>
      <FlashCards />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
