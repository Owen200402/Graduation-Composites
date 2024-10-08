import { Typography } from "@mui/material";
import { useRef, useState } from "react";
import styled from "styled-components";
import ImageModal from "./ImageModal";
import ResultLoadingSkeleton from "./ResultLoadingSkeleton";
import { Photo } from "./PhotoSet";

const Image = styled.img`
  width: 190px;
  height: 190px;
  object-fit: cover;
  margin: 1rem;
  box-shadow: 0 3px 6px rgba(110, 77, 11, 0.7);

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;

const SearchResultList = ({ year, path, first_name, last_name }: Photo) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [modelOpened, setModelOpened] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const imageRef = useRef<HTMLImageElement>(null);
  const yearRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLTextAreaElement>(null);

  function enlargeImage(imagePath: string) {
    setSelectedImage(imagePath);
    setModelOpened(true);
  }

  function closeModel() {
    setModelOpened(false);
    setSelectedImage("");
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      {!isLoaded && <ResultLoadingSkeleton></ResultLoadingSkeleton>}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoaded && (
          <Typography
            variant="h5"
            style={{ display: isLoaded ? "block" : "none" }}
            ref={yearRef}
          >
            <i>{year}</i>
          </Typography>
        )}
        <Image
          src={path}
          alt={`${first_name} ${last_name}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            cursor: "pointer",
            marginTop: "0px",
            display: isLoaded ? "block" : "none",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
          ref={imageRef}
          onClick={() => enlargeImage(path)}
          onLoad={() => {
            setLoaded(true);
          }}
          onError={() => {
            setLoaded(false);
          }}
          className="photo"
        />

        {isLoaded && (
          <Typography
            style={{
              textAlign: "center",
              display: isLoaded ? "block" : "none",
              fontSize: "18px",
            }}
            ref={nameRef}
            variant={"h6"}
          >
            {first_name} {last_name}
          </Typography>
        )}

        <ImageModal
          isOpen={modelOpened}
          onClose={closeModel}
          imageUrl={path}
          first_name={first_name}
          last_name={last_name}
          year={year}
        ></ImageModal>
      </div>
    </div>
  );
};

export default SearchResultList;
