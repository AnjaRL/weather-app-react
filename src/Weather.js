import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }
  let apiKey = "0100753519abc485e00e28ede0cdbe68";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <Loader
      type="ThreeDots"
      color="white"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
