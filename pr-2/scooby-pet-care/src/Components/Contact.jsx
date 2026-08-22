import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      question: "What services do you provide for pets?",
      answer:
        "We provide grooming, boarding, veterinary care, pet training, and personalized pet care services.",
    },
    {
      question: "Do I need an appointment before visiting?",
      answer:
        "Yes, we recommend booking an appointment so we can provide the best possible care for your pet.",
    },
    {
      question: "Is your pet care environment safe?",
      answer:
        "Yes. We maintain a clean, comfortable, and pet-friendly environment with trained professionals.",
    },
    {
      question: "Can I contact you for special requirements?",
      answer:
        "Absolutely. You can contact us and discuss your pet's specific needs with our team.",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-faq-grid">
          {}
          <div className="contact-form-area">
            <p className="section-tag"></p>
            <h2>Contact</h2>

            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>

              <input type="text" placeholder="Subject" />

              <textarea
                rows="7"
                placeholder="Write your message..."
              ></textarea>

              <button type="submit" className="send-btn">
                Send Now
              </button>
            </form>
          </div>

          {}
          <div className="contact-image">
            <div className="contact-image-shape"></div>

            <img
              src="https://scooby-wp.egenslab.com/wp-content/uploads/2023/02/h2-contact-img.png"
              alt="Pet care"
            />
          </div>

          {}
          <div className="faq-area">
            <p className="section-tag"></p>
            <h2>FAQ</h2>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${
                    activeFaq === index ? "active" : ""
                  }`}
                  key={faq.question}
                >
                  <button
                    className="faq-question"
                    onClick={() =>
                      setActiveFaq(
                        activeFaq === index ? null : index
                      )
                    }
                  >
                    <span>{faq.question}</span>
                    <span className="faq-symbol">
                      {activeFaq === index ? "−" : "+"}
                    </span>
                  </button>

                  {activeFaq === index && (
                    <p className="faq-answer">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;