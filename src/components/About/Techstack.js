import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiPostgresql
} from "react-icons/di";
import {
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiPlotly
} from "react-icons/si";
import { 
  FaBrain,
  FaProjectDiagram
} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PyTorch">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="scikit-learn">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Pandas">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="NumPy">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Plotly">
        <SiPlotly />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Langchain">
        <FaBrain />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Langflow">
        <FaProjectDiagram />
      </Col>
    </Row>
  );
}

export default Techstack;
