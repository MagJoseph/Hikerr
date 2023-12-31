import React from 'react'
import PostItem from './PostItem'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; 
import Client from "../services/api";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#143d21",
  },
});

const Posts = () => {

//set posts state
const [posts, setPosts ] = useState([])

let navigate = useNavigate();

//after clicking on post it will go to PostDetails
const showPost = (posts) => {
   navigate(`/posts/postdetail/${posts.id}`)
 } 
  
const getPosts = async () => {
  const list = await Client.get(`posts`);
  console.log(list.data);
  setPosts(list.data);
}; 
  
useEffect(() => {
  getPosts();
}, []);  
  
  return (
    <div>
      <Container sx={{ py: 3 }} maxWidth="md">
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    pt: "96.25%",
                  }}
                  image={post.imgUrl}
                />
                <div className="centered">
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">{post.title}</Typography>
                    <StyledRating
                      name="simple-controlled"
                      readOnly
                      value={post.rating}
                    />
                  </CardContent>

                  <Button
                    className="hov"
                    size="small"
                    onClick={() => showPost(post)}
                    style={{ color: "#143d21", width: "100px" }}
                  >
                    View
                  </Button>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

   {
     /* <StyledRating
                    name="simple-controlled"
                    readOnly
                    value={post.rating}
                  />
               */
   }
   {
     /* <PostItem
                title={post.title}
                className="img"
                image={post.imgUrl}
                content={post.content}
                rating={post.rating}
                mapImg={post.mapImg}
                userId={post.user_id}
                  /> */
   }

export default Posts