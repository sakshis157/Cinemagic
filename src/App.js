import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

// 209fbbb9 - api key
const API_URL = 'http://www.omdbapi.com?apikey=209fbbb9';  // using the movie database api using a key

const App = () => {
 
  const [searchTerm, setSearchTerm] = useState("");

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (

    <div className="app">

      <h1>Cinemagic</h1>

      <div className="search">
        
        <input //search box
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img // magnifier image
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}

        </div>

      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

      <h3>Made with 💜 by Sakshi</h3>

    </div>
  );
};




export default App;
