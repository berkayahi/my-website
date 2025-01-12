import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div className="about-content">
          <p className="about-text">
            Hello! I'm <span className="general-text-color">Berkay Ahi</span>, a Data Engineer based in 
            <span className="general-text-color"> Istanbul, Türkiye</span>.
          </p>
          
          <p className="about-text">
            Currently, I'm working at Senkron Energy, where I leverage my Mathematical Engineering 
            background from Yildiz Technical University to solve complex data challenges.
          </p>

          <p className="about-text">
            When I'm not coding, you can find me:
          </p>
          
          <ul className="about-activities">
            <li className="about-activity">
              <ImPointRight /> Exploring cultural activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Capturing moments through street photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Discovering new places while travelling
            </li>
          </ul>

          <div className="about-quote">
            <p className="quote-text">
              "Her gün kola iç"
            </p>
            <footer className="quote-author">— Sanjitsu</footer>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
