import React from "react";
import './menu-item.scss'
import { withRouter } from 'react-router';

function Menuitem({title,id,imageUrl,size,history,linkUrl,match}) {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>

      <div className = "background-image" style = {{
        backgroundImage: `url(${imageUrl})`}}/>
        <div className="content">
          <div className="title">{title.toUpperCase()}</div>
          <div className="subtitle">Shop Now</div>
        </div>
    </div>
  );
}
// withRouter() is higher order functions that takes in a component and returns a super component which has access to history api and router props
export default withRouter(Menuitem);
