
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';
//f17dd74c

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=f17dd74c';


const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');

      const searchMovie= async (title) =>{
      const response = await fetch (`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search.slice(0, 9)); // Limit to the first 9 movies
  }   
  useEffect( () => {
      searchMovie('India');
  },[])
  return (
    <div className="app">
      <h1>Movie Search Database</h1>
      
      
      <div className='search'>
        <input placeholder='Search for Movie' value={searchTerm} onChange={(e) => setsearchTerm(e.target.value) }></input>
        <img src={SearchIcon} alt='Search' onClick={ () => searchMovie(searchTerm)} />
      </div>
      {
        movies?.length > 0?(
<div className='container'>
      {movies.map((movie) =>(
        <MovieCard movie={movie}></MovieCard>
      ) )}
      </div>
        ):
        (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
      
      
    </div>
  );
}

export default App;
