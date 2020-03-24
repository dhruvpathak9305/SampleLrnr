import React, { useState } from "react";
import CollectionsData from "./CollectionsData";
import ListTitles from "./Title";
function SubTitle(props) {
  let collection = {};
  let state = false;
  let padding = 0;
  const recursive = currentData => {
    if (state === false) {
      if (currentData.title !== "" && currentData.title === props.title) {
        collection = Object.assign({}, currentData);
        console.log(collection);
        state = true;
        console.log(typeof currentData.sub_collection);
        console.log(currentData.sub_collection.length);
        
      }
      //   else console.log("not matched" + currentData.title);


    //   else {
    //     if (currentData.sub_collection.length > 0
    //     ) {
    //       console.log(currentData.sub_collection);
    //       console.log(currentData.files.file_title);
    //     //   recursive(currentData.sub_collection);
    //     //   padding = padding + 1;
    //     //   console.log("padding" + padding);
    //     } else {
    //       if (
    //         // currentData.sub_collection.isArray([]) &&
    //         currentData.sub_collection.length == 0
    //       ) {
    //         padding = 0;
    //       }
    //     }
    //   }
   
    }


    // console.log(state+" "+ !state)
    // if(state===false){
    //    if(currentData.title!=='' && currentData.title===props.title){
    //        collection(currentData);
    //        console.log(typeof(currentData.title) +"success")
    //        state=!state
    //        console.log(state + "  changed")

    //        console.log(typeof(props.title)+"of props title")

    //    }
    //    else{
    //     if(currentData.subCollection!==[]  || currentData.files.file_title!=='' ){
    //         recursive(currentData.subCollection)
    //         setPadding(padding+1)
    //     }
    //    }
    //  if(currentData.subCollection!==[] && currentData.files.file_title!=='' ){
    //     setPadding(0);
    // }
    // }
    // if(state){
    //     console.log(state + "if")
  };

  return (
    <div>
      {/* {CollectionsData.forEach(data => {
        recursive(data)
        console.log("div")
      console.log(collection);
      (state && <ListTitles list2={collection}/>)
      })} */}
      {console.log(typeof(CollectionData))}
      {/* for(let i=0;i<CollectionData.length;i++){
         
      } */}

    </div>
  );
}

export default SubTitle;
