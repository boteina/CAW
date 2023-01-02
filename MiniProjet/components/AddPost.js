import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Posts from "./Posts";
function Addpost() {
  const [subject, setName] = useState("");
  const [description, setPhone] = useState("");
  const [date, setEmail] = useState("");

  let history = useNavigate();
  const hundleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uniqueID = ids.slice(0, 8);
    let a = subject,
      b = description,
      c = date;
    Posts.push({ id: uniqueID, Subject: a, Description: b, Date: c });
    history("/Myposts");
  };
  return (
    <div>
      <div className="text-box1">
        <span>A</span>
        <span>d</span>
        <span>d</span>
        <span>N</span>
        <span>e</span>
        <span>w</span>
        <span>P</span>
        <span>o</span>
        <span>s</span>
        <span>t</span>
      </div>
      <div className="form1">
        <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
          <FormGroup className="mb-3" controlId="formName">
            <Form.Control
              className="place"
              type="test"
              placeholder="Enter Subject"
              required
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </FormGroup>
          <FormGroup className="mb-3" controlId="formPhone">
            <Form.Control
              className="place"
              type="test"
              placeholder="Enter Description"
              required
              onChange={(e) => setPhone(e.target.value)}
            ></Form.Control>
          </FormGroup>
          <FormGroup className="mb-3" controlId="formEmail">
            <Form.Control
              className="place"
              type="date"
              placeholder="Enter Date"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </FormGroup>
          <Button
            className="add"
            onClick={(e) => hundleSubmit(e)}
            type="submit"
          >
            Add
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default Addpost;
