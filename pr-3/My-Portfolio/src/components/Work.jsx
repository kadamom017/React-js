
import { Container, Row, Col } from "react-bootstrap";

const PROJECTS = [
  {
    index: "01",
    name: "Ferro & Co.",
    category: "Identity, Web",
    year: "2025",
    blurb: "A metalwork studio's brand rebuilt around the grain and grit of its own materials.",
  },
  {
    index: "02",
    name: "Halcyon Health",
    category: "Product design",
    year: "2025",
    blurb: "Patient scheduling redesigned to cut booking time from six minutes to under one.",
  },
  {
    index: "03",
    name: "Rootstock",
    category: "Web & CMS",
    year: "2024",
    blurb: "A regional farm network's storefront, rebuilt on Next.js for a 40% faster load.",
  },
  {
    index: "04",
    name: "Aperture Journal",
    category: "Identity, Editorial",
    year: "2024",
    blurb: "Type system and print-to-web identity for an independent photography magazine.",
  },
];

export default function Work() {
  return (
    <section id="work" style={{ background: "var(--ink)", padding: "7rem 0" }}>
      <Container className="container-wide">
        <Row className="align-items-end mb-5 pb-3" style={{ borderBottom: "1px solid var(--line)" }}>
          <Col md={8}>
            <p className="eyebrow mb-3">Selected work</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)", color: "var(--paper)" }}>
              A handful of the projects we&apos;re proudest of.
            </h2>
          </Col>
          <Col md={4} className="mt-3 mt-md-0">
            <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
              Four studios, two products, and one magazine — a small sample of work
              spanning brand, product and web.
            </p>
          </Col>
        </Row>

        <div>
          {PROJECTS.map((p) => (
            <Row
              key={p.index}
              className="align-items-center py-4 project-row"
              style={{ borderBottom: "1px solid var(--line)" }}
            >
              <Col xs={2} md={1}>
                <span className="eyebrow" style={{ color: "var(--muted)" }}>
                  {p.index}
                </span>
              </Col>
              <Col xs={10} md={5}>
                <h3
                  style={{
                    fontSize: "1.6rem",
                    color: "var(--paper)",
                    fontStyle: "italic",
                  }}
                >
                  {p.name}
                </h3>
              </Col>
              <Col md={4} className="mt-2 mt-md-0">
                <p style={{ color: "var(--muted)", fontSize: "0.92rem", margin: 0 }}>{p.blurb}</p>
              </Col>
              <Col md={2} className="mt-2 mt-md-0 text-md-end">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--gold)" }}>
                  {p.category}
                </span>
                <br />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--muted)" }}>
                  {p.year}
                </span>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
}
