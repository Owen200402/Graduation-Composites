import { useState } from "react";
import "./App.css";
import GraduationFilterAlpha from "./components/GraduationFilterAlpha";
import GraduationFilterYear from "./components/GraduationFilterYear";
import PhotoList from "./components/PhotoList";
import { photoData } from "./components/photoData";
import styled from "styled-components";

const PhotoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

// The parent that has states and allows change to be reflected to components
function App() {
  // Photos State for graduating students
  const [photos, setPhotos] = useState(photoData);
  const photosToBeDisplayed = photos;

  const [selectedYear, setSelectedfYear] = useState(1970);

  return (
    <>
      <GraduationFilterYear
        onSelect={(year) => setSelectedfYear(year)}
      ></GraduationFilterYear>
      <PhotoContainer>
        {photosToBeDisplayed
          .filter((photo) => photo.year === selectedYear)
          .map((photo) => (
            <PhotoList {...photo} />
          ))}
      </PhotoContainer>
    </>
  );
}

export default App;
