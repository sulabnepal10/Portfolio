import React from 'react';
import styled from 'styled-components';

const CreativeCard = () => {
  return (
    <StyledWrapper>
      <div className="creative-card">
        <div className="creative-card-pattern-grid" />
        <div className="creative-card-overlay-dots" />
        <div className="creative-card-bold-pattern">
          <svg viewBox="0 0 100 100">
            <path
              strokeDasharray="15 10"
              strokeWidth={10}
              stroke="#000"
              fill="none"
              d="M0,0 L100,0 L100,100 L0,100 Z"
            />
          </svg>
        </div>
        <div className="creative-card-title-area">
          <span>Sulab Nepal</span>
          <span className="creative-card-tag">Learner</span>
        </div>
        <div className="creative-card-body">
          <div className="creative-card-description">
            Electronics, Communication Information Engineering graduate with hands-on experience in web application
            development, data pipelines, and applied machine learning
          </div>
          <div className="creative-card-feature-grid">
            <div className="creative-card-feature-item">
              <div className="creative-card-feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20,4C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4H20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />
                </svg>
              </div>
              <span className="creative-card-feature-text">System Design</span>
            </div>
            <div className="creative-card-feature-item">
              <div className="creative-card-feature-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <ellipse cx="12" cy="5" rx="7" ry="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 5v10c0 1.7 3.1 3 7 3s7-1.3 7-3V5"
                    stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3"
                    stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M5 14c0 1.7 3.1 3 7 3s7-1.3 7-3"
                    stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <circle cx="8" cy="19" r="1.3" fill="currentColor" />
                  <circle cx="12" cy="21" r="1.3" fill="currentColor" />
                  <circle cx="16" cy="19" r="1.3" fill="currentColor" />
                  <path d="M8 17l4 3 4-3" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
              <span className="creative-card-feature-text">Data Science</span>
            </div>

            <div className="creative-card-feature-item">
              <div className="creative-card-feature-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="6" cy="6" r="1.5" fill="currentColor" />
                  <circle cx="6" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="6" cy="18" r="1.5" fill="currentColor" />

                  <circle cx="12" cy="9" r="1.5" fill="currentColor" />
                  <circle cx="12" cy="15" r="1.5" fill="currentColor" />

                  <circle cx="18" cy="12" r="1.8" fill="currentColor" />

                  <path d="M7.5 6L10.5 9" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M7.5 12L10.5 9" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M7.5 12L10.5 15" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M7.5 18L10.5 15" stroke="currentColor" strokeWidth="1.2" />

                  <path d="M13.5 9L16.5 12" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M13.5 15L16.5 12" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
              <span className="creative-card-feature-text">Machine Learning</span>
            </div>

            <div className="creative-card-feature-item">
              <div className="creative-card-feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M9.19,6.35C8.41,7.13 7.75,8.05 7.25,9H5V11H7.12C7.05,11.32 7,11.66 7,12C7,12.34 7.05,12.68 7.12,13H5V15H7.25C7.75,15.95 8.41,16.87 9.19,17.65L7.77,19.07L9.88,21.18L11.3,19.77C11.85,20.03 12.41,20.2 13,20.31V23H15V20.31C15.59,20.2 16.15,20.03 16.7,19.77L18.12,21.18L20.23,19.07L18.81,17.65C19.59,16.87 20.25,15.95 20.75,15H23V13H20.88C20.95,12.68 21,12.34 21,12C21,11.66 20.95,11.32 20.88,11H23V9H20.75C20.25,8.05 19.59,7.13 18.81,6.35L20.23,4.93L18.12,2.82L16.7,4.23C16.15,3.97 15.59,3.8 15,3.69V1H13V3.69C12.41,3.8 11.85,3.97 11.3,4.23L9.88,2.82L7.77,4.93L9.19,6.35M13,17A5,5 0 0,1 8,12A5,5 0 0,1 13,7A5,5 0 0,1 18,12A5,5 0 0,1 13,17Z" />
                </svg>
              </div>
              <span className="creative-card-feature-text">Networking</span>
            </div>
          </div>
          <div className="creative-card-actions">
            <button className="creative-card-button">Welcome</button>
          </div>
        </div>
        <div className="creative-card-dots-pattern">
          <svg viewBox="0 0 80 40">
            <circle fill="#000" r={3} cy={10} cx={10} />
            <circle fill="#000" r={3} cy={10} cx={30} />
            <circle fill="#000" r={3} cy={10} cx={50} />
            <circle fill="#000" r={3} cy={10} cx={70} />
            <circle fill="#000" r={3} cy={20} cx={20} />
            <circle fill="#000" r={3} cy={20} cx={40} />
            <circle fill="#000" r={3} cy={20} cx={60} />
            <circle fill="#000" r={3} cy={30} cx={10} />
            <circle fill="#000" r={3} cy={30} cx={30} />
            <circle fill="#000" r={3} cy={30} cx={50} />
            <circle fill="#000" r={3} cy={30} cx={70} />
          </svg>
        </div>
        <div className="creative-card-accent-shape" />
        <div className="creative-card-corner-slice" />
        <div className="creative-card-stamp">
          <span className="creative-card-stamp-text">Approved</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .creative-card {
    --primary: #ff3e00;
    --primary-hover: #ff6d43;
    --secondary: #4d61ff;
    --secondary-hover: #5e70ff;
    --accent: #00e0b0;
    --text: #050505;
    --bg: #ffffff;
    --shadow-color: #000000;
    --pattern-color: #cfcfcf;
    position: relative;
    width: 95%;
    max-width: 400px;
    margin: 0 auto;
    background: var(--bg);
    border: 0.35em solid var(--text);
    border-radius: 0.6em;
    box-shadow:
      0.7em 0.7em 0 var(--shadow-color),
      inset 0 0 0 0.15em rgba(0, 0, 0, 0.05);
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
    font-family: ui-sans-serif, system-ui, sans-serif;
    transform-origin: center;
  }

  .creative-card:hover {
    transform: translate(-0.4em, -0.4em) scale(1.02);
    box-shadow: 1em 1em 0 var(--shadow-color);
  }

  .creative-card:hover .creative-card-pattern-grid,
  .creative-card:hover .creative-card-overlay-dots {
    opacity: 1;
  }

  .creative-card:active {
    transform: translate(0.1em, 0.1em) scale(0.98);
    box-shadow: 0.5em 0.5em 0 var(--shadow-color);
  }

  .creative-card::before {
    content: "";
    position: absolute;
    top: -1em;
    right: -1em;
    width: 4em;
    height: 4em;
    background: var(--accent);
    transform: rotate(45deg);
    z-index: 1;
  }

  .creative-card::after {
    content: "★";
    position: absolute;
    top: 0.4em;
    right: 0.4em;
    color: var(--text);
    font-size: 1.2em;
    font-weight: bold;
    z-index: 2;
  }

  .creative-card-pattern-grid {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
    background-size: 0.5em 0.5em;
    pointer-events: none;
    opacity: 0.5;
    transition: opacity 0.4s ease;
    z-index: 1;
  }

  .creative-card-overlay-dots {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(var(--pattern-color) 1px, transparent 1px);
    background-size: 1em 1em;
    background-position: -0.5em -0.5em;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }

  .creative-card-bold-pattern {
    position: absolute;
    top: 0;
    right: 0;
    width: 6em;
    height: 6em;
    opacity: 0.15;
    pointer-events: none;
    z-index: 1;
  }

  .creative-card-title-area {
    position: relative;
    padding: 1.4em;
    background: var(--primary);
    color: var(--bg);
    font-weight: 800;
    font-size: 1.2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.35em solid var(--text);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    z-index: 2;
    overflow: hidden;
  }

  .creative-card-title-area::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1) 0.5em,
      transparent 0.5em,
      transparent 1em
    );
    pointer-events: none;
    opacity: 0.3;
  }

  .creative-card-tag {
    background: var(--bg);
    color: var(--text);
    font-size: 0.6em;
    font-weight: 800;
    padding: 0.4em 0.8em;
    border: 0.15em solid var(--text);
    border-radius: 0.3em;
    box-shadow: 0.2em 0.2em 0 var(--shadow-color);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transform: rotate(3deg);
    transition: all 0.3s ease;
  }

  .creative-card:hover .creative-card-tag {
    transform: rotate(-2deg) scale(1.1);
    box-shadow: 0.25em 0.25em 0 var(--shadow-color);
  }

  /* === MISSING STYLES BELOW — THIS IS WHAT WAS CAUSING THE ISSUE === */

  .creative-card-body {
    position: relative;
    padding: 1.5em;
    z-index: 2;
  }

  .creative-card-description {
    margin-bottom: 1.5em;
    color: var(--text);
    font-size: 0.95em;
    line-height: 1.4;
    font-weight: 500;
  }

  .creative-card-feature-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    margin-bottom: 1.5em;
  }

  .creative-card-feature-item {
    display: flex;
    align-items: center;
    gap: 0.6em;
    transition: transform 0.2s ease;
  }

  .creative-card-feature-item:hover {
    transform: translateX(0.3em);
  }

  .creative-card-feature-icon {
    width: 1.4em;
    height: 1.4em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--secondary);
    border: 0.12em solid var(--text);
    border-radius: 0.3em;
    box-shadow: 0.2em 0.2em 0 rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
  }

  .creative-card-feature-item:hover .creative-card-feature-icon {
    background: var(--secondary-hover);
    transform: rotate(-5deg);
  }

  .creative-card-feature-icon svg {
    width: 0.9em;
    height: 0.9em;
    fill: var(--bg);
  }

  .creative-card-feature-text {
    font-size: 0.85em;
    font-weight: 600;
    color: var(--text);
  }

  .creative-card-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5em;
    padding-top: 1.2em;
    border-top: 0.15em dashed rgba(0, 0, 0, 0.15);
    position: relative;
  }

  .creative-card-actions::before {
    content: "✂";
    position: absolute;
    top: -0.8em;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
    background: var(--bg);
    padding: 0 0.5em;
    font-size: 1em;
    color: rgba(0, 0, 0, 0.4);
  }

  .creative-card-price {
    position: relative;
    font-size: 1.8em;
    font-weight: 800;
    color: var(--text);
    background: var(--bg);
  }

  .creative-card-price::before {
    content: "";
    position: absolute;
    bottom: 0.15em;
    left: 0;
    width: 100%;
    height: 0.2em;
    background: var(--accent);
    z-index: -1;
    opacity: 0.5;
  }

  .creative-card-price-currency {
    font-size: 0.6em;
    font-weight: 700;
    vertical-align: top;
    margin-right: 0.1em;
  }

  .creative-card-price-period {
    display: block;
    font-size: 0.4em;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
    margin-top: 0.2em;
  }

  .creative-card-button {
    position: relative;
    background: var(--secondary);
    color: var(--bg);
    font-size: 0.9em;
    font-weight: 700;
    padding: 0.7em 1.2em;
    border: 0.2em solid var(--text);
    border-radius: 0.4em;
    box-shadow: 0.3em 0.3em 0 var(--shadow-color);
    cursor: pointer;
    transition: all 0.2s ease;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .creative-card-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    transition: left 0.6s ease;
  }

  .creative-card-button:hover {
    background: var(--secondary-hover);
    transform: translate(-0.1em, -0.1em);
    box-shadow: 0.4em 0.4em 0 var(--shadow-color);
  }

  .creative-card-button:hover::before {
    left: 100%;
  }

  .creative-card-button:active {
    transform: translate(0.1em, 0.1em);
    box-shadow: 0.15em 0.15em 0 var(--shadow-color);
  }

  .creative-card-dots-pattern {
    position: absolute;
    bottom: 2em;
    left: -2em;
    width: 8em;
    height: 4em;
    opacity: 0.3;
    transform: rotate(-10deg);
    pointer-events: none;
    z-index: 1;
  }

  .creative-card-accent-shape {
    position: absolute;
    width: 2.5em;
    height: 2.5em;
    background: var(--secondary);
    border: 0.15em solid var(--text);
    border-radius: 0.3em;
    transform: rotate(45deg);
    bottom: -1.2em;
    right: 2em;
    z-index: 0;
    transition: transform 0.3s ease;
  }

  .creative-card:hover .creative-card-accent-shape {
    transform: rotate(55deg) scale(1.1);
  }

  .creative-card-stamp {
    position: absolute;
    bottom: 1.5em;
    left: 1.5em;
    width: 4em;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.15em solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    transform: rotate(-15deg);
    opacity: 0.2;
    z-index: 1;
  }

  .creative-card-stamp-text {
    font-size: 0.6em;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .creative-card-corner-slice {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 1.5em;
    height: 1.5em;
    background: var(--bg);
    border-right: 0.25em solid var(--text);
    border-top: 0.25em solid var(--text);
    border-radius: 0 0.5em 0 0;
    z-index: 1;
  }

  @media (max-width: 400px) {
    .creative-card-feature-grid {
      grid-template-columns: 1fr; /* Stack features on very small phones */
    }
    .creative-card-title-area {
      font-size: 1rem;
    }
  }

    @media (max-width: 576px) {
    .creative-card {
      border-width: 0.25em;  
      border-radius: 0.5em;
    }
}
`;

export default CreativeCard;