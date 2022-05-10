import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Client from "../services/api";

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
        url: `http://localhost:3001/comments/${id}`,
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
    <div>
      <div className="comment-container">
        <h2 className="comment-form">Add Your Comment</h2>
        <form className="submit-container" onSubmit={submitForm}>
          <input
            className="input comm"
            type="text"
            value={newComment.username}
            onChange={handleChange}
            name={"name"}
            placeholder={"Your name here"}
          />
          <input
            className="input comm1"
            type="text"
            value={newComment.comment}
            onChange={handleChange}
            name={"content"}
            placeholder={"Your comment here"}
          />
          <button className="s-btn">Submit</button>
        </form>
      </div>
      ;
    </div>
  );
};

export default CreateComment;
