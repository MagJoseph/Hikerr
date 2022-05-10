import React from 'react'
import Client from "../services/api";
import { useState } from "react";


const Search = () => {

   const [searchResults, setSearchResults] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");


  return (
    <div>Search</div>
  )
}

export default Search