import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

const ProjectList: React.FC = () => {
  return (
    <Container className="my-5">
      <Row className="text-center mb-5"></Row>
      <Row className="text-center mb-4">
        <Col>
          <h1 className="fw-bold display-5">
            <span style={{ color: "#01101dff" }}>Practice Projects</span>
          </h1>
        </Col>
      </Row>
      <Row className="text-center mb-5"></Row>

      <Row xs={1} md={2} className="g-4">
        {/* Project 1: Planning Poker Web App */}
        <Col>
          <Card className="h-100 shadow border-0 bg-light">
            <Card.Body>
              <Card.Title className="fw-bold">
                Planning Poker Web App
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <div className="mb-3">
                  <Badge bg="info" className="me-1">
                    React
                  </Badge>
                  <Badge bg="success" className="me-1">
                    Node.js
                  </Badge>
                  <Badge bg="warning" className="me-1 text-dark">
                    TypeScript
                  </Badge>
                </div>{" "}
              </Card.Subtitle>
              <Card.Text>
                Beginner practice project to explore full‑stack development.
                Demonstrates skills in frontend design and backend APIs. Work in
                progress.
              </Card.Text>
              <Button
                variant="primary"
                size="sm"
                href="https://planpoker.estherng.work"
                target="_blank"
                className="me-2"
              >
                Live Web App
              </Button>
              <Button
                variant="dark"
                size="sm"
                href="https://github.com/3stherng/PlanningPoker"
                target="_blank"
              >
                GitHub Repo
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Project 2: 2D Drawing Application */}
        <Col>
          <Card className="h-100 shadow border-0 bg-light">
            <Card.Body>
              <Card.Title className="fw-bold">
                2D Drawing Application
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <div className="mb-3">
                  <Badge bg="danger" className="me-1">
                    C++
                  </Badge>
                  <Badge bg="secondary" className="me-1">
                    MFC
                  </Badge>
                </div>
              </Card.Subtitle>
              <Card.Text>
                Beginner desktop application built with C++ and MFC. Practice
                project for learning graphics rendering and UI components.
              </Card.Text>

              <Button
                variant="primary"
                size="sm"
                href="https://github.com/yourusername/2d-drawing-app/releases/download/v1.0/Setup.msi"
                target="_blank"
                className="me-2"
              >
                Download MSI Installer (Coming Soon)
              </Button>
              <Button
                variant="dark"
                size="sm"
                href="https://github.com/yourusername/2d-drawing-app"
                target="_blank"
              >
                GitHub Repo (Coming Soon)
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectList;
