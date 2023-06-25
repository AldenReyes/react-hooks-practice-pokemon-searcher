import React from "react";

function Search({ onHandleSearch, search }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={onHandleSearch} value={search} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
