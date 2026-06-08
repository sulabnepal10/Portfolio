import { Container, Row, Col } from "react-bootstrap";
import { WorkExperienceCard } from "./WorkExperienceCard";
import ndsLogo from "../assets/img/ndslogo.png";
import TrackVisibility from 'react-on-screen';

export const ExperienceSection = () => {
    const experiences = [
        {
            role: "Full Stack Web Developer",
            company: "Nepal Digital Systems Pvt. Ltd",
            duration: "2023 – Present",
            logo: ndsLogo,
            description: "Building scalable web applications using React, Node.js, and modern tools."
        },
    ];

    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Digital Craft</h2>
                                    <p>Where design thinking meets front-end engineering.</p>
                                    <Row className="justify-content-center">
                                        {experiences.map((exp, index) => (
                                            <Col key={index} md={8} lg={6}>
                                                <WorkExperienceCard {...exp} />
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};