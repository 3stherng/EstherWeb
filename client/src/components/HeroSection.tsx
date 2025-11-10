import { Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <>
      <Row className="align-items-center">
        {/* Left Column: Text */}
        <Col md={6} className="text-center text-md-start px-4">
          <h1 className="fw-bold display-2">
            <span
              style={{
                color: "#001f3f", // dark navy blue
              }}
            >
              Esther NG
            </span>
          </h1>

          <h2 className="fw-bold fs-3 text-success">
            ☁️ Cloud Engineer <span className="text-secondary">|</span>{" "}
            <span className="text-secondary"> 👩🏻‍💻 Software Engineer</span>
          </h2>
          <p className="lead mt-3 text-dark fw-light fst-italic">
            Driven by <span className="text-primary">code</span>, powered by the{" "}
            <span className="text-warning">cloud</span> — crafting solutions
            that make impact.
          </p>
          <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-4">
            <Button variant="primary" href="/projects">
              View My Work
            </Button>
            <Button variant="outline-secondary" href="/CV">
              About Me
            </Button>
          </div>
        </Col>

        {/* Right Column: Image */}
        <Col md={6} className="text-center mt-4 mt-md-0">
          <img
            src={`${process.env.PUBLIC_URL}/Headshot.jpg`}
            alt="Esther Ng Portrait"
            className="img-fluid rounded-circle border "
            style={{ maxWidth: "300px" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default HeroSection;
