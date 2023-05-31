import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from 'emailjs-com';
import { useEffect, useRef } from 'react'
import Swal from 'sweetalert2';
import '@sweetalert2/theme-dark';

import developerSend from "../assets/img/developerSend.png";

export const Contact = () => {

  const sweetAlert = () => {
    Swal.fire('Mensaje Enviado', '¡Muchas gracias! Me pondré en contacto contigo muy pronto 😉', 'success','dark');
  };
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    setButtonText("Enviando...");
    emailjs.sendForm('service_shlgh8p', 'template_t3brvyr', form.current, '7gu0cF8om5IPGL_sC')
      .then((result) => {
        console.log(result.text);
        setButtonText("Enviar");
        sweetAlert();
      }, (error) => {
        console.log(error.text);
      });
  
    e.target.reset();
  }
  





  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});

  const onFormUpdate=(category, value) =>{
    setFormDetails({
        ...formDetails,
        [category]:value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    let response = await fetch("http://localhost:4000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Enviar");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  

}


  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={developerSend} alt="Contact Us"></img>
          </Col>
          <Col md={6}>
            <h2>Contactar</h2>
            {/* <form onSubmit={handleSubmit}>
               <Row>
                <Col sm={6} className="px-1">
                    <input type="text" value={formDetails.firstName} placeholder="Primer Nombre" onChange={(e) => onFormUpdate('firstName', e.target.value)}></input>
                </Col>
                <Col sm={6} className="px-1">
                <input type="text" value={formDetails.lastName} placeholder="Apellidos" onChange={(e) => onFormUpdate('lastName', e.target.value)}></input>
                </Col>

                <Col sm={6} className="px-1">
                <input type="email" value={formDetails.email} placeholder="Correo electrónico" onChange={(e) => onFormUpdate('email', e.target.value)}></input>
                </Col>

                <Col sm={6} className="px-1">
                <input type="tel" value={formDetails.phone} placeholder="Teléfono" onChange={(e) => onFormUpdate('phone', e.target.value)}></input>
                </Col>
                <Col>
                <textarea rows="6" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>

                <button type="submit"><span>{buttonText}</span> </button>
                </Col>
                {
                        status.message && <Col>
                        <p className={status.sucess ===false ? "danger" : "sucess"}>{status.message}</p>
                        </Col>

                }

               </Row>


            </form> */}
            <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name='name' placeholder='Nombre Completo' required />
          <input type="text" name='organization' placeholder='Organización' required />
          <input type="email" name='email' placeholder='Correo Electrónico' required />
          <textarea name="message" rows="7" placeholder='Mensaje' required></textarea>
          <button type='submit'><span>{buttonText}</span></button>
        </form>
       

          </Col>
        </Row>
      </Container>
    </section>
  );
};
