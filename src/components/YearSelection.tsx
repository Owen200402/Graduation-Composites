import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

interface Props {
  years: number[];
  onSelectYear: (year: number) => void;
}

const YearSelection = ({ years, onSelectYear }: Props) => {
  return (
    <div className='cover-page-cards'>
      {years.map((year) => (
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            sx={{ height: 100 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Click to explore the photo composite for {year}'s
              graduates.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => onSelectYear(year)}>Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default YearSelection;
