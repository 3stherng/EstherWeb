import { Container, Row } from "react-bootstrap";
import { FaAws, FaPython, FaReact, FaDocker } from "react-icons/fa";
import { SiCplusplus, SiTypescript } from "react-icons/si";

// Helper function to calculate experience from June 2022 to now
const getExperienceDuration = () => {
  const startDate = new Date(2022, 5); // June 2022 (0-indexed)
  const now = new Date();
  const months =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return `${years}${remainingMonths >= 6 ? "+" : ""} years`;
};

const HeroSection = () => (
  <Container className="text-center py-5">
    <Row className="mt-3 mb-3"></Row>
    <h1 className="fw-semibold fs-1">Welcome to My Portfolio</h1>
    <p className="lead">
      I’m Esther — a software engineer with {getExperienceDuration()} of
      experience building high-performance desktop applications, automating
      testing workflows, and optimizing cloud deployment pipelines.
    </p>
    <p>
      I specialize in{" "}
      <SiCplusplus
        size={30}
        color="#00599C"
        title="C++"
        style={{ verticalAlign: "middle" }}
      />{" "}
      C++,{" "}
      <FaPython
        size={30}
        color="#3776AB"
        title="Python"
        style={{ verticalAlign: "middle" }}
      />{" "}
      Python,{" "}
      <SiTypescript
        size={28}
        color="#3178C6"
        title="TypeScript"
        style={{ verticalAlign: "middle" }}
      />{" "}
      TypeScript,{" "}
      <FaReact
        size={28}
        color="#61DAFB"
        title="React"
        style={{ verticalAlign: "middle" }}
      />{" "}
      React, and cloud platforms like{" "}
      <FaAws
        size={28}
        color="#FF9900"
        title="AWS"
        style={{ verticalAlign: "middle" }}
      />{" "}
      AWS and Azure CI/CD.
    </p>
    <p>
      I'm passionate about creating tools that make technology feel effortless —
      from streamlining CI/CD deployments to designing clean, intuitive
      interfaces that users love. Whether it's developing{" "}
      <FaDocker
        title="Docker"
        size={28}
        color="#2496ED"
        style={{ verticalAlign: "middle" }}
      />{" "}
      Docker-based testing solutions or streamlining Azure CI/CD pipelines to
      accelerate deployment, I thrive on solving meaningful problems with
      clarity and care.
    </p>
    <p>
      This portfolio reflects my journey — blending logic, design, and impact.
      Take a look around to see what I’ve built, and let’s create something
      remarkable together.
    </p>
  </Container>
);

export default HeroSection;
