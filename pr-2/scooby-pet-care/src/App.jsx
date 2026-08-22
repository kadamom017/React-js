import "./App.css";

import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Services from "./Components/Services.jsx";
import About from "./Components/About.jsx";
import WhyChooseUs from "./Components/WhyChooseUs.jsx";
import Steps from "./Components/Steps.jsx";
import Contact from "./Components/Contact.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Team from "./Components/Team.jsx";
import Blog from "./Components/Blog.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Steps />
      <Contact />
      <Testimonials />
      <Team />
      <Blog />
      <Footer />
    </>
  );
}

export default App;