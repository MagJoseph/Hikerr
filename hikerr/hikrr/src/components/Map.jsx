import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";




const Map = () => {
   const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
const defaultCenter = {
    lat: 41.3851, lng: 2.1734
}
    
    const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
  
  return (
     <LoadScript
          googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )

}

export default Map