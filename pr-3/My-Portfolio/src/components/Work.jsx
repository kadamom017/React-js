
import { Container, Row, Col } from "react-bootstrap";

const PROJECTS = [
  {
    index: "01",
    name: "Northbay Coffee",
    category: "Identity, Web",
    year: "2025",
    blurb: "A local coffee brand given a warmer identity and a simple online presence built for everyday customers.",
  },
  {
    index: "02",
    name: "Beastin Fitness",
    category: "Product design",
    year: "2025",
    blurb: "A fitness platform redesigned to make class schedules and membership information easier to access.",
  },
  {
    index: "03",
    name: "GreenBasket",
    category: "Web & CMS",
    year: "2024",
    blurb: "An online grocery concept focused on simple product browsing and a faster shopping experience.",
  },
  {
    index: "04",
    name: "Frame Journal",
    category: "Identity, Editorial",
    year: "2024",
    blurb: "A digital magazine concept created around photography, stories, and clean editorial layouts.",
  },
];

export default function Work() {
  return (
    <section id="work" style={{ background: "var(--ink)", padding: "110px 0" }}>
      <Container className="container-wide">
        <Row className="align-items-end mb-5 pb-3" style={{ borderBottom: "1px solid var(--line)" }}>
          <Col md={8}>
            <p className="eyebrow mb-3">Selected work</p>
            <h2 style={{ fontSize: "clamp(28px, 3.4vw, 41px)", color: "var(--paper)" }}>
              A handful of the projects we&apos;re proudest of.
            </h2>
          </Col>
          <Col md={4} className="mt-3 mt-md-0">
            <p style={{ color: "var(--muted)", fontSize: "15px" }}>
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
                    fontSize: "25px",
                    color: "var(--paper)",
                    fontStyle: "italic",
                  }}
                >
                  {p.name}
                </h3>
              </Col>
              <Col md={4} className="mt-2 mt-md-0">
                <p style={{ color: "var(--muted)", fontSize: "14px", margin: 0 }}>{p.blurb}</p>
              </Col>
              <Col md={2} className="mt-2 mt-md-0 text-md-end">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--gold)" }}>
                  {p.category}
                </span>
                <br />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--muted)" }}>
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
