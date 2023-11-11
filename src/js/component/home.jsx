import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("");

  const handleClick = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div className="container">
      <div
        className={`colorLight redLight ${color === "red" ? "on" : ""}`}
        onClick={() => handleClick("red")}
      ></div>
      <div
        className={`colorLight yellowLight ${color === "yellow" ? "on" : ""}`}
        onClick={() => handleClick("yellow")}
      ></div>
      <div
        className={`colorLight greenLight ${color === "green" ? "on" : ""}`}
        onClick={() => handleClick("green")}
      ></div>
    </div>
  );
};

export default Home;