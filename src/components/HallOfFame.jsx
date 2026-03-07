import { useState } from "react";
import "../css/HallOfFame.css";

const HallOfFame = ({ hallOfFameData }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section id="hall-of-fame" className="hall-of-fame-section section-dark">
      <div className="container">
        <h2 className="section-title text-center">Hall of Fame</h2>
        <p className="section-subtitle text-center">
          Dedicated to my greatest inspiration
        </p>

        <div className="hof-grid">
          {hallOfFameData.map((idol, index) => (
            <div key={index} className="hof-card glass-panel">
              <div className="hof-image-wrapper">
                {idol.image ? (
                  <img src={idol.image} alt={idol.name} className="hof-image" />
                ) : (
                  <div className="hof-image-placeholder"></div>
                )}
                <div className="hof-overlay"></div>
              </div>

              <div className="hof-content">
                <div className="hof-header">
                  <h3 className="hof-name gradient-text">{idol.name}</h3>
                  <span className="hof-role">{idol.role}</span>
                </div>
                <p className="hof-desc">{idol.description}</p>

                {idol.link && (
                  <a
                    href={idol.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary hof-btn"
                  >
                    Watch Now
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
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </a>
                )}

                {idol.galleryImages && idol.galleryImages.length > 0 && (
                  <div className="hof-gallery-container">
                    <h4 className="hof-gallery-title">Gallery</h4>
                    <div className="hof-gallery-grid">
                      {idol.galleryImages.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${idol.name} gallery ${i}`}
                          className="hof-gallery-thumb"
                          onClick={() => setSelectedImage(img)}
                        />
                      ))}
                    </div>
                  </div>
                )}
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

export default HallOfFame;
