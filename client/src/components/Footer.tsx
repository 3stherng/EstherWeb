import { Container, Navbar } from 'react-bootstrap';

const Footer = () => (
  <Navbar bg="dark"  variant="dark" expand="lg" fixed="bottom" className="w-100">
    <Container className="justify-content-center">
      <Navbar.Text className="text-light small">
        © {new Date().getFullYear()} Esther Ng
      </Navbar.Text>
    </Container>
  </Navbar>
);

export default Footer;
