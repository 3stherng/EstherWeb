import { Col, Row } from "react-bootstrap";

const Header = () => (
  <Row className="text-center mb-4">
    <Col>
      <div
        style={{
          fontFamily: "monospace",
          color: "#01101dff",
          fontSize: "1.2rem",
          marginTop: "1.5rem",
          opacity: 0.7,
          textAlign: "center",
        }}
      >
        Hello World,
      </div>
      <h1 className="fw-bold display-5">
        <span style={{ color: "#4d0202ff" }}>Welcome</span> to my{" "}
        <span style={{ color: "#01101dff" }}>Portfolio!</span>
      </h1>
    </Col>
  </Row>
);

export default Header;
