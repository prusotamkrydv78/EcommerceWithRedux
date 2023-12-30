import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, childern ,text}) => {
  return (
    <>
      <Alert variant={variant}>{childern} {text}</Alert>
    </>
  );
};

export default Message;
