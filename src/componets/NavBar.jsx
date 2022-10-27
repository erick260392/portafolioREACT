import React, { useEffect, useState } from 'react';
import { Navbar,Container,Nav} from 'react-bootstrap';




const NavBar = () => {
    const [ActiveLink, setActiveLink] = useState('home')
    const [scrolled, setscrolled] = useState(false)
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setscrolled(true)
    
            } else {
                setscrolled(false)
            }
        }
    
        window.addEventListener("scroll", onScroll)
    
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)

    }

    return (
        <div className='hero'>

            <Navbar bg="dark" expand="lg" className={scrolled ? "scrolled" : ""}  variant="dark">
                <Container>
                    <Navbar.Brand   href="#"> Porfo<span>lio</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href='#' className={ActiveLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")} >Home</Nav.Link>
                            <Nav.Link href='#about'>About Us</Nav.Link>
                            <Nav.Link href='#Service'>Services</Nav.Link>
                            <Nav.Link href='#skills'>Skills</Nav.Link>
                            <Nav.Link href='#Contact'>Contac Us</Nav.Link>
                 
                      
                                               </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                
        </div>
          
        // <div className='hero'>
        //         <nav>
                   
        //             <ul>
        //                 <li>
        //                     <a href='#'>Home</a>
        //                 </li>
        //                 <li>
        //                     <a ></a>
        //                 </li>
        //                 <li>
        //                     <a ></a>
        //                 </li>
        //                 <li>
        //                     <a ></a>
        //                 </li>
        //                 <li>
        //                     <a ></a>
        //                 </li>
        //             </ul>
        //         </nav>
        //     </div>
    );
};

export default NavBar;
