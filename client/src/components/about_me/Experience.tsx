import React from "react";
import { Card, Image } from "react-bootstrap";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  details: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
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
      <Image
        src={process.env.PUBLIC_URL + "/TriangleAward_Materialise.png"}
        alt="Materialise Award"
        rounded
        style={{ width: 400, height: "auto", objectFit: "contain" }}
      />
    </Card.Body>
  </Card>
);

export default Experience;
