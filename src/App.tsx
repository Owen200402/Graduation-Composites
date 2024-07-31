import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import * as React from "react";
import { useContext, useState } from "react";
import { styled } from "styled-components";
import "./App.css";
import BackToMainButton from "./components/BackToMainButton";
import BottomBanner from "./components/BottomBanner";
import CompositeDialog from "./components/CompositeDialog";
import FrontPage from "./components/FrontPage";
import Heading from "./components/Heading";
import SearchBar from "./components/SearchBar";
import SideAudio from "./components/SideAudio";
import UBCLogo from "./components/TopBanner";
import { CssVarsProvider } from "@mui/joy";
import MainDisplay from "./components/MainDisplay";
import TVScreenCheck from "./services/checkTVScreen";
import useAudioStore from "./stores/audioStore";
import useNavigationStore from "./stores/navigationStore";
import usePaginationStore from "./stores/paginationStore";

const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    display: none;
  }
`;
// Context (for creating an object with method context)
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const { setType } = useAudioStore();

  const {
    searchResult,
    isAtMainScreen,
    setSelectedYear,
    setSearchResult,
    setSearchedInput,
    setIsAtMainScreen,
  } = useNavigationStore();


  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const textStyle = {
    color: theme.palette.mode === "dark" ? "white" : "black",
  };

  const { setCurrentPage, setCurrentMainPage, currentMainPage } = usePaginationStore();

  const is4KScreen = TVScreenCheck();

  return (
    <div className="zoom-container">
      {/* Front Page */}
      <FrontPage
        title="Graduation Composites"
        subtitle="An AI supercharged photo composite featuring electrical engineering graduates from 1937 to 2022 at the University of British Columbia."
        slogan="Tuum Est. It's Yours."
        subHeading="Welcome to Department of Electrical and Computer Engineering"
      ></FrontPage>

      {/* Content Page */}
      <div
        id="main"
        style={{
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(to top, rgb(9, 32, 63) 0%, rgb(83, 120, 149) 100%)"
              : "linear-gradient(to bottom, #e6f7ff, #ffffff)",
          color: theme.palette.mode === "dark" ? "white" : "black",
          position: "relative",
          maxHeight: is4KScreen ? "100vh" : "200vh",
        }}
      >
        <CssVarsProvider>
          <SideAudio
            onClickSelect={(event) => {
              setType(event.currentTarget.innerText);
            }}
          />
        </CssVarsProvider>
        <UBCLogo />

        <div className="setCenterAlignment">
          <ResponsiveContainer className="noDisplay">
            <CompositeDialog />
            {/* <CourseOfferingLink /> */}
          </ResponsiveContainer>
          <div>
            {isAtMainScreen ? (
              <Heading></Heading>
            ) : (
              !searchResult && <Heading></Heading>
            )}
          </div>
          <div className="noDisplay" style={{ whiteSpace: "nowrap" }}>
            {theme.palette.mode} mode
            <IconButton
              sx={{
                ml: 0,
                mr: 1,
                "@media (max-width: 768px)": {
                  display: "none",
                },
              }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </div>
        </div>

        <MainDisplay
          onSearchBack={() => {
            setSearchResult(undefined);
            setCurrentPage(1);
          }}
          onYearSelect={(year) => {
            setSelectedYear(year);
            setIsAtMainScreen(false);
            setCurrentPage(1);
            setType("Genre");
            console.log(currentMainPage);

          }}
          onPageChange={(page) => {setCurrentPage(page), setCurrentMainPage(page)}}
        />

        <div className="container-flex" style={{ color: textStyle.color }}>
          <SearchBar
            to_show={(PhotoSet, input) => {
              setSearchResult(PhotoSet);
              setSearchedInput(input);
              setCurrentPage(1);
            }}
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
            position: "absolute",
            left: "0%",
            transform: "translate(100px, -70px)",
          }}
        >
          {(!isAtMainScreen || searchResult) && (
            <BackToMainButton
              onClickBackToMain={() => {
                setIsAtMainScreen(true);
                setSearchResult(undefined);
                setSelectedYear(undefined);
                setCurrentPage(1);
                setType("Genre");
              }}
            />
          )}
        </div>

        <BottomBanner></BottomBanner>
        {/* <AIPrediction></AIPrediction> */}
      </div>
    </div>
  );
}

export default function MyApp() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = {
    toggleColorMode: () =>
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
  };

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
