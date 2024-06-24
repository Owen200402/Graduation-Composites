import { Button, Typography } from '@mui/material';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { GiClick } from 'react-icons/gi';
import GaugeWithText from './GaugeWithText';

const Front = styled.div`
  background-image: url('images/front-page.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  text-align: center;
  animation: background-enter 2s ease-in-out;
`;

const Slogan = styled.div`
  position: absolute;
  left: 0;
  margin: 2rem;
  color: #00a7e1;
  max-width: 600px;
  word-wrap: break-word;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Sub = styled.div`
  position: absolute;
  left: 0;
  top: 5rem;
  margin: 2rem;
  color: #6ec4e8;
  max-width: 400px;
  word-wrap: break-word;
  animation: fadeIn 10s ease-in-out;
  @media (max-width: 768px) {
    display: none;
  }
`;

interface Props {
  title: string;
  subtitle: string;
  slogan: string;
  subHeading: string;
}

const FrontPage = ({ title, subtitle, slogan, subHeading }: Props) => {
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [displayedSlogan, setDisplayedSlogan] = useState('');

  useEffect(() => {
    let index = -1;
    let prev = '';

    const interval = setInterval(() => {
      setDisplayedSubtitle(prev);
      index++;
      prev += subtitle.charAt(index);
      if (index >= subtitle.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = -1;
    let prev = '';

    const interval = setInterval(() => {
      setDisplayedSlogan(prev);
      index++;
      prev += slogan.charAt(index);
      if (index >= slogan.length) {
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const scrollDown = () => {
    document
      .getElementById('main')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div id="front-page">
      <Slogan>
        <h1 style={{ fontFamily: 'cursive', fontWeight: 'bolder' }}>
          {displayedSlogan}
        </h1>
      </Slogan>
      <Sub>
        <h2 style={{ fontFamily: 'cursive' }}>{subHeading}</h2>
      </Sub>

      <Front>
        <div>
          <Typography variant="h4" sx={{ color: 'white', marginTop: '2.5rem' }}>
            {title}
          </Typography>
        </div>
        <div style={{ maxWidth: '400px', marginTop: '0.5rem' }}>
          <Typography
            variant="body2"
            sx={{ color: '#97D4E9', fontSize: '12px' }}
          >
            {displayedSubtitle}
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            animation: 'fadeIn 2s ease-in-out',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '0.5rem',
            }}
          >
            <GaugeWithText
              text="Experience Satisfaction"
              percentage={95}
              arcColor="#52b202"
              textColor="#52b202"
              numberColor="#52b202"
            ></GaugeWithText>
            <GaugeWithText
              text="Touch-Screen Support"
              percentage={100}
              arcColor="#2480ad"
              textColor="#2480ad"
              numberColor="#2480ad"
            ></GaugeWithText>
            <GaugeWithText
              text="Grad Photo Coverage"
              percentage={96}
              arcColor="#DBAC34"
              textColor="#DBAC34"
              numberColor="#DBAC34"
            ></GaugeWithText>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Button
              color="secondary"
              variant="outlined"
              sx={{ animation: 'fadeIn 8s ease-in' }}
              size="small"
              onClick={scrollDown}
            >
              Explore
            </Button>
          </div>
        </div>
      </Front>
    </div>
  );
};

export default FrontPage;
