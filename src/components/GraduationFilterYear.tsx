import React, { useState } from 'react';


interface Props {
  onSelect: (year: number) => void;
}

// A component for filtering photos based on year of graduation
const GraduationFilterYear = ({ onSelect }: Props) => {
  const [year, setYear] = useState(1930);
  return (
    <>
      <div className="m-2">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Year of Graduation
        </button>
        <div className="dropdown-menu multi-column">
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
          <button
            className="dropdown-item"
            type="button"
            onClick={() => {
              onSelect(1938);
              setYear(1938);
            }}
          >
            1938
          </button>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => {
              onSelect(1939);
              setYear(1939);
            }}
          >
            1939
          </button>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => {
              onSelect(1940);
              setYear(1940);
            }}
          >
            1940
          </button>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => {
              onSelect(1941);
              setYear(1941);
            }}
          >
            1941
          </button>
        </div>
      </div>
    </>
  );
};

export default GraduationFilterYear;
