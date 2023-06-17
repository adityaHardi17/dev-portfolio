import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import laundryApp from "../../Assets/Projects/project-1.jpeg";
import carwash from "../../Assets/Projects/project-2.jpeg";
import bookRoom from "../../Assets/Projects/project-3.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          These are a few little projects that i could publish to everyone.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laundryApp}
              isBlog={false}
              title="Laundry App"
              description="A web-based laundry application is a digital platform designed to streamline and automate laundry management processes. It allows users, such as customers and laundry service providers, to conveniently interact and conduct laundry-related activities online."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carwash}
              isBlog={false}
              title="Carwash "
              description="A web-based car wash application is an online platform that facilitates the scheduling and management of car wash services. It provides a convenient and user-friendly interface for customers to book car wash appointments, select desired services, and make payments online."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookRoom}
              isBlog={false}
              title="Booking Room"
              description="A web-based workspace booking application is an online platform designed to facilitate the reservation process for workspace rooms in a coworking space. This application allows users to easily book and manage their room reservations through a user-friendly interface."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
