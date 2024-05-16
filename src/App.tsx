import { useState } from "react";
import "./App.css";
import GraduationFilterAlpha from "./components/GraduationFilterAlpha";
import GraduationFilterYear from "./components/GraduationFilterYear";
import PhotoList from "./components/PhotoList";

// The parent that has states and allows change to be reflected to components
function App() {
  // Photos State for graduating students
  const [photos, setPhotos] = useState([
    {
      id: 1,
      first_name: "Edward",
      last_name: "Hay",
      year: 1969,
      path: "assets/Edward_Hay_1969.jpg",
    },
    {
      id: 2,
      first_name: "Edward",
      last_name: "Lunn",
      year: 1969,
      path: "assets/Edward_Lunn_1969.jpg",
    },
    {
      id: 3,
      first_name: "George",
      last_name: "Harrower",
      year: 1969,
      path: "assets/George_Harrower_1969.jpg",
    },
    {
      id: 4,
      first_name: "Harold",
      last_name: "Woodland",
      year: 1969,
      path: "assets/Harold_Woodland_1969.jpg",
    },
    {
      id: 5,
      first_name: "Ian",
      last_name: "Adam",
      year: 1969,
      path: "assets/Ian_Adam_1969.jpg",
    },
    {
      id: 6,
      first_name: "James",
      last_name: "Mckeever",
      year: 1969,
      path: "assets/James_Mckeever_1969.jpg",
    },
    {
      id: 7,
      first_name: "James",
      last_name: "Roberts",
      year: 1969,
      path: "assets/James_Roberts_1969.jpg",
    },
    {
      id: 8,
      first_name: "John",
      last_name: "Baker",
      year: 1969,
      path: "assets/John_Baker_1969.jpg",
    },
    {
      id: 9,
      first_name: "Schubert",
      last_name: "Fraser",
      year: 1969,
      path: "assets/Schubert_Fraser_1969.jpg",
    },
    {
      id: 10,
      first_name: "Thomas",
      last_name: "Hadwin",
      year: 1969,
      path: "assets/Thomas_Hadwin_1969.jpg",
    },
  ]);

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
