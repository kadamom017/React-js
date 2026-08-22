import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <div className="about-image-wrapper">
          <div className="about-shape"></div>

          <img
            className="about-main-image"
            src="https://scooby-wp.egenslab.com/wp-content/uploads/2023/02/h2-services-img.png"
            alt="Woman with pets"
          />

          <div className="about-paw paw-1">🐾</div>
          <div className="about-paw paw-2">🐾</div>
        </div>

        <div className="about-content">
          <p className="section-tag">About Our Pet Care</p>

          <h2>
            We Are Providing Pet Care
            <br />
            Service For Years.
          </h2>

          <p>
            We believe that every pet deserves love, care, and attention.
            Our experienced team is dedicated to providing a safe and
            comfortable environment for your furry family members.
          </p>

          <p>
            From regular checkups and grooming to boarding and professional
            care, we are here to make sure your pets stay healthy, happy,
            and loved.
          </p>

          <div className="about-founder">
            <div className="founder-icon">🐾</div>

            <div>
              <h4>Karl Prestonal</h4>
              <span>Founder, Scooby</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;