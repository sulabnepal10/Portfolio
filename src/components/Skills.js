import {
  Languages, Container as ContainerIcon, Github, BrainCircuit, Code2, Database,
  BarChart4, Workflow, Binary, Radio, Network, Waves, Sigma, Cpu
} from "lucide-react";
import { Container } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

const skills = [
  { icon: Languages, color: '#FFD43B', name: 'Python', detail: 'NumPy · Pandas · SciPy · Scikit-learn' },
  { icon: Code2, color: '#F7DF1E', name: 'JavaScript & Web', detail: 'WebSockets · Real-time apps' },
  { icon: Database, color: '#6FD8C8', name: 'SQL & Databases', detail: 'Querying · Schema design · Optimization' },
  { icon: ContainerIcon, color: '#2496ED', name: 'Docker', detail: 'Reproducible environments · Orchestration' },
  { icon: BrainCircuit, color: '#FF8A3D', name: 'AI / Machine Learning', detail: 'Models · Training · Deployment' },
  { icon: Workflow, color: '#8C9EFF', name: 'ETL Workflows', detail: 'Ingestion · Transformation · Pipelines' },
  { icon: BarChart4, color: '#5FE0A0', name: 'Data Science', detail: 'Collection · Analysis · Visualization' },
  { icon: Radio, color: '#E2725B', name: 'Internet of Things', detail: 'Sensors · Wireless protocols' },
  { icon: Network, color: '#5FB8E0', name: 'Networking', detail: 'LAN · WAN · Wireless · IoT networks' },
  { icon: Waves, color: '#B18CFF', name: 'Signal Processing', detail: 'Filtering · Fourier · RF signals' },
  { icon: Binary, color: '#8FA8C9', name: 'C / C++', detail: 'Systems programming · Performance' },
  { icon: Sigma, color: '#5FE0A0', name: 'Math & Statistics', detail: 'Probability · Linear algebra' },
  { icon: Cpu, color: '#D9A25C', name: 'Data Structures & Algorithms', detail: 'Complexity · Optimization' },
  { icon: Github, color: '#E8E8E8', name: 'Git · GitHub · GitLab', detail: 'Version control · Collaboration' },
];

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <span className="sheet-tag">SHEET 03 / COMPONENT LIST</span>
      <Container className="skill-container">
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <div className="sheet-head">
                <span className="eyebrow">Toolkit</span>
                <h2>Parts on the bench</h2>
                <p>Spanning data science, AI/ML, DevOps, networking, and full-stack development.</p>
              </div>

              <div className="skill-grid">
                {skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <div className="skill-tile" key={i}>
                      <Icon size={28} strokeWidth={1.6} style={{ color: skill.color }} />
                      <h5>{skill.name}</h5>
                      <span>{skill.detail}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
