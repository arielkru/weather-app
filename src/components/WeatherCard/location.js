import React from "react";
import styled from "@emotion/styled";

const Location = ({ city, country }) => {
  const Container = styled.div`
    text-align: center;
  `;

  const City = styled.h1`
    font-family: "Merriweather", serif;
    font-size: 1.8em;
  `;

  const Country = styled.h3`
    font-family: "Fira Sans", sans-serif;
    font-weight: 2500;
    font-size: 1.2rem;
  `;

  return (
    <Container>
      <City>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;
