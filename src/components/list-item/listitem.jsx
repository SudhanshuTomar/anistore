import React from "react";

function Listitem(props) {
  return (
    <div className="list-item">
      <div className="content">
        <div className="title">{props.title}</div>
        <div className="subtitle">{props.subtitle}</div>
      </div>
    </div>
  );
}

export default Listitem;
