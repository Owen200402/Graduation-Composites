import { Typography } from '@mui/material';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import ImageModal from './ImageModal';
import LoadingSkeleton from './LoadingSkeleton';

const Image = styled.img`
  width: 190px;
  height: 190px;
  object-fit: cover;
  margin: 1rem;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;

interface Props {
  id: number;
  first_name: string;
  last_name: string;
  year: number;
  path: string;
  video?: string;
}

const PhotoSet = ({ id, first_name, last_name, year, path }: Props) => {
  const [selectedImage, setSelectedImage] = useState('');
  const [modelOpened, setModelOpened] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const enlargeImage = (imagePath: string) => {
    setSelectedImage(imagePath);
    setModelOpened(true);
  }

  const closeModel = () => {
    setModelOpened(false);
    setSelectedImage('');
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      {!isLoaded && <LoadingSkeleton />}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src={path}
          ref={imageRef}
          alt={`${first_name} ${last_name}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            cursor: 'pointer',
            display: isLoaded ? 'block' : 'none',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
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
            variant="h6"
            ref={textRef}
            style={{ textAlign: 'center' }}
          >
            {first_name} {last_name}
          </Typography>
        )}
      </div>
      <ImageModal
        isOpen={modelOpened}
        onClose={closeModel}
        imageUrl={path}
        first_name={first_name}
        last_name={last_name}
        year={year}
      />
    </div>
  );
};

export default PhotoSet;
