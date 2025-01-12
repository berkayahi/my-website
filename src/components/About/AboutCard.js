import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="general-text-color">Berkay Ahi </span>
            from <span className="general-text-color"> Istanbul, Türkiye.</span>
            <br />
            I am currently employed as a Data Engineer at Senkron Energy.
            <br />
            I have completed Mathematical Engineering at Yildiz Technical University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cultural activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Street photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#51b3a4" }}>
            "Her gün kola iç"{" "}
          </p>
          <footer className="blockquote-footer">Sanjitsu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
