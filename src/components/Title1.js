import React,{useState} from "react";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { MdLibraryAdd } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
function Title({ title,sub_collection, depthStep = 10, depth = 1, ...rest }) {
  const [arrow,setArrow]=useState(false)
  return (

    <div className="title">
    <div className="title__arrow" onClick={()=>setArrow(!arrow)}>
     {arrow ? <IoMdArrowDropdown/> : <IoMdArrowDropright />}
      <span style={{ paddingLeft: depth * depthStep }}>{title}</span>
       {arrow && Array.isArray(sub_collection) ? (
          sub_collection.map((item) => (
            <Title
              key={item.name}
              depth={depth + 1}
              depthStep={depthStep}
              {...item}
            />
          ))
      ) : null}
      </div>
      <div className="title__options">
        <GoPlus />    
        <MdLibraryAdd />
        <FiMoreVertical />
      </div>
      </div>
   
  );
}

export default Title;
