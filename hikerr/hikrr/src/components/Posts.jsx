import React from 'react'
import PostItem from './PostItem'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; 
import Client from "../services/api";

const Posts = () => {

//set posts state
const [posts, setPosts ] = useState([])

let navigate = useNavigate();

//after clicking on post it will go to PostDetails
const showPost = (posts) => {
   navigate(`/posts/postdetail/${posts.id}`)
 } 
  
const getPosts = async () => {
  const list = await Client.get(`http://localhost:3001/posts`);
  console.log(list.data);
  setPosts(list.data);
}; 
  
useEffect(() => {
  getPosts();
}, []);  
  
  return (
    <div className="post-container centered">
      <div className="centered">
        <h1>Hikerr</h1>
   </div>
      {posts.map((post) => (
        <div
          className="post-square"
          onClick={() => showPost(post)}
          key={post.id}>
             <PostItem
               title={post.title}
               image={post.imgUrl}
               content={post.content}
               rating={post.rating}
               mapImg={post.mapImg}
               userId={post.user_id}
              />
        </div>
      ))}
    </div>
  );
}

export default Posts