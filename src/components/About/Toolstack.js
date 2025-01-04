import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiVisualstudiocode,
  SiGithub,
  SiMicrosoftazure,
  SiJupyter,
  SiStreamlit,
  SiAmazonaws,
  SiOpenai,
  SiChatbot
} from "react-icons/si";
import { DiGit } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft Azure">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Amazon Web Services">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jupyter Notebook">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Streamlit">
        <SiStreamlit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="OpenAI">
        <SiOpenai />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Chatbot">
        <SiChatbot />
      </Col>
    </Row>
  );
}

export default Toolstack;
