import React, { useState, useEffect } from 'react';
import Map from "./Map";

const App = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Use a method to retrieve the user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, []);

  return (
    <div>
      {location ? <Map location={location} /> : 'Loading map...'}
    </div>
  );
};

export default App;
