import React, { useState } from "react";
import styled from "styled-components";

// CSS in JS
const Title = styled.h2`
  text-align: center;
`;

interface Props {
  year: number;
}

const Heading = ({ year }: Props) => {
  return <Title>ECE Graduation Class of {year}</Title>;
};

export default Heading;
