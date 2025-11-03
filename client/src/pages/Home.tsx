import { Container, Row } from 'react-bootstrap';

import HeroSection from '../components/HeroSection';
import SectionCard from '../components/SectionCard';

const Home = () => (
  <>
    <HeroSection />
    <Container className="text-center py-5">
      <Row>
        <SectionCard
          title="CV"
          description="My experience, skills, and education."
          link="/cv"
        />
        <SectionCard
          title="Projects"
          description="Selected works that reflect my journey."
          link="/projects"
        />
      </Row>
    </Container>
  </>
);

export default Home;
