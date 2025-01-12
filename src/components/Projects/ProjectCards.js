import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [expanded, setExpanded] = useState(false);

  const description = expanded 
    ? props.description 
    : props.description.slice(0, 100) + "...";

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ textAlign: "center", width: "100%" }}>
          {props.title}
        </Card.Title>
        <Card.Text className="project-description">
          {description}
          <span
            onClick={() => setExpanded(!expanded)}
            className="read-more-link"
          >
            {expanded ? " Show Less" : " Read More"}
          </span>
        </Card.Text>
        <div className="project-card-buttons">
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank"
            className="project-button"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="project-button"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
