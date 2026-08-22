
import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";

const SLIDES = [
  {
    tag: "Brand identity",
    headline: "We give young companies a voice worth remembering.",
    copy: "Naming, identity systems and the small details that make a brand feel considered instead of assembled.",
  },
  {
    tag: "Product design",
    headline: "Interfaces built around how people actually work.",
    copy: "From first wireframe to shipped product, we design the screens your team will live in every day.",
  },
  {
    tag: "Web & development",
    headline: "Fast, accessible sites that carry the brand through.",
    copy: "Next.js builds tuned for speed and search, with a CMS your team can actually maintain.",
  },
];

const AUTO_MS = 5200;

export default function Slider() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_MS);
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (index) => {
    clearInterval(timerRef.current);
    setActive(index);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_MS);
  };

  const slide = SLIDES[active];

  return (
    <section
      id="slider"
      style={{
        position: "relative",
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        paddingTop: "96px",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at top right, rgba(232,184,75,0.08), transparent 55%), var(--ink)",
      }}
    >
      <Container className="container-wide">
        <div className="row align-items-center">
          <div className="col-lg-9">
            <p className="eyebrow mb-3">{`0${active + 1} — ${slide.tag}`}</p>
            <h1
              style={{
                fontSize: "clamp(35px, 5.4vw,70px)",
                lineHeight: 1.06,
                color: "var(--paper)",
                maxWidth: "18ch",
                transition: "opacity 300ms ease",
              }}
              key={active}
            >
              {slide.headline}
            </h1>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "16px",
                width: "100%",
                marginTop: "24px",
              }}
            >
              {slide.copy}
            </p>

            <a
              href="#work"
              className="d-inline-flex align-items-center gap-2 mt-4"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "16px",
                color: "var(--gold)",
                borderBottom: "1px solid var(--gold-dim)",
                paddingBottom: "10px",
              }}
            >
              See the work ↓
            </a>
          </div>
        </div>

        {}
        <div
          className="d-none d-md-flex flex-column gap-3"
          style={{ position: "absolute", right: "2.5rem", top: "50%", transform: "translateY(-50%)" }}
        >
          {SLIDES.map((s, i) => (
            <button
              key={s.tag}
              onClick={() => goTo(i)}
              aria-label={`Show slide ${i + 1}: ${s.tag}`}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                width: "28px",
                height: "2px",
                borderRadius: "2px",
                backgroundColor: i === active ? "var(--gold)" : "var(--line)",
                transition: "background-color 200ms ease, width 200ms ease",
                width: i === active ? "42px" : "28px",
              }}
            />
          ))}
        </div>
      </Container>

      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "28px",
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "16px",
          color: "var(--muted)",
        }}
      >
        SCROLL
      </div>
    </section>
  );
}
