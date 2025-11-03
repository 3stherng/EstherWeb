import { Card, Button, Col } from 'react-bootstrap';
import { Section } from '../types/Section';

const SectionCard = ({ title, description, link }: Section) => (
  <Col md={6} className="mb-4">
    <Card className="h-100 shadow-sm border rounded-3 bg-light text-dark">
      <Card.Body>
        <Card.Title className="fw-semibold">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="outline-primary" href={link}>Explore →</Button>
      </Card.Body>
    </Card>
  </Col>
);

export default SectionCard;
