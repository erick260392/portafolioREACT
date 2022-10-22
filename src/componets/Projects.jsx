import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import projImg1 from '../assets/img/project-ecommer.png';
import projImg2 from '../assets/img/project-pokedex.png';
import projImg3 from '../assets/img/project-Rick and Morthy.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import ProjectCard from './ProjectCard.jsx';

const Projects = () => {
    const projects = [
      {
        title: 'E-Commerce',
        description: 'Design & Development',
        imgUrl: projImg1,
        URL: 'https://roaring-fenglisu-0b7839.netlify.app/',
      },
      {
        title: 'Pokedex React',
        description: 'Design & Development',
        imgUrl: projImg2,
        URL: 'https://joyful-sorbet-0051ae.netlify.app/',
      },
      {
        title: 'Rick and Morthy Api',
        description: 'Design & Development',
        imgUrl: projImg3,
        URL: 'https://magical-lily-30b7e3.netlify.app/',
      },
    ];
    return (
      <section className='project' id='project'>
        <Container>
          <Row>
            <Col size={12}>
              <h2>Proyectos</h2>
              <p>
                Aqui tengo unos Proyectos para ti que te podrian interesar
                Contactame y dime si te gustan
              </p>
              <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                <Nav
                  variant='pills'
                  className='nav-pills mb-5 justify-content-center align-items-center'
                  id='pills-tab'
                >
                  <Nav.Item>
                    <Nav.Link eventKey='first'>IMAGENES</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='second'>DESCRIPCION</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='third'>REPOSITORIOS</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id='slideInUp'>
                  <Tab.Pane eventKey='first'>
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey='second'>
                    <h1>E-Commerce</h1>
                    <h4>React.js - Redux - React Router - Html - Css</h4>
                    <p>
                      E-Commerce desarrollado a través de una API. Se utilizo
                      Material UI, para desarrollar el entorno del sitio web. Se
                      creo un carrito de compras funcional, filtrado de productos
                      por categoría e inicio de sesión, carrusel de imágenes y
                      responsivo.
                    </p>
  
                    <h1>Pokedex con React.js</h1>
                    <h4>React.js - Redux - React Router - Html - Css</h4>
                    <p>
                      Pokédex desarrollado a través de una API. Se enlistaron
                      todos los Pokémon paginados, se creo un buscador y un
                      filtrado por categorías. Se creo una tarjeta de vista rápida
                      y una tarjeta detallada dinámica, cada Pokémon se muestra
                      del color de su tipo principal, diseño responsivo.
                    </p>
  
                    <h1>Api Rick and Morthy con React.js</h1>
                    <h4>React.js - Redux - React Router - Html - Css</h4>
                    <p>
                      Desarrollado atravez de una api se enlistan los personajes
                      de Rick and Mothy y se muestra con un renderizado
                      condicional el estatus de cada personaje contiene un
                      buscador por id que permite ver cuantos residentes se
                      encuentran en cada area
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey='third'>
                    <Row>
                      <Col sm={6} md={4}>
                        <div className='proj-imgbx'>
                          <h1>E-Commerce</h1>
                        </div>
                        <h3>Github</h3>
                        <Nav.Link
                          href='https://github.com/erick260392/e-commerce.git'
                          target={'_blank'}
                        >
                          {' '}
                          <button>Echale Un Vistazo!!!</button>
                        </Nav.Link>
                      </Col>
                      <Col sm={6} md={4}>
                        <div className='proj-imgbx'>
                          <h1>Pokedex con React.js</h1>
                        </div>
                        <h3>Github</h3>
                        <Nav.Link
                          href='https://github.com/erick260392/pokedex.git'
                          target={'_blank'}
                        >
                          {''}
                          <button>Echale Un Vistazo!!!</button>
                        </Nav.Link>
                      </Col>
                      <Col sm={6} md={4}>
                        <div className='proj-imgbx'>
                          <h1>Api Rick and Morthy con React.js</h1>
                        </div>
                        <h3>Github</h3>
                        <Nav.Link
                          href='https://github.com/erick260392/Rick-and-Morthy.git'
                          target={'_blank'}
                        >
                          {' '}
                          <button>Echale Un Vistazo!!!</button>
                        </Nav.Link>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2}></img>
      </section>
    );
  };
  
  export default Projects;