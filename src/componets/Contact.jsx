import React, { useState } from 'react';
import contactImg from '../assets/img/contact-img.svg';
import { Container, Col, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Enviando...');
    {
      emailjs
        .sendForm(
          'service_4t962mm',
          'template_e69ro4w',
          e.target,
          '5qkBHKmldKSEr_gVG'
        )
        .then((res) => {
          console.log(res.status);
          if (res.status == 200) {
            setStatus({
              success: true,
              message:
                'Mensaje Enviado Pronto Me Pondre en Contacto con Usted Gracias¡¡¡¡¡¡',
            });
            setFormDetails(formInitialDetails);
            setButtonText('Send');
          } else {
            setStatus({
              success: false,
              message:
                'UPPS , Huvo un error Intenta de nuevo Por Favor el Mesanje no se Envio Revisa Tu Conexion.',
            });
          }
        })

        .catch((error) => console.log(error));
    }
  };

  return (
 
      <div>
        <section className='contact' id='contact'>
          <Container>
            <Row className='align-items-center'>
              <Col size={12} md={6}>
                <img src={contactImg} alt='Contact Us' />
                <Col>
                  <h2>CONTACTAME</h2>

                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='text'
                          value={formDetails.firstName}
                          name='First_name'
                          placeholder='First Name'
                          onChange={(e) =>
                            onFormUpdate('firstName', e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='text'
                          value={formDetails.lastName}
                          name='Last_name'
                          placeholder='Last Name'
                          onChange={(e) =>
                            onFormUpdate('lastName', e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='email'
                          value={formDetails.email}
                          name='Email_Address'
                          placeholder='Email Address'
                          onChange={(e) =>
                            onFormUpdate('email', e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='tel'
                          value={formDetails.phone}
                          name='Phone_no'
                          placeholder='Phone No.'
                          onChange={(e) =>
                            onFormUpdate('phone', e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className='px-1'>
                        <textarea
                          rows='6'
                          value={formDetails.message}
                          name='Message_content'
                          placeholder='Message'
                          onChange={(e) =>
                            onFormUpdate('message', e.target.value)
                          }
                        ></textarea>
                        <button type='submit'>
                          <span>{buttonText} </span>
                        </button>
                      </Col>
                      <br />
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? 'danger' : 'success'
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </Col>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
   
  );
};

export default Contact;
