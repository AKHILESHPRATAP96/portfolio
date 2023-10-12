import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { skills } from "./db-skills";
import "./skills.css";

const Skills = () => {
  return (
    <div className="pt-3 pb-3 container-fluid " id="skills">
      <h1 className="text-center font-details-b pb-4 text-warning" style={{ color: "yellow", fontWeight: "bold" }}>
        TECH SKILLS
      </h1>

      {Object.keys(skills).map((category, index) => (
        <div key={index}>
          <h2 className="text-center skill-category">{category}</h2>
          <Row>
            {skills[category].map((skill, skillIndex) => (
              <Col xs={12} sm={6} md={4} lg={3} key={skillIndex}>
                <Card className="skill-card mb-2">
                  <Card.Body>
                    <Card.Title className="text-center card-title">{skill.skillName}</Card.Title>
                    <hr />
                    <Card.Text className="card-text">
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" /> {skill.skillName}
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Skills;
