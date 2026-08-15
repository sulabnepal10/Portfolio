import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import FooterIntro from "./FooterIntro";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={5} className="d-flex justify-content-center justify-content-md-start mb-4 mb-md-0">
            <FooterIntro />
          </Col>

          <Col xs={12} md={7} className="footer-sign">
            <p className="footer-line">Sulab Nepal — designed and built end to end, one section at a time.</p>
            <div className="footer-bottom-row">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/sulab-nepal-470ab0239" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/nepalsulab/" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/sulab.nepal.9?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon3} alt="Facebook" />
                </a>
              </div>
              <span className="footer-copyright">© {year} · Kathmandu, Nepal</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};