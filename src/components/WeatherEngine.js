import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component";
import MoonLoader from "react-spinners/MoonLoader";

const WeatherEngine = ({ location }) => {
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    condition: null,
    city: null,
    country: null,
  });

  const getWeather = async (q) => {
    setLoading(true);
    setQuery("");
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=37869e478effbcdde9a2e9adc326d2bd`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        country: resJSON.sys.country,
        condition: resJSON.weather[0].main,
        city: resJSON.name,
      });
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     getWeather(query);
  //   };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div className="App">
      {!loading && !error ? (
        <div>
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
            getWeather={getWeather}
          />
        </div>
      ) : loading && error ? (
        <div>
          <WeatherCard
            temp="40"
            condition=""
            city="Error!"
            country=""
            getWeather={getWeather}
          />
        </div>
      ) : loading && !error ? (
        <div style={{ color: "#4287f5" }}>
          <h3> Loading </h3>
          <MoonLoader size={50} color={"#4287f5"} />
        </div>
      ) : null}
    </div>
  );
};

export default WeatherEngine;
