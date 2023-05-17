import { Container, Row, Col } from "react-bootstrap";
import developer from "../assets/img/developer1.png";
import { useState, useEffect } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Typewriter from 'typewriter-effect';
export const Banner = () => {




  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({isVisible}) => 
              <div
                className={
                  isVisible ? "animate__animated animate__zoomInDown" : ""
                }
              >
                <span className="tagline">Bienvenido(a) a mi portafolio</span>
                <h1 className="text-sm">
                  Hola, soy Geovanny Araya
                  <Typewriter
                  options={{
                  strings: ['Web developer'],
                  autoStart: true,
                  loop: true,
                  }}
                      />
                </h1>
               
                <p>
                 #JavaScript #Html #CSS #BootStrap 
                </p>
              
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={developer} alt="Header Img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
