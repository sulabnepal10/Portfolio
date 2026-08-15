export function Banner() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Electronics &amp; Comm. Engineer — Full Stack + AI</span>

          <h1 className="hero-title">
            Engineered for signal,
            <br />
            <em>built for people.</em>
          </h1>

          <p className="hero-sub">
            I trace problems the way I was trained to trace circuits: find the source, follow
            it end to end, close the loop. That instinct has shipped LLM-backed platforms,
            RF-controlled hardware, and a reporting app that gave students a safe way to
            speak up.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn hero-btn--primary">View the work</a>
            <a href="#connect" className="hero-btn hero-btn--ghost">Get in touch</a>
          </div>
        </div>

        <div className="hero-diagram" aria-hidden="true">
          <svg viewBox="0 0 640 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="trace trace-1" pathLength="1" d="M96,40 V120 H320 V180" stroke="var(--copper)" strokeWidth="2" />
            <path className="trace trace-2" pathLength="1" d="M320,40 V180" stroke="var(--signal)" strokeWidth="2" />
            <path className="trace trace-3" pathLength="1" d="M544,40 V120 H320 V180" stroke="var(--copper)" strokeWidth="2" />
            <path className="trace trace-4" pathLength="1" d="M320,180 V280" stroke="var(--signal)" strokeWidth="2" />

            <g className="node node-1">
              <rect x="66" y="16" width="60" height="26" rx="4" stroke="var(--copper)" strokeWidth="1.5" fill="var(--panel)" />
              <text x="96" y="33" textAnchor="middle" className="node-label">HW</text>
            </g>
            <g className="node node-2">
              <rect x="290" y="16" width="60" height="26" rx="4" stroke="var(--signal)" strokeWidth="1.5" fill="var(--panel)" />
              <text x="320" y="33" textAnchor="middle" className="node-label">SW</text>
            </g>
            <g className="node node-3">
              <rect x="514" y="16" width="60" height="26" rx="4" stroke="var(--copper)" strokeWidth="1.5" fill="var(--panel)" />
              <text x="544" y="33" textAnchor="middle" className="node-label">PEOPLE</text>
            </g>

            <g className="node node-out">
              <circle cx="320" cy="180" r="5" fill="var(--paper)" />
              <text x="320" y="210" textAnchor="middle" className="node-label node-label--out">SULAB NEPAL</text>
            </g>
          </svg>
        </div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          {Array(2).fill(0).map((_, i) => (
            <span key={i}>
              REACT&nbsp;&middot;&nbsp;NODE.JS&nbsp;&middot;&nbsp;PYTHON&nbsp;&middot;&nbsp;LLM PIPELINES&nbsp;&middot;&nbsp;IOT&nbsp;&middot;&nbsp;RF SYSTEMS&nbsp;&middot;&nbsp;SIGNAL PROCESSING&nbsp;&middot;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
