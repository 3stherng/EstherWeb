import React from "react";
import { Card, Row, Col } from "react-bootstrap";

interface SkillsProps {
  technical: string[];
  soft: string[];
}

const Skills: React.FC<SkillsProps> = ({ technical, soft }) => (
  <Card className="mb-4">
    <Card.Body>
      <h3 className="fw-bold mb-3">Skills</h3>
      <Row>
        <Col md={8}>
          <ul>{technical.map((skill, idx) => <li key={idx}>{skill}</li>)}</ul>
        </Col>
        <Col md={4}>
          <ul>{soft.map((skill, idx) => <li key={idx}>{skill}</li>)}</ul>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

export default Skills;
