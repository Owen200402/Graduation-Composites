import React, { useState } from 'react';

interface Props {
  onSelect: (year: number) => void;
  years: number[];
}

// A component for filtering photos based on year of graduation
const GraduationFilterYear = ({ onSelect, years }: Props) => {
  const [year, setYear] = useState(1930);
  return (
    <>
      <div className="m-2">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          Year of Graduation
        </button>
        <div className="dropdown-menu multi-column">
          {years.map((year) => (
            <button
              className="dropdown-item"
              type="button"
              onClick={() => {
                onSelect(year);
                setYear(year);
              }}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default GraduationFilterYear;
