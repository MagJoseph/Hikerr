import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'

const CreatePost = () => {


let navigate = useNavigate();

    //set state of new post
  const [newPost, setNewPost] = useState({
      title: "",
      tag: "",
      content: "",
      image: "",
  });
    
     const getNewPost = async () => {
       await axios.get({
         url: `http://localhost:3001/posts/${id}`,
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
  navigate("/posts");
  window.location.reload(false);
};    
    
  return (
    <div>CreatePost</div>
  )
}

export default CreatePost