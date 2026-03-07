import "../css/About.css";

const About = ({ personalData }) => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-text glass-panel">
            <h3>More than just code.</h3>
            <p>
              I am a passionate AI enthusiast dedicated to
              working with multimodal data and applying data to drive practical applications. With a solid background in AI and Data Science, I strive to contribute to AI projects to foster Research and Development benefits.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card glass-panel">
              <h4 className="gradient-text">1+</h4>
              <p>Years Experience</p>
            </div>
            <div className="stat-card glass-panel">
              <h4 className="gradient-text">10+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card glass-panel">
              <h4 className="gradient-text">3.6+</h4>
              <p>GPA</p>
            </div>
            <div className="stat-card glass-panel">
              <h4 className="gradient-text">1M+</h4>
              <p>Lines of Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
