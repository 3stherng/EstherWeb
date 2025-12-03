import React from "react";
import { Card } from "react-bootstrap";

interface EducationProps {
  certification: { institution: string; period: string; }[];
}

const Certifications: React.FC<EducationProps> = ({ certification }) => (
  <Card className="mb-4">
    <Card.Body>
      <h3 className="fw-bold mb-3">Certifications</h3>
      <ul>
        {certification.map((cert, idx) => (
          <li key={idx}>
            <strong>{cert.institution}</strong> ({cert.period})
          </li>
        ))}
      </ul>
    </Card.Body>
  </Card>
);

export default Certifications;
