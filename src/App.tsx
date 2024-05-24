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
        <SearchBar
          to_show={(photoList) => {
            setSearchResult(photoList);
          }}
          first_names={photos.map((p) => p.first_name)}
        ></SearchBar>
      </div>

      {searchResult && (
        <div className="">
          <h3 className="m-3">Results For {searchResult[0].first_name}:</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
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
