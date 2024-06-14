import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';

interface Props {
  years: number[];
  onSelectYear: (year: number) => void;
}

const YearSelectionMainPage = ({ years, onSelectYear }: Props) => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
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
        <Card key={year} sx={{ width: 230 }}>
          <CardMedia sx={{ height: 130 }}>
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
              }}
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Click to explore the photo composite for {year}'s graduates.
            </Typography>
          </CardContent>
          <CardActions sx={{ paddingTop: '0px' }}>
            <Button size="small" onClick={() => onSelectYear(year)}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default YearSelectionMainPage;
