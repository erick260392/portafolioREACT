import React from 'react';

const Services = () => {
  return (
    <div className='service'>
      <div id='Service' className='title'>
        <h2>Services</h2>
      </div>
      <div className='box'>
        <div className='card'>
          <i class='fa-solid fa-bars'></i>
          <h5>Web Develoment</h5>
          <div className='pra'>
            <p>
              personalizado ayuda a que crees tu página como la sueñas, justo
              con lo que necesitas y que se parezca a tu proyecto
            </p>
          </div>
        </div>
      </div>
      <div className='box'>
        <div className='card'>
          <i class='fa-regular fa-user'></i>
          <h5>Desining</h5>
          <div className='pra'>
            <p>
              Diseño gráfico, publicitario y digital Posicionamiento seo para tu
              web Portafolio web Publicidad en redes sociales y web Diseño
              gráfico
            </p>
          </div>
        </div>
      </div>
      <div className='box'>
        <div className='card'>
          <i class='fa-regular fa-bell'></i>
          <h5>Back-end Service</h5>
          <div className='pra'>
            <p>
              Para cada aplicación que cree, existe la opción de desarrollarla
              creando un backend personalizado o usando un marco de trabajo de
              BaaS. Al optar por un backend personalizado, tendrá que crear su
              backend desde cero y manejar la infraestructura. Las ventajas de
              este enfoque son la flexibilidad que proporciona y las
              posibilidades de personalización. Las desventajas serán los
              mayores costos de desarrollo y un mayor tiempo hasta que esté
              listo para la comercialización.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
