import React from "react";
import { Card, Badge, Button, Image } from "react-bootstrap";

interface ProjectCardProps {
  title: string;
  description: string;
  badges: { label: string; color: string; textColor?: string }[];
  buttons: { label: string; href: string; color: string }[];
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  badges,
  buttons,
  image,
}) => {
  return (
    <Card className="h-100 shadow border-0 bg-light">
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <div className="mb-3">
            {badges.map((badge, idx) => (
              <Badge
                key={idx}
                className="me-1"
                bg="" // 👈 explicitly clear the variant
                style={{
                  backgroundColor: badge.color,
                  color: badge.textColor || "#fff",
                }}
              >
                {badge.label}
              </Badge>
            ))}
          </div>
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        {buttons.map((btn, idx) => (
          <Button
            key={idx}
            size="sm"
            href={btn.href}
            target="_blank"
            className="me-2"
            style={{ backgroundColor: btn.color, borderColor: btn.color }}
          >
            {btn.label}
          </Button>
        ))}
        {image && (
          <div className="mt-4 d-flex justify-content-center">
            <Image
              src={process.env.PUBLIC_URL + image}
              alt={title + " Image"}
              rounded
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
