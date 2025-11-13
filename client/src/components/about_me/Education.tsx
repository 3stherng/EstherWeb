import React from "react";
import { Card } from "react-bootstrap";

interface EducationProps {
  education: { institution: string; period: string; cgpa?: string; project: string }[];
}

const Education: React.FC<EducationProps> = ({ education }) => (
  <Card className="mb-4">
    <Card.Body>
      <h3 className="fw-bold mb-3">Education</h3>
      <ul>
        {education.map((edu, idx) => (
          <li key={idx}>
            <strong>{edu.institution}</strong> ({edu.period})
            {edu.cgpa && <><br />CGPA: {edu.cgpa}</>}
            <br />Project: {edu.project}
          </li>
        ))}
      </ul>
    </Card.Body>
  </Card>
);

export default Education;
