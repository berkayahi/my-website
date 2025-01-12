import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "flex-start", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/Projects/chatify.png"
              isBlog={false}
              title="Personal Portfolio"
              description="Modern portfolio website built with React.js and Node.js. Features include responsive design, smooth animations, and dynamic content loading. Implements best practices for performance and SEO optimization."
              ghLink="https://github.com/berkayahi"
              demoLink="https://berkayahi.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/Projects/leaf.png"
              isBlog={false}
              title="E-Commerce Platform"
              description="Full-stack e-commerce application built with MERN stack (MongoDB, Express.js, React, Node.js). Features include user authentication, product catalog, shopping cart, and secure payment integration with Stripe."
              ghLink="https://github.com/berkayahi"
              demoLink="https://berkayahi.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/Projects/leaf.png"
              isBlog={false}
              title="Weather Dashboard"
              description="Interactive weather application built with React.js and OpenWeather API. Features include real-time weather updates, 5-day forecast, location search, and responsive design for all devices."
              ghLink="https://github.com/berkayahi"
              demoLink="https://berkayahi.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/Projects/leaf.png"
              isBlog={false}
              title="Weather Dashboard"
              description="Interactive weather application built with React.js and OpenWeather API. Features include real-time weather updates, 5-day forecast, location search, and responsive design for all devices."
              ghLink="https://github.com/berkayahi"
              demoLink="https://berkayahi.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/Projects/leaf.png"
              isBlog={false}
              title="E-Commerce Platform"
              description="Full-stack e-commerce application built with MERN stack (MongoDB, Express.js, React, Node.js). Features include user authentication, product catalog, shopping cart, and secure payment integration with Stripe."
              ghLink="https://github.com/berkayahi"
              demoLink="https://berkayahi.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/Projects/leaf.png"
              isBlog={false}
              title="Weather Dashboard"
              description="Interactive weather application built with React.js and OpenWeather API. Features include real-time weather updates, 5-day forecast, location search, and responsive design for all devices."
              ghLink="https://github.com/berkayahi"
              demoLink="https://berkayahi.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/Projects/leaf.png"
              isBlog={false}
              title="Weather Dashboard"
              description="Interactive weather application built with React.js and OpenWeather API. Features include real-time weather updates, 5-day forecast, location search, and responsive design for all devices."
              ghLink="https://github.com/berkayahi"
              demoLink="https://berkayahi.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/Projects/leaf.png"
              isBlog={false}
              title="E-Commerce Platform"
              description="Full-stack e-commerce application built with MERN stack (MongoDB, Express.js, React, Node.js). Features include user authentication, product catalog, shopping cart, and secure payment integration with Stripe."
              ghLink="https://github.com/berkayahi"
              demoLink="https://berkayahi.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/Projects/leaf.png"
              isBlog={false}
              title="Weather Dashboard"
              description="Interactive weather application built with React.js and OpenWeather API. Features include real-time weather updates, 5-day forecast, location search, and responsive design for all devices."
              ghLink="https://github.com/berkayahi"
              demoLink="https://berkayahi.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
