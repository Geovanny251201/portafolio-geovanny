import { Navbar, Nav, Container } from "react-bootstrap";

import { useState, useEffect } from "react";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";

import { AiFillGithub } from "react-icons/ai";
import {ButtonPdf} from './ButtonPdf';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mt-2 align-items-center">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              href="#aboutMe"
              className={
                activeLink === "aboutMe" ? "active navbar-link  " : "navbar-link  "
              }
              onClick={() => onUpdateActiveLink("aboutMe")}
            >
              Sobre Mi
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link  " : "navbar-link  "
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Habilidades
            </Nav.Link>
            
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Proyectos
            </Nav.Link>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/geovanny-araya-b47296183/"
                >
                  {""}
                  <img src={navIcon1} alt="img"></img>
                </a>
                <a target="_blank" href="https://github.com/Geovanny251201">
                  {" "}
                  <AiFillGithub color="white" size={20}></AiFillGithub>
                </a>
              </div>
              <a href="#contact" className="button">
                <a>Contáctame</a>
              </a>
            </span>
          
          </Nav>
          <ButtonPdf></ButtonPdf>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
      
  );
};
