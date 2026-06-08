import React from 'react';
import styled from 'styled-components';

const InfoCard = () => {
  return (
    <StyledWrapper >
      <div className="nhost-card">
        <div className="card-glow" />
        <div className="card-grid" />
        <div className="card-header">
          <div className="brand-wrapper">
            <div className="logo-container">
              <svg xmlns="http://www.w3.org/2000/svg"
                aria-label="Arch Linux" role="img"
                viewBox="0 0 512 512"><rect
                  width="512" height="512"
                  rx="15%"
                  fill="#ffffff" /><path d="M256 72c-14 35-23 57-39 91 10 11 22 23 41 36-21-8-35-17-45-26-21 43-53 103-117 220 50-30 90-48 127-55-2-7-3-14-3-22v-1c1-33 18-58 38-56 20 1 36 29 35 62l-2 17c36 7 75 26 125 54l-27-50c-13-10-27-23-55-38 19 5 33 11 44 17-86-159-93-180-122-250z" fill="#1793d1" /></svg>
            </div>
            <span className="brand-text">neofetch</span>
          </div>
          <div className="action-buttons">
            <button className="btn-icon" aria-label="Star this repo">
              <svg className="icon star" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 .25l2.472 5.008 5.528.803-4 3.899.944 5.508L8 12.625l-4.944 2.843.944-5.508-4-3.9 5.528-.802L8 .25z" />
              </svg>
            </button>
            <a
              href="https://github.com/sulabnepal10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
            >
              <button className="btn-icon" aria-label="View on GitHub">
                <svg className="icon github" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </button>
            </a>

          </div>
        </div>
        <div className="card-body">
          <div className="terminal">
            <div className="terminal-header">
              <span className="prompt">sulab@inspiron</span>
              <span className="cursor" />
            </div>

            <pre className="neofetch">
              <span className="key">OS</span>: EndeavourOS Linux x86_64{"\n"}
              <span className="key">Kernel</span>: 6.17.9-arch1-1{"\n"}
              <span className="key">Packages</span>: 1200 (pacman){"\n"}
              <span className="key">Shell</span>: fish 4.2.1{"\n"}
              <span className="key">DE</span>: Hyprland{"\n"}
              <span className="key">Theme</span>: Arc-Dark [GTK2/3]{"\n"}
              <span className="key">Icons</span>: Qogir-dark [GTK2/3]{"\n"}
              <span className="key">Terminal</span>: kitty{"\n"}
              <span className="key">CPU</span>: Intel i5-8265U (8) @ 3.90GHz{"\n"}
              <span className="key">GPU</span>: Intel UHD Graphics 620
            </pre>
          </div>

        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  @keyframes grid-move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 30px 30px;
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4px);
    }
  }

  /* Component Styles */
  .nhost-card {
    --bg-color: #0c111d;
    --card-border: #1f2937;
    --text-primary: #f3f4f6;
    --text-secondary: #9ca3af;
    --accent-color: #0052cc;
    --accent-glow: rgba(0, 82, 204, 0.35);
    --brand-gradient: linear-gradient(135deg, #0052cc, #2684ff);

    font-family: "Inter", system-ui, sans-serif;
    width: 100%;
    max-width: 400px;
    background-color: var(--bg-color);
    border: 1px solid var(--card-border);
    border-radius: 16px;
    padding: 24px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.2);
    transition:
      transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.3s ease,
      border-color 0.3s ease;
    z-index: 1;
  }

  .nhost-card:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow:
      0 20px 40px -5px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(38, 132, 255, 0.3);
    border-color: rgba(38, 132, 255, 0.5);
  }

  .key {
  color: #ff3e00;
  font-weight: 600;
}

  .card-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.05) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 30px 30px;
    mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
    pointer-events: none;
    z-index: -2;
    transition: opacity 0.5s ease;
    opacity: 0.5;
  }

  .nhost-card:hover .card-grid {
    animation: grid-move 20s linear infinite;
    opacity: 0.8;
  }

  .card-glow {
    position: absolute;
    top: -50px;
    right: -50px;
    width: 150px;
    height: 150px;
    background: radial-gradient(
      circle,
      var(--accent-glow) 0%,
      rgba(0, 0, 0, 0) 70%
    );
    filter: blur(40px);
    z-index: -1;
    transition: all 0.5s ease;
  }

  .nhost-card:hover .card-glow {
    transform: scale(1.5);
    background: radial-gradient(
      circle,
      rgba(38, 132, 255, 0.4) 0%,
      rgba(0, 0, 0, 0) 70%
    );
  }

  /* Header Section */
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .brand-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .logo-container {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: background 0.3s ease;
  }

  .nhost-logo {
    width: 24px;
    height: 24px;
    color: #fff;
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.3));
  }

  .brand-text {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: var(--text-primary);
  }

  /* Actions */
  .action-buttons {
    display: flex;
    gap: 8px;
  }

  .btn-icon {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    color: var(--text-secondary);
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-icon:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    transform: translateY(-2px);
  }

  .icon {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }

  .icon.star {
    transition: color 0.2s;
  }

  .btn-icon:hover .icon.star {
    color: #fbbf24;
    filter: drop-shadow(0 0 6px rgba(251, 191, 36, 0.5));
  }

  /* Body Section */
  .card-body {
    position: relative;
  }

  .repo-title {
    font-family: "JetBrains Mono", monospace;
    font-size: 24px;
    font-weight: 500;
    color: var(--text-primary);
    margin: 0 0 12px 0;
    display: flex;
    align-items: center;
  }

  .blinking-cursor {
    display: inline-block;
    width: 10px;
    height: 3px;
    background-color: var(--accent-color);
    margin-left: 6px;
    animation: blink 1s step-end infinite;
    box-shadow: 0 0 8px var(--accent-color);
  }

  .repo-description {
    font-size: 15px;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0 0 24px 0;
  }

  /* Tags */
  .tag-wrapper {
    display: flex;
    gap: 10px;
  }

  .badge {
    font-family: "JetBrains Mono", monospace;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 6px;
    transition: all 0.3s ease;
    cursor: default;
    position: relative;
    overflow: hidden;
  }

  /* JS Tag */
  .badge-js {
    background-color: rgba(247, 223, 30, 0.1);
    color: #f7df1e;
    border: 1px solid rgba(247, 223, 30, 0.2);
  }

  .badge-js:hover {
    background-color: rgba(247, 223, 30, 0.2);
    box-shadow: 0 0 12px rgba(247, 223, 30, 0.2);
    transform: translateY(-1px);
  }

  /* TS Tag */
  .badge-ts {
    background-color: rgba(49, 120, 198, 0.1);
    color: #3178c6;
    border: 1px solid rgba(49, 120, 198, 0.2);
  }

  /* Terminal Section */
.terminal {
  font-family: "JetBrains Mono", monospace;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 16px;
  overflow-x: auto;
}

.terminal-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.prompt {
  color: #4ade80; /* terminal green */
  font-weight: 600;
  font-size: 14px;
}

.cursor {
  width: 8px;
  height: 14px;
  background: #4ade80;
  margin-left: 6px;
  animation: blink 1s steps(2) infinite;
}

.neofetch {
  font-size: 13px;
  line-height: 1.55;
  color: #cbd5e1;
  white-space: pre;
}

  @media (max-width: 576px) {
    .nhost-card {
      padding: 16px;          
    }
    .neofetch {
      font-size: 12px;      
    }
    .brand-text {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
  .nhost-card {
    padding: 12px;
  }
  .neofetch {
    font-size: 11px;
  }
}

  .badge-ts:hover {
    background-color: rgba(49, 120, 198, 0.2);
    box-shadow: 0 0 12px rgba(49, 120, 198, 0.3);
    transform: translateY(-1px);
  }`;



export default InfoCard;
