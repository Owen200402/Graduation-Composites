import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ImageModal from './ImageModal';
import { Skeleton, Typography } from '@mui/material';
import LoadingSkeleton from './LoadingSkeleton';

const Image = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  margin: 1rem;
  box-shadow: 0 3px 6px rgba(110, 77, 11, 0.7);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

interface Props {
  id: number;
  first_name: string;
  last_name: string;
  year: number;
  path: string;
}

const PhotoList = ({ id, first_name, last_name, year, path }: Props) => {
  const [selectedImage, setSelectedImage] = useState('');
  const [modelOpened, setModelOpened] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  function enlargeImage(imagePath: string) {
    setSelectedImage(imagePath);
    setModelOpened(true);
  }

  function closeModel() {
    setModelOpened(false);
    setSelectedImage('');
  }

  return (
    <div>
      {!isLoaded && <LoadingSkeleton></LoadingSkeleton>}
      <div style={{display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Image
        src={path}
        ref={imageRef}
        alt={`${first_name} ${last_name}`}
        style={{ cursor: 'pointer', display: 'none' }}
        onClick={() => enlargeImage(path)}
        onLoad={() => {
          setLoaded(true);
          if (imageRef.current) imageRef.current.style.display = 'block';
          if (textRef.current) textRef.current.style.display = 'block';
        }}
        onError={() => {
          setLoaded(false);
        }}
      />

      <Typography
        component="p"
        ref={textRef}
        style={{ textAlign: 'center', display: 'none' }}
      >
        {first_name} {last_name}
      </Typography>
      </div>

      <ImageModal
        isOpen={modelOpened}
        onClose={closeModel}
        imageUrl={path}
        first_name={first_name}
        last_name={last_name}
      ></ImageModal>
    </div>
  );
};

export default PhotoList;
