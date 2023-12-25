import React from "react";
import Products from "../products";
import { Col, Container, Row } from "react-bootstrap";
import ProductScreen from "./ProductScreen";
const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row>
          {Products.map((product) => {
            return (
              <Col md={3} className="my-2" key={product._id}>
                <ProductScreen Product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
