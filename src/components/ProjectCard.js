import { Col } from "react-bootstrap";


export const ProjectCard = ({title, description, imgUrl}) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
     
     
        { <img src={imgUrl}></img> }
        <div className="proj-txtx">
            <h4>{title}</h4>
           <a  className="text-white " href={description} target="_blank"><h3>Visitar Sitio</h3></a>
        </div>

      </div>
    </Col>
  );
};
