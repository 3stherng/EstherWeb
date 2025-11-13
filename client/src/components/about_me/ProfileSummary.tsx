import React from "react";
import { Card } from "react-bootstrap";

const ProfileSummary: React.FC<{ text: string }> = ({ text }) => (
  <Card className="mb-4">
    <Card.Body>
      <h3 className="fw-bold mb-3">Profile</h3>
      <p>{text}</p>
    </Card.Body>
  </Card>
);

export default ProfileSummary;
