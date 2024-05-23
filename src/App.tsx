import { useState } from "react";
import "./App.css";
import GraduationFilterYear from "./components/GraduationFilterYear";
import PhotoList from "./components/PhotoList";
import { photoData } from "./components/photoData";
import Heading from "./components/Heading";
import UBCLogo from "./components/TopBanner";
import SearchBar from "./components/SearchBar";

// The parent that has states and allows change to be reflected to components
function App() {
  const [photos, setPhotos] = useState(photoData);
  const photosToBeDisplayed = photos;

  const [selectedYear, setSelectedYear] = useState(1930);

  return (
    <div>
      <UBCLogo></UBCLogo>

      <Heading year={selectedYear}></Heading>

      <div className="photo_container">
        {photosToBeDisplayed
          .filter((photo) => photo.year === selectedYear)
          .map((photo) => (
            <div key={photo.id}>
              <PhotoList {...photo} />
            </div>
          ))}
      </div>
      <div className="container-flex">
        <GraduationFilterYear
          onSelect={(year) => setSelectedYear(year)}
        ></GraduationFilterYear>
        <SearchBar last_names={photos.map((p) => p.last_name)}></SearchBar>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} UBC Electrical and Computer
        Engineering. All rights reserved.
      </div>
    </div>
  );
}

export default App;
