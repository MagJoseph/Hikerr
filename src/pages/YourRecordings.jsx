import React from 'react'
import { useEffect, useState } from 'react'
import Client from "../services/api";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import Stopwatch from '../components/Stopwatch';

import Container from "@mui/material/Container";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const YourRecordings = () => {

  let navigate = useNavigate();

 
  const [newRecording, setRecording] = useState({
    name: '',
    content: '',
    distance: ''
  })
  
  const getNewTiming = async () => {
    await Client({
      url: `times`,
      method: 'post',
      data: newRecording
    });
  }

    const handleChange = (e) => {
      setRecording({ ...newRecording, [e.target.name]: e.target.value });
      console.log(e.target.name);
      console.log(e.target.value);
    };

      const submitForm = (e) => {
        e.preventDefault();
        getNewTiming();
        navigate("/recordingsgrid");
        window.location.reload(false);
      };


  return (
    <div className="centered home">
      <Container sx={{ py: 3 }} maxWidth="md">
      <div className="form" >
        <Stopwatch />
      </div>
      <div className="centered">
        
          <form className="submit-form centered" onSubmit={submitForm}>
            <h2 className="welcome">Save Your Recording</h2>
          <input
            className="input1"
            type="text"
            value={newRecording.name}
            onChange={handleChange}
            name={"name"}
            placeholder={"Trail name"}
          />
          <input
            className="input1"
            type="text"
            value={newRecording.content}
            onChange={handleChange}
            name={"content"}
            placeholder={"Your Time"}
          />
          <input
            className="input1"
            type="text"
            value={newRecording.distance}
            onChange={handleChange}
            name={"distance"}
            placeholder={"Distance"}
          />
          <button className="sub-btn">Submit</button>
        </form>
        </div>
        <div className="link-container">
      <Link className="link-btn" to="/recordingsgrid">Go To Completed <ArrowForwardIcon/></Link>
      </div>
      </Container>
        </div>
  );
}

export default YourRecordings