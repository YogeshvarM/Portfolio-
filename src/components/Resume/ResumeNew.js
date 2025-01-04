import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const resumeLink = "https://drive.google.com/file/d/1Wna7fOA4E_f-i0hnvrHA7jFMCb4a2hl2/view?usp=sharing";
  const downloadLink = "https://drive.google.com/file/d/1Wna7fOA4E_f-i0hnvrHA7jFMCb4a2hl2/preview;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />


        <Row className="resume">
          <iframe
            src={downloadLink}
            width="100%"
            height="1150px"
            style={{ 
              border: "none",
              maxWidth: "850px",
              margin: "0 auto",
              display: "block",
              backgroundColor: "auto",
              borderRadius: "0px",
              boxShadow: "auto"
            }}
            title="resume"
            allowFullScreen
          />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
            className="download-button"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
