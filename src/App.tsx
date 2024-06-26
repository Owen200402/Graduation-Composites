import * as React from 'react';
import { useState, useMemo, useContext } from 'react';
import './App.css';
import PhotoSet from './components/PhotoSet';
import { photoData } from './components/photoData';
import Heading from './components/Heading';
import UBCLogo from './components/TopBanner';
import SearchBar from './components/SearchBar';
import SearchResultList from './components/SearchResultList';
import CompositeDialog from './components/CompositeDialog';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { Button, Typography } from '@mui/material';
import BottomBanner from './components/BottomBanner';
import FrontPage from './components/FrontPage';
import CourseOfferingLink from './components/CourseOfferingLink';
import { styled } from 'styled-components';
import BackToMainButton from './components/BackToMainButton';
import ReactAudioPlayer from 'react-audio-player';
import { ArrowLeft } from '@mui/icons-material';
import PhotoPagination from './components/PhotoPagination';
import AIPrediction from './components/AIPrediction';
import MainPageYearSelection from './components/MainPageYearSelection';

const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  interface Photo {
    id: number;
    first_name: string;
    last_name: string;
    year: number;
    path: string;
  }

  // States
  const [photos, setPhotos] = useState(photoData);
  const photosToBeDisplayed = photos;
  const [selectedYear, setSelectedYear] = useState<number | undefined>();
  const [searchResult, setSearchResult] = useState<Photo[]>();
  const [searchedInput, setSearchedInput] = useState('');
  const [isAtMainScreen, setAtMainScreen] = useState(true);

  // style const:
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const textStyle = {
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
  };

  // const:
  const years = [
    1930, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947,
  ];

  // Pagination:
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const currentItem = currentPage * itemsPerPage - itemsPerPage;
  const totalPages = Math.ceil(
    photoData.filter((p) => p.year === selectedYear).length / itemsPerPage
  );

  return (
    <div className="zoom-container">
      <ReactAudioPlayer
        src="assets/videos/Midnight-the-Stars-and-You.mp3"
        controls
        style={{
          position: 'fixed',
          bottom: '0',
          width: '18%',
          height: '20px',
        }}
      ></ReactAudioPlayer>
      {/* Front Page */}
      <FrontPage
        title="Graduation Composites"
        subtitle="An AI supercharged photo composite featuring electrical engineering graduates from 1937 to 2022 at the University of British Columbia."
        slogan="Tuum Est. It's Yours."
        subHeading="Welcome to School of Engineering"
      ></FrontPage>
      {/* Content Page */}
      <div
        id="main"
        style={{
          background:
            theme.palette.mode === 'dark'
              ? 'linear-gradient(to top, rgb(9, 32, 63) 0%, rgb(83, 120, 149) 100%)'
              : 'linear-gradient(to bottom, #e6f7ff, #ffffff)',
          color: theme.palette.mode === 'dark' ? 'white' : 'black',
          minHeight: '100vh',
        }}
      >
        <UBCLogo />
        {/* {theme.palette.mode === 'light' ? (
          <WbSunnyIcon
            sx={{
              fontSize: 55,
              color: '#e65015',
              '@media (max-width: 768px)': {
                display: 'none',
              },
            }}
            className="weather-position animate__animated animate__fadeInDown"
          ></WbSunnyIcon>
        ) : (
          <NightsStayIcon
            sx={{
              fontSize: 55,
              color: '#040cdb',
              '@media (max-width: 768px)': {
                display: 'none',
              },
            }}
            className="weather-position animate__animated animate__fadeInUp"
          ></NightsStayIcon>
        )} */}

        <div className="setCenterAlignment">
          <ResponsiveContainer className="noDisplay">
            <CompositeDialog />
            <CourseOfferingLink />
          </ResponsiveContainer>
          <div>
            {isAtMainScreen ? (
              <Heading></Heading>
            ) : (
              !searchResult && <Heading year={selectedYear}></Heading>
            )}
          </div>
          <div className="noDisplay" style={{ whiteSpace: 'nowrap' }}>
            {theme.palette.mode} mode
            <IconButton
              sx={{
                ml: 0,
                mr: 1,
                '@media (max-width: 768px)': {
                  display: 'none',
                },
              }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </div>
        </div>

        {searchResult ? (
          <div
            style={{
              color: textStyle.color,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h5"
              className="p-2 m-2"
              sx={{ textAlign: 'center', color: '#002145' }}
            >
              Search results for {searchedInput}:
            </Typography>
            <div className="photo_container">
              {searchResult
                .map((photo) => (
                  <div key={photo.id}>
                    <SearchResultList {...photo} />
                  </div>
                ))
                .slice(currentItem, currentItem + 12)}
            </div>
            <PhotoPagination
              currentPage={currentPage}
              totalPages={Math.ceil(searchResult.length / itemsPerPage)}
              onNext={() => setCurrentPage(currentPage + 1)}
              onPrev={() => setCurrentPage(currentPage - 1)}
            ></PhotoPagination>
            <div style={{ display: 'flex', justifyContent: 'left' }}>
              {selectedYear && (
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  startIcon={<ArrowLeft />}
                  onClick={() => {
                    setSearchResult(undefined);
                    setCurrentPage(1);
                  }}
                  className="m-2"
                  style={{
                    position: 'absolute',
                    left: '0%',
                    transform: 'translate(100px, -30px)',
                  }}
                >
                  Back to Your Search: {selectedYear}
                </Button>
              )}
            </div>
          </div>
        ) : !isAtMainScreen ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className="m-2">
              <Typography variant="body2">
                Page: {currentPage}/{totalPages}
              </Typography>
            </div>
            <div
              className="photo_container m-3"
              style={{ color: textStyle.color }}
            >
              {photosToBeDisplayed
                .filter((photo) => photo.year === selectedYear)
                .map((photo) => (
                  <div key={photo.id}>
                    <PhotoSet {...photo} />
                  </div>
                ))
                .slice(currentItem, currentItem + 12)}
            </div>
            <PhotoPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onNext={() => setCurrentPage(currentPage + 1)}
              onPrev={() => setCurrentPage(currentPage - 1)}
            ></PhotoPagination>
          </div>
        ) : (
          <MainPageYearSelection
            years={years}
            onSelectYear={(year) => {
              setSelectedYear(year);
              setAtMainScreen(false);
              setCurrentPage(1);
            }}
          ></MainPageYearSelection>
        )}

        <div className="container-flex" style={{ color: textStyle.color }}>
          <SearchBar
            to_show={(PhotoSet, input) => {
              setSearchResult(PhotoSet);
              setSearchedInput(input);
              setCurrentPage(1)
            }}
            first_names={photos.map((p) => p.first_name)}
            last_names={photos.map((p) => p.last_name)}
            themeColor={theme.palette.mode}
          />
        </div>

        <div className="copyright" style={{ color: textStyle.color }}>
          &copy; {new Date().getFullYear()} UBC Electrical and Computer
          Engineering. All rights reserved.
        </div>
        <div
          className="m-2"
          style={{
            color: textStyle.color,
            position: 'absolute',
            left: '0%',
            transform: 'translate(100px, -70px)',
          }}
        >
          {(!isAtMainScreen || searchResult) && (
            <BackToMainButton
              onClickBackToMain={() => {
                setAtMainScreen(true);
                setSearchResult(undefined);
                setSelectedYear(undefined);
                setCurrentPage(1);
              }}
            />
          )}
        </div>

        <BottomBanner></BottomBanner>
        <AIPrediction></AIPrediction>
      </div>
    </div>
  );
}

export default function MyApp() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
