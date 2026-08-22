import "./Team.css";

function Team() {
  const teamMembers = [
    {
      name: "Kash Prestson",
      role: "Co-Founder",
      image:
        "https://scooby-wp.egenslab.com/wp-content/uploads/2023/02/h2-team-1.jpg",
    },
    {
      name: "Scarlett Emily",
      role: "Keneel Assistant",
      image:
        "https://scooby-wp.egenslab.com/wp-content/uploads/2023/02/h2-team-2.jpg",
    },
    {
      name: "Jackson Mateo",
      role: "Veterinary Assitant",
      image:
        "https://scooby-wp.egenslab.com/wp-content/uploads/2023/02/h2-team-3.jpg",
    },
    {
      name: "Scarlett Emily",
      role: "Keneel Assistant",
      image:
        "https://scooby-wp.egenslab.com/wp-content/uploads/2023/02/h2-team-4.jpg",
    },
    {
      name: "Gorjona Hiller",
      role: "Daycare Manager",
      image:
        "https://scooby-wp.egenslab.com/wp-content/uploads/2023/02/h2-team-5.jpg",
    },
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="team-heading">
          <p className="section-tag"></p>

          <h2>Meet Our Pet Care Experts</h2>

          <p>
            Our experienced and passionate team is dedicated to giving your
            pets the love, attention, and professional care they deserve.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.name}>
              <div className="team-image">
                <img src={member.image} alt={member.name} />

                <div className="team-social">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>

              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;