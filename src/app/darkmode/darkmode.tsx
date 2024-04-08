import React from "react";
import "./darkmode.css";

export default function DarkMode() {
  const themechange = () => {
    const body = document.body;
    body.classList.toggle("dark-mode");
  };
  return (
    <div className="flex justify-end px-20 mt-10">
      <button className="dark-mode" onClick={themechange}>Dark Mode</button>
    </div>
  );
}