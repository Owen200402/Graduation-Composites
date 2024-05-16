import React from 'react'

const GraduationFilterYear = () => {
  return (
    <select className="form-select" onChange={(event) => console.log(event.target.value)}>
      <option value=""></option>
      <option value="2013">2012</option>
      <option value="2013">2013</option>
      <option value="2014">2014</option>
      <option value="2015">2015</option>
    </select>
  )
}

export default GraduationFilterYear
