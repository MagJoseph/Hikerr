import React from 'react'
import { useState, useEffect } from "react";
import Client from "../services/api";
import PostItem from "../components/PostItem";
import Delete from "../components/Delete";
import UpdatePost from "../components/UpdatePost";
import { useNavigate } from 'react-router-dom'


const MyHikes = (props) => {
  const [posts, setPosts] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const getUser = localStorage.getItem("user");
  const user = props.user;

  console.log(getUser);
  
  let navigate = useNavigate();

  //after clicking on post it will go to PostDetails
  const showPost = (posts) => {
    navigate(`/posts/postdetail/${posts.id}`);
  }; 

  useEffect(() => {
    const makeApiCall = async () => {
      let res = await Client.get(`http://localhost:3001/posts/${getUser}`);
      console.log(res.data)
      setPosts(res.data);
    };
    makeApiCall();
    const userCall = async () => {
      let res = await Client.get(`http://localhost:3001/users/${getUser}`);
      setUserInfo(res.data);
    };
    userCall();
  }, []);

  return posts && userInfo ? (
    <div className="centered bkground">
      <div>
        <h1 className="post-title"> Hello {user.username}!</h1>
        <h2>Your Hikes:</h2>
      </div>
      <div>
        {posts.map((post) => (
          <div onClick={() => showPost(post)} key={post.id}>
            <div className="hikes-square">
              <PostItem
                title={post.title}
                image={post.imgUrl}
                content={post.content}
                mapImg={post.mapImg}
                rating={post.rating}
              />
            </div>
            <div>
              <UpdatePost postId={post.id} />
            </div>
            <div>
              <Delete postId={post.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div class="new-hike">Your newly added hikes will appear here!</div>
  );
};


export default MyHikes