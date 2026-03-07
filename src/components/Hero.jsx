import "../css/Hero.css";

const Hero = ({ personalData }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <p className="greeting delay-100">Hello, I am</p>
          <h1 className="hero-title delay-200">
            {personalData.name.split(" ")[0]} <br />
            <span className="gradient-text">
              {personalData.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <h2 className="hero-tagline delay-300">{personalData.tagline}</h2>
          <p className="hero-bio delay-300">{personalData.bio}</p>

          <div className="hero-cta delay-300">
            <a href="#projects" className="btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual delay-200">
          <div className="glass-panel profile-card">
            {personalData.profileImage ? (
              <img
                src={personalData.profileImage}
                alt={personalData.name}
                className="profile-image"
              />
            ) : (
              <div className="profile-placeholder">
                <span>{personalData.name.charAt(0)}</span>
              </div>
            )}
            <div className="status-badge">
              <span className="pulse-dot"></span> Available for work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
