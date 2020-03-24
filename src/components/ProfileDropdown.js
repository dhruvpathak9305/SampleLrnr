import React, { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
function ProfileDropdown() {
  const [mode, setMode] = useState(false);
  return (
    <div className="profileDropdown">
      <ul className="profileDropdown__ul">
        <li
          onClick={() => {
            setMode(!mode);
          }}
        >
          Dark Mode
          {mode ? (
            <span className="modeIcon">
              <FaToggleOff />
            </span>
          ) : (
            <span className="modeIcon">
              <FaToggleOn />
            </span>
          )}
        </li>
        <li>Profile</li>
        <li>
          What's New <span className="whatNewIcon">
          <GoPrimitiveDot />
            </span>
        </li>
        <li>Help</li>
        <li>Send Feedback </li>
        <li>Hints and shortcuts </li>
        <li>Log out</li>
      </ul>
    </div>
  );
}

export default ProfileDropdown;
