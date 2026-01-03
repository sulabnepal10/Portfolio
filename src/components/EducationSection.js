import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import School from "../assets/img/bidur.png";
import College from "../assets/img/vsn.png";
import university from "../assets/img/TU.png";
import colorSharp from "../assets/img/color-sharp.png";
import './EducationSection.css';

export const EducationSection = () => {
    const education = [
        {
            title: "High School",
            institution: "Bidur English Boarding School, Jhapa",
            duration: "Completed 2017",
            icon: School,
            side: "left"
        },
        {
            title: "+2 Higher Secondary",
            institution: "VS Niketan College, Kathmandu",
            duration: "2017 – 2019",
            icon: College,
            side: "right"
        },
        {
            title: "Bachelor's in Electronics Engineering",
            institution: "IOE Purwanchal Campus, Dharan",
            duration: "2020 – 2024",
            icon: university,
            side: "left"
        },
    ];

    return (
        <section className="education" id="education">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Education Journey</h2>
                                    <p className="edu-subtitle">My path through learning and growth.</p>
                                </div>
                            )}
                        </TrackVisibility>

                        <div className="edu-timeline-container">
                            {education.map((item, index) => (
                                <TrackVisibility key={index} partialVisibility>
                                    {({ isVisible }) => (
                                        <div className={`edu-timeline-item edu-${item.side} ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
                                            <div className="edu-timeline-dot"></div>
                                            <div className="edu-timeline-content">
                                                <div className="edu-timeline-icon">
                                                    <img src={item.icon} alt={item.title} />
                                                </div>
                                                <h3>{item.title}</h3>
                                                <h5>{item.institution}</h5>
                                                <span className="edu-duration">{item.duration}</span>
                                            </div>
                                        </div>
                                    )}
                                </TrackVisibility>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="bg" />
        </section>
    );
};