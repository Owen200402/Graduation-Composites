import React, { useState } from 'react';
import styled from 'styled-components';
import ImageModal from './ImageModal';
import { Typography } from '@mui/material';

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
      <Image
        src={path}
        alt={`${first_name} ${last_name}`}
        style={{ cursor: 'pointer' }}
        onClick={() => enlargeImage(path)}
      />

      <Typography component="p" style={{ textAlign: 'center' }}>
        {first_name} {last_name}
      </Typography>

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
