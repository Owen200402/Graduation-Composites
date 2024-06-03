import * as React from 'react';
import { useState, useMemo, useContext } from 'react';
import './App.css';
import GraduationFilterYear from './components/GraduationFilterYear';
import PhotoList from './components/PhotoList';
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
import { Typography } from '@mui/material';
import BottomBanner from './components/BottomBanner';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import FrontPage from './components/FrontPage';
import ArrowUp from './components/ArrowUp';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  interface Photo {
    id: number;
    first_name: string;
    last_name: string;
    year: number;
    path: string;
  }

  const [photos, setPhotos] = useState(photoData);
  const photosToBeDisplayed = photos;

  const [selectedYear, setSelectedYear] = useState(1930);

  const [searchResult, setSearchResult] = useState<Photo[]>();
  const [searchedInput, setSearchedInput] = useState('');

  const [isBacked, setIsBacked] = useState(false);

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const textStyle = {
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
  };

  return (
    <>
      {/* Front Page */}
      <FrontPage
        title="Graduation Composites"
        subtitle="An AI supercharged photo composite featuring past graduates from 1937 to 2022 at the University of British Columbia."
        slogan="Tuum Est. It's Yours."
        subHeading="Welcome to School of Engineering"
      ></FrontPage>
      {/* Content Page */}
      <div
        id="main"
        style={{
          background:
            theme.palette.mode === 'dark'
              ? '#807a7a'
              : 'linear-gradient(to bottom, #e6f7ff, #ffffff)',
          color: theme.palette.mode === 'dark' ? 'white' : 'black',
          minHeight: '100vh',
        }}
      >
        <UBCLogo />
        {theme.palette.mode === 'light' ? (
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
        )}

        <div className='setCenterAlignment'>
          <div className="p-2 noDisplay">
            <CompositeDialog />
          </div>
          <div>{!searchResult && <Heading year={selectedYear} />}</div>
          <div className="noDisplay">
            {theme.palette.mode} mode
            <IconButton
              sx={{
                ml: 1,
                mr: 2,
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
          <div style={{ color: textStyle.color }}>
            <Typography
              variant="h5"
              className="p-2"
              sx={{ textAlign: 'center', color: 'royalblue' }}
            >
              Search results for {searchedInput}:
            </Typography>
            <div className="photo_container">
              {searchResult.map((photo) => (
                <div key={photo.id}>
                  <SearchResultList {...photo} />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'right' }}>
              <button
                className="btn btn-outline-danger m-3"
                onClick={() => setSearchResult(undefined)}
              >
                Back
              </button>
            </div>
          </div>
        ) : (
          <div
            className="photo_container m-3"
            style={{ color: textStyle.color }}
          >
            {photosToBeDisplayed
              .filter((photo) => photo.year === selectedYear)
              .map((photo) => (
                <div key={photo.id}>
                  <PhotoList {...photo} />
                </div>
              ))}
          </div>
        )}

        <div className="container-flex" style={{ color: textStyle.color }}>
          <GraduationFilterYear onSelect={(year) => setSelectedYear(year)} />
          <SearchBar
            to_show={(photoList, input) => {
              setSearchResult(photoList);
              setSearchedInput(input);
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
        <ArrowUp></ArrowUp>

        <BottomBanner></BottomBanner>
      </div>
    </>
  );
}

// The app that has the color theme =
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
