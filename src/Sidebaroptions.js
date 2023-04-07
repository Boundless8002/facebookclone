import React from 'react';
import { Avatar } from '@mui/material';
import "./CSS/sidebarrow.css" ;

function Sidebaroptions({src,Icon,title}) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src}/>}
      {Icon && <Icon/>}
      <p>{title}</p>
    </div>
  )
}

export default Sidebaroptions;
