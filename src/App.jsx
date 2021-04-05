import React, { useState } from "react";
import "./styles.css";
import Email from "./Email";
import Form from "./Form";
import Footer from "./Footer.js";
import Directions from "./Directions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  const [emails, setEmails] = useState([]);

  function addStudent(newName) {
    setEmails((prevNames) => {
      return [...prevNames, newName];
    });
  }

  return (
    <div className="App">
      <h1>Eazmail: Email made easy</h1>
      <h3>Personalized emails in minutes!</h3>
      <Container fluid className="viewScreen">
        {/* xs={1} md={1} lg={3} */}
        <Row>
          <Col md={12} lg={4}>
            <Directions />
          </Col>
          <Col md={12} lg={8}>
            <Form onAdd={addStudent} />
          </Col>
        </Row>
      </Container>
      {emails.map((studentName, index) => {
        return (
          <Email
            key={index}
            id={index}
            name={studentName.name}
            gender={studentName.gender}
            text={studentName.text}
          />
        );
      })}
      <Footer />
    </div>
  );
}

