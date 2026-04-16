import React from "react";
import { Card, Badge, Button, Image } from "react-bootstrap";
import { downloadFromDrive } from "../../utils/driveApi";

interface ProjectCardProps {
  title: string;
  description: string;
  badges: { label: string; color: string; textColor?: string }[];
  buttons: { label: string; href: string; color: string; is_web: boolean }[];
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  badges,
  buttons,
  image,
}) => {
  const handleDownloadInstaller = async (installerFolder: string) => {
    try {
      const apiKey = process.env.REACT_APP_GOOGLE_DRIVE_API_KEY;
      if (!apiKey) {
        alert(
          "API key not configured. Please check your environment variables.",
        );
        return;
      }

      // cv should be in format: "folderId|fileName"
      const [folderId, fileName] = installerFolder.split("|");
      console.log("Parsed installer config:", { folderId, fileName });

      if (!folderId || !fileName) {
        alert(
          'Invalid installer configuration. Expected format: "folderId|fileName"',
        );
        return;
      }

      await downloadFromDrive(fileName, folderId, apiKey, `${fileName}`);
    } catch (error: any) {
      console.error("Failed to download installer:", error);
      alert(
        `Failed to download installer: ${
          error?.message || "Unknown error"
        }\n\nMake sure:\n1. Your installer folder is shared publicly\n2. The file exists in the folder\n3. Your API key is valid and unrestricted`,
      );
    }
  };

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
        {buttons.map((btn, idx) =>
          !btn.is_web ? (
            <Button
              key={idx}
              size="sm"
              onClick={() => handleDownloadInstaller(btn.href)}
              className="me-2"
            >
              {btn.label}
            </Button>
          ) : (
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
          ),
        )}
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
