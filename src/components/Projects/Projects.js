import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import Portfolioo1 from "../../Assets/Projects/image.jpg";
import Portfolioo2 from "../../Assets/Projects/image (1).jpg";
import Portfolioo3 from "../../Assets/Projects/dec_transformer.png";
import Portfolioo4 from "../../Assets/Projects/b706199a-c446-47ee-b322-fce8cfc2e556_deepset_blog_FineTuning.jpg";

import FeastKart from "../../Assets/Projects//about.png";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolioo1}
              isBlog={false}
              title="Data Analysis Assistant"
              description="An interactive data analysis tool that combines the power of LLMs (using Groq) with data visualization to help users analyze their datasets through natural language conversations"
              ghLink="https://github.com/YogeshvarM/Data_Analysis_Assistant"
              //demoLink="https://feastkart.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolioo2}
              isBlog={false}
              title="RAG and Agent using Langflow"
              description="A sophisticated AI-powered customer service system that combines RAG (Retrieval Augmented Generation) with specialized agents to handle customer inquiries, order lookups, and product information requests."
              ghLink="https://github.com/YogeshvarM/RAG-and-Agents-using-Langflow" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolioo3}
              isBlog={false}
              title="Building Transformer from scratch using Pytorch"
              description="Built a transformer model from scratch using PyTorch implementing self-attention and decoder architecture for NLP tasks."
              ghLink="https://github.com/YogeshvarM/RAG-and-Agents-using-Langflow" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolioo4}
              isBlog={false}
              title="Finetuning LLM"
              description="Implemented parameter-efficient fine-tuning of LLaMA-2 using LoRA and 4-bit quantization for optimal performance"
              ghLink="https://github.com/YogeshvarM/RAG-and-Agents-using-Langflow" 
            />
          </Col>
    
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
