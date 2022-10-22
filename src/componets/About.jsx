import AboutImg from '../img/erick.jpge.jpeg';
import React, { useEffect, useState } from 'react';

const About = () => {
  const [loopNum, setloopNum] = useState(0);
  const [isDeleting, setisDeleting] = useState(false);
  const [text, settext] = useState('');
  const period = 2000;
  const [delta, setdelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let tiker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(tiker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    settext(updateText);

    if (isDeleting) {
      setdelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setisDeleting(true);
      setdelta(period);
    } else if (isDeleting && updateText === '') {
      setisDeleting(false);
      setloopNum(loopNum + 1);
      setdelta(500);
    }
  };

  const toRotate = [
    'HTML.',
    'CSS.',
    'React.',
    'Javascript.',
    'Boostrap.',
    'Node.js.',
  ];

  return (
    <div id='about'>
      <section className='about'>
        <div className='main'>
          <img src={AboutImg} alt='' />
          <div className='about-text'>
            <h2>About me</h2>
            <h5>
              Developer <span>Full-Stack</span>
            </h5>
            <p>
              {' '}
              <span>Hola</span>, déjame contarte un poco de mi.{' '}
            </p>
            <p>
              Soy desarrollador web con habilidades para solucionar problemas,
              cuento con la experiencia en creación y diseño,asi como
              experiencia en <span>Desarrollo Back-end y Frond-end;</span>
            </p>
            <p>
              Tengo el dominio de desarrollo web y la habilidad de manejar la
              autogestión en proyectos independientes, asi como la colaboración
              dentro de un equipo productivo adaptándome con facilidad a mi
              entorno laboral.
            </p>
            <p>
              Cuento con un amplia experiencia en{' '}
              <span className='random'> {text}</span>
            </p>

            <p>El poder visualizar ideas y crearlas desde cero es lo que me motiva  día a día a estar en esta carrera, estoy confiado que  mi trabajo siempre presenta el  profesionalismo que requiere.</p>

            <a href='#Contact'>
              <button type='button'>Let's Talk</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
