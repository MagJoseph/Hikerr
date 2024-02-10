import React from 'react'
import { useState } from "react";
import axios from 'axios'

import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import MoodIcon from '@mui/icons-material/Mood';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import NotesIcon from '@mui/icons-material/Notes';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const WeatherComponent = () => {

  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API;
    
  const [city, setCity] = useState([]);
  const [getState, setGetState] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
 
  const getWeather = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${getState}US&units=imperial&appid=${WEATHER_API_KEY}`
    );
    console.log(res.data)
    setWeatherData(res.data)
  }

    const feelsLike = parseFloat(weatherData?.main.feels_like.toFixed(0));
    const temp = parseFloat(weatherData?.main.temp.toFixed(0));
   
  const handleCityChange = (e) => {
    setCity(e.target.value)
  };

  const handleStateChange = (e) => {
    setGetState(e.target.value)
  }
    
  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather()
  };

  
    const getWeatherIconUrl = (iconCode) => {
    return ` https://openweathermap.org/img/wn/${iconCode}.png`;
    };
  
  return (
    <div className="home centered2">
      <div>
        <h3 className="subheading">Rain or Shine?</h3>
          
          <form className="wrapper centered" onSubmit={handleSubmit} style={{ height: 120 }}>
          <div className="welcome">Let's find out!</div>
          <br/>
            <input 
              className="input1"
              type="text"
              placeholder="City"
              value={city}
              onChange={handleCityChange}
          />
            <input 
              className="input1"
              type="text"
              placeholder="State"
              value={getState}
              onChange={handleStateChange}
            />
            <button className="sub-btn">Submit</button>
          </form>
          <br/>
         {weatherData ? (
        <div className="wrapper centered">
            {/* <h2 className="subheading2">{weatherData.name}</h2> */}
              <img className="weather-icon"
            src={getWeatherIconUrl(weatherData.weather[0].icon)}
            alt="Weather Icon"
          />
          <div className="weather-item"><ThermostatIcon className="icon"/>Temperature: {temp}°F</div>
          <div className="weather-item"><NotesIcon className="icon"/>Description: {weatherData.weather[0].description}</div>
          <div className="weather-item"><MoodIcon className="icon"/>Feels like : {feelsLike}°F</div>
          <div className="weather-item"><WaterDropIcon className="icon"/>Humidity : {weatherData.main.humidity}%</div>
          <div className="weather-item"><FiberManualRecordIcon className="icon"/>Pressure : {weatherData.main.pressure}</div>
          <div className="weather-item"><AirIcon className="icon"/>Wind Speed : {weatherData.wind.speed}m/s</div>
          </div>
          
      ) : (
       null
      )}
      </div>
     </div>
   
  )
}

export default WeatherComponent