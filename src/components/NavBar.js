import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

const links = [
  { to: "#home", label: "Home" },
  { to: "#work", label: "Work" },
  { to: "#projects", label: "Projects" },
  { to: "#education", label: "Education" },
  { to: "#community", label: "Community" },
  { to: "#connect", label: "Contact" },
];

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false);
  }

  return (
    <Router>
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={setExpanded}
        className={scrolled ? "sn-nav scrolled" : "sn-nav"}
      >
        <Container className="sn-nav-inner">
          <HashLink to="#home" className="sn-brand" onClick={() => onUpdateActiveLink('home')}>
            <span className="sn-brand-mark">SN</span>
            <span className="sn-brand-text">
              Sulab Nepal
              <small>Full Stack &amp; Systems Engineer</small>
            </span>
          </HashLink>

          <Navbar.Toggle aria-controls="main-nav" />

          <Navbar.Collapse id="main-nav">
            <Nav className="sn-nav-links">
              {links.map((link, i) => (
                <HashLink
                  key={link.to}
                  to={link.to}
                  className={activeLink === link.label.toLowerCase() ? "sn-nav-link active" : "sn-nav-link"}
                  onClick={() => onUpdateActiveLink(link.label.toLowerCase())}
                >
                  <span className="sn-nav-index">{String(i + 1).padStart(2, '0')}</span>
                  {link.label}
                </HashLink>
              ))}
            </Nav>

            <div className="social-icon sn-nav-social">
              <a href="https://www.linkedin.com/in/sulab-nepal-470ab0239" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.instagram.com/nepalsulab/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" /></a>
              <a href="https://www.facebook.com/sulab.nepal.9?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Facebook" /></a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
