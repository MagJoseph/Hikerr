import React from 'react'


const Comments = (props) => {
  return (
    <div className="comment-item">
      <div>{props.name} wrote:</div>
      <div>{props.content}</div>
    </div>
  );
}

export default Comments