import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/projects/ProjectCard";
import projects from "../data/projects.json";

const Projects: React.FC = () => {
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

      <Row xs={1} md={2} className="g-4">
        {projects.map((project, idx) => (
          <Col key={idx}>
            <ProjectCard
              title={project.title}
              description={project.description}
              badges={project.badges}
              buttons={project.buttons}
              image={project.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
