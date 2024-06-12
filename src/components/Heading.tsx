import { Typography, useMediaQuery, useTheme } from '@mui/material';

interface Props {
  year?: number;
}

const Heading = ({ year }: Props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
  if (!year) {
    return (
      <Typography
        variant={isSmallScreen ? 'h5' : 'h4'}
        sx={{ textAlign: 'center', whiteSpace: 'nowrap' }}
      >
        Graduation Composites
      </Typography>
    );
  }
  return (
    <Typography
      variant={isSmallScreen ? 'h5' : 'h4'}
      sx={{ textAlign: 'center', whiteSpace: 'nowrap' }}
    >
      Electrical Engineering Class of {year}
    </Typography>
  );
};

export default Heading;
