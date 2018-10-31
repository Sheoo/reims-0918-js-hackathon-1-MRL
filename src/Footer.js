import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "reactstrap";

const Footer = () => (
  <Container fluid>
    <Row>
      <Col className="text font" sm="6">
        Made with <span className="heart">❤</span> by Robin - Michael -{" "}
        Leuthsouline
      </Col>
    </Row>
  </Container>
);

export default Footer;
