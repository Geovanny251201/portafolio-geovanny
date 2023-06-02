
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Geo007.png"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { AiFillGithub } from "react-icons/ai";


export const Footer=()=>{

return(
    <footer className="footer">
        <Container>

            <Row className="align-items-center">
                <Col sm={6}>
                    <img src={logo} alt="logo"></img>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
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
                   
                </Col>


            </Row>
        </Container>


    </footer>

)


}