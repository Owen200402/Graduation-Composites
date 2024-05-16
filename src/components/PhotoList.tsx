import React from "react";

interface Props {
  id: number;
  first_name: string;
  last_name: string;
  year: number;
  path: string;
}

// Rendering photos on the screen
const PhotoList = ({ id, first_name, last_name, year, path }: Props) => {
  return (
    <div>
      <img
        src={path}
        alt={`${first_name} ${last_name}`}
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <p style={{ textAlign: "center" }}>
        {first_name} {last_name}
      </p>
    </div>
  );
};

export default PhotoList;
