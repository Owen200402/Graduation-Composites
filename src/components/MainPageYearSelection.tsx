import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";
import { useRef, useState } from "react";
import { photoData } from "../data/photoData";

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
            transition: "transform 0.3s",
            ":hover": {
              transform: "scale(1.1)",
              cursor: "pointer",
            },
          }}
          onClick={() => onSelectYear(year)}
        >
          <CardMedia sx={{ height: 140, position: "relative" }}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              sx={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
              src={`assets/displayedOnCover/ECE${year}.webp`}
              alt={`graduation class of ${year}`}
              ref={(el) => (imageRefs.current[index] = el)}
              onLoad={() => handleImageLoad(index)}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                display: loadedArray[index] ? "block" : "none",
                position: loadedArray[index] ? "relative" : "absolute",
              }}
            />
          </CardMedia>
          <CardContent
            sx={{
              background: theme.palette.mode === "dark" ? "#3e4057" : "white",
            }}
          >
            <Typography gutterBottom variant="h5">
              {year}
            </Typography>
            {year <= 1960 ? (
              <Typography
                variant="body2"
                color="text.secondary"
                marginTop="1rem"
              >
                MacLeod Bdg.,
                {year >= 2020
                  ? " 4th Floor"
                  : year >= 2000 && year < 2020
                    ? "3rd Floor"
                    : year >= 1970 && year <= 1999
                      ? "2nd Floor"
                      : "1st Floor"}
                <br></br>
                Number of Graduates:{" "}
                {photoData.filter((photo) => photo.year === year).length}
              </Typography>
            ) : (
              <Typography
                variant="body2"
                color="text.secondary"
                marginTop="1rem"
              >
                MacLeod Bdg.,
                {year >= 2020
                  ? " 4th Floor"
                  : year >= 2000 && year < 2020
                    ? "3rd Floor"
                    : year >= 1970 && year <= 1999
                      ? "2nd Floor"
                      : "1st Floor"}
                <br></br> <b>Featured Years: </b>
                {year} - {year + 1}
              </Typography>
            )}
          </CardContent>
          <CardActions
            sx={{
              paddingTop: "0px",
              background: theme.palette.mode === "dark" ? "#3e4057" : "white",
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
