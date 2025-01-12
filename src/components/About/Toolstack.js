import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiLinux, DiGit } from "react-icons/di";
import { 
  SiRedis, 
  SiPostgresql,
  SiApache,
  SiMicrosoftazure,
  SiPandas,
  SiJetbrains,
  SiVisualstudiocode,
  SiPostman,
  SiPowerbi,
  SiGrafana,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="tech-label">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJetbrains />
        <p className="tech-label">JetBrains</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <p className="tech-label">Pandas</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
        <p className="tech-label">Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="tech-label">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <p className="tech-label">Redis</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p className="tech-label">PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="tech-label">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApache />
        <p className="tech-label">Apache NiFi</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
        <p className="tech-label">Azure</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <p className="tech-label">Power BI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />
        <p className="tech-label">Grafana</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
