import React from "react";
import { Card } from "react-bootstrap";

interface TechStackProps {
  stack: { label: string; color: string; textColor?: string }[];
}

const TechStack: React.FC<TechStackProps> = ({ stack }) => (
  <Card className="mb-4">
    <Card.Body>
      <h3 className="fw-bold mb-3">Tech Stack</h3>
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
    </Card.Body>
  </Card>
);

export default TechStack;
