import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
            <p>Erick <span>Licona</span></p>
            <p>Para mas informacion has click en el boton para contactarme</p>
            <div className='social'>
                <a href="https://www.linkedin.com/in/erick-licona/" target={"_blank"}><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/erick260392" target={"_blank"}><i class="fa-brands fa-github"></i></a>
                <a href="https://wa.me/525513622064" target={"_blank"}><i class="fa-brands fa-whatsapp"></i></a>
            </div> 
                <p className='end'>CopyRight by Erick Licona</p>
            </footer>
          
        </div>
    );
};

export default Footer;