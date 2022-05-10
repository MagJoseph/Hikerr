import React from 'react'
import { useEffect, useState } from 'react'
import Client from "../services/api";

const YourRecordings = () => {

  const [time, setTime] = useState([])
  
  const getTimes = async () => {
    const times = await Client.get(`http://localhost:3001/times`);
    console.log(times.data)
    setTime(times.data)
  }
 
  useEffect(() => {
  getTimes()
}, [])

  return (
    <div>
      <h1>Your Recordings:</h1>
    </div>
  );
}

export default YourRecordings