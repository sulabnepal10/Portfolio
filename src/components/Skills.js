import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

import {
  Languages, Container, Github, BrainCircuit, Code2, Database,
  BarChart4, Workflow, Binary, Radio, Network, Webhook,
  Waves, Sigma, GitBranch, Cpu
} from "lucide-react";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p className="text-center max-w-2xl mx-auto mb-12">
                My technical expertise spans Data Science, AI/ML, DevOps, Networking, and Full-Stack Development.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={6000}
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                className="skill-slider"
              >
                <div className="item flex flex-col items-center justify-between p-6 h-64">
                  <Languages
                    size={80}
                    strokeWidth={1.5}
                    style={{
                      background: 'linear-gradient(135deg, #3776AB, #FFD43B)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  />
                  <div className="text-center mt-6">
                    <h5 className="text-lg font-semibold">Python</h5>
                    <small className="text-sm text-gray-400 block mt-2">
                      NumPy • Pandas • SciPy • Matplotlib • Scikit-learn
                    </small>
                  </div>
                </div>

                <div className="item flex flex-col items-center justify-between p-6 h-64">
                  <Container size={80} strokeWidth={1.8} style={{ color: '#2496ED' }} />
                  <div className="text-center mt-6">
                    <h5 className="text-lg font-semibold">Docker & Containerization</h5>
                    <small className="text-sm text-gray-400 block mt-2">
                      Reproducible Environments • Orchestration
                    </small>
                  </div>
                </div>

                <div className="item flex flex-col items-center justify-between p-6 h-64">
                  <Github size={80} strokeWidth={1.8} style={{ color: '#f3efefff' }} />
                  <div className="text-center mt-6">
                    <h5 className="text-lg font-semibold">Git • GitHub • GitLab</h5>
                    <small className="text-sm text-gray-400 block mt-2">
                      Version Control • Collaboration
                    </small>
                  </div>
                </div>

                <div className="item flex flex-col items-center justify-between p-6 h-64">
                  <BrainCircuit size={80} strokeWidth={1.5} style={{ color: '#FF6F00' }} />
                  <div className="text-center mt-6">
                    <h5 className="text-lg font-semibold">Artificial Intelligence & Machine Learning</h5>
                    <small className="text-sm text-gray-400 block mt-2">
                      Models • Training • Deployment
                    </small>
                  </div>
                </div>

                <div className="item flex flex-col items-center justify-between p-6 h-64">
                  <Code2 size={80} strokeWidth={1.8} style={{ color: '#F7DF1E' }} />
                  <div className="text-center mt-6">
                    <h5 className="text-lg font-semibold">JavaScript & Web Technologies</h5>
                    <small className="text-sm text-gray-400 block mt-2">
                      WebSockets • Real-time Apps
                    </small>
                  </div>
                </div>

                <div className="item flex flex-col items-center justify-between p-6 h-64">
                  <Database size={80} strokeWidth={1.8} style={{ color: '#336791' }} />
                  <div className="text-center mt-6">
                    <h5 className="text-lg font-semibold">SQL & Databases</h5>
                    <small className="text-sm text-gray-400 block mt-2">
                      Querying • Schema Design • Optimization
                    </small>
                  </div>
                </div>

                <div className="item flex flex-col items-center justify-between p-6 h-64">
                  <BarChart4 size={80} strokeWidth={1.8} style={{ color: '#00A86B' }} />
                  <div className="text-center mt-6">
                    <h5 className="text-lg font-semibold">Data Science</h5>
                    <small className="text-sm text-gray-400 block mt-2">
                      Collection • Processing • Analysis • Visualization
                    </small>
                  </div>
                </div>

                <div className="item flex flex-col items-center justify-between p-6 h-64">
                  <Workflow size={80} strokeWidth={1.5} style={{ color: '#6366F1' }} />
                  <div className="text-center mt-6">
                    <h5 className="text-lg font-semibold">ETL Workflows</h5>
                    <small className="text-sm text-gray-400 block mt-2">
                      Data Ingestion • Transformation • Pipelines
                    </small>
                  </div>
                </div>

                <div className="item flex flex-col items-center justify-between p-6 h-64">
                  <Binary size={80} strokeWidth={1.8} style={{ color: '#00599C' }} />
                  <div className="text-center mt-6">
                    <h5 className="text-lg font-semibold">C / C++</h5>
                    <small className="text-sm text-gray-400 block mt-2">
                      Systems Programming • Performance
                    </small>
                  </div>
                </div>

                <div className="item flex flex-col items-center justify-between p-6 h-64">
                  <Radio size={80} strokeWidth={1.8} style={{ color: '#C51A4A' }} />
                  <div className="text-center mt-6">
                    <h5 className="text-lg font-semibold">Internet of Things</h5>
                    <small className="text-sm text-gray-400 block mt-2">
                      Wireless Data Systems • Sensors • Protocols
                    </small>
                  </div>
                </div>

                <div className="item flex flex-col items-center justify-between p-6 h-64">
                  <Network size={80} strokeWidth={1.8} style={{ color: '#049FD9' }} />
                  <div className="text-center mt-6">
                    <h5 className="text-lg font-semibold">Networking</h5>
                    <small className="text-sm text-gray-400 block mt-2">
                      LAN • WAN • Wireless • IoT Networks
                    </small>
                  </div>
                </div>

                <div className="item flex flex-col items-center justify-between p-6 h-64">
                  <Waves size={80} strokeWidth={1.8} style={{ color: '#7C3AED' }} />
                  <div className="text-center mt-6">
                    <h5 className="text-lg font-semibold">Signal Processing</h5>
                    <small className="text-sm text-gray-400 block mt-2">
                      Filtering • Fourier • Audio/Wireless Signals
                    </small>
                  </div>
                </div>

                <div className="item flex flex-col items-center justify-between p-6 h-64">
                  <Sigma size={80} strokeWidth={1.8} style={{ color: '#10B981' }} />
                  <div className="text-center mt-6">
                    <h5 className="text-lg font-semibold">Mathematics & Statistics</h5>
                    <small className="text-sm text-gray-400 block mt-2">
                      Probability • Linear Algebra • Discrete Math
                    </small>
                  </div>
                </div>

                <div className="item flex flex-col items-center justify-between p-6 h-64">
                  <Cpu size={80} strokeWidth={1.8} style={{ color: '#E535AB' }} />
                  <div className="text-center mt-6">
                    <h5 className="text-lg font-semibold">Data Structures & Algorithms</h5>
                    <small className="text-sm text-gray-400 block mt-2">
                      Complexity • Optimization • Problem Solving
                    </small>
                  </div>
                </div>

                <div className="item flex flex-col items-center justify-between p-6 h-64">
                  <GitBranch size={80} strokeWidth={1.8} style={{ color: '#8B5CF6' }} />
                  <div className="text-center mt-6">
                    <h5 className="text-lg font-semibold">Information Management</h5>
                    <small className="text-sm text-gray-400 block mt-2">
                      Data Updating • Organization • Integrity
                    </small>
                  </div>
                </div>

              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background decoration" />
    </section>
  );
};