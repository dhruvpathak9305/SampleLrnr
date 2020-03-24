import React from 'react'
import Title from './Title'
import list2 from './CollectionsData'
function ListTitles(props) {
    // var list=["collections 1","collections 2","collections 3","collections 4","collections 5","collections 6","collections 7"];
    
    
    return (
        <div className="listTitles">
        {console.log("list2")}
            {console.log(typeof(props))}
            {console.log("list2")}
        {list2.map((item,index)=><Title key={index} item={item}/>)}
        </div>
    )
}
ListTitles.defaultProps = {
    list2:list2   
}
export default ListTitles


// const a={title:"",
//     sub_collection:[],
//     files:[{file_title:"",content:""}]
//     };
