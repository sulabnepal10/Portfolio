import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";

import projImg1 from "../assets/img/cyber.jpg";
import projImg2 from "../assets/img/nds.jpg";
import projImg3 from "../assets/img/todo.jpg";
import projImg4 from "../assets/img/chat.jpg";
import projImg5 from "../assets/img/flower.jpg";
import projImg6 from "../assets/img/streamlit.png";
import projImg7 from "../assets/img/robotic-vehicle-thumbnail.jpg";
import videoDemo from "../assets/img/video.mp4";

export const ProjectsSection = () => {
    const projects = [
        {
            title: "Nepal Digital Systems",
            description: "Company Website",
            imgUrl: projImg2,
            link: "https://nepaldigisys.com/",
            badges: ["React", "Bootstrap", "Responsive"],
        },
        {
            title: "Cyberbullying Awareness",
            description: "Educational Awareness Platform",
            imgUrl: projImg1,
            link: "https://cyberbullying-awareness.netlify.app",
            badges: ["React", "Education", "UI/UX"],
        },
        {
            title: "Startup Founder Extractor",
            description: "Crawl4AI and SerpAPI",
            imgUrl: projImg3,
            link: "https://founders-extractor-automation.streamlit.app/",
            badges: ["Python", "Streamlit", "Web Scraping"],
        },
        {
            title: "Real-time Chat App",
            description: "Socket.io + React",
            imgUrl: projImg4,
            link: "https://webchat-4-r0c2.onrender.com/",
            badges: ["React", "Socket.io", "Node.js"],
        },
        {
            title: "AI-Powered Health Assistant",
            description: "AI health informatics",
            imgUrl: projImg5,
            link: "https://ai-health-assistant-henna.vercel.app/",
            badges: ["Next.js", "AI", "Health"],
        },
        {
            title: "AI Image Detection Demo",
            description: "Streamlit and ML Model",
            imgUrl: projImg6,
            demoImage: projImg6,
            badges: ["Streamlit", "AI", "Python"],
        },
        {
            title: "RF Controlled Robotic Vehicle",
            description: "Metal detecting system embedded",
            imgUrl: projImg7,
            videoUrl: videoDemo,
            badges: ["Embedded Systems", "Arduino", "RF Communication", "Hardware"],
        },
    ];

    return (
        <section className="projects-section" id="projects">
            <Container>
                <TrackVisibility>
                    {({ isVisible }) => (
                        <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                            <h2 className="section-title">Projects</h2>
                            <p className="section-subtitle">
                                Here are some of my favorite projects I've built and deployed.
                            </p>

                            <Row className="g-4 mt-4 justify-content-center">
                                {projects.map((project, index) => (
                                    <Col key={index} xs={12} md={6} lg={4} className="d-flex justify-content-center">
                                        <ProjectCard {...project} />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    )}
                </TrackVisibility>
            </Container>
        </section>
    );
};