import { Row, Container } from "react-bootstrap";
import HeroSection from "../components/HeroSection";
import BinaryHeader from "../components/Header";
import AboutCard from "../components/AboutCard";

const Home = () => (
  <>
      <Row className="text-center mb-5"></Row>
      <BinaryHeader />
    <Container fluid className="bg-light py-5">
      <HeroSection />
    </Container>

    <Container className="py-5">
      <Row className="g-4">
        <AboutCard />
      </Row>
      <Row className="text-center mb-4"></Row>
    </Container>
  </>
);

export default Home;
