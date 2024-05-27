import { useState } from "react";
import "./App.css";
import GraduationFilterYear from "./components/GraduationFilterYear";
import PhotoList from "./components/PhotoList";
import { photoData } from "./components/photoData";
import Heading from "./components/Heading";
import UBCLogo from "./components/TopBanner";
import SearchBar from "./components/SearchBar";
import SearchResultList from "./components/SearchResultList";

// The parent that has states and allows change to be reflected to components
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
  const [searchedInput, setSearchedInput] = useState("");

  return (
    <div style={{background: "linear-gradient(to bottom, #e6f7ff, #ffffff)"
    }}>
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
        <SearchBar
          to_show={(photoList, input) => {
            setSearchResult(photoList);
            setSearchedInput(input);
            console.log(searchedInput);
          }}
          first_names={photos.map((p) => p.first_name)}
          last_names={photos.map((p) => p.last_name)}
        ></SearchBar>
      </div>

      {searchResult && (
        <div className="">
          <h3 className="m-3">Results For {searchedInput}:</h3>
          <div
            className="photo_container"
          >
            {searchResult.map((photo) => (
              <div key={photo.id}>
                <SearchResultList {...photo} />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "right" }}>
            <button
              className="btn btn-outline-danger m-3"
              onClick={() => {
                setSearchResult(undefined);
              }}
            >
              Back
            </button>
          </div>
        </div>
      )}

      <div className="copyright">
        &copy; {new Date().getFullYear()} UBC Electrical and Computer
        Engineering. All rights reserved.
      </div>
    </div>
  );
}

export default App;
