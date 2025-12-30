import React from "react";
import { Card, Row, Col } from "react-bootstrap";

interface SkillsProps {
  technical: string[];
  soft: string[];
}

interface TechStackProps {
  stack: { label: string; color: string; textColor?: string }[];
}

const Skills: React.FC<TechStackProps & SkillsProps> = ({
  stack,
  technical,
  soft,
}) => (
  <Card className="mb-4">
    <Card.Body>
      <h3 className="fw-bold mb-3">Skills</h3>
      <Row>
        <div className="d-flex flex-wrap gap-2">
          {stack.map((item, idx) => (
            <span
              key={idx}
              className="badge"
              style={{
                backgroundColor: item.color,
                color: item.textColor || "#fff",
              }}
            >
              {item.label}
            </span>
          ))}
        </div>
        <Row className="text-center mb-4"></Row>
        <Col md={8}>
          <ul>
            {technical.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </Col>
        <Col md={4}>
          <ul>
            {soft.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

export default Skills;
