import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Client from "../services/api";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";

const CreateComment = () => {

    let navigate = useNavigate();

    const [newComment, setNewComment] = useState({
      username: "",
      comment: "",
      postId: [],
    });

    let { id } = useParams();

    const getNewComment = async () => {
      console.log(newComment);
      await Client({
        url: `comments/${id}`,
        method: "post",
        data: newComment,
      });
    };

 const handleChange = (e) => {
   setNewComment({ ...newComment, [e.target.name]: e.target.value });
   console.log(e.target.name);
   console.log(e.target.value);
 };

 const submitForm = (e) => {
   e.preventDefault();
   getNewComment();
   navigate(`/posts/postdetail/${id}`);
   window.location.reload(false);
 };

  return (
     <Box className="home">
      <div className="centered">
        <h1 className="header-text">Add Your Comment</h1>
        <div className="centered">
          <form className="form centered" onSubmit={submitForm}>
            <input
              className="input1"
              type="text"
              value={newComment.username}
              onChange={handleChange}
              name={"username"}
              placeholder={"Your Name"}
            />
            <input
              className="input1"
              type="text"
              value={newComment.comment}
              onChange={handleChange}
              name={"comment"}
              placeholder={"Comment"}
            />
            <button className="sub-btn">Submit</button>
            <Link to="/posts" className="back-btn">Cancel</Link>
          </form>
          
        </div>
      </div>
    </Box>
  );
};

export default CreateComment;
