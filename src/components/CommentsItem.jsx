import React from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Divider from '@mui/material/Divider';



const Comments = (props) => {
  return (
    <div className="comment-container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AccountCircleIcon/>
        <div className="comment-item">{props.name} wrote:</div>
      </div>
      <div>{props.content}</div>
      <Divider/>
    </div>
  );
}

export default Comments