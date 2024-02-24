import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


const Navbars = () => {
  return (
    <div>{['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} bg="dark"
        variant="dark"
        className="mb-3" fixed='top'>
          <Container fluid>
            <Navbar.Brand href="/">Freewatch</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/"  className='nav-link'>Movies</Link>
                  <Nav.Link href='#action2'>Sports</Nav.Link>
                
                </Nav>
                <Form className="d-flex align-items-center">
                  <input
                    type="text"
                    placeholder="Search"
                    className="me-2 desk_search"
                    aria-label="Search"
                  />
                  <Button className='subscribe_btn'>Subscribe</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      
    </div>
  )
}

export default Navbars