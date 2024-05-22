import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {} // TODO: Will need the Props

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const clickToExpand = () => {
    console.log("Expanded");
    setIsExpanded(true);
  };

  return (
    <div>
      {!isExpanded && (
        <FaSearch
          className="m-2"
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
            style={{ maxWidth: "182px" }}
          />
          <div className="input-group-append m-2">
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
