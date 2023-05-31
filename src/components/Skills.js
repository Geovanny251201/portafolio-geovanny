import { Col, Row, Container } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { JavascriptOriginal } from "devicons-react";
import { ReactOriginal } from "devicons-react";
import { Html5Original } from "devicons-react";
import { Css3Original } from "devicons-react";
import { BootstrapOriginal } from 'devicons-react';
import { KotlinOriginal } from "devicons-react";
import { CsharpOriginal } from "devicons-react";
import { DotnetcoreOriginal } from "devicons-react";
import { SqliteOriginal } from "devicons-react";
import { JavaOriginal } from 'devicons-react';
import { JqueryOriginal } from 'devicons-react';
import React from "react";
import "react-circular-progressbar/dist/styles.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Skills = () => {
 
    const settings = {
      dots: true,
      infinite: true,
      arrows:false,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const settings2 = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      slidesToShow: 3,
      slidesToScroll: 1,
      rtl: true // Configuración para cambiar la dirección de desplazamiento
    };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const desarrolloLenguajes = [
    {
  
     
      skill: "JavaScript",
      icon: <JavascriptOriginal  size="50" />,
    },
    {
     
     
      skill: "C#",
      icon: <CsharpOriginal size="50" />,
    },
    {
     
     
      skill: "Kotlin",
      icon: <KotlinOriginal size="50" />,
    },
    {
     
      
      skill: "Java",
      icon: <JavaOriginal size="50" />,
    },
    {
     
      
      skill: "CSS",
      icon: <Css3Original size="50" />,
    },
    {
     
      
      skill: "HTML5",
      icon: <Html5Original size="50"  />,
    },
  ];
  const frameworks = [
    {
  
     
      skill: ".NET",
      icon: <DotnetcoreOriginal  size="50" />,
    },
    {
     
     
      skill: "React JS",
      icon: <ReactOriginal size="50" />,
    },
    {
     
     
      skill: "BootStrap",
      icon: <BootstrapOriginal  size="60" />,
    },
    {
     
      
      skill: "Room",
      icon: <SqliteOriginal size="50" />,
    },
    {
     
      
      skill: "JQuery",
      icon: <JqueryOriginal size="50" />,
    },
  ];
 
  

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2 className="text-variant">Habilidades </h2>
              <p>Desarrollo</p>
              <Row className="d-flex justify-content-center align-items-center">
              <Slider {...settings}>
                      {desarrolloLenguajes.map((item, index) => (
                      <div key={index} className="carousel-item">
                            {item.icon}
                        <h3>{item.skill}</h3>
                     </div>
                       ))}
               </Slider>
               <p>Frameworks</p>
               <Slider {...settings2}>
                      {frameworks.map((item, index) => (
                      <div key={index} className="carousel-item">
                            {item.icon}
                        <h3>{item.skill}</h3>
                     </div>
                       ))}
               </Slider>
              </Row>

              
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Color Sharp" />
    </section>
  );
};