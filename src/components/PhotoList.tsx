import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ImageModal from './ImageModal';
import { Skeleton, Typography } from '@mui/material';

const Image = styled.img`
  width: 170px;
  height: 170px;
  object-fit: cover;
  margin: 0.8rem;
  box-shadow: 0 3px 6px rgba(110, 77, 11, 0.7);
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
      {!isLoaded && (
        <div>
          <Skeleton
            variant="rectangular"
            width={170}
            height={170}
            sx={{ margin: '0.8rem' }}
          />
          <Skeleton
            variant="text"
            width={170}
            sx={{ fontSize: '1rem', margin: '0.8rem' }}
          />
        </div>
      )}
      <div>
      <Image
        src={path}
        ref={imageRef}
        alt={`${first_name} ${last_name}`}
        style={{ cursor: 'pointer', display: "none"}}
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

      <Typography component="p" ref={textRef} style={{ textAlign: 'center', display: "none"}}>
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
