import React from "react";
import ListPanel from "./ListPanel";
import Editor from "./Editor";
function DashBoard() {
  return (
    <div className="dashBoard">
      <ListPanel />
      <Editor />
    </div>
  );
}

export default DashBoard;
