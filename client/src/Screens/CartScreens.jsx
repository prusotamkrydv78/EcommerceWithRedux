import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Message from "../Components/Shared/Message";
const CartScreens = () => {
  const params = useParams();
  const location = useLocation();
  const navigate= useNavigate()
  const productId = params.id;
  console.log(productId);
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);
  const removeFromCartHandler = (id) => {
    console.log("reove", id);
  };
  const checkout = ()=>{
    navigate("/login?redirect-shipping")
  }
  return (
    <>
      <Row>
        <Col md={8}>
          <h1>Shoping Cart</h1>
          {cartItems.length === 0 ? (
            <div className="p-2 m-5" key={cartItems.id}>
              <Message text="Your Cart is Empty"></Message>
              <Link to="/">Go Back</Link>
            </div>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => {
                return (
                  <ListGroupItem key={item.id}>
                    <Row key={item.id}>
                      <Col md={2}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={3}>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={2}>${item.price}</Col>
                      <Col md={2} style={{ height: "20" }}>
                        <Form.Control
                          as="select"
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => {
                            return (
                              <option value={x + 1} key={x + 1}>
                                {x + 1}
                              </option>
                            );
                          })}
                        </Form.Control>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          <i className="fa fa-trash" aria-hidden="true" />
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h3>
                  subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h3>
                <h4>
                  {" "}
                  $
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </h4>
              </ListGroupItem>
              <Button
                type="button"
                className="btn-block "
                disabled={cartItems.length === 0}
                onClick={checkout}
              >
               Proceed To checkout
              </Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartScreens;
