import React from 'react'
import { useState } from "react";
import axios from 'axios'
import WeatherItem from './WeatherItem';
import Weatherweather from './Weatherweather';

const WeatherComponent = () => {


const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API;
    

const [currentWeather, setCurrentWeather] = useState([])
  const [location, setLocation] = useState([]);
  const [moreWeather, setMoreWeather] = useState([])
 

    
    const getWeather = async () => {
      const res = await axios.get(
       `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_API_KEY}&units=imperial`
     );
      console.log(res.data.main)
      console.log(res.data.weather)
      setCurrentWeather(res.data.main)
      setMoreWeather(res.data.weather)
     }
   
    const handleChange = (e) => {
        setLocation(e.target.value);
  
};
    
    const handleSubmit = (e) => {
  e.preventDefault();
    getWeather()
};  
  
 return currentWeather ? (
   <div>
     <div className="form-form">
       <h2 className="post-title">Check the weather before you go!</h2>
       <h2>Type in your city:</h2>
       <div className="centered">
         <form className="submit-form" onSubmit={handleSubmit}>
           <input
             className="input"
             type="text"
             placeholder="Enter City"
             value={location}
             onChange={handleChange}
           />
           <button className="sub-btn">Submit</button>
         </form>
       </div>
       <div>
         <WeatherItem currentWeather={currentWeather} location={location}/>
       </div>
       <div className="centered">
         {moreWeather.map((weather) => (
           <div className="weather" key={weather.id}>
             <Weatherweather
               main={weather.main}
              />
           </div>
         ))}
       </div>
     </div>
   </div>
 ) : (<div>No location found</div>)
}

export default WeatherComponent