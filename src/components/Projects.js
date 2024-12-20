import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { EducationCard } from "./EducationCard";
import { WorkExperienceCard } from "./WorkExperienceCard";
import ndsLogo from "../assets/img/ndslogo.png"; 
import projImg1 from "../assets/img/cyber.jpg";
import projImg2 from "../assets/img/nds.jpg";
import projImg3 from "../assets/img/todo.jpg";
import projImg4 from "../assets/img/chat.jpg";
import projImg5 from "../assets/img/flower.jpg";
import projImg6 from "../assets/img/streamlit.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import School from "../assets/img/school.png"
import College from "../assets/img/college.png"
import university from "../assets/img/university.png"
export const Projects = () => {

  const projects = [
    {
      title: "Cyberbullying Awareness",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://cyberbullying-awareness.netlify.app",
    },
    {
      title: "Nepal Digital Systems Pvt. Ltd",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://nepaldigisys.com/"
    },
    {
      title: "Todo-list",
      description: "Design & Development",
      imgUrl: projImg3,
      link:"https://sulab-ko-list.netlify.app/",
    },
    {
      title: "Chat Application",
      description: "Design & Development",
      imgUrl: projImg4,
      link:"https://jade-sfogliatella-496afd.netlify.app/"
    },
    {
      title: "Flower Generation",
      description: "Design & Development",
      imgUrl: projImg5,
      link:"https://flower-list-app.netlify.app/"
    },
    {
      title: "AI generated Image Detection",
      description: "Design & Development",
      imgUrl: projImg6,
      isImageOnly: true,
    },
  ];
  const education = [
    {
      title: "High School",
      institution: "Bidur English Boarding School Jhapa",
      duration: "January 2017",
      icon: <img src={School} alt="High School Icon" className="custom-icon" />,
    },
    {
      title: "Higher Secondary",
      institution: "VS Niketan School  Kathmandu",
      duration: "April 2017 - Nov 2019",
      icon:<img src={College} alt="High School Icon" className="custom-icon" />,
    },
    {
      title: "University",
      institution: "IOE Purwanchal Campus",
      duration: "May 2024",
      icon:<img src={university} alt="High School Icon" className="custom-icon" />,
    },
  ];
  const workExperience = [
    {
      role: "Full Stack Web Developer",
      company: "Nepal Digital Systems",
      duration: "2023 - Present",
      logo: ndsLogo,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                {/* <h2 className="mb-11">Projects</h2> */}
          
                <Tab.Container id=" projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center " id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Work History</Nav.Link>
                    </Nav.Item>
                   
                  </Nav>

                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
        {education.map((edu, index) => (
          <Col key={index} md={4} sm={6} xs={12}>
            <EducationCard {...edu} />
          </Col>
        ))}
      </Row>
      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                          {workExperience.map((work, index) => (
                            <Col key={index} md={4} sm={6} xs={12}>
                              <WorkExperienceCard {...work} />
                            </Col>
                          ))}
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
