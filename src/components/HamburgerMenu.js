import React,{useState} from 'react'
import { MdMenu } from "react-icons/md";
function HamburgerMenu() {
    const [state,setState]=useState("false")
    return (
   <div className="hamburgerMenu">
    <span onClick={()=>setState(!state)}>
        <MdMenu/> 
        </span> 
        </div>
        
    )
}

export default HamburgerMenu
