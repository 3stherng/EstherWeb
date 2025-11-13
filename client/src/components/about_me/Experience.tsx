import React from "react";
import { Card } from "react-bootstrap";

interface ExperienceProps {
  experience: { role: string; company: string; period: string; details: string[] }[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => (
  <Card className="mb-4">
    <Card.Body>
      <h3 className="fw-bold mb-3">Experience</h3>
      <ul>
        {experience.map((exp, idx) => (
          <li key={idx}>
            <strong>{exp.role}</strong> – {exp.company} ({exp.period})
            <ul>
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Card.Body>
  </Card>
);

export default Experience;
