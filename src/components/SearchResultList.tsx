import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ImageModal from './ImageModal';
import { Typography, useMediaQuery } from '@mui/material';
import ResultLoadingSkeleton from './ResultLoadingSkeleton';

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

interface Props {
  year: number;
  path: string;
  first_name: string;
  last_name: string;
}

const SearchResultList = ({ year, path, first_name, last_name }: Props) => {
  const [selectedImage, setSelectedImage] = useState('');
  const [modelOpened, setModelOpened] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLTextAreaElement>(null);


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
      {!isLoaded && <ResultLoadingSkeleton></ResultLoadingSkeleton>}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" style={{ display: 'none' }} ref={yearRef}>
          <i>{year}</i>
        </Typography>
        <Image
          src={path}
          alt={`${first_name} ${last_name}`}
          style={{ cursor: 'pointer', marginTop: '0px', display: 'none' }}
          ref={imageRef}
          onClick={() => enlargeImage(path)}
          onLoad={() => {
            if (imageRef.current) imageRef.current.style.display = 'block';
            if (textRef.current) textRef.current.style.display = 'block';
            if (yearRef.current) yearRef.current.style.display = 'block';
            if (nameRef.current) nameRef.current.style.display = 'block';
            setLoaded(true);
          }}
          onError={() => {
            setLoaded(false);
          }}
        />

        <Typography
          style={{ textAlign: 'center', display: 'none' }}
          ref={nameRef}
          variant={"h6"}
        >
          {first_name} {last_name}
        </Typography>

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
