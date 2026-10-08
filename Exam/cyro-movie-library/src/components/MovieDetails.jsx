import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { fetchMovieDetails } from "../redux/movieReducer";

import {
  addFavorite,
  removeFavorite,
  addToWatchlist,
  removeFromWatchlist,
} from "../redux/authReducer";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    selectedMovie,
    loading,
    error,
  } = useSelector((state) => state.movies);

  const {
    isAuthenticated,
    favorites,
    watchlist,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="loading">
        Loading movie details...
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

  if (!selectedMovie) {
    return null;
  }

  const isFavorite = favorites.some(
    (movie) => movie.id === selectedMovie.id
  );

  const isInWatchlist = watchlist.some(
    (movie) => movie.id === selectedMovie.id
  );

  const handleFavorite = () => {
    if (!isAuthenticated) {
      alert("Please login to use Favorites.");
      return;
    }

    if (isFavorite) {
      dispatch(removeFavorite(selectedMovie.id));
    } else {
      dispatch(addFavorite(selectedMovie));
    }
  };

  const handleWatchlist = () => {
    if (!isAuthenticated) {
      alert("Please login to use Watchlist.");
      return;
    }

    if (isInWatchlist) {
      dispatch(removeFromWatchlist(selectedMovie.id));
    } else {
      dispatch(addToWatchlist(selectedMovie));
    }
  };

  return (
    <div className="details-page">
      <div className="details-container">

        <div className="details-poster">
          {selectedMovie.poster_path && (
            <img
              src={`${IMAGE_URL}${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
            />
          )}
        </div>

        <div className="details-content">

          <Link to="/" className="back-button">
            ← Back to Movies
          </Link>

          <h1>{selectedMovie.title}</h1>

          <div className="details-meta">
            <span>
              ⭐ {selectedMovie.vote_average?.toFixed(1)}
            </span>

            <span>
              {selectedMovie.release_date || "N/A"}
            </span>

            <span>
              {selectedMovie.runtime
                ? `${selectedMovie.runtime} min`
                : "N/A"}
            </span>
          </div>

          <p className="details-description">
            {selectedMovie.overview ||
              "No description available."}
          </p>

          <div className="detail-item">
            <strong>Language:</strong>{" "}
            {selectedMovie.spoken_languages?.length
              ? selectedMovie.spoken_languages
                  .map((language) => language.english_name)
                  .join(", ")
              : "N/A"}
          </div>

          <div className="detail-item">
            <strong>Genres:</strong>{" "}
            {selectedMovie.genres?.length
              ? selectedMovie.genres
                  .map((genre) => genre.name)
                  .join(", ")
              : "N/A"}
          </div>

          <div className="detail-item">
            <strong>Release Date:</strong>{" "}
            {selectedMovie.release_date || "N/A"}
          </div>

          <div className="detail-item">
            <strong>Cast:</strong>{" "}
            {selectedMovie.credits?.cast?.length
              ? selectedMovie.credits.cast
                  .slice(0, 6)
                  .map((actor) => actor.name)
                  .join(", ")
              : "N/A"}
          </div>

          <div className="details-actions">

            <button
              className="favorite-btn"
              onClick={handleFavorite}
            >
              {isFavorite
                ? "♥ Remove from Favorites"
                : "♥ Add to Favorites"}
            </button>

            <button
              className="watchlist-btn"
              onClick={handleWatchlist}
            >
              {isInWatchlist
                ? "✓ Remove from Watchlist"
                : "+ Add to Watchlist"}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default MovieDetails;