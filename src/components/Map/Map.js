import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const Map = ({ location }) => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: location.lat,
    lng: location.lng,
  };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
