import { Card } from "react-bootstrap";

const AboutCard = () => (
  <Card className="h-100 shadow-sm border-0">
    <Card.Body>
      <Card.Title className="mb-3">💡 What Drives Me</Card.Title>
      <p>
        I’m passionate about creating tools that make technology feel effortless
        — from streamlining CI/CD deployments to designing clean, intuitive
        interfaces that users love. I thrive on solving meaningful problems with
        clarity and care.
      </p>
      <p className="fs-8">
        This portfolio reflects my journey — blending logic, design, and impact.
        Take a look around to see what I’ve built, and let’s create something
        remarkable together.
      </p>
    </Card.Body>
  </Card>
);

export default AboutCard;
