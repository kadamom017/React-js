import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchSearchMovies,
  clearSearchResults,
} from "../redux/movieReducer";

import MovieCard from "./MovieCard";

function MovieSearch() {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const {
    searchResults,
    loading,
    error,
  } = useSelector((state) => state.movies);

  useEffect(() => {
    const searchText = query.trim();

    if (!searchText) {
      dispatch(clearSearchResults());
      return;
    }

    const timer = setTimeout(() => {
      dispatch(fetchSearchMovies(searchText));
    }, 500);

    return () => clearTimeout(timer);
  }, [query, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <h1>Search Movies</h1>

        <p>
          Find your favorite movies and discover something new.
        </p>

        <form
          className="search-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for a movie..."
          />

          <button type="submit">
            Search
          </button>
        </form>
      </div>

      {loading && (
        <div className="loading">
          Searching movies...
        </div>
      )}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {!loading && searchResults.length > 0 && (
        <section className="movie-section search-results-section">
          <div className="section-heading">
            <h2>Search Results</h2>

            <p>
              Found {searchResults.length} movies
            </p>
          </div>

          <div className="movie-grid">
            {searchResults.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>
        </section>
      )}

      {!loading &&
        query.trim() &&
        searchResults.length === 0 &&
        !error && (
          <div className="no-results">
            No movies found for "{query}".
          </div>
        )}
    </div>
  );
}

export default MovieSearch;