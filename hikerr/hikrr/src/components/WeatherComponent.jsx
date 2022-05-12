import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'

const WeatherComponent = () => {

    const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API;
    

const [currentWeather, setCurrentWeather] = useState([])
const [location, setLocation] = useState('new york');
 

    const getWeather = async () => {
     const res = await axios.get(
       `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_API_KEY}&units=imperial`
     );
        console.log(res.data.main)
        setCurrentWeather(res.data)
    }
    const generateIconUrl = (ico) => {
        return `http://openweathermap.org/img/wn/${ico}@2x.png`
    }
  
    useEffect(() => {
     getWeather()
    }, []);

  return (
    <div>WeatherComponent</div>
  )
}

export default WeatherComponent