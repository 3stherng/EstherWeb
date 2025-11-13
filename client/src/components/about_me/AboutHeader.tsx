import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

interface HeaderProps {
  name: string;
  title: string;
  location: string;
  linkedin: string;
  image: string;
  cv: string;
}

const AboutHeader: React.FC<HeaderProps> = ({ name, title, location, linkedin, image, cv }) => (
  <>
    <div className="text-end mb-3">
      <Button variant="outline-primary" href={cv} target="_blank" rel="noopener noreferrer">
        Download CV
      </Button>
    </div>
    <Row className="align-items-center mb-4">
      <Col md={3} className="text-center mb-3 mb-md-0">
        <Image src={image} roundedCircle fluid style={{ maxWidth: "150px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }} alt={`${name} Headshot`} />
      </Col>
      <Col md={9}>
        <h2 className="fw-bold mb-1">{name}</h2>
        <p className="lead text-muted mb-1">{title}</p>
        <p className="text-secondary mb-1">📍 {location}</p>
        <p className="text-secondary">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a>
        </p>
      </Col>
    </Row>
  </>
);

export default AboutHeader;
