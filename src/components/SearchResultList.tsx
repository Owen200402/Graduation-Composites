import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageModal from './ImageModal';
import { Typography } from '@mui/material';

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
  const [selectedImage, setSelectedImage] = useState('');
  const [modelOpened, setModelOpened] = useState(false);

  function enlargeImage(imagePath: string) {
    setSelectedImage(imagePath);
    setModelOpened(true);
  }

  function closeModel() {
    setSelectedImage('');
    setModelOpened(false);
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">{year}</Typography>
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
    </div>
  );
};

export default SearchResultList;
