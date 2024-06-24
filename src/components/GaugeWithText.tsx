import { Box, Typography } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { useEffect, useState } from 'react';

interface Props {
  text: string;
  percentage: number;
  arcColor: string;
  textColor: string;
  numberColor: string;
}

const GaugeWithText = ({
  text,
  percentage,
  arcColor,
  textColor,
  numberColor,
}: Props) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    let currentValue = 0;
    const interval = setInterval(() => {
      if (currentValue < percentage) {
        currentValue++;
        setAnimatedValue(currentValue);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100px" 
      height="100px"
      marginTop={0}
    >
      <Gauge
        width={70}
        height={70}
        value={animatedValue}
        sx={(theme) => ({
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 13,
            '& text': {
              fill: numberColor,
            },
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: arcColor,
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: theme.palette.text.disabled,
          },
        })}
        text={
            ({ value }) => `${value}%`
         }
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
