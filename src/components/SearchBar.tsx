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
          className="m-3"
          onClick={clickToExpand}
          style={{ cursor: "pointer" }}
        ></FaSearch>
      )}
      {isExpanded && (
        <div className="input-group animate__animated animate__fadeInUp">
          <input
            type="text"
            className="form-control m-3"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append m-3">
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
