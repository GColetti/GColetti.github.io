import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

//Image imports
import logo from './images/logo.png'; 
import shlogo from './images/sh-logo.png'; 
import about1 from './images/about1.jpeg'; 
import about2 from './images/about2.jpeg'; 
import about3 from './images/about3.jpeg'; 

//Bootstrap imports
import { Navbar } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast'
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Route, IndexRoute } from 'react-router';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap-floating-label';

//Icon imports
import { IoCarSportOutline } from 'react-icons/io5';
import { IoLocationOutline } from 'react-icons/io5';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { IoHomeOutline } from 'react-icons/io5';
import { IoWaterOutline } from 'react-icons/io5';
import {IoCheckmarkCircleOutline} from 'react-icons/io5';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      {/* NAVBAR */}
      <Navbar className = "mb-3" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/home"><img className = "navbar-brand"
            src={logo}
            width="70"
            height="55"
            className="d-inline-block align-top"
            alt = "logo"
        /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home"><IoHomeOutline/> HOME</Nav.Link>
          <Nav.Link href="/join"><IoCarSportOutline/> JOIN THE CREW</Nav.Link>
          <Nav.Link href="/meet"><IoLocationOutline/>  MEET UP</Nav.Link>
          <Nav.Link href="/about"><IoSpeedometerOutline/> ABOUT US</Nav.Link>
        </Nav>

        <DropdownButton variant="primary" id="dropdown-basic-button" title="SELECT LANGUAGE">
          <Dropdown.Item href="#" >ENGLISH</Dropdown.Item>
          <Dropdown.Item href="#" >FRENCH</Dropdown.Item>
        </DropdownButton>

        </Container>
      </Navbar>
      
      {/* WELCOME CARD */}
      <Card className = "mb-5 mt-5" bg="dark" style={{ width: '40rem' }}>
        <Card.Img variant="top" src={shlogo}/>
        <Card.Body>
          <Card.Title><large>WELCOME TO SPEEDHUNTERS</large></Card.Title>
          <hr></hr>
          <Card.Text >
            <small>CALLING ALL CAR ENTHUSIASTS, JOIN US FOR THE RIDE.</small>
          </Card.Text>
          <Button href ="/join" variant="outline-primary">JOIN US</Button>

        </Card.Body>
      </Card>
     

      {/* JOIN */}
      <Card
        href="#join"
        bg="dark"
        text= "white"
        style={{ width: '86rem'}}
        className="mb-3"
      >
        <Card.Header className = "align-self-start" >JOIN THE CREW &gt; </Card.Header>
        <Card.Body>
          <Row className="g-2">
            <Col md>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Control type="first" placeholder="FIRST NAME" />
            </Form.Group>
            </Col>
            <Col md>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Control type="last" placeholder="LAST NAME" />
            </Form.Group>
            </Col>
          </Row>
          
          <Container className = "mb-3">
            <Form.Group controlID = "dob">
              <Form.Label> Select Date</Form.Label>
              <Form.Control type = "date" name="dob" placeholder="Date of Birth" ></Form.Control>
            </Form.Group>

            <Form.Check aria-label="age" label= "Confirm you are at least 18 years of age" />

            <Row className="g-2">
          <Form.Label> Select Car</Form.Label>
            <Col md>
                <Form.Group className="mb-3" controlId="formYear">
                  <Form.Control type="year" placeholder="YEAR" />
                </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3" controlId="formMake">
                <Form.Control require = "" type="make" placeholder="MAKE" />
              </Form.Group>
            </Col>

            <Col md>
              <Form.Group className="mb-3" controlId="formModel">
                <Form.Control type="model" placeholder="MODEL" />
              </Form.Group>
            </Col>
          </Row>
        </Container>
          
        <Form.Label htmlFor="exampleColorInput"><IoWaterOutline/>CHOOSE YOUR CAR'S COLOR</Form.Label>
        <Container className = "w-25  mb-3 align-self-start">
          <Form.Control
            type="color"
            id="exampleColorInput"
            defaultValue="#563d7D"
            title="Choose color"
          />
        </Container>

        <Container className="mb-3">
          <FloatingLabel controlId="floatingTextarea" label="Why do you want to be a part of SPEEDHUNTERS?">
            <Form.Control
              as="textarea"
              style={{ height: '100px' }}
            />
          </FloatingLabel>  
        </Container>

        <Button variant="outline-primary"><IoCheckmarkCircleOutline/> SUBMIT</Button>

        </Card.Body>
      </Card>
      
      {/* MEET UP CARD */}
      <Card href="#meet" className = "mb-3" bg="dark" style={{ width: '86rem' }}>
        <Card.Header className = "align-self-start" >MEET UP &gt; </Card.Header>
        <Card.Body>
          <p class="card-text">Event tickets are $10 Online and $25 In-person at meets. <small>(Ticket proceeds help keep events running!)</small></p>

          <Form.Group className="mb-3" controlID = "dob">
              <Form.Label> Select Meet Date</Form.Label>
              <Form.Control type = "date" name="dob" placeholder="Date of Birth" ></Form.Control>
          </Form.Group>

          <Button variant="outline-primary">CONFIRM</Button>

        
        </Card.Body>
      </Card>

      {/* ABOUT US CARD */}
      <Card href="#about" className = "mb-3" bg="dark" style={{ width: '86rem' }}>
        <Card.Header className = "align-self-start" >ABOUT US &gt; </Card.Header>
        <Card.Body>
          
        <p class="card-text"><small>WE ARE A NON-PROFIT BRAND AIMED AT PROVIDING INTERESTING ARTICLES AND EVENTS FOR CAR ENTHUSIASTS AROUND THE GLOBE.</small></p>
        <p class="card-text"><small>FEEL FREE TO JOIN US TO REPRESENT YOUR CAR FOR SPEEDHUNTERS AND BECOME PART OF THE CREW.</small></p>

        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src={about1} thumbnail />
            </Col>
            <Col xs={6} md={4}>
              <Image src={about2} thumbnail />
            </Col>
            <Col xs={6} md={4}>
              <Image src={about3} thumbnail />
            </Col>
          </Row>
        </Container>
        </Card.Body>
      </Card>

      </header>
    </div>
  );
}

export default App;
