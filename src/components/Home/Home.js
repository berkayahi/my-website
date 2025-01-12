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

                <Type className="Typewriter"/>
            </Col>

            <Col md={5} xs={12} className="d-flex justify-content-center">
              <img
                src={homeLogo}
                alt="home pic"
                className="home-img"
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
