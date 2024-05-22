import React, { useState } from "react";
import styled from "styled-components";
import ImageModal from "./ImageModal";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [modelOpened, setModelOpened] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  function enlargeImage(imagePath: string) {
    setSelectedImage(imagePath);
    setModelOpened(true);
  }

  function closeModel() {
    setModelOpened(false);
    setSelectedImage("");
  }

  return (
    <div>
      {!isLoaded && <div className="spinner-border"></div>}
      <Image
        src={path}
        alt={`${first_name} ${last_name}`}
        onLoad={handleImageLoad}
        style={{ display: isLoaded ? "block" : "none", cursor: "pointer" }}
        onClick={() => enlargeImage(path)}
      />

      <p style={{ textAlign: "center" }}>
        {first_name} {last_name}
      </p>

      <ImageModal
        isOpen={modelOpened}
        onClose={closeModel}
        imageUrl={path}
      ></ImageModal>
    </div>
  );
};

export default PhotoList;
