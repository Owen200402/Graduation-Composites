import { Box, Typography } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

interface Props {
  text: string;
  percentage: number;
  color: string;
  textColor: string;
}

const GaugeWithText = ({ text, percentage, color, textColor }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="110px" // Adjust the width as needed
      height="110px" // Adjust the height as needed
      marginTop={0}
    >
      <Gauge
        width={70}
        height={70}
        value={percentage}
        sx={(theme) => ({
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 14,
            color: "#ff0000 !important",
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: color,
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: theme.palette.text.disabled,
          },
        })}
      />
      <Typography
        component="p"
        color={textColor}
        style={{
          whiteSpace: 'normal',
          textAlign: 'center',
          wordWrap: 'break-word',
          height: '30px',
          fontSize: '12px',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default GaugeWithText;
