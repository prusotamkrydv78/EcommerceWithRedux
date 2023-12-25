import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <span>Copyright &copy; MadhesiCoder</span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
