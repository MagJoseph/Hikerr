import React from 'react'

const WeatherItem = ({ currentWeather }) => {
  return (
      <div>
          <div>Today's Temperature: {Math.ceil(currentWeather.temp)} </div>
        
    </div>
  )
}

export default WeatherItem