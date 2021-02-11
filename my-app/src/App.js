import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import SearchAppBar from "./components/Header";
import axios from "axios";

function App() {
  const [genreList, setGenreList] = useState([]);
  const [discover, setDiscover] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [page, setPage] = useState("");

  useEffect(async () => {
    const discoverPromise =  axios.get("/.netlify/functions/discover");
    const genrePromise =  axios.get("/.netlify/functions/genre");

    const [discover, genre] = await Promise.all([discoverPromise, genrePromise]);
    console.log(genre.data.genres.genres);

    setGenreList(genre.data.genres.genres);
    setDiscover(discover.data.genres.results);
  }, []);

  // conditionally fetch search results
  // useEffect(async () => {
  //   const searchPromise = await axios.get("/getSearchTerm", { params : { query: search}});
  //   setSearchResult(searchPromise.data.results);
  // }, [search]);

  // // conditionally fetch results based on genre selected
  // useEffect(async () => {
  //   const genrePromise = await axios.get("/getSelectedGenre", { params : { with_genres: selectedGenre.toString()}});
  //   setGenreMovies(genrePromise.data.results);
  // }, [selectedGenre]);

  // Update the state val for the search term a user may have
  const handleUpdateSearch = (value) => {
    console.log("The event value ", value);
    return setSearch(value);
  };

  // Update the state value for the selected genre
  const handleGenreSelected = (value) => {
    return setSelectedGenre(value);
  };

  return (
    <div className="App">
      <SearchAppBar 
        cardDetails={discover} 
        genre={genreList} 
      />
    </div>
  );
}


// updateSearch={handleUpdateSearch} 
//         searchResult={searchResult}
//         genreMovies={genreMovies}
//         updateSelectedGenre={handleGenreSelected}

export default App;
