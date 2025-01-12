import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="about-description">
            <h1 className="about-heading">
              About <strong className="general-text-color">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>

        <Row>
          <Col md={12} className="skill-section">
            <h1 className="section-heading">
              Professional <strong className="general-text-color">Skillset</strong>
            </h1>
            <Techstack />
          </Col>
        </Row>

        <Row>
          <Col md={12} className="tool-section">
            <h1 className="section-heading">
              <strong className="general-text-color">Tools</strong> I Use
            </h1>
            <Toolstack />
          </Col>
        </Row>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
