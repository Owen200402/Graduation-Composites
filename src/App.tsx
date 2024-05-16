import { useState } from "react";
import "./App.css";
import GraduationFilterAlpha from "./components/GraduationFilterAlpha";
import GraduationFilterYear from "./components/GraduationFilterYear";
import PhotoList from "./components/PhotoList";
import { photoData } from "./components/photoData";

// The parent that has states and allows change to be reflected to components
function App() {
  // Photos State for graduating students
  const [photos, setPhotos] = useState(photoData);

  return (
    <>
      <GraduationFilterYear></GraduationFilterYear>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {photos.map((photo) => (
          <PhotoList {...photo} />
        ))}
      </div>
    </>
  );
}

export default App;
