
import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#slider" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expand="md"
      fixed="top"
      className="site-header"
      style={{
        background: scrolled ? "rgba(11,11,12,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "background 220ms ease, border-color 220ms ease",
        padding: "1.1rem 0",
      }}
    >
      <Container className="container-wide d-flex align-items-center justify-content-between">
        <Navbar.Brand href="#top" className="d-flex align-items-center gap-2 m-0">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "1.4rem",
              color: "var(--paper)",
            }}
          >
            Northline
          </span>
          <span className="eyebrow" style={{ marginTop: "2px" }}>
            Studio
          </span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-nav"
          style={{ borderColor: "var(--line)", filter: "invert(1)" }}
        />
        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav className="align-items-md-center gap-md-4 gap-2 pt-3 pt-md-0">
            {NAV_LINKS.map((link) => (
              <Nav.Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  letterSpacing: "0.04em",
                  color: "var(--paper)",
                  opacity: 0.85,
                }}
              >
                {link.label}
              </Nav.Link>
            ))}
            <Nav.Link
              href="#contact"
              className="mt-2 mt-md-0"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                letterSpacing: "0.04em",
                border: "1px solid var(--gold)",
                color: "var(--gold)",
                padding: "0.5rem 1rem",
                borderRadius: "999px",
                display: "inline-block",
                width: "fit-content",
              }}
            >
              Start a project
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
