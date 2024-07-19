import { Typography, useMediaQuery, useTheme } from '@mui/material';
import TVScreenCheck from '../services/checkTVScreen';
import useNavigationStore from '../stores/navigationStore';


const Heading = () => {
  const {selectedYear} = useNavigationStore();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const is4KScreen = TVScreenCheck();

  if (!selectedYear) {
    return (
      <Typography
        variant={isSmallScreen ? 'h6' : is4KScreen ? "h3" : 'h4'}
        sx={{ textAlign: 'center', whiteSpace: 'nowrap', fontFamily: "Chalkduster, fantasy" }}
      >
        ECE Graduation Composites
      </Typography>
    );
  }
  return (
    <Typography
      variant={isSmallScreen ? 'h6' : 'h4'}
      sx={{ textAlign: 'center', whiteSpace: 'nowrap', fontFamily:"Chalkduster, fantasy" }}
    >
      Class of {selectedYear}
    </Typography>
  );
};

export default Heading;
