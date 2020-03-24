import React from 'react'
import Title from './Title'
import list from './CollectionsData'
function ListTitles({list,depthStep,depth}) {
    // var list=["collections 1","collections 2","collections 3","collections 4","collections 5","collections 6","collections 7"];
    
    
    return (
        <div className="listTitles">
      {/* <List disablePadding dense> */}
        {list.map((item, index) => (
          <Title
            key={`${item.name}${index}`}
            depthStep={depthStep}
            depth={depth}
            {...item}
          />
        ))}
      {/* </List> */}
    </div>  
    )
}
ListTitles.defaultProps = {
    list:list,
     depthStep:10,
     depth:1 
}
export default ListTitles


// const a={title:"",
//     sub_collection:[],
//     files:[{file_title:"",content:""}]
//     };
