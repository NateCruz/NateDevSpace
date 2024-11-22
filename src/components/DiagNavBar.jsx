import { useState } from "react";
import "../DiagNavBar.css"; // Import the CSS file

const DiagNavBar = () => {
  const [isGrown, setIsGrown] = useState(false);
  const [content, setContent] = useState("Click me to grow!");

  const toggleSize = (Image) => {
    setIsGrown(!isGrown);
    if (!isGrown) {
      setContent("BIG"); // Change content when expanded
    } else {
      setContent("sml"); // Reset content when shrunk
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <div
        style={{
          textAlign: "center",
          alignContent: "center",
          color: "white",
        }}
        className={`growable-div ${isGrown ? "expanded" : ""}`}
        onClick={toggleSize}
      >
        {content}
      </div>
    </div>
  );
};

export default DiagNavBar;
