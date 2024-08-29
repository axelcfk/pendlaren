"use client";
import { useState } from "react";

const api_key = "1865697a58b84a44b469a378afb64499";

export default function Home() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  //funktion för att använda browserns geo api. Om den finns kallas success-funktionen och skickar ner position objekt till den
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
