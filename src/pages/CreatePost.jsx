import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'
import Client from "../services/api";

import Box from "@mui/material/Box";


const CreatePost = (props) => {

   const userId = props.user.id
  

let navigate = useNavigate();

    //set state of new post
  const [newPost, setNewPost] = useState({
      title: "",
      imgUrl: "",
      rating: "",
      content: "",
      mapImg: "",
  });
    
     const getNewPost = async () => {
       await Client({
         url: `posts/${userId}`,
         method: "post",
         data: newPost,
       });
     };
    
const handleChange = (e) => {
  setNewPost({ ...newPost, [e.target.name]: e.target.value });
  console.log(newPost);
};

const handleSubmit = (e) => {
  e.preventDefault();
  getNewPost();
  //returns back to posts after submitting
  navigate("/myhikes");
  window.location.reload(false);
};    
    
  return (
    <Box className="home">
      <div>
        <h1>Add A New Post</h1>
        </div>
      <div className="centered">
        <form className="form centered" onSubmit={handleSubmit}>
          <input
            className="input1"
            type="text"
            value={newPost.title}
            onChange={handleChange}
            name={"title"}
            placeholder={"Title"}
          />
          <input
            className="input1"
            type="text"
            value={newPost.imgUrl}
            onChange={handleChange}
            name={"imgUrl"}
            placeholder={"Image Url"}
          />
          <input
            className="input1"
            type="text"
            value={newPost.content}
            onChange={handleChange}
            name={"content"}
            placeholder={"Content"}
          />
          <input
            className="input1"
            type="text"
            value={newPost.rating}
            onChange={handleChange}
            name={"rating"}
            placeholder={"Difficulty rating"}
          />
          <input
            className="in-cont input1"
            type="text"
            value={newPost.mapImg}
            onChange={handleChange}
            name={"mapImg"}
            placeholder={"Map Image Url"}
          />
          <button className="sub-btn">Submit</button>
        </form>
      </div>
    </Box>
  ); 

}

export default CreatePost