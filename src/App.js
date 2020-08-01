import React from "react";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  const data = async () => {
    const apiRes = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=tel-aviv&units=metric&appid=<token>"
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };
  data().then((res) => {
    console.log(res.main.temp);
    console.log(res.sys.country);
    console.log(res.weather[0].main);
  });

  return (
    <div className="App">
      <WeatherEngine location="tel-aviv" />
    </div>
  );
}

export default App;
