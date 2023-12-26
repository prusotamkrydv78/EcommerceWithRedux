import React, { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import ProductScreen from "./ProductScreen";
import axios from "axios";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios({
          method: "get",
          url: `http://localhost:5000/api/products`,
        });
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Container>
        <Row>
          {products.map((product) => {
            return (
              <Col md={3} className="my-2" key={product._id}>
                <ProductScreen product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
