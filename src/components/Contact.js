import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import developerSend from "../assets/img/developerSend.png";

export const Contact = () => {
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
            <form onSubmit={handleSubmit}>
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


            </form>

          </Col>
        </Row>
      </Container>
    </section>
  );
};
