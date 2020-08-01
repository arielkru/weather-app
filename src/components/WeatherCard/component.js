import React from "react";
import styled from "@emotion/styled";
import Location from "./location";
import Condition from "./condition";
import Icon from "./icon";
import { motion } from "framer-motion";

const WeatherCard = ({ temp, condition, city, country, getWeather }) => {
  let bg;
  if (temp > 12) {
    let highColor = Math.abs((1 - (temp - 12) / 28) * 255);
    let lowColor = Math.abs(highColor - 150);
    bg = `linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)
    )`;
  } else {
    let highColor = Math.abs((1 - (temp + 20) / 32) * 255);
    let lowColor = Math.abs(highColor - 150);
    bg = `linear-gradient(
      to top,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255)
    )`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    display: flex;
    width: 200px;
    height: 240px;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <motion.div drag dragMomentum={false}>
      <Card>
        <Location getWeather={getWeather} city={city} country={country} />
        <Icon condition={condition} />
        <Condition temp={temp} condition={condition} />
      </Card>
    </motion.div>
  );
};

export default WeatherCard;
