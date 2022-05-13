import React from 'react'

const SearchItem = (props) => {
  return (
    <div>
      <div>
        <div className="list-item centered">
          <p className="post-title"> {props.title}</p>
          <img src={props.image} alt="landscape" />
          <br></br>
          <p className="post-content"> {props.content}</p>
          <p className="rating">Difficulty Rating: {props.rating}</p>
          <br></br>
          <img className="img-map" src={props.mapImg} alt="map" />
        </div>
      </div>
    </div>
  );
}

export default SearchItem