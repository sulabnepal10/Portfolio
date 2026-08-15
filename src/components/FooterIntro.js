import React from 'react';
import photo from "../assets/img/photo.jpg";

const TICKS = Array.from({ length: 24 });

const FooterIntro = () => {
  return (
    <div className="footer-portrait">
      <div className="footer-portrait-dial" aria-hidden="true">
        {TICKS.map((_, i) => (
          <span
            key={i}
            className="footer-portrait-tick"
            style={{ transform: `rotate(${(360 / TICKS.length) * i}deg)` }}
          />
        ))}
      </div>
      <div className="footer-portrait-frame">
        <img src={photo} alt="Sulab Nepal" />
      </div>
    </div>
  );
}

export default FooterIntro;
