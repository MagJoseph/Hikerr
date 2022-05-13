import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'
import Client from "../services/api";

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
         url: `http://localhost:3001/posts/${userId}`,
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
    <div className="form-form">
      <h2 className="post-title">Add A New Post</h2>
      <div className="centered">
        <form className="submit-form centered" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            value={newPost.title}
            onChange={handleChange}
            name={"title"}
            placeholder={"Title"}
          />
          <input
            className="input"
            type="text"
            value={newPost.imgUrl}
            onChange={handleChange}
            name={"imgUrl"}
            placeholder={"Image Url"}
          />
          <input
            className="input"
            type="text"
            value={newPost.content}
            onChange={handleChange}
            name={"content"}
            placeholder={"Content"}
          />
          <input
            className="input"
            type="text"
            value={newPost.rating}
            onChange={handleChange}
            name={"rating"}
            placeholder={"Difficulty rating"}
          />
          <input
            className="in-cont input"
            type="text"
            value={newPost.mapImg}
            onChange={handleChange}
            name={"mapImg"}
            placeholder={"Map Image Url"}
          />
          <button className="sub-btn">Submit</button>
        </form>
      </div>
    </div>
  ); 

}

export default CreatePost