import React from 'react';
import {Button } from 'react-bootstrap';
import CV from '../ERICK LICONA CV.pdf'


const Content = () => {
    return (
        <div className='content'>
            <div>
            <h4>Hello my name is</h4>
            <h1>Erick <span>Licona</span></h1>
            <h3>I am Developer Full-Stack</h3>
            <h4 className='tagline'>Welcome to my porfolio!!!</h4>
            </div>
            <div className='newslatter'>
             <a href={CV} download><Button>Download Mi CV</Button></a>
            <div className='social'>
                <a href="https://www.linkedin.com/in/erick-licona/" target={"_blank"}><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/erick260392" target={"_blank"}><i class="fa-brands fa-github"></i></a>
                <a href="https://wa.me/525513622064" target={"_blank"}><i class="fa-brands fa-whatsapp"></i></a>
            </div> 
            </div>
        </div>
    );
};

export default Content;