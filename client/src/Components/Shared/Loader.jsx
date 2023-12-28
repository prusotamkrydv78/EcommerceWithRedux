import React from "react";
import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <>
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "100px",
          hieght: "100px",
          margin: "auto",
          displa: "block",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
};

export default Loader;
