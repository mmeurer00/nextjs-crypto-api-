import React, { useState } from "react";

function SearchBar({ props }) {
  return (
    /* jslint ignore: start */
    <>
      <div className="searchbar">
        <input
          type="text"
          value={props.query}
          onChange={(e) => props.setQuery(e.target.value)}
          onBlur={(e) => props.setQuery(e.target.value)}
        />
      </div>
    </>
    /* jslint ignore: end */
  );
}

export default SearchBar;
