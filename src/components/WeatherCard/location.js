import React, { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Location = ({ city, country, getWeather }) => {
  const [query, setQuery] = useState("");
  const [inputMode, setInputMode] = useState(false);

  return (
    <motion.div initial="hidden" animate="visible" whileHover={{ scale: 1.1 }}>
      <Container>
        {!inputMode && (
          <City
            onClick={() => {
              setInputMode(true);
            }}
          >
            {city}
          </City>
        )}
        {inputMode && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getWeather(query);
            }}
          >
            <Input
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        )}
        <Country>{country}</Country>
      </Container>
    </motion.div>
  );
};

export default Location;

const Container = styled.div`
  text-align: center;
`;

const City = styled.h1`
  font-family: "Merriweather", serif;
  font-size: 1.8em;
  position: relative;
  cursor: pointer;
`;

const Country = styled.h3`
  font-family: "Fira Sans", sans-serif;
  font-weight: 2500;
  font-size: 1.2rem;
`;

const Input = styled.input`
  background-color: transparent;
  font-family: "Merriweather", serif;
  border: none;
  color: white;
  font-size: 1rem;
`;
