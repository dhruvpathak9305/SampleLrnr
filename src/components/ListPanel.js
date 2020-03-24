import React from "react";
import ListOptions from "./ListOptions";
// import ListTitles from "./ListTitles";
import items from './CollectionsData'
import Sidebar from './Sidebar'
function ListPanel() {
  return (
    <div className="listPanel">
      <ListOptions />
      {/* <ListTitles /> */}
      <Sidebar items={items}/>
    </div>
  );
}

export default ListPanel;
