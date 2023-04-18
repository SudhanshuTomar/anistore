import React from "react";
import './menu-item.scss'

function Menuitem({title,id,imgurl,size}) {
  return (
    <div className={`${size} menu-item`}>

      <div className = "background-image" style = {{
        backgroundImage: `url(${imgurl})`}}/>
        <div className="content">
          <div className="title">{title.toUpperCase()}</div>
          <div className="subtitle">Shop Now</div>
        </div>
    </div>
  );
}

export default Menuitem;
