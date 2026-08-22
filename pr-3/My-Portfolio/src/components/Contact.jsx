
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const inputStyle = {
  background: "transparent",
  border: "none",
  borderBottom: "1px solid var(--line)",
  borderRadius: 0,
  color: "var(--paper)",
  padding: "11px 0",
  fontSize: "16px",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ background: "var(--surface)", padding: "7rem 0" }}>
      <Container className="container-wide">
        <Row className="gy-5">
          <Col lg={5}>
            <p className="eyebrow mb-3">Get in touch</p>
            <h2 style={{ fontSize: "clamp(28px, 3.4vw, 40px)", color: "var(--paper)", maxWidth: "14ch" }}>
              Tell us what you&apos;re building.
            </h2>
            <p style={{ color: "var(--muted)", marginTop: "16px", maxWidth: "38ch" }}>
              Send a short brief and we&apos;ll reply within two working days with next
              steps, or a straight answer if we&apos;re not the right fit.
            </p>

            <div className="mt-5">
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--paper)" }}>
                hello@northlinestudio.com
              </p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--muted)" }}>
                Surat, India — working with clients everywhere
              </p>
            </div>
          </Col>

          <Col lg={7}>
            {submitted ? (
              <div
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: "8px",
                  padding: "40px",
                }}
              >
                <p className="eyebrow mb-2">Message sent</p>
                <h3 style={{ color: "var(--paper)", fontSize: "22px" }}>
                  Thanks, {form.name.split(" ")[0] || "there"} — we&apos;ll be in touch soon.
                </h3>
              </div>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Row className="gy-4">
                  <Col md={6}>
                    <Form.Group controlId="name">
                      <Form.Label className="eyebrow">Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label className="eyebrow">Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group controlId="message">
                      <Form.Label className="eyebrow">Project details</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Button
                      type="submit"
                      style={{
                        background: "var(--gold)",
                        border: "none",
                        color: "var(--ink)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "13px",
                        padding: "11px 28px",
                        borderRadius: "999px",
                        marginTop: "8px",
                      }}
                    >
                      Send message
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
