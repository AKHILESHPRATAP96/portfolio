import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion"

import { skills } from "./db-skills";
import "./skills.css";
import { Container } from "react-bootstrap";

const Skills = () => {
  return (
    <Container className="pt-3 pb-3  " id="skills">
         <motion.div
      initial={{ opacity: 0,scale:.8 }}
      whileInView={{ opacity: 1 ,scale:1}}
      transition={{duration:1.2}}>
      <h1 className="text-center font-details-b pb-4 text-warning" style={{ color: "yellow", fontWeight: "bold" }}>
        TECH SKILLS
      </h1>

      {Object.keys(skills).map((category, index) => (
        <Container fluid key={index}>
          <h2 className="text-center skill-category">{category}</h2>
          <Row>
            {skills[category].map((skill, skillIndex) => (
              <Col xs={12} sm={6} md={4} lg={3} key={skillIndex} id="cardxx">
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
        </Container>
      ))}
    </motion.div>
    </Container>
  );
};

export default Skills;
