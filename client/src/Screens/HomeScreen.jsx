import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../actions/productAction";
import { Col, Container, Row } from "react-bootstrap";
import ProductScreen from "./ProductScreen";
import Loader from "../Components/Shared/Loader";
import Message from "../Components/Shared/Message";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  console.log(products)
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
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
