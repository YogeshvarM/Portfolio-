import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
        
        Hello! I am <a href="https://www.linkedin.com/in/yogeshvar-mugilvannan-70653a200/" className="purple">Yogeshvar M</a> from{' '}
        <span className="purple">Bengaluru, India</span>.
        Currently, I work as a System Designer at Alstom, Bengaluru, where I leverage my expertise in Python, Machine Learning, and AI to develop intelligent and scalable solutions for complex, data-driven challenges.        <br />
        <br />
        I hold a Master’s degree in Technology with a specialization in Big Data Analytics from VIT. My experience encompasses cutting-edge AI technologies, including Transformers, LLM fine-tuning, Retrieval-Augmented Generation (RAG), and AI Agents. I excel at bridging the gap between theoretical knowledge and practical implementation in AI and Machine Learning projects.
        </p>
          <p style={{ color: "rgb(155 126 172)", textAlign: "center" }}>
            "Growth is a continuous journey."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
