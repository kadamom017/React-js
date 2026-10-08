import MovieList from "../components/MovieList";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-small-title">
            WELCOME TO CYRO
          </span>

          <h1>
            Discover Your
            <br />
            Next Favorite Movie
          </h1>

          <p>
            Explore popular movies, search for something new,
            and discover detailed information about your
            favorite films.
          </p>
        </div>
      </section>

      <MovieList />
    </div>
  );
}

export default Home;