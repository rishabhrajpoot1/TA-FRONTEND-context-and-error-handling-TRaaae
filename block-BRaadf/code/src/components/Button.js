import React from "react";
import ModeContext from "../ModeContext";

export default function SwitchButton({ isDarkMode, changeMode }) {
  return (
    <button
      className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={changeMode}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
