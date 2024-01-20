import React from 'react'
import Client from '../services/api';
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RecordingsGrid = (props) => {

    const [times, setTime] = useState([])
    const [userInfo, setUserInfo] = useState();
    const getUser = localStorage.getItem("user");
    const user = props.user;

     useEffect(() => {
         getTimes()
         getUsers()
  }, [])
  
  const getTimes = async () => {
    const recordings = await Client.get(`times`);
    setTime(recordings.data)
  }
    
     const getUsers = async () => {
      let res = await Client.get(`users/${getUser}`);
      setUserInfo(res.data);
    };
 
 return (
     <div className="centered">
         {userInfo ? (
             <Container sx={{ py: 3 }} maxWidth="md">
                 <h2>Your Recordings:</h2>
                 <Grid container spacing={4}>
                     {times.map((time) => (
                         <Grid item key={time.id} xs={12} sm={6} md={4}>
                             <Card
                                 sx={{
                                     height: "100%",
                                     display: "flex",
                                     flexDirection: "column",
                                     backgroundColor: "rgb(215, 234, 75)"
                                 }}
                             >
                                 <CardContent sx={{ flexGrow: 1 }}>
                                     <Typography variant="h6">{time.name}</Typography>
                                     <Typography>Time: {time.content}</Typography>
                                     <Typography>Miles: {time.distance}</Typography>
                                 </CardContent>
                             </Card>
                         </Grid>
                     ))}
                 </Grid>
             </Container>) : (
             <Container sx={{ py: 3 }} maxWidth="md">
                     <h2>Please log in to see your recordings</h2>
                     <Typography>You don't have an account yet?</Typography>
                        <div className="link-container">
      <Link className="link-btn" to="/register">Sign Up<ArrowForwardIcon/></Link>
      </div>
      </Container>
         )}
        </div>
  )
}

export default RecordingsGrid