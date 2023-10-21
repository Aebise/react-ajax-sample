import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  function showTemp(response) {
    setTemperature(Math.round(response.data.main.temp));
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=a95c2c6739994ba4903e007ee817e7d1&units=metric`;
  axios.get(url).then(showTemp);
  return (
    <h1>
      The temperature in {props.city} is {temperature}°C.
    </h1>
  );
}
