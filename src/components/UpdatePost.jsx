import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Client from "../services/api";


const UpdatePost = (props) => {
  //set all the states
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("");
  const [mapImg, setMapImg] = useState("");

  let navigate = useNavigate();

  //select a post by id to update
  const getPostToUpdate = async () => {
    await Client.put(`posts/${props.postId}`, {
        title: title,
        imgUrl: imgUrl,
        content: content,
        rating: rating,
        mapImg: mapImg,
    })
  }

const handleSubmit = (e) => {
  e.preventDefault();
  getPostToUpdate();
  navigate("/posts");
  window.location.reload(false);
};    
    
    return (
      <div className="centered">
        <h2 className="post-title">Update Your Post</h2>
        <form className="submit-form centered" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            title="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Title"
          />
          <input
            className="input"
            type="text"
            content="content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="Content"
          />
          <input
            className="input"
            type="text"
            imgUrl="imgUrl"
            onChange={(e) => {
              setImgUrl(e.target.value);
            }}
            placeholder="imgUrl"
          />
          <input
            className="input"
            type="text"
            rating="rating"
            onChange={(e) => {
              setRating(e.target.value);
            }}
            placeholder="Difficulty Rating"
          />
          <input
            className="input"
            type="text"
            mapImg="mapImg"
            onChange={(e) => {
              setMapImg(e.target.value);
            }}
            placeholder="Map Image Url"
          />
          <button className="sub-btn">Submit</button>
        </form>
      </div>
    );
}

export default UpdatePost