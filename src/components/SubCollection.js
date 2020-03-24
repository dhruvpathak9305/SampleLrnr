import React from "react";
import Title from "./Title";
function SubCollection(props) {
  return (
    <div>
      {console.log("dhruv")}
      {console.log(props.item)}
      
      <Title item={props.item} />
    </div>
  );
}

export default SubCollection;
