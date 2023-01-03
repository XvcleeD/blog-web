// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';





export default function NavScrollExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="secondary" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Админ</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Button variant="outline-success">Search</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='row mt-5 container m-auto justify-content-center'>


        <Card className='d-flex py-3 col-sm-11 col-md-8 col-12 flex-row justify-content-between border-0'>
          <h1 className='col'>Ангилал</h1>
          <Button variant='outline-primary' onClick={handleShow}>шинэ</Button>
        </Card>
        <Card className='col-sm-11 my-3 col-md-8 col-12 d-flex flex-row align-items-center border rounded'>
          <Card.Body>Улс төр</Card.Body>
          <Button variant='light'>засах</Button>
        </Card>
        <Card className='col-sm-11 my-3 col-md-8 col-12 d-flex flex-row align-items-center border rounded'>
          <Card.Body>Улс төр</Card.Body>
          <Button variant='light'>засах</Button>
        </Card>
        <Card className='col-sm-11 my-3 col-md-8 col-12 d-flex flex-row align-items-center border rounded'>
          <Card.Body>Улс төр</Card.Body>
          <Button variant='light'>засах</Button>
        </Card>

      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//       </header>
//     </div>
//   );
// }

// export default App;
