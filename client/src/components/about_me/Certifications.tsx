import React from "react";
import { Card, Image } from "react-bootstrap";

interface EducationProps {
  certification: { institution: string; period: string; image?: string }[];
}

const Certifications: React.FC<EducationProps> = ({ certification }) => (
  <Card className="mb-4">
    <Card.Body>
      <h3 className="fw-bold mb-3">Certifications</h3>
      {/* <ul>
        {certification.map((cert, idx) => (
          <li key={idx}>
            <div className="d-flex align-items-center gap-2">
              <div>
                <strong>{cert.institution}</strong> ({cert.period})
              </div>
            </div>
          </li>
        ))}
      </ul> */}
      <Image
        src={process.env.PUBLIC_URL + "/AWSCredential.png"}
        alt="AWS Credential"
        rounded
        style={{ width: 300, height: "auto", objectFit: "contain" }}
      />
    </Card.Body>
  </Card>
);

export default Certifications;
