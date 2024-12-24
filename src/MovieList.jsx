import React, { useState, useEffect } from "react";
import axios from "axios";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyapi.online/api/movies")
      .then((response) => {
        setMovies(response.data); // Assuming the API response is an array of movies
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading movies...</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <h2>{movie.movie}</h2>
          <img
            src={movie.image}
            alt={movie.movie}
            className="movie-image"
          />
          <p>Rating: {movie.rating}/10</p>
          <a
            href={movie.imdb_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on IMDb
          </a>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
