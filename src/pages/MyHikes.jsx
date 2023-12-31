import React from 'react'
import { useState, useEffect } from "react";
import Client from "../services/api";
import { useNavigate } from 'react-router-dom'

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

  const editPost = (posts) => {
    navigate(`/updatepost/${posts.id}`)
  }

  useEffect(() => {
    const makeApiCall = async () => {
      let res = await Client.get(`posts/${getUser}`);
      console.log(res.data)
      setPosts(res.data);
    };
    makeApiCall();
    const userCall = async () => {
      let res = await Client.get(`users/${getUser}`);
      setUserInfo(res.data);
    };
    userCall();
  }, []);

  return posts && userInfo ? (
    <div className="centered">
     
        <h1> Hello {user.username}!</h1>
        {posts.length > 0 ?
          (<Typography variant="h3">Your Hikes:</Typography>) :
          (<Typography variant="h3">No Hikes yet.</Typography>)}
       
        <div>
          <Container sx={{ py: 3 }} maxWidth="md">
       <Grid container spacing={4}>
              {posts.map((post) => (
               <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  minWidth: 270,
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
                  <div className="row-stack">
                  <Button
                    className="hov"
                    size="small"
                    onClick={() => showPost(post)}
                    style={{ color: "#143d21", width: "100px" }}
                  >
                    View
                      </Button>
                       <Button
                    className="hov"
                    size="small"
                    onClick={() => editPost(post)}
                    style={{ color: "#143d21", width: "100px" }}
                  >
                    Edit
                        </Button>
                        </div>
                </div>
              </Card>
            </Grid>
            ))}
              </Grid>
            </Container>
        </div>
      </div>
   
  ) : (
    <div class="new-hike">Your newly added hikes will appear here!</div>
  );
};


export default MyHikes