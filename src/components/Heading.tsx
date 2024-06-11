import { Typography, useMediaQuery, useTheme } from '@mui/material';

interface Props {
  year: number;
}

const Heading = ({ year }: Props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Typography variant={isSmallScreen ? 'h4' : 'h3'} sx={{ textAlign: 'center', whiteSpace: "nowrap"}}>
      Graduation Class of {year}
    </Typography>
  );
};

export default Heading;
