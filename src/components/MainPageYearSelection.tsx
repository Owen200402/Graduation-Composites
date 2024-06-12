import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from '@mui/material';
import { useState } from 'react';

interface Props {
  years: number[];
  onSelectYear: (year: number) => void;
}

const YearSelectionMainPage = ({ years, onSelectYear }: Props) => {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    new Array(years.length).fill(false)
  );

  const handleImageLoad = (index: number) => {
    const updatedLoadedImages = [...loadedImages];
    updatedLoadedImages[index] = true;
    setLoadedImages(updatedLoadedImages);
  };

  return (
    <div className="cover-page-cards">
      {years.map((year, index) => (
        <Card key={year} sx={{ width: 200 }}>
          <CardMedia
            sx={{
              height: 130,
            }}
            image={`public/assets/displayedOnCover/ECE${year}.png`}
            title={`graduation class of ${year}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Click to explore the photo composite for {year}'s graduates.
            </Typography>
          </CardContent>
          <CardActions sx={{paddingTop: "0px"}}>
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
