
import { useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  .article-wrapper {
    width: 100%;
    max-width: 380px;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: 0.2s ease-in-out;
    border-radius: 4px;
    border: 1px solid var(--line-strong);
    background: var(--panel);
    cursor: pointer;
  }
  .article-wrapper:hover {
    transform: translateY(-6px);
    border-color: var(--copper);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
  }
  .article-wrapper:active {
    transform: translateY(-2px);
  }
  .project-info {
    padding: 22px 22px 26px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    flex: 1;
  }
  .flex-pr {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
  }
  .project-title {
    font-family: var(--font-display);
    font-size: 1.25rem;
    margin: 0;
    font-weight: 600;
    line-height: 1.25;
    color: var(--paper);
  }
  .project-description {
    font-size: 0.92em;
    color: var(--muted);
    margin: 0;
    line-height: 1.5;
  }
  .types {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .project-type {
    font-family: var(--font-mono);
    background: var(--copper-soft);
    color: var(--copper);
    font-weight: 500;
    padding: 0.3em 0.7em;
    border-radius: 3px;
    font-size: 11px;
    letter-spacing: 0.02em;
  }
  .project-hover {
    border-radius: 4px;
    width: 36px;
    height: 36px;
    padding: 7px;
    border: 1px solid var(--line-strong);
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--muted);
  }
  .article-wrapper:hover .project-hover {
    transform: rotate(-45deg);
    background-color: var(--signal-soft);
    border-color: var(--signal);
    color: var(--signal);
  }
  .container-project {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    background-color: var(--panel-raised);
    border-bottom: 1px solid var(--line-strong);
    position: relative;
  }
  .container-project::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 60%, rgba(8, 20, 16, 0.55));
  }
  .image-modal-backdrop {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(4, 10, 8, 0.9);
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
    border-radius: 6px;
    border: 1px solid var(--line-strong);
  }
  .modal-close {
    position: absolute;
    top: -18px;
    right: -18px;
    width: 40px;
    height: 40px;
    background: var(--paper);
    color: var(--ink);
    border: none;
    border-radius: 50%;
    font-size: 24px;
    line-height: 1;
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
    border-radius: 6px;
    border: 1px solid var(--line-strong);
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
                  width="1.4em"
                  height="1.4em"
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

            <p className="project-description">{description}</p>

            <div className="types">
              {badges.map((badge, i) => (
                <span key={i} className="project-type">{badge}</span>
              ))}
            </div>
          </div>
        </article>
      </StyledWrapper>

      {showModal && (
        <div className="image-modal-backdrop" onClick={closeModal}>
          <div className={modalType === "video" ? "video-modal" : "image-modal"} onClick={(e) => e.stopPropagation()}>
            {modalType === "image" && (
              <img src={demoImage} alt={`${title} demo`} className="modal-image" />
            )}
            {modalType === "video" && (
              <video className="modal-video" controls autoPlay loop muted>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <button className="modal-close" onClick={closeModal} aria-label="Close">
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};
