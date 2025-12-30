import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { downloadFromDrive } from "../../utils/driveApi";

interface HeaderProps {
  name: string;
  title: string;
  location: string;
  linkedin: string;
  image: string;
  cv: string;
}

const AboutHeader: React.FC<HeaderProps> = ({
  name,
  title,
  location,
  linkedin,
  image,
  cv,
}) => {
  const handleDownloadCV = async () => {
    try {
      const apiKey = process.env.REACT_APP_GOOGLE_DRIVE_API_KEY;
      if (!apiKey) {
        alert(
          "API key not configured. Please check your environment variables."
        );
        return;
      }

      // cv should be in format: "folderId|fileName"
      const [folderId, fileName] = cv.split("|");

      if (!folderId || !fileName) {
        alert('Invalid CV configuration. Expected format: "folderId|fileName"');
        return;
      }

      await downloadFromDrive(fileName, folderId, apiKey, "CV-Esther_Ng.pdf");
    } catch (error: any) {
      console.error("Failed to download CV:", error);
      alert(
        `Failed to download CV: ${
          error?.message || "Unknown error"
        }\n\nMake sure:\n1. Your CV folder is shared publicly\n2. The file exists in the folder\n3. Your API key is valid and unrestricted`
      );
    }
  };

  return (
    <>
      <div className="text-end mb-3">
        <Button variant="outline-primary" onClick={handleDownloadCV}>
          Download CV
        </Button>
      </div>
      <Row className="align-items-center mb-4">
        <Col md={3} className="text-center mb-3 mb-md-0">
          <Image
            src={image}
            roundedCircle
            fluid
            style={{ maxWidth: "150px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
            alt={`${name} Headshot`}
          />
        </Col>
        <Col md={9}>
          <h2 className="fw-bold mb-1">{name}</h2>
          <p className="lead text-muted mb-1">{title}</p>
          <p className="text-secondary mb-1">📍 {location}</p>
          <p className="text-secondary">
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              {linkedin}
            </a>
          </p>
        </Col>
      </Row>
    </>
  );
};

export default AboutHeader;
