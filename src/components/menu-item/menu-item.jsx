import React from "react";
import './menu-item.scss'
import { Link, useNavigate } from 'react-router-dom';

const MenuItem = ({title,imageUrl,size,linkUrl}) => {
  const navigate = useNavigate();

  return (
    <div className={`${size} menu-item`} onClick={() => navigate(linkUrl)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <Link to={linkUrl} className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </Link>
    </div>
  );
}

export default MenuItem;
