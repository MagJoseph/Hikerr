import React from 'react'
import Client from "../services/api";
import { useState } from "react";
import SearchItem from "./SearchItem";


const Search = () => {

   const [searchResults, setSearchResults] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");

  const getSearchResults = async (e) => {
    e.preventDefault();
    let res = await Client.get(`http://localhost:3001/search/${searchQuery}`);
    console.log(res.data)
    setSearchResults(res.data)
  }
  
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  return (
    <div>
      <h1>Search Hiking Trails</h1>
      <form onSubmit={getSearchResults}>
        <input
          type="text"
          name="search"
          value={searchQuery}
          placeholder="Search Apartments"
          onChange={handleChange}
        ></input>
        <button type="submit">Search</button>
      </form>
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
  );
}

export default Search