import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  Badge,
} from "react-bootstrap";


const AboutMe = () => {
  return (
    <Container className="py-5" id="about">
      {/* Download Button */}
      <div className="text-end mb-3">
        <Button
          variant="outline-primary"
          href={`${process.env.PUBLIC_URL}/CV_Esther-Ng.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </Button>
      </div>
      
      {/* Header Section */}
      <Row className="align-items-center mb-4">
        <Col md={3} className="text-center mb-3 mb-md-0">
          <Image
            src={`${process.env.PUBLIC_URL}/Headshot.jpg`}
            roundedCircle
            fluid
            style={{ maxWidth: "150px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
            alt="Esther NG Headshot"
          />
        </Col>
        <Col md={9}>
          <h2 className="fw-bold mb-1">Esther Ng</h2>
          <p className="lead text-muted mb-1">
            Cloud Engineer | Software Engineer | AWS, C++, Python
          </p>
          <p className="text-secondary mb-1">📍 Kuala Lumpur, MY</p>
          <p className="text-secondary">
            <a
              href="https://www.linkedin.com/in/estherng"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/estherng
            </a>
          </p>
        </Col>
      </Row>

      {/* Tech Stack */}
      <Card className="mb-4">
        <Card.Body>
          <h3 className="fw-bold mb-3">Tech Stack</h3>
          <div className="d-flex flex-wrap gap-2">
            <Badge bg="primary">C++</Badge>
            <Badge bg="success">Python</Badge>
            <Badge bg="info text-dark">AWS</Badge>
            <Badge bg="dark">Azure CI/CD</Badge>
            <Badge bg="warning text-dark">React</Badge>
            <Badge bg="secondary">Docker</Badge>
          </div>
        </Card.Body>
      </Card>

      {/* Profile Summary */}
      <Card className="mb-4">
        <Card.Body>
          <h3 className="fw-bold mb-3">Profile</h3>
          <p>
            Passionate software engineer with a strong foundation in C++ and
            Python, experienced in developing high-performance desktop
            applications and automating testing workflows. Enthusiastic about
            cloud computing and DevOps, with hands-on experience in AWS and
            Azure CI/CD. Committed to continuous learning and delivering
            impactful software solutions.
          </p>
        </Card.Body>
      </Card>

      {/* Skills */}
      <Card className="mb-4">
        <Card.Body>
          <h3 className="fw-bold mb-3">Skills</h3>
          <Row>
            <Col md={8}>
              <ul>
                <li>
                  <strong>Languages:</strong> C++, Python, TypeScript, C#, Bash,
                  PowerShell
                </li>
                <li>
                  <strong>Frameworks/Tools:</strong> MFC, React, NodeJS, PyTest,
                  Unittest, Docker
                </li>
                <li>
                  <strong>DevOps/Cloud:</strong> Azure CI/CD, AWS
                </li>
                <li>
                  <strong>Others:</strong> Git, Linux OS
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <ul>
                <li>Attention to detail</li>
                <li>Critical thinking</li>
                <li>Time management</li>
                <li>Accountability</li>
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Education */}
      <Card className="mb-4">
        <Card.Body>
          <h3 className="fw-bold mb-3">Education</h3>
          <ul>
            <li>
              <strong>Modern C++ Academy</strong> – Materialise Sdn Bhd (Jun–Nov
              2023)
              <br />
              Project: Drawing Application (MFC, C++)
            </li>
            <li>
              <strong>
                Bachelor of Engineering (Hons) in Biomedical Engineering
              </strong>
              <br />
              UTAR (2018–2022) | CGPA: 3.7461
              <br />
              Project: Medication Advisor Mobile App
            </li>
          </ul>
        </Card.Body>
      </Card>

      {/* Experience */}
      <Card className="mb-4">
        <Card.Body>
          <h3 className="fw-bold mb-3">Experience</h3>
          <ul>
            <li>
              <strong>Cloud Engineer</strong> – Deloitte (Oct 2025–Present)
              <ul>
                <li>Currently contributing to cloud infrastructure projects</li>
              </ul>
            </li>
            <li>
              <strong>Software Engineer</strong> – Materialise (Apr 2024–Sep
              2025)
              <ul>
                <li>
                  Developed high-performance C++ and C# desktop applications
                </li>
                <li>Led code reviews to uphold coding standards</li>
                <li>Optimized Azure CI/CD pipelines for faster deployment</li>
                <li>Integrated AWS services to enhance workflows</li>
                <li>Used GitHub Copilot to accelerate development</li>
              </ul>
            </li>
            <li>
              <strong>Software Test Engineer</strong> – Materialise (Jun
              2022–May 2024)
              <ul>
                <li>Automated testing workflows using Python</li>
                <li>Reduced manual testing effort by 85%</li>
                <li>Enhanced Azure DevOps pipelines for release efficiency</li>
                <li>Built Docker-based parallel testing solution</li>
                <li>
                  Won 1st place in internal hackathon for testing innovation
                </li>
              </ul>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutMe;
