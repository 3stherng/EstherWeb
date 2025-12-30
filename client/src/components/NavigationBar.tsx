import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="w-100"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
          Esther Ng
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="main-navbar"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/cv" onClick={handleNavClick}>
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={handleNavClick}>
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
