import React from "react";
import WeatherCard from "./components/WeatherCard/component";
import "./App.css";

function App() {
  const data = async () => {
    const apiRes = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=tel-aviv&units=metric&appid=37869e478effbcdde9a2e9adc326d2bd"
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
      <WeatherCard
        temp={-20}
        condition="Clouds"
        city="Tel Aviv"
        country="Israel"
      />
      <WeatherCard
        temp={5}
        condition="Clear"
        city="Tel Aviv"
        country="Israel"
      />
    </div>
  );
}

export default App;
