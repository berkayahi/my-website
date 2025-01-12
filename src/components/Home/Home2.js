import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/0.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import Particle from "../Particle";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home2-section" id="about">
      <Particle />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="green">Introduce</span> Myself
            </h1>
            <p className="home-about-body">
              I'm a passionate Data Engineer with a love for solving complex data problems.
              <br />
              <br />
              My expertise includes
              <i>
                <b className="green"> C#, Python, FastAPI, React, and many more. </b>
              </i>
              <br />
              <br />
              With expertise in C#, Python, .NET, and FastAPI, I specialize in building robust
              <i>
                <b className="green"> IoT modules </b>
                and efficient{" "}
                <b className="green">
                  data pipelines.
                </b>
              </i>
              <br />
              <br />
              I enjoy working with modern technologies like{" "}
              <b className="green">React.js</b> and
              <i>
                <b className="green">
                  {" "}
                  Express.js
                </b>
              </i>
              &nbsp;to build
              <i>
                <b className="green"> scalable and efficient applications</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Feel free to <span className="green">reach out </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/berkayahi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/berkayahi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:berkayahi@gmail.com"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
