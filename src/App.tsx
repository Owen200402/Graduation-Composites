import { useState } from "react";
import "./App.css";
import GraduationFilterYear from "./components/GraduationFilterYear";
import PhotoList from "./components/PhotoList";
import { photoData } from "./components/photoData";
import styled from "styled-components";
import Heading from "./components/Heading";
import UBCLogo from "./components/TopBanner";
import SearchBar from "./components/SearchBar";

// CSS in JS
const PhotoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

// The parent that has states and allows change to be reflected to components
function App() {
  const [photos, setPhotos] = useState(photoData);
  const photosToBeDisplayed = photos;

  const [selectedYear, setSelectedYear] = useState(1930);

  return (
    <>
      <UBCLogo></UBCLogo>
      <GraduationFilterYear
        onSelect={(year) => setSelectedYear(year)}
      ></GraduationFilterYear>
      <SearchBar></SearchBar>

      <Heading year={selectedYear}></Heading>

      <PhotoContainer>
        {photosToBeDisplayed
          .filter((photo) => photo.year === selectedYear)
          .map((photo) => (
            <div key={photo.id}>
              <PhotoList {...photo} />
            </div>
          ))}
      </PhotoContainer>
    </>
  );
}

export default App;
