import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { photoData } from "../components/photoData";
import { TextField } from "@mui/material";

interface PhotoList {
  id: number;
  first_name: string;
  last_name: string;
  year: number;
  path: string;
}

interface Props {
  first_names: string[];
  last_names: string[];
  to_show: (photolist: PhotoList[], input: string) => void;
}

const SearchBar = ({ first_names, last_names, to_show }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [warning, setWarning] = useState("");
  const [photos, setPhotos] = useState(photoData);
  const photosToBeDisplayed = photos;

  const clickToExpand = () => {
    setIsExpanded(true);
    setTimeout(() => {
      setIsExpanded(false);
      setWarning("");
    }, 60000);
  };

  const searchPhoto = () => {
    if (inputRef.current === null) {
      return;
    }

    const inputValue = inputRef.current.value.toLowerCase();

    if (inputValue === "") {
      setWarning("Name cannot be blank!");
    } else if (
      (photosToBeDisplayed.filter(
        (photo) => (inputValue.includes((photo.first_name + " " + photo.last_name).toLowerCase())) || ((photo.first_name + " " + photo.last_name).toLowerCase().includes(inputValue))
      )).length === 0
    ) {
      setWarning("Name not found!");
    } else {
      to_show(
        photosToBeDisplayed.filter(
          (photo) => (inputValue.includes((photo.first_name + " " + photo.last_name).toLowerCase()) || ((photo.first_name + " " + photo.last_name).toLowerCase().includes(inputValue)))
        ),
        inputValue
      );
      setWarning("");
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      {!isExpanded && (
        <FaSearch
          className="m-2 mt-3"
          size={25}
          onClick={clickToExpand}
          style={{ cursor: "pointer" }}
        ></FaSearch>
      )}
      {isExpanded && (
        <div className="input-group animate__animated animate__fadeInUp">

          <TextField
            className="form-control m-2"
            label="Search Name from Record"
            variant="outlined"
            size="small"
            sx={{width: "20ch"}}
            inputRef={inputRef}
            onChange={() => {
              setWarning("");
            }}
            inputProps={{
              size: 24, // Adjust size as needed based on your default message length
            }}
          />
          <div className="input-group-append m-2">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={searchPhoto}
            >
              Go
            </button>
          </div>
        </div>
      )}
      {warning && (
        <p className="m-2 mb-0 mt-0" style={{ color: "red" }}>
          {warning}
        </p>
      )}
    </div>
  );
};

export default SearchBar;
