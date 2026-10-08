import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import {
  logout,
  removeFavorite,
  removeFromWatchlist,
} from "../redux/authReducer";

const IMAGE_URL = "https://image.tmdb.org/t/p/w300";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user,
    favorites,
    watchlist,
  } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="profile-page">
      <div className="profile-box">

        <div className="profile-icon">
          👤
        </div>

        <h1>My Profile</h1>

        <p className="profile-label">
          Logged in as
        </p>

        <p className="profile-email">
          {user?.email || "No user information"}
        </p>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

      {/* Favorites */}

      <section className="saved-section">
        <div className="saved-heading">
          <h2>♥ My Favorites</h2>

          <p>
            {favorites.length} saved movie
            {favorites.length !== 1 ? "s" : ""}
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="empty-saved">
            <p>No favorite movies yet.</p>
            <Link to="/">
              Browse Movies
            </Link>
          </div>
        ) : (
          <div className="saved-grid">
            {favorites.map((movie) => (
              <div
                className="saved-card"
                key={movie.id}
              >
                <img
                  src={`${IMAGE_URL}${movie.poster_path}`}
                  alt={movie.title}
                />

                <div className="saved-card-info">
                  <h3>{movie.title}</h3>

                  <button
                    onClick={() =>
                      dispatch(removeFavorite(movie.id))
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Watchlist */}

      <section className="saved-section">
        <div className="saved-heading">
          <h2>＋ My Watchlist</h2>

          <p>
            {watchlist.length} movie
            {watchlist.length !== 1 ? "s" : ""}
          </p>
        </div>

        {watchlist.length === 0 ? (
          <div className="empty-saved">
            <p>Your watchlist is empty.</p>
            <Link to="/">
              Browse Movies
            </Link>
          </div>
        ) : (
          <div className="saved-grid">
            {watchlist.map((movie) => (
              <div
                className="saved-card"
                key={movie.id}
              >
                <img
                  src={`${IMAGE_URL}${movie.poster_path}`}
                  alt={movie.title}
                />

                <div className="saved-card-info">
                  <h3>{movie.title}</h3>

                  <button
                    onClick={() =>
                      dispatch(
                        removeFromWatchlist(movie.id)
                      )
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Profile;