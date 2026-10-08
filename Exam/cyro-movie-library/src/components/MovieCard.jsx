import { Link } from "react-router-dom";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        {movie.poster_path ? (
          <img
            src={`${IMAGE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <div className="no-poster">
            No Image
          </div>
        )}

        <div className="movie-rating">
          ⭐ {movie.vote_average?.toFixed(1)}
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p>
          {movie.release_date
            ? movie.release_date.substring(0, 4)
            : "N/A"}
        </p>

        <Link
          to={`/movie/${movie.id}`}
          className="details-btn"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;