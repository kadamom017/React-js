import "./WhyChooseUs.css";

function WhyChooseUs() {
  const features = [
    {
      icon: "♥",
      title: "Personalized Care",
      description:
        "Every pet receives individual attention, love, and care based on their needs.",
    },
    {
      icon: "♟",
      title: "Trusted Team",
      description:
        "Our experienced and friendly team is always ready to care for your pet.",
    },
    {
      icon: "✿",
      title: "Peace Of Mind",
      description:
        "We provide a safe and comfortable environment you can trust.",
    },
    {
      icon: "🐾",
      title: "Nice Environment",
      description:
        "A clean, friendly, and enjoyable space where pets feel at home.",
    },
  ];

  return (
    <section className="why-choose" id="pages">
      <div className="container">
        <div className="why-heading">
          <p className="section-tag"></p>

          <h2>Why Choose Us</h2>

          <p>
            Enjoy your holiday while we keep your pet happy, healthy, and
            cared for. Our experienced team is always ready for your pet.
          </p>
        </div>

        <div className="why-grid">
          {features.map((feature) => (
            <div className="why-card" key={feature.title}>
              <div className="why-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}

export default WhyChooseUs;