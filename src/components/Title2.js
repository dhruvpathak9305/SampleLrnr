import React,{useState} from "react";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { MdLibraryAdd } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import SubTitle from './SubTitle'
import SubCollection from './SubCollection'
function Title(props) {
  const [arrow,setArrow]=useState(false)
  let level=props.level;
  return (
    <div className="title">
    {console.log("list1")}
            {console.log(Array.isArray(props.item.sub_collection))}
            {console.log(props.item.sub_collection)}
      <div className="title__arrow level" onClick={()=>setArrow(!arrow)}>
     {arrow ? <IoMdArrowDropdown/> : <IoMdArrowDropright />} {props.item.title}
     {arrow ? <SubTitle title={props.item.title}/>:''} 
     {arrow ? (props.item.sub_collection.length>0
            ? <SubCollection item={props.item.sub_collection}/>:"")
            :""}
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
