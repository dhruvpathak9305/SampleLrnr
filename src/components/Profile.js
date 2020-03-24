import React, { useState } from "react";
// import { FaCircle } from "react-icons/fa";
import ProfileDropdown from "./ProfileDropdown"
function Profile() {
  const [state, setState] = useState(false);
  return (
    <div className="profile">
      <div className="profileDP">
        <span onClick={() => setState(!state)}>DP</span>
        {state && <ProfileDropdown/>}
      </div>
    </div>
  );
}

export default Profile;
