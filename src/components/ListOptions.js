import React from "react";
import { GoPlus } from "react-icons/go";
import { FaAngleDoubleLeft, FaExpand } from "react-icons/fa";
function ListOptions() {
  return (
    <div className="listOptions">
      <span>DFIN</span>
      <div className="listOptions__icons">
          <span className="listOptions__icons--plus">
          <GoPlus />
          </span>
           <FaExpand />
        <FaAngleDoubleLeft />
      </div>
    </div>
  );
}

export default ListOptions;
