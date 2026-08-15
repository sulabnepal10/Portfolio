import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import School from "../assets/img/bidur.png";
import College from "../assets/img/vsn.png";
import university from "../assets/img/TU.png";
import './EducationSection.css';

export const EducationSection = () => {
    const education = [
        {
            title: "High School",
            institution: "Bidur English Boarding School, Jhapa",
            duration: "Completed 2017",
            icon: School,
        },
        {
            title: "+2 Higher Secondary",
            institution: "VS Niketan College, Kathmandu",
            duration: "2017 – 2019",
            icon: College,
        },
        {
            title: "Bachelor's in Electronics Engineering",
            institution: "IOE Purwanchal Campus, Dharan",
            duration: "2020 – 2024",
            icon: university,
        },
    ];

    return (
        <section className="education" id="education">
            <span className="sheet-tag">SHEET 05 / RECORD</span>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility partialVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <div className="sheet-head align-left">
                                        <span className="eyebrow">Education</span>
                                        <h2>How I got here</h2>
                                        <p>Electronics and Communication Engineering, with a few detours into software along the way.</p>
                                    </div>
                                </div>
                            )}
                        </TrackVisibility>

                        <Row>
                            <Col lg={9} xl={8}>
                                <div className="edu-list">
                                    {education.map((item, index) => (
                                        <div className="edu-row" key={index}>
                                            <div className="edu-row-mark">
                                                <span className="edu-row-index">{String(index + 1).padStart(2, '0')}</span>
                                                <div className="edu-row-icon">
                                                    <img src={item.icon} alt={item.title} />
                                                </div>
                                            </div>
                                            <div className="edu-row-body">
                                                <div className="edu-row-heading">
                                                    <h3>{item.title}</h3>
                                                    <span className="edu-row-date">{item.duration}</span>
                                                </div>
                                                <p className="edu-row-institution">{item.institution}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
