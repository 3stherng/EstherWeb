import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="w-100">
    <Container>
      <Navbar.Brand as={Link} to="/">Esther Ng</Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/cv">About Me</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;
