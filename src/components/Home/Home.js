import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-small">Welcome!</h1>

              <h1 className="heading-big">
                I'm <strong className="main-name">Berkay Ahi</strong>
              </h1>

              <div style={{paddingTop: 0, paddingLeft: "48px"}}>
                <Type/>
              </div>
            </Col>

            <Col md={5} style={{paddingLeft: 140, paddingTop: 50}}>
              <img
                src={homeLogo}
                alt="home pic"
                style={{
                  width: "300px",
                  height: "auto",
                  maxWidth: "100%",
                  objectFit: "contain"
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
