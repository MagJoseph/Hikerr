import React from 'react'

const RecordingItem = (props) => {


  return (
    <div>
      <div className="times-wrapper">
        <h2>Hike: {props.name}</h2>
        <h2>Your Time: {props.content}</h2>
        <h2>Distance: {props.distance}</h2>
      </div>
    </div>
  )
}

export default RecordingItem