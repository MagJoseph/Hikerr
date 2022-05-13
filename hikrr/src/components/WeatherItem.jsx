import React from 'react'

const WeatherItem = ({ currentWeather, location }) => {
  return (
    <div className="centered">
      
      <div className="weather">Today's Temperature: {currentWeather.temp}F </div>
    </div>
  ) 
}

export default WeatherItem