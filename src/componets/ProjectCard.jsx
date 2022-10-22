import React from 'react';
import { Col, Nav } from 'react-bootstrap';

const ProjectCard = ({title,description,imgUrl,URL}) => {
    return (
      <Col sm={6} md={4}>
        <div className="proj-imgbx">
         <img  src={imgUrl} alt="" /> 
            <div  className="proj-txtx">
                <h4>{title}</h4>
                <p>{description}</p>
                <Nav.Link href={URL} target={"_blank"}>  <button>Echale Un Vistazo!!!</button></Nav.Link> 
            </div>
        </div>
 
      </Col>

    )     
};

export default ProjectCard;