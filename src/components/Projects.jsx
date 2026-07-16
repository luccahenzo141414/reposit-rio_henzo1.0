const projects = [
  {
    title: "API de Burgers",
    description: "Em Andamento...",
    stack: "Node.js, Express, PostgreSQL, Sequelize",
    demo: "#", // depois você coloca o link real
    code: "#", // depois você coloca o link do GitHub
  },
  {
    title: "Sistema de cadastro de clientes do Super Mario",
    description:
      "Aplicação web simples para cadastro e listagem de clientes.",
    stack: "HTML,CSS,JS",
    demo: "#",
    code: "https://github.com/luccahenzo141414/Super-Mario",
  },
];

const Projects = () => (
  <section id="projects">
    <h2>Projetos</h2>
    <div className="projects-grid">
      {projects.map((project) => (
        <article key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>
            <strong>Stack:</strong> {project.stack}
          </p>
          <a href={project.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
          {" | "}
          <a href={project.code} target="_blank" rel="noreferrer">
            Código
          </a>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;