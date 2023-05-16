import { Col, Row, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";


import { JavascriptOriginal } from 'devicons-react';
import { ReactOriginal } from 'devicons-react';
import { Html5Original } from 'devicons-react';
import { Css3Original } from 'devicons-react';
import { NodejsOriginal } from 'devicons-react';
import { BootstrapOriginal } from 'devicons-react';
import { KotlinOriginal } from 'devicons-react';
import { CsharpOriginal } from 'devicons-react';
import { DotnetcoreOriginal } from 'devicons-react';
import { MicrosoftsqlserverPlainWordmark } from 'devicons-react';
import { SqliteOriginal } from 'devicons-react';

import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import { Progress } from "./Progress";
import VisibilitySensor from "react-visibility-sensor";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { InView } from "react-intersection-observer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Skills = () => {
  const skills = {
    html5: 80,
    css: 70,
    javascript: 90,
    kotlin: 60,
    csharp: 50,
    bootstrap: 75,
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
  const [progress, setProgress] = useState(0.7);

  const progressBarData = [
    { progress: 0.5, isActive: true, skill: "JavaScript", icon: <JavascriptOriginal color="red" size="30"  /> },
    { progress: 0.4, isActive: true, skill: "React",icon: <ReactOriginal  size="40"  /> },
    { progress: 0.7, isActive: true, skill: "HTML5",icon: <Html5Original  size="40"  /> },
    { progress: 0.7, isActive: true, skill: "CSS",icon: <Css3Original  size="40"  /> },
    { progress: 0.3, isActive: true, skill: "Node JS",icon: <NodejsOriginal  size="40"  /> },
    { progress: 0.5, isActive: true, skill: "BootStrap",icon: <BootstrapOriginal  size="35"  /> },
    { progress: 0.5, isActive: true, skill: "Kotlin",icon: <KotlinOriginal  size="35"  /> },
    { progress: 0.4, isActive: true, skill: "C#",icon: <CsharpOriginal  size="40"  /> },
    { progress: 0.4, isActive: true, skill: ".Net Core",icon: <DotnetcoreOriginal  size="40"  /> },
    { progress: 0.6, isActive: true, skill: "Sql Server",icon: <MicrosoftsqlserverPlainWordmark  size="35"  /> },
    { progress: 0.6, isActive: true, skill: "Room",icon: <SqliteOriginal  size="40"  /> },
  ];

  const resetProgress = () => {
    setProgress(0);
  };
  const [isVisible, setIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    } else if (!isVisible) {
      setIsVisible(false);
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row >
          <Col>
            <div className="skill-bx ">
              <h2>Habilidades </h2>
             

              <p >Tecnologías que he utilizado. </p>

              <Row className="d-flex justify-content-center align-items-center  ">
                {progressBarData.map((data, index) => (
                  <Col
                    xs={4}
                    md={4}
                    xl={3}
                    key={index}
                    className="  mt-5 mb-3 d-flex justify-content-center align-items-center"
                  >
                    <div className="prueba ">
                      {isVisible && (
                        <Progress
                          progress={data.progress}
                          isActive={data.isActive}
                        />
                      )}{" "}
                      <span>{data.skill} <i>{data.icon}</i></span>
                     

                     
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <img className="background-image-left" src={colorSharp}></img>
    </section>
  );
};
