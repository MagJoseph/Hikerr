import React from 'react'


const Comments = (props) => {
  return (
    <div className="comment-item">
      <div>{props.username} wrote:</div>
      <div>{props.comment}</div>
    </div>
  );
}

export default Comments