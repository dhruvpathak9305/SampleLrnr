// import React,{useState} from "react";
import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
// import { MdLibraryAdd } from "react-icons/md";
// import { FiMoreVertical } from "react-icons/fi";
// import { GoPlus } from "react-icons/go";

// const items={title:"",
//     items:[],
//     files:[{file_title:"",content:""}]
//     };

function SidebarItem({
  title,
  files,
  items,
  depthStep = 10,
  depth = 0,
  ...rest
}) {
  const [state, setState] = useState(false);
  return (
    <>
     
      <span onClick={() => setState(!state)}>
        <ListItem button dense {...rest}>
          <ListItemText style={{ paddingLeft: depth * depthStep }}>
            <span>{title}</span>
           </ListItemText>
        </ListItem>
      
      </span>
      {state && Array.isArray(items) ? (
        <List disablePadding dense>
          {items.map(subItem => (
            <SidebarItem
              key={subItem.title}
              depth={depth + 1}
              depthStep={depthStep}
              {...subItem}
            />
          ))}
        </List>
      ) : null}
      {state && Array.isArray(files) ? (
        <List disablePadding dense>
          {files.map(subfile => (
            <SidebarItem
              key={subfile.title}
              depth={depth + 1}
              depthStep={depthStep}
              {...subfile}
            />
          ))}
        </List>
      ) : null}
    </>
  );
}

export default SidebarItem;
{/* <ListItem button dense {...rest}>
          <ListItemText style={{ paddingLeft: depth * depthStep }}>
          <span>{file.file_title}</span>
           </ListItemText>
        </ListItem> */}

// {items.files.file_title.length && items.files.forEach((file)=>(file.file_title.length
//   && (<ListItem button dense {...rest}>
//    <ListItemText style={{ paddingLeft: depth * depthStep }}>
//      <span>{file.file_title}</span>
//     </ListItemText>
//  </ListItem>
//   )))}

// {items.forEach((item)=>item.files.forEach((file)=>{
//   console.log(file.file_title +" "+title+" ")
// })) 
//  }