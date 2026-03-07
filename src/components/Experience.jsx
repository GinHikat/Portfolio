import { useState } from "react";
import "../css/Experience.css";

const Experience = ({ experienceData }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Timeline</h2>

        <div className="timeline-container">
          {experienceData.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                {exp.image && (
                  <div className="timeline-image-container">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="timeline-image"
                    />
                    <div className="timeline-overlay"></div>
                  </div>
                )}
                <div className="timeline-content-wrapper">
                  <div className="timeline-header">
                    <h3 className="timeline-role">{exp.role}</h3>
                    <span className="timeline-date">{exp.date}</span>
                  </div>
                  <h4 className="timeline-company gradient-text">
                    {exp.company}
                  </h4>
                  <p className="timeline-desc">{exp.description}</p>

                  {exp.galleryImages && exp.galleryImages.length > 0 && (
                    <div className="gallery-hover-container">
                      <button className="btn-secondary gallery-btn">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          ></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                        Hover to View Gallery
                      </button>
                      <div className="gallery-popup glass-panel">
                        {exp.galleryImages.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`Gallery ${i}`}
                            className="gallery-thumbnail"
                            onClick={() => setSelectedImage(img)}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="image-modal-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <span className="close-modal">&times;</span>
            <div
              className="modal-content-wrapper"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Large View"
                className="modal-large-image"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
