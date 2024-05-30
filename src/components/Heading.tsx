import { Typography } from '@mui/material';

// CSS in JS
interface Props {
  year: number;
}

const Heading = ({ year }: Props) => {
  return (
    <Typography variant="h3" sx={{ textAlign: 'center' }}>
      ECE Graduation Class of {year}
    </Typography>
  );
};

export default Heading;
