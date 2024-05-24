import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageModal from "./ImageModal";

const Title = styled.h2`
  text-align: center;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 0.8rem;
  box-shadow: 0 3px 6px rgba(110, 77, 11, 0.7);
`;

interface Props {
  year: number;
  path: string;
  first_name: string;
  last_name: string;
}

const SearchResultList = ({ year, path, first_name, last_name }: Props) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [modelOpened, setModelOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollBy({
        top: window.screenY + 450,
        left: 0,
        behavior: "smooth",
      });
    };

    handleScroll();

    return () => {
      window.scrollBy({
        top: window.screenY - 450,
        left: 0,
        behavior: "smooth",
      });
    };
  }, []);

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4 className="mb-0">{year}</h4>
        <Image
          src={path}
          alt={`${first_name} ${last_name}`}
          style={{ cursor: "pointer" }}
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
    </div>
  );
};

export default SearchResultList;
