
import { useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  .article-wrapper {
    width: 100%;
    max-width: 350px;
    transition: 0.15s all ease-in-out;
    border-radius: 10px;
    padding: 5px;
    border: 4px solid transparent;
    cursor: pointer;
    background-color: white;
  }
  .article-wrapper:hover {
    box-shadow: 10px 10px 0 #4e84ff, 20px 20px 0 #4444bd;
    border-color: #0578c5;
    transform: translate(-20px, -20px);
  }
  .article-wrapper:active {
    box-shadow: none;
    transform: translate(0, 0);
  }
  .project-info {
    padding: 20px 10px 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .flex-pr {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .project-title {
    font-size: 1.5em; /* Reduced from 1.8em */
    margin: 0;
    font-weight: 600;
    line-height: 1.2;
    color: black;
    /* Removed nowrap + ellipsis to allow wrapping */
  }
  .project-description {
    font-size: 0.95em;
    color: #555;
    margin: 0;
    line-height: 1.4;
  }
  .types {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .project-type {
    background: #b2b2fd;
    color: #1a41cd;
    font-weight: bold;
    padding: 0.3em 0.7em;
    border-radius: 15px;
    font-size: 12px;
    letter-spacing: -0.6px;
  }
  .project-hover {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 9px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .article-wrapper:hover .project-hover {
    transform: rotate(-45deg);
    background-color: #a6c2f0;
  }
  .container-project {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    background-color: #e0e0e0;
  }
  /* Modal styles remain the same */
  .image-modal-backdrop {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  .image-modal {
    position: relative;
    max-width: 90%;
    max-height: 90%;
  }
  .modal-image {
    max-width: 100%;
    max-height: 85vh;
    border-radius: 8px;
  }
  .modal-close {
    position: absolute;
    top: -15px;
    right: -15px;
    width: 40px;
    height: 40px;
    background: white;
    border: none;
    border-radius: 50%;
    font-size: 28px;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  }
    .video-modal {
    max-width: 90%;
    max-height: 90%;
    position: relative;
  }
  .modal-video {
    width: 100%;
    max-width: 800px;
    height: auto;
    max-height: 80vh;
    border-radius: 8px;
  }
`;

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  link,
  demoImage,
  videoUrl,
  badges = [],
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleClick = (e) => {
    e.stopPropagation();

    if (videoUrl) {
      setModalType("video");
      setShowModal(true);
    } else if (demoImage) {
      setModalType("image");
      setShowModal(true);
    } else if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const closeModal = (e) => {
    e?.stopPropagation();
    setShowModal(false);
    setModalType(null);
  };

  return (
    <>
      <StyledWrapper>
        <article className="article-wrapper" onClick={handleClick}>
          <div
            className="container-project"
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
          <div className="project-info">
            <div className="flex-pr">
              <h3 className="project-title">{title}</h3>
              <div className="project-hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>

            <div className="types">
              {badges.map((badge, i) => (
                <span key={i} className="project-type">• {badge}</span>
              ))}
            </div>

            <p className="project-description">{description}</p>
          </div>
        </article>
      </StyledWrapper>

      {showModal && (
        <div className="image-modal-backdrop" onClick={closeModal}>
          <div className={modalType === "video" ? "video-modal" : "image-modal"} onClick={(e) => e.stopPropagation()}>
            {modalType === "image" && (
              <img src={demoImage} alt={`${title} Demo`} className="modal-image" />
            )}
            {modalType === "video" && (
              <video className="modal-video" controls autoPlay loop muted>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};