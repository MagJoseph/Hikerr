import React from 'react'
import PostsItem from './PotsItem'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; 
import axios from 'axios';

const Posts = () => {

//set posts state
const [posts, setPosts ] = useState([])

let navigate = useNavigate();

//after clicking on post it will go to PostDetails
const showPost = (posts) => {
   navigate(`/posts/postdetail/${posts.id}`)
 } 
  
const getPosts = async () => {
  const list = await axios.get(`http://localhost:3001/posts`);
  console.log(list.data);
  setPosts(list.data);
}; 
  
useEffect(() => {
  getPosts();
}, []);  
  
  return (
    <div>
      <div className="center">
        <h1>Hikerr</h1>
   </div>
      {posts.map((post) => (
        <div
          className="home-container"
          onClick={() => showPost(post)}
          key={post.id}>
             <PostsItem
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