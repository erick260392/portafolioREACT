import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {


    return (
        <div className='hero'>
    <Navbar expand="lg" className='scrolled' >
                <h2 className='logo'>Porfo<span>lio</span> </h2>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#about'>About Us</a>
                    </li>
                    <li>
                        <a href='#Service'>Services</a>
                    </li>
                    <li>
                        <a href='#skills'>Skills</a>
                    </li>
                    <li>
                        <a href='#Contact'>Contac Us</a>
                    </li>
                </ul>
                </Navbar>
        </div>
    );
};

export default NavBar;
