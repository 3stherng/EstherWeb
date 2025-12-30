import { Container, Navbar } from "react-bootstrap";
import { SiCplusplus, SiTypescript } from "react-icons/si";
import { FaPython, FaReact, FaAws } from "react-icons/fa";

const Footer = () => (
  <Navbar className="w-100">
    <Container className="d-flex justify-content-between align-items-center py-2">
      {/* Icons on the left */}
      <div className="text-light">
        <SiCplusplus size={24} color="#00599C" title="C++" className="me-2" />
        <FaPython size={24} color="#3776AB" title="Python" className="me-2" />
        <SiTypescript
          size={22}
          color="#3178C6"
          title="TypeScript"
          className="me-2"
        />
        <FaReact size={22} color="#61DAFB" title="React" className="me-2" />
        <FaAws size={22} color="#FF9900" title="AWS" />
      </div>

      {/* Copyright on the right */}
      <Navbar.Text className=" small">
        © {new Date().getFullYear()} Esther Ng
      </Navbar.Text>
    </Container>
  </Navbar>
);

export default Footer;
