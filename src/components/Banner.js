import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import developer from "../assets/img/developer1.png";
import { useState, useEffect } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";
import Typewriter from 'typewriter-effect';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0); //rastrea la iteracion actual del texto
  const [isDeleting, setIsDeleting] = useState(false); //indica si el texto se esta eliminado
  const toRotate = ["Web Developer"]; //matriz que tiene las palabras a mostrar
  const [text, setText] = useState(""); //se actualiza en cada iteracion y los muestra en el componente
  const [delta, setDelta] = useState(200 - Math.random() * 100); //valor aleatorio entre 100 y 200 para determinar el retraso entre cada iteracion del ciclo de texto
  const [index, setIndex] = useState(1); //rastrea la posicion actual del texto que se muestra
  const period = 2100; //periodo de tiempo despues del cual se cambia la palabra

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]); //cada vez que el estado text cambia se ejecuta

  const tick = () => {
    let i = loopNum % toRotate.length; //asegura que el indice se mantenga dentro del rango de la matriz toRotate
    let fullText = toRotate[i]; //se define la palabra completa que se muestra
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1) //si el estado es deleting entonces se eliminar un caracter de la palabra de lo contrario se agrega
      : fullText.substring(0, text.length + 1);

    setText(updatedText); // aqui se actualiza la palabra nueva

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2); // el valor delta se actualiza y se divide, tiene efecto de acelerar ritmo al que se eliminan caracteres
    }

    if (!isDeleting && updatedText === fullText) {
      //si no se esta borrando y la palabra actual es igual a la palabra completa, entonces la palabra se termino de escribir, se debe establecer el estado de isDeleting en true
      setIsDeleting(true); //se establece la accion de borrado en true
      setIndex((prevIndex) => prevIndex - 1); // se actualiza para que la próxima palabra de la matriz toRotate se muestre en el siguiente ciclo de texto
      setDelta(period); //indica el tiempo que se debe esperar para que se de otra iteracion
    } else if (isDeleting && updatedText === "") {
      //si isDeleting es true y la palabra esta vacia significa que se termino de eliminar
      setIsDeleting(false); //el estado de isDeleting se establece en falso para ahora agregar caracteres
      setLoopNum(loopNum + 1); //se accede a la sigueinte palabra de la matriz
      setIndex(1); //se establece en 1, lo que indica que la primera palabra de la matriz toRotate se mostrará en la siguiente iteración.
      setDelta(200); //se establece en 200, lo que indica que se debe esperar un tiempo corto antes de la siguiente iteración.
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

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
                <h1>
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
