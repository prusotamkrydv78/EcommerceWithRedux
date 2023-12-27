import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../actions/productAction";
import { Col, Container, Row } from "react-bootstrap";
import ProductScreen from "./ProductScreen";


const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProduct());
  }, []); 
  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
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
      )}
    </>
  );
};

export default HomeScreen;
