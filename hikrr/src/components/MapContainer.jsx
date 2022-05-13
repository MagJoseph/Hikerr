import React from 'react'
import {
 GoogleMap,
  LoadScript,
 Marker,
  DirectionsRenderer,
  DirectionsService
} from "@react-google-maps/api";
import { useState, useRef } from 'react'

const MapContainer = () => {
  // I have used this documentation for this component https://react-google-maps-api-docs.netlify.app/
    
  const [newDirections, setNewDirections] = useState(null);
  const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
  

  const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

  const mapStyles = {
    height: "80vh",
    width: "50%",
  };

  const defaultCenter = {
    lat: 40.73,
    lng: -73.93,
  };

  //https://reactjs.org/docs/hooks-reference.html#useref
  const getOrigin = useRef();
  const getDestination = useRef();

  const calculateRoute = async () => {
    if (getOrigin.current.value === "" || getDestination.current.value === "") {
      return;
    }
    //https://developers.google.com/maps/documentation/javascript/directions
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: getOrigin.current.value,
      destination: getDestination.current.value,
      travelMode: window.google.maps.TravelMode.DRIVING
    });
     setNewDirections(results);
     setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
   
  };

  const resetRoute = () => {
    setNewDirections(null);
    setDistance("");
    setDuration("");
    getOrigin.current.value = "";
    getDestination.current.value = "";
  };

  return (
    <div className="centered bkground2">
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
          {newDirections && <DirectionsRenderer directions={newDirections} />}
       
        </GoogleMap>
        <div className="submit-form">
          <input
            className="input"
            type="text"
            placeholder="Starting location"
            ref={getOrigin}
          />
          <input
            className="input"
            type="text"
            placeholder="Your destination"
            ref={getDestination}
          />
          <button type="submit" className="sub-btn" onClick={calculateRoute}>
            Submit
          </button>
          <button className="sub-btn" onClick={resetRoute}>
            Reset
          </button>
        </div>
      </LoadScript>
    </div>
  );
}

export default MapContainer