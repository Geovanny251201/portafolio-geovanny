import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import pokedexCapture from "../assets/img/poke.png";
import listaTareas from "../assets/img/listaTareas .png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Pokedex",
      description: "https://geovanny251201.github.io/pokemonProyect/",
      imgUrl:pokedexCapture,
    },
    {
      title: "Lista de Tareas",
      description: "https://geovanny251201.github.io/react-page-example/",
      imgUrl:listaTareas,
    },
    {
      title: "Lista de Tareas",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Proyectos </h2>
                  <p>
                    Te invito a conocer algunos de mis proyectos desarrollados
                    en varias tecnologías.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Row>
                <Col xl={12} className="btn1">
                <strong>Sección 1</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>
                
                <div id="glow">
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
                </Col>
              </Row>
            
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard key={index} {...project}></ProjectCard>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
