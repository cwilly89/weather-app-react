import React, { useState } from "react";
import axios from "axios";

import "./styles.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [onscreenMessage, setOnscreenMessage] = useState(false);
  let [temperature, setTemperature] = useState("");

  function displayTemperature(response) {
    setOnscreenMessage(true);

    setTemperature({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "a4748acc18b1b91de37c3e8310fc0ce3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Search a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
  if (onscreenMessage) {
    return (
      <div className="SearchEngine">
        {form}

        <ul>
          <img
            className="icon"
            src={temperature.icon}
            alt={temperature.description}
          />
          <li> Temperature: {Math.round(temperature.temperature)} °F</li>
          <li> Humidity: {temperature.humidity}% </li>
          <li> Wind: {Math.round(temperature.wind)} mph</li>
          <li className="description">
            {" "}
            Description: {temperature.description}{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
