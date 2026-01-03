import { Container, Row, Col } from "react-bootstrap";
import { Timeline, TimelineItem } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import clairifyLogo from "../assets/img/clairify.png";
import ndsLogo from "../assets/img/ndslogo.png";
import ercLogo from "../assets/img/ERC.png";
import {
    Code2, BrainCircuit, Briefcase, Globe, Users, GraduationCap
} from "lucide-react";

export const Experience = () => {
    return (
        <section className="experience" id="experience">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10} md={12}>
                        <div className="experience-bx wow zoomIn">
                            <h2>Professional Experience</h2>
                            <p>From AI-powered platforms to full-stack development and teaching — here's my journey so far.</p>

                            <div className="timeline-container">
                                <div className="timeline-item">
                                    <div className="timeline-icon">
                                        <img
                                            src={clairifyLogo}
                                            alt="Clairify.ai"
                                            className="timeline-logo"
                                        />
                                    </div>
                                    <div className="timeline-content">
                                        <h4>Full Stack Developer</h4>
                                        <h5>Clairify.ai <span>• Remote (U.S. based)</span></h5>
                                        <p className="date">June 2025 – Present</p>
                                        <ul>
                                            <li> Designed and maintained data ingestion and transformation pipelines powering AI-driven summarization and insightgeneration workflows.</li>
                                            <li>Built scalable RESTful APIs and optimized request flows to serve LLM outputs efficiently, sustaining sub-300ms latency
                                                under peak usage.</li>
                                            <li>Integrated model outputs into real-time analytical interfaces by improving data delivery and rendering, enhancing
                                                clarity of KPIs and insights</li>


                                        </ul>
                                    </div>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-icon">
                                        <img
                                            src={ndsLogo}
                                            alt="Nepal Digital System"
                                            className="timeline-logo"
                                        />
                                    </div>
                                    <div className="timeline-content">
                                        <h4>Full Stack Developer & QA Support</h4>
                                        <h5>Nepal Digital System <span>• Lalitpur, Nepal</span></h5>
                                        <p className="date">February 2023 – May 2025</p>
                                        <ul>
                                            <li>Worked with JavaScript, React, and Node.js to deliver seamless and performant user experiences.</li>
                                            <li>Collaborated with cross-functional teams for user acceptance testing, bug tracking, and feature delivery.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-icon">
                                        <img
                                            src={ercLogo}
                                            alt="IOE Purwanchal Campus"
                                            className="timeline-logo"
                                        />
                                    </div>

                                    <div className="timeline-content">
                                        <h4>Intern & Lab Assistant</h4>
                                        <h5>IOE Purwanchal Campus <span>• Nepal</span></h5>
                                        <p className="date">2022 – 2023 (Internship Period)</p>
                                        <ul>
                                            <li>Assisted faculty in lab sessions, guiding students on digital systems and programming concepts.</li>
                                            <li>Supported grading, documentation, and testing of departmental lab systems.</li>
                                            <li>Provided tutoring in Excel, SQL, and programming fundamentals to junior students.</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <img className="background-image-right" src="https://image.slidesdocs.com/responsive-images/background/light-effect-technology-purple-blue-modern-business-powerpoint-background_2e844d929f__960_540.jpg" alt="" />
        </section>
    );
};