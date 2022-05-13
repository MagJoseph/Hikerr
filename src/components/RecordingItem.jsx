import React from 'react'

const RecordingItem = (props) => {


  return (
    <div>
      <div className="times-wrapper">
        <h3 className="hike-names">Hike: {props.name}</h3>
        <h3>Your Time: {props.content}</h3>
        <h3>Distance: {props.distance}</h3>
      </div>
    </div>
  )
}

export default RecordingItem