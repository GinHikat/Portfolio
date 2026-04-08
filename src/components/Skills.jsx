import "../css/Skills.css";

const Skills = ({ skillsDict, toolsDict }) => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-container">
          {Object.entries(skillsDict).map(([category, skills]) => (
            <div key={category} className="skill-category glass-panel">
              <h3 className="category-title">{category}</h3>
              <div className="skill-tags">
                {skills.map((skill) => (
                  <span key={skill} className="pill-tag skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
