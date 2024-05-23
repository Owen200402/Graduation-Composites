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
  const [year, setYear] = useState(1930);
  return (
    <>
      <div className="dropdown m-2">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Year of Graduation
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => {
                onSelect(1930);
                setYear(1930);
              }}
            >
              1930
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => {
                onSelect(1937);
                setYear(1937);
              }}
            >
              1937
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default GraduationFilterYear;
