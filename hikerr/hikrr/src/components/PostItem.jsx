import React from 'react'

const PostItem = (props) => {
  return (
    <div>
      <div className="list-item">
        <p className="post-title"> {props.title}</p>
        <img src={props.image} alt="landscape" />
        <br></br>
        {/* <p className="post-content"> {props.content}</p> */}
        <p className="post-content">Difficulty Rating: {props.rating}</p>
        <br></br>
        {/* <img src={props.mapImg} alt="map" /> */}
      </div>
    </div>
  );
}

export default PostItem