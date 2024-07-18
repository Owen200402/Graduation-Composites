import { Button, Typography } from '@mui/material';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import GaugeWithText from './GaugeWithText';
import TVScreenCheck from '../services/checkTVScreen';

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

  @media (min-width: 3000px) {
    height: 50vh;
  }
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
  const is4KScreen = TVScreenCheck();
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
    }, 70);
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
    const mainElement = document.getElementById('main');
    if (mainElement) {
      window.scrollTo({
        top: is4KScreen ? mainElement.offsetTop * 2 : mainElement.offsetTop,
        behavior: 'smooth',
      });
    }
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
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              marginTop: '4rem',
              fontFamily: 'Comic Sans MS, Comic Sans, cursive',
            }}
          >
            {title}
          </Typography>
        </div>
        <div style={{ maxWidth: '400px', height: '25px', marginTop: '0.5rem' }}>
          <Typography
            variant="body1"
            sx={{ color: '#97D4E9', fontSize: '13px', fontFamily: "Bradley Hand, cursive" }}
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
              arcColor="#8fce00"
              textColor="#8fce00"
              numberColor="#8fce00"
            ></GaugeWithText>
            <GaugeWithText
              text="Touch-Screen Support"
              percentage={100}
              arcColor="#34cfeb"
              textColor="#34cfeb"
              numberColor="#34cfeb"
            ></GaugeWithText>
            <GaugeWithText
              text="Grad Photo Coverage"
              percentage={96}
              arcColor="#ff6700"
              textColor="#ff6700"
              numberColor="#ff6700"
            ></GaugeWithText>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Button
              color="secondary"
              variant="outlined"
              sx={{ animation: 'fadeIn 6s ease-in-out' }}
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
