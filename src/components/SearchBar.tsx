import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  last_names: string[];
}

const SearchBar = ({ last_names }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [warning, setWarning] = useState("");

  const clickToExpand = () => {
    setIsExpanded(true);
  };

  const searchPhoto = () => {
    if (inputRef.current === null) {
      return;
    }

    const inputValue = inputRef.current.value.toLowerCase();

    if (inputValue === "") {
      setWarning("Please enter a last name!");
    } else if (
      !last_names
        .map((name) => name.toLowerCase())
        .filter((name) => name === inputValue)
        .includes(inputValue)
    ) {
      setWarning("Last name not found in past graduates!");
    } else {
      // TODO: set up widgets to target people
      setWarning("");
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
          <input
            type="text"
            className="form-control m-2"
            placeholder="Search by Last Name"
            aria-label="Search by Last Name"
            aria-describedby="basic-addon2"
            style={{ maxWidth: "182px", borderRadius: "5px" }}
            ref={inputRef}
            onChange={() => {
              setWarning("");
            }}
          />
          <div className="input-group-append m-2">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => searchPhoto()}
            >
              Search
            </button>
          </div>
        </div>
      )}
      {warning && (
        <p className="m-2 mb-0" style={{ color: "red" }}>
          {warning}
        </p>
      )}
    </div>
  );
};

export default SearchBar;
