import { Container, Row, Col } from "react-bootstrap";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", borderTop: "1px solid var(--line)", padding: "3rem 0 2rem" }}>
      <Container className="container-wide">
        <Row className="align-items-center gy-3">
          <Col md={4}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "1.15rem",
                color: "var(--paper)",
              }}
            >
              Northline
            </span>
          </Col>
          <Col md={4} className="text-md-center">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--muted)" }}>
              © {YEAR} Northline Studio. All rights reserved.
            </span>
          </Col>
          <Col md={4}>
            <div className="d-flex gap-4 justify-content-md-end">
              {["Instagram", "LinkedIn", "Dribbble"].map((label) => (
                <a
                  key={label}
                  href="#"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "16px",
                    color: "var(--paper)",
                    opacity: 0.75,
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
