import "./Steps.css";

function Steps() {
  const steps = [
    {
      number: "01",
      icon: "✂",
      title: "Select Service",
      description:
        "Choose the perfect service that matches your pet's needs and preferences.",
    },
    {
      number: "02",
      icon: "📅",
      title: "Book Your Day",
      description:
        "Pick a suitable date and schedule your appointment with our team.",
    },
    {
      number: "03",
      icon: "🐾",
      title: "Have Relax",
      description:
        "Relax while we take loving care of your furry family member.",
    },
  ];

  return (
    <section className="steps" id="steps">
      <div className="container">
        <div className="steps-heading">
          <p className="section-tag"></p>
          <h2>Three Step And Enjoy Your Day.</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <div className="step-top">
                <div className="step-icon">{step.icon}</div>
                <span>Step {step.number}</span>
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;