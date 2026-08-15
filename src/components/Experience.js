import { Container, Row, Col } from "react-bootstrap";
import clairifyLogo from "../assets/img/clairify.png";
import ndsLogo from "../assets/img/ndslogo.png";
import ercLogo from "../assets/img/ERC.png";
import TrackVisibility from 'react-on-screen';

const roles = [
    {
        title: "Full Stack Developer",
        org: "Clairify.ai",
        place: "Remote · U.S. based",
        date: "June 2025 – Present",
        logo: clairifyLogo,
        points: [
            "Designed and maintained data ingestion and transformation pipelines powering AI-driven summarization and insight-generation workflows.",
            "Built scalable RESTful APIs and optimized request flows to serve LLM outputs efficiently, sustaining sub-300ms latency under peak usage.",
            "Integrated model outputs into real-time analytical interfaces, improving data delivery and rendering clarity for KPIs and insights.",
        ],
    },
    {
        title: "Full Stack Developer & QA Support",
        org: "Nepal Digital Systems",
        place: "Lalitpur, Nepal",
        date: "February 2023 – May 2025",
        logo: ndsLogo,
        points: [
            "Worked with JavaScript, React, and Node.js to deliver seamless and performant user experiences.",
            "Collaborated with cross-functional teams on user acceptance testing, bug tracking, and feature delivery.",
        ],
    },
    {
        title: "Intern & Lab Assistant",
        org: "IOE Purwanchal Campus",
        place: "Dharan, Nepal",
        date: "2022 – 2023",
        logo: ercLogo,
        points: [
            "Assisted faculty in lab sessions, guiding students on digital systems and programming concepts.",
            "Supported grading, documentation, and testing of departmental lab systems.",
            "Tutored junior students in Excel, SQL, and programming fundamentals.",
        ],
    },
];

export const Experience = () => {
    return (
        <section className="work" id="work">
            <span className="sheet-tag">SHEET 02 / WORK LOG</span>
            <Container>
                <TrackVisibility partialVisibility>
                    {({ isVisible }) => (
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <div className="sheet-head align-left">
                                <span className="eyebrow">Work</span>
                                <h2>Where the hours actually went.</h2>
                                <p>From LLM-backed platforms to full-stack delivery to teaching juniors the fundamentals — the roles that shaped how I build.</p>
                            </div>

                            <Row>
                                <Col lg={11} xl={10}>
                                    <div className="work-list">
                                        {roles.map((role, index) => (
                                            <article className="work-row" key={index}>
                                                <div className="work-row-mark">
                                                    <span className="work-row-index">{String(index + 1).padStart(2, '0')}</span>
                                                    <div className="work-row-logo">
                                                        <img src={role.logo} alt={role.org} />
                                                    </div>
                                                </div>
                                                <div className="work-row-body">
                                                    <div className="work-row-heading">
                                                        <h3>{role.title}</h3>
                                                        <span className="work-row-date">{role.date}</span>
                                                    </div>
                                                    <p className="work-row-org">{role.org} <span>· {role.place}</span></p>
                                                    <ul>
                                                        {role.points.map((point, i) => (
                                                            <li key={i}>{point}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )}
                </TrackVisibility>
            </Container>
        </section>
    );
};
