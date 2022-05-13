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
    <div>
      <div className="form-form">
        <h2 className="post-title">Add Your Comment</h2>
        <div className="centered">
          <form className="submit-form" onSubmit={submitForm}>
            <input
              className="input"
              type="text"
              value={newComment.username}
              onChange={handleChange}
              name={"username"}
              placeholder={"Your name here"}
            />
            <input
              className="input"
              type="text"
              value={newComment.comment}
              onChange={handleChange}
              name={"comment"}
              placeholder={"Your comment here"}
            />
            <button className="sub-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateComment;
