import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, TileLayer, Popup,useMap } from 'react-leaflet';
import axios from "axios"
import L from 'leaflet';


const MapPage = () => {
    // const map = useMap();
  const [position, setPosition] = useState([19.1365327, 72.8384047]);
  const [userLocation, setUserLocation] = useState(false);

  const customIcon = new L.Icon({
    iconUrl: require('../../resource/pointer.png'),
    iconSize: [25, 35],
    iconAnchor: [16, 32],
    popupAnchor: [-3, -76],
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition([position.coords.latitude, position.coords.longitude]);
      setUserLocation(true)
      console.log(position);
    });
  }, []);

//   useEffect(() => {

//    const getLocation = async function(){
//         const location = await axios.get("https://ipapi.co/json");
//         setPosition([location.data.latitude, location.data.longitude]);
//         console.log(location)
//     }
// getLocation();
//   }, []);


//   useEffect(() => {
//     if (position) {
//       const latLng = new L.LatLng(position.latitude, position.longitude);
//       map.setView(latLng, 15);
//     }
//   }, [position,map]);
  console.log('hi', position);
  return (
    <>
      <MapContainer
        style={{ height: '100vh', width: '100%' }}
        center={position}
        zoom={!userLocation ? 13 : 15 }
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {userLocation ? (
          <Marker position={position} icon={customIcon}>
            <Popup>
              {/* A pretty CSS3 popup. <br /> Easily customizable. */}
            </Popup>
          </Marker>
        ) : (
          ''
        )}
      </MapContainer>
      ,
    </>
  );
};

export default MapPage;
