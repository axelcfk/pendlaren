"use client";
import { useState } from "react";

export default function Home() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(success);
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLatitude(latitude);
    setLongitude(longitude);
  }
  return (
    <main>
      <h1>Get current position</h1>
      <button onClick={getCurrentPosition}>Click here</button>
      <p>{latitude && "Your latitude is:" + " " + latitude}</p>
      <p>{longitude && "Your longitude is:" + " " + longitude}</p>
    </main>
  );
}
