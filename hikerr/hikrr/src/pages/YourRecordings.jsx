import React from 'react'
import { useEffect, useState } from 'react'
import Client from "../services/api";
import RecordingItem from '../components/RecordingItem';
import { useNavigate } from 'react-router-dom'

const YourRecordings = () => {

  let navigate = useNavigate();

  const [times, setTime] = useState([])
  
  const getTimes = async () => {
    const recordings = await Client.get(`http://localhost:3001/times`);
    console.log(recordings.data)
    setTime(recordings.data)
  }
 
  useEffect(() => {
  getTimes()
  }, [])
  
  const [newRecording, setRecording] = useState({
    name: '',
    content: '',
    distance: ''
  })
  
  const getNewTiming = async () => {
    await Client({
      url: `http://localhost:3001/times`,
      method: 'post',
      data: newRecording
    });
  }

    const handleChange = (e) => {
      setRecording({ ...newRecording, [e.target.name]: e.target.value });
      console.log(e.target.name);
      console.log(e.target.value);
    };




  return (
    <div>
      <h1>Your Recordings:</h1>
      {times.map((time) => (
        <div className="times-container" key={time.id}>
          <RecordingItem
            name={time.name}
            content={time.content}
            distance={time.distance}
          />
        </div>
      ))}
    </div>
  );
}

export default YourRecordings