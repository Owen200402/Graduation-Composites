import React, { useState } from "react";
import styled from "styled-components";

// CSS in JS
const Title = styled.h2`
  text-align: center;
`;

interface Props {
  onSelect: (year: number) => void;
}

// A component for filtering photos based on year of graduation
const GraduationFilterYear = ({ onSelect }: Props) => {
  const [year, setYear] = useState(1970);
  return (
    <>
      <select
        className="form-select mb-3"
        onChange={(event) => {
          const selectedYear = parseInt(event.target.value, 10);
          setYear(selectedYear);
          onSelect(selectedYear);
        }}
      >
        <option value="" disabled>
          Select Year of Graduation
        </option>
        <option value={1970}>1970</option>
        <option value={2022}>2022</option>
      </select>
    </>
  );
};

export default GraduationFilterYear;
