import React from "react";
import { useNavigate } from "react-router-dom";
import Client from "../services/api";

const Delete = (props) => {
  let navigate = useNavigate();

  const deletePost = async () => {
    await Client.delete(`posts/${props.postId}`);
  };

  const handleDelete = () => {
    deletePost();
    navigate("/posts");
    window.location.reload(false);
  };

  return (
    <div className="centered">
      <div className="post-title">Delete your post</div>
      <button className="sub-btn mar" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Delete;
