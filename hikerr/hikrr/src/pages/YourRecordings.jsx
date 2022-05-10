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

      const submitForm = (e) => {
        e.preventDefault();
        getNewTiming();
        navigate(`http://localhost:3001/yourrecordings`);
        window.location.reload(false);
      };


  return (
    <div>
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
      <div className="rec-container">
        <h2 className="rec-form">Add a New Recording</h2>
        <form className="submit-container" onSubmit={submitForm}>
          <input
            className="input"
            type="text"
            value={newRecording.name}
            onChange={handleChange}
            name={"name"}
            placeholder={"Trail name"}
          />
          <input
            className="input"
            type="text"
            value={newRecording.content}
            onChange={handleChange}
            name={"content"}
            placeholder={"Your Time"}
          />
          <input
            className="input"
            type="text"
            value={newRecording.distance}
            onChange={handleChange}
            name={"distance"}
            placeholder={"Distance"}
          />
          <button className="s-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default YourRecordings