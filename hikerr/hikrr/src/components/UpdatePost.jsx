import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";



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
    await axios.put(`http://localhost:3001/posts/${props.postId}`, {
      title: title,
      content: content,
      image: image,
    });
  };

  return <div>UpdatePost</div>;
}

export default UpdatePost