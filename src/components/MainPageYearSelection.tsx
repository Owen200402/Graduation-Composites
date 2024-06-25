import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
  useTheme,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { photoData } from './photoData';

interface Props {
  years: number[];
  onSelectYear: (year: number) => void;
}

const MainPageYearSelection = ({ years, onSelectYear }: Props) => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const theme = useTheme();

  const [loadedArray, setLoadedArray] = useState<boolean[]>(
    new Array(years.length).fill(false)
  );

  const handleImageLoad = (index: number) => {
    const imageRef = imageRefs.current[index];
    if (imageRef) {
      imageRef.style.display = 'block';
    }

    setLoadedArray((prevLoadedArray) => {
      const newLoadedArray = [...prevLoadedArray];
      newLoadedArray[index] = true;
      return newLoadedArray;
    });
  };

  return (
    <div className="cover-page-cards">
      {years.map((year, index) => (
        <Card
          key={year}
          sx={{
            width: 220,
            transition: 'transform 0.3s',
            ':hover': {
              transform: 'scale(1.1)',
              cursor: 'pointer',
            },
          }}
          onClick={() => onSelectYear(year)}
        >
          <CardMedia sx={{ height: 120 }}>
            {!loadedArray[index] && (
              <Skeleton variant="rectangular" width="100%" height="100%" />
            )}
            <img
              src={`assets/displayedOnCover/ECE${year}.png`}
              alt={`graduation class of ${year}`}
              ref={(el) => (imageRefs.current[index] = el)}
              onLoad={() => handleImageLoad(index)}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                display: 'none',
                overflow: 'hidden',
              }}
            />
          </CardMedia>
          <CardContent
            sx={{
              background: theme.palette.mode === 'dark' ? '#2f324a' : 'white',
            }}
          >
            <Typography gutterBottom variant="h5">
              {year}
            </Typography>
            <Typography variant="body2" color="text.secondary" marginLeft={0.5}>
              {year >= 2020
                ? 'Location: Floor 4'
                : year >= 2000 && year < 2020
                  ? 'Location: Floor 3'
                  : year >= 1970 && year < 1999
                    ? 'Location: Floor 2'
                    : 'Location: Floor 1'}
                    <br></br>
              Building: UBC MacLeod <br></br>
              Number of Graduates: {photoData.filter(photo => photo.year === year).length}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              paddingTop: '0px',
              background: theme.palette.mode === 'dark' ? '#2f324a' : 'white',
            }}
          >
            <Button size="small" onClick={() => onSelectYear(year)}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default MainPageYearSelection;
