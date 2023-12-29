import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { listProductDetails } from "../actions/productAction";

import Loading from "../Components/Shared/Loader";
import Message from "../Components/Shared/Message";
import { useNavigate, useParams } from "react-router-dom";

import {
  Col,
  Row,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../Components/Rating";
import { Link } from "react-router-dom";
import Loader from "../Components/Shared/Loader";
const ProductDetails = (props) => {
  const [qty, setQty] = useState(1);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const params = useParams();
  const productDetails = useSelector((state) => state.productDetails);
  console.log(productDetails);
  const { loading, error, product } = productDetails;
  console.log(product);
  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, [dispatch]);

  const addToCartHandler = () => {
navigate(`/cart/${params.id}?qty=${qty}`)
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="container my-2">
          <Link
            to="/"
            className="btn btn-light my-2  "
            style={{ borderRadius: "5px" }}
          >
            Go back
          </Link>
          <Row>
            <Col
              md={6}
              className="p-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                height="20vh"
                width="500"
                src={product.image}
                alt={product.name}
                fluid
              />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                  <Rating
                    value={product.rating}
                    text={`from ${product.numReviews} reviews`}
                  />
                </ListGroupItem>
                <ListGroupItem>Price: ${product.price}</ListGroupItem>
                <ListGroupItem>{product.description}</ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={2}>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroupItem>
              {product.countInStock > 0 && (
                <ListGroupItem>
                  Qty
                  <Row>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => {
                          return (
                            <option value={x + 1} key={x + 1}>
                              {x + 1}
                            </option>
                          );
                        })}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroupItem>
              )}
              <ListGroupItem>
                <Button
                  className="btn"
                  type="button"
                  onClick={addToCartHandler}
                >
                  Add to cart
                </Button>
              </ListGroupItem>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
