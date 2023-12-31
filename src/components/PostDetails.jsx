import React from 'react'
import CommentsItem from './CommentsItem'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Client from "../services/api";


import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";


const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));


const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#143d21",
  },
});

const PostDetails = (props) => {

const [selectedPost, setSelectedPost] = useState('');
  const [comments, setComment] = useState('');
  
   const { window } = props;
   const [open, setOpen] = React.useState(false);

   const toggleDrawer = (newOpen) => () => {
     setOpen(newOpen);
   };

   // This is used only for the example
   const container =
     window !== undefined ? () => window().document.body : undefined;


    
 let { id } = useParams();

 //get posts by id
 const getPost = async () => {
   const result = await Client.get(`posts/postdetail/${id}`);
     console.log(result.data);
     console.log(result.data.onePost);
   setSelectedPost(result.data.onePost);
     setComment(result.data.getComments);
   
     
 };

 useEffect(() => {
   getPost();
 }, []);



  function createGoogleMapsLink(destination) {
    // Construct the Google Maps URL with the destination as the query parameter
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      destination
    )}`;

    return googleMapsUrl;
  }

  // Example usage:
  const destination = selectedPost?.title;
  const googleMapsLink = createGoogleMapsLink(destination);

  console.log(googleMapsLink);
     
  return selectedPost && comments ? (
    <div>
      <Typography variant="h2">{selectedPost.title}</Typography>
      <Container maxWidth="md">
        <Stack direction="row" spacing={2}>
          <div className="grid-item">
            <img src={selectedPost.imgUrl} />
          </div>
          <div item xs={4} className="grid-item">
            <Typography
              variant="body1"
              style={{ paddingRight: 8, paddingLeft: 8, paddingTop: 5 }}
            >
              {selectedPost.content}
            </Typography>
            <br />
            <Typography variant="body1">Rating: </Typography>
            <StyledRating
              name="simple-controlled"
              readOnly
              value={selectedPost.rating}
            />
          </div>
        </Stack>
        <br />
        <div className="centered">
          <a href={googleMapsLink} target="_blank" className="directions">
            Get Directions
          </a>
        </div>

        <br />
        <div className="centered">
          <Button onClick={toggleDrawer(true)} className="comments-text">
            See Comments
          </Button>
        </div>
        <br />
        <div className="footer"></div>
        <Root>
          <CssBaseline />
          <Global
            styles={{
              ".MuiDrawer-root > .MuiPaper-root": {
                height: `calc(50% - ${drawerBleeding}px)`,
                overflow: "visible",
              },
            }}
          />

          <SwipeableDrawer
            container={container}
            anchor="bottom"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <StyledBox
              sx={{
                position: "absolute",
                top: -drawerBleeding,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                visibility: "visible",
                right: 0,
                left: 0,
              }}
            >
              <Puller />
              <Typography
                sx={{ p: 2, color: "text.secondary" }}
                style={{ backgroundColor: "#ededed" }}
              >
                {comments.length} comments
              </Typography>
            </StyledBox>
            <StyledBox
              sx={{
                px: 2,
                pb: 2,
                height: "100%",
                overflow: "auto",
              }}
            >
              <Button onClick={toggleDrawer(false)} className="comments-text">
                Close
              </Button>
              <div className="centered">
                {comments.map((comment) => (
                  <div key={comment.id}>
                    <CommentsItem
                      name={comment.username}
                      content={comment.comment}
                    />
                  </div>
                ))}
              </div>
              <div className="centered">
                <Link to={`/posts/postdetail/${selectedPost.id}/createcomment`}>
                  Add your comment here
                </Link>
              </div>
            </StyledBox>
          </SwipeableDrawer>
        </Root>
      </Container>
    </div>
  ) : null;    

 
}



export default PostDetails