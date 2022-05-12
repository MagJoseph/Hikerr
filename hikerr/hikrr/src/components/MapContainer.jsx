import React from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
//import axios from 'axios';
import { useState } from 'react'

const MapContainer = () => {

    const [currentPosition, setCurrentPosition] = useState({});
   
    // const [origin, setOrigin] = useState('')
    // const [destination, setDestination] = useState('')
    // const [directions, setDirections] = useState('')

 
    
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const mapStyles = {
       height: "80vh",
       width: "50%",
     };

     const defaultCenter = {
       lat: 40.73,
       lng: -73.93,
     };
 

//     const getDirections = async () => {
//       let res = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${API_KEY}`)
//         console.log(res.data)
//         setDirections(res.data)
        
//     }   
    
//     useEffect(() => {
//      getDirections() 
//   }, [])  

return (
    <div>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
                  center={defaultCenter}
        />
      </LoadScript>
    </div>
  );
}

export default MapContainer