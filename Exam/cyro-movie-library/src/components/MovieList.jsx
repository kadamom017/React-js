import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPopularMovies } from "../redux/movieReducer";
import MovieCard from "./MovieCard";

function MovieList() {
  const dispatch = useDispatch();

  const {
    popularMovies,
    loading,
    error,
  } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loading">
        Loading movies...
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        {error}
      </div>
    );
  }

  return (
    <section className="movie-section">
      <div className="section-heading">
        <h2>Popular Movies</h2>
        <p>Explore the movies people are watching right now.</p>
      </div>

      <div className="movie-grid">
        {popularMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieList;