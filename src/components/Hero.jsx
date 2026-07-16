import henzoPhoto from "../../assets/henzo2.jpg";

const Hero = () => (
  <section id="hero" className="hero">
    <div className="hero-inner">
      <div className="hero-text">
        <h1>Henzo Lucca</h1>
        <p>Desenvolvedor Front-end Jr | Aspirante a Full Stack</p>
        <p>
          Construo aplicações web para pequenos negócios e projetos pessoais,
          focando em interfaces bem feitas e integração com back-end e IA.
        </p>
        <button
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Ver meus projetos
        </button>
      </div>

      <div className="hero-photo">
        <img src={henzoPhoto} alt="Foto de Henzo Lucca" />
      </div>
    </div>
  </section>
);

export default Hero;