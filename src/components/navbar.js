import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
import image from '../assets/LOGO.png'

import f4 from '../assets/f4.svg'
import f3 from '../assets/f3.svg'
import Main from './api';



function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img className='logo'src={image} alt=''/></Navbar.Brand>
          <Nav className="me-auto">
         
            <Nav.Link href="#">Acceuil</Nav.Link>
            <Nav.Link href="https://www.betaseries.com/series/autres-new">Series</Nav.Link>
            <Nav.Link href="#">Films</Nav.Link>
            
            
            <Nav.Link href="#"><img class='search'src={f3} alt=''/></Nav.Link>
            <Nav.Link href="#"><img class='search'src={f4} alt=''/></Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
      <Main/>
      
    </>
  );
}

export default ColorSchemesExample;