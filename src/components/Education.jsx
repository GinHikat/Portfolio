import "../css/Education.css";

const Education = ({ educationData }) => {
  return (
    <section id="education" className="education-section section-dark">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card glass-panel">
              <div className="edu-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                </svg>
              </div>
              <div className="edu-content">
                <div className="edu-header">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <span className="edu-date">{edu.date}</span>
                </div>
                <h4 className="edu-school gradient-text">{edu.school}</h4>
                <p className="edu-desc">{edu.description}</p>
                {edu.gpa && (
                  <div className="edu-gpa">
                    <span className="gpa-label">GPA:</span>
                    <span className="gpa-value">{edu.gpa}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
