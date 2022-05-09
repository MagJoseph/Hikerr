import React from 'react'
import CommentsItem from './CommentsItem'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';


const PostDetails = (props) => {
 const [selectedPost, setSelectedPost] = useState('');
 const [comments, setComment] = useState();

 let { id } = useParams();

 //get posts by id
 const getPost = async () => {
   const result = await axios.get(`http://localhost:3001/posts/postdetail/${id}`);
     console.log(result.data);
     console.log(result.data.onePost);
   setSelectedPost(result.data.onePost);
   setComment(result.data.getComments[0]);
 };

 useEffect(() => {
   getPost();
 }, []);

    
 return  ( selectedPost && comments ) ?  (
   <div className="post-details">
     <p className="post-title"> {selectedPost.title}</p>
     <img src={selectedPost.imgUrl} />
     <br></br>
     <p className="post-content"> {selectedPost.content}</p>
     <p className="post-content">Difficulty Rating: {selectedPost.rating}</p>
     <img src={selectedPost.mapImg} />
     <br></br>
     <div className="comment-container">
       <h3 className="post-title">Comments</h3>
       {comments.map((comment) => (
         <div className="post-container" key={comment.id}>
               <CommentsItem
                   name={comment.username}
                content={comment.comment} />
         </div>
       ))}
         </div>
         <Link className="add-comment" to={`/posts/postdetail/${selectedPost.id}/commentsform`}>
       Add your comment here</Link>
    </div>
 ) : null;    

 
}

export default PostDetails