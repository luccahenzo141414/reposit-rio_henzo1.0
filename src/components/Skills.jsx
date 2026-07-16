import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaRobot,
} from "react-icons/fa";

const skillsData = [
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <FaJs />, label: "JavaScript" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <FaDatabase />, label: "PostgreSQL / MongoDB" },
  { icon: <FaGitAlt />, label: "Git & GitHub" },
  { icon: <FaDocker />, label: "Docker (básico)" },
  { icon: <FaRobot />, label: "IA & Automação" },
];

const Skills = () => (
  <section id="skills" className="skills">
    <h2>Skills</h2>

    <div className="skills-grid">
      {skillsData.map((skill) => (
        <div className="skill-card" key={skill.label}>
          <span className="skill-icon">{skill.icon}</span>
          <span className="skill-label">{skill.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;