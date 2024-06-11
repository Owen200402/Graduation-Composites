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
        <ul className="dropdown-menu">
            {years.map((year) => (
              <li key={year}>
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
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default GraduationFilterYear;
