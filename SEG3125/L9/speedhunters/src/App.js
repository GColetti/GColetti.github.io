import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

//Image imports
import logo from './images/logo.png'; 
import shlogo from './images/sh-logo.png'; 

//Bootstrap imports
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Text } from 'react';



//Icon imports
import { IoCarSportOutline } from 'react-icons/io5';
import { IoLocationOutline } from 'react-icons/io5';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { IoHomeOutline } from 'react-icons/io5';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      {/* NAVBAR */}
      <Navbar className = "mb-4" bg="dark" variant="dark">
        <Container fluid>
        <Navbar.Brand href="#home"><img className = "navbar-brand"
            src={logo}
            width="70"
            height="55"
            className="d-inline-block align-top"
            alt = "logo"
        /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home"><IoHomeOutline/> HOME</Nav.Link>
          <Nav.Link href="#join"><IoCarSportOutline/> JOIN THE CREW</Nav.Link>
          <Nav.Link href="#meet"><IoLocationOutline/>  MEET UP</Nav.Link>
          <Nav.Link href="#about"><IoSpeedometerOutline/> ABOUT US</Nav.Link>
        </Nav>

        <DropdownButton variant="dark" id="dropdown-basic-button" title="SELECT LANGUAGE">
          <Dropdown.Item href="#/action-en">ENGLISH</Dropdown.Item>
          <Dropdown.Item href="#/action-fr">FRENCH</Dropdown.Item>
        </DropdownButton>

        </Container>
      </Navbar>


      <Card className = "mb-5" style={{ width: '40rem' }}>
        <Card.Img variant="top" src={shlogo}/>
        <Card.Body>
          <Card.Title><large>WELCOME TO SPEEDHUNTERS</large></Card.Title>
          <hr></hr>
          <Card.Text >
            <small>CALLING ALL CAR ENTHUSIASTS, JOIN US FOR THE RIDE.</small>
          </Card.Text>
          <Button variant="outline-info">JOIN US</Button>
        </Card.Body>
      </Card>

      {/* JOIN */}
      <Card
        bg="dark"
        text= "white"
        style={{ width: '86rem' }}
        className="mb-2"
      >
        <Card.Header className = "align-self-start" >JOIN THE CREW > </Card.Header>
        <Card.Body>
          <Row className="g-2">
            <Col md>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="first" placeholder="FIRST NAME" />
            </Form.Group>
            </Col>
            <Col md>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="last" placeholder="LAST NAME" />
            </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      
      

      </header>
    </div>
  );
}

export default App;
