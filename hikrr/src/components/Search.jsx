import React from 'react'
import Client from "../services/api";
import { useState } from "react";
import SearchItem from "./SearchItem";


const Search = () => {

   const [searchResults, setSearchResults] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");

  const getSearchResults = async (e) => {
    e.preventDefault();
    let res = await Client.get(`search/${searchQuery}`);
    console.log(res.data)
    setSearchResults(res.data)
  }
  
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  return (
    <div>
      <div>
        <h2 className="post-title">Search Hiking Trails</h2>
        <div className="centered bkground">
          <form className="submit-form" onSubmit={getSearchResults}>
            <input
              className="input"
              type="text"
              name="search"
              value={searchQuery}
              placeholder="Search Hikes"
              onChange={handleChange}
            ></input>
            <button className="sub-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        <div>
          {searchResults.map((result) => (
            <SearchItem
              key={result.id}
              title={result.title}
              image={result.imgUrl}
              content={result.content}
              rating={result.rating}
              mapImg={result.mapImg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search