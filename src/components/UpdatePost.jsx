import { React, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Client from "../services/api";

import Delete from "./Delete"

import Box from "@mui/material/Box";


const UpdatePost = () => {
 
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("");
  const [mapImg, setMapImg] = useState("");
 

  let navigate = useNavigate();

   let { id } = useParams();

  //select a post by id to update
  const getPostToUpdate = async () => {
    await Client.put(`posts/${id}`, {
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
  navigate("/myhikes");
  window.location.reload(false);
};    
    
    return (
     <Box className="home">
        <div>
        <h1>Edit Your Post</h1>
        </div>
        <div className="centered">
        <form className="form centered" onSubmit={handleSubmit}>
          <input
            className="input1"
            type="text"
            title="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Title"
          />
          <input
            className="input1"
            type="text"
            content="content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="Content"
          />
          <input
            className="input1"
            type="text"
            imgUrl="imgUrl"
            onChange={(e) => {
              setImgUrl(e.target.value);
            }}
            placeholder="imgUrl"
          />
          <input
            className="input1"
            type="text"
            rating="rating"
            onChange={(e) => {
              setRating(e.target.value);
            }}
            placeholder="Difficulty Rating"
          />
          <input
            className="input1"
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
        <Delete postId={id}/>
     </Box>
    );
}

export default UpdatePost