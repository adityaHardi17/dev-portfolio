import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aditya Hardi </span>
            from <span className="purple"> Indonesia.</span>
            <br /> I am a graduate of a vocational high school, majoring in Software Engineering.
            <br />
            Additionally, I am currently work as a full-stack developer junior in a company.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Surf the internet to learn new things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “Any sufficiently advanced technology is equivalent to magic.”{" "}
          </p>
          <footer className="blockquote-footer">Arthur C. Clarke</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
