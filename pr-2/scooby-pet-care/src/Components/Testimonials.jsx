import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Anthony Dylan",
      role: "Customer",
      review:
        "The team took amazing care of my pet. I felt completely relaxed knowing my furry friend was in safe and loving hands.",
      initials: "AD",
    },
    {
      name: "Michael Brown",
      role: "Dog Owner",
      review:
        "Excellent service and a very friendly team. My dog came back happy, healthy, and beautifully groomed.",
      initials: "MB",
    },
    {
      name: "Sebastian Ethan",
      role: "Customer",
      review:
        "Professional, caring, and trustworthy. I highly recommend their pet care services to every pet parent.",
      initials: "SE",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-heading">
          <p className="section-tag"></p>
          <h2>What Our Happy Clients Say</h2>
          <p>
            Hear from pet parents who trust us to care for their beloved
            furry family members.
          </p>
        </div>

        <div className="rating-wrapper">
          <div className="rating-box">
           <img src="https://scooby-wp.egenslab.com/wp-content/uploads/2023/02/truspilot.svg" alt="trustpilot" />
            <div className="stars">★★★★★</div>
            <p>Excellent service</p>
          </div>

          <div className="overall-rating">
            <div className="rating-circle">
              <span>4.9</span>
              <small>/ 5</small>
            </div>
            <p>Average Customer Rating</p>
          </div>

          <div className="rating-box">
            <img src="https://scooby-wp.egenslab.com/wp-content/uploads/2023/02/google.svg" alt="google" />
            <div className="stars">★★★★★</div>
            <p>Highly recommended</p>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.name}>
              <div className="quote">“</div>

              <div className="stars">★★★★★</div>

              <p className="testimonial-review">
                {testimonial.review}
              </p>

              <div className="testimonial-user">
                <div className="user-avatar">
                  {testimonial.initials}
                </div>

                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;