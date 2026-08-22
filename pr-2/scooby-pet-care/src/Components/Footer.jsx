import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-about">
            <div className="footer-logo">
              <span className="footer-logo-icon">♥</span>
              <span>Scooby</span>
            </div>

            <p>
              We provide loving, professional, and reliable care for your
              furry family members. Your pet's happiness is our priority.
            </p>

            <div className="footer-social">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
          </div>

          <div className="footer-column">
            <h3>Opening Hours</h3>

            <a href="#home">Mon-Fri: 9:00AM - 6:00AM</a>
            <a href="#about">Saturday: 9:00AM - 6:00AM</a>
            <a href="#services">Sunday:Closed</a>
          </div>

          <div className="footer-column">
            <h3>Our Services</h3>

            <a href="#services">Pet Grooming</a>
            <a href="#services">Pet Boarding</a>
            <a href="#services">Veterinary Care</a>
            <a href="#services">Pet Training</a>
            <a href="#services">Pet Sitting</a>
          </div>

          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>

            <p>📍168/170, Avenue 01, Mirpur DOHS Bangladesh.</p>
            <p>📞 +880-170-1111-0000</p>
            <p>✉️ hello@scooby.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Scooby. All Rights Reserved.</p>

          <div>
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms & Conditions</a>
            <a href="#home">Services</a>
            <a href="#home">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;