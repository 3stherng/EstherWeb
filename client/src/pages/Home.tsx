import { Row, Container } from "react-bootstrap";
import HeroSection from "../components/home/HeroSection";
import BinaryHeader from "../components/home/Header";
import AboutCard from "../components/home/AboutCard";

const Home = () => (
  <Container className="my-5">
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
  </Container>
);

export default Home;
