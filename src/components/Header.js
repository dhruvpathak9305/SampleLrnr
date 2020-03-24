import React,{useState} from "react";
import HamburgerMenu from "./HamburgerMenu";
import SearchBar from "./SearchBar";
import AddNewMember from "./AddNewMember";
import Notification from "./Notification";
import Profile from "./Profile";
import Options from "./Options";
function Header() {
  const [state,setState]=useState(false)
  return (
    <div>
    <div className="header">
      <div className="header-left">
      <span onClick={()=>setState(!state)}>
      <HamburgerMenu /> </span>
        <SearchBar />
      </div>
      <div className="header-right"> 
        <AddNewMember />
        <Notification />
        <Profile />
      </div>
    </div>
    {state && <Options/>}
    </div>
    
    
  );
}

export default Header;
