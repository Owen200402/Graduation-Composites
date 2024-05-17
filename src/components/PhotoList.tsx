import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 0.8rem;
`;

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
      <Image src={path} alt={`${first_name} ${last_name}`} />
      <p style={{ textAlign: "center" }}>
        {first_name} {last_name}
      </p>
    </div>
  );
};

export default PhotoList;
