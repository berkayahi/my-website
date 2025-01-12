import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiPython,
} from "react-icons/di";
import {
  SiCsharp, 
  SiDotnet, 
  SiFlutter,
  SiDocker,
  SiReact,
  SiJavascript,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="tech-label">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p className="tech-label">C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <p className="tech-label">C#</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
        <p className="tech-label">.NET</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
        <p className="tech-label">Golang</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <p className="tech-label">Flutter</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p className="tech-label">Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <p className="tech-label">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
        <p className="tech-label">JavaScript</p>
      </Col>
    </Row>
  );
}

export default Techstack;
