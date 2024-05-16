import React, { useState } from "react";

// A component for filtering photos based on year of graduation
const GraduationFilterYear = () => {
  const [year, setYear] = useState("2022");
  return (
    <>
      <select
        className="form-select mb-3"
        onChange={(event) => {
          setYear(event.target.value);
          console.log(event.target.value);
        }}
      >
        <option value=""></option>
        <option value="1970">1970</option>
        <option value="2023">2023</option>
      </select>
      <h2>Graduation Class of {year}</h2>
    </>
  );
};

export default GraduationFilterYear;
