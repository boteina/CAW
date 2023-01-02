import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Contact from "./Contacts";
function Addcontact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  let history = useNavigate();
  const hundleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uniqueID = ids.slice(0, 8);
    let a = name,
      b = phone,
      c = email;
    Contact.push({ id: uniqueID, Name: a, Phone: b, Email: c });
    history("/Mycontacts");
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
        <span>C</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>t</span>
      </div>
      <div className="form1">
        <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
          <FormGroup className="mb-3" controlId="formName">
            <Form.Control
              className="place"
              type="test"
              placeholder="Enter Name"
              required
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </FormGroup>
          <FormGroup className="mb-3" controlId="formPhone">
            <Form.Control
              className="place"
              type="test"
              placeholder="Enter Phone"
              required
              onChange={(e) => setPhone(e.target.value)}
            ></Form.Control>
          </FormGroup>
          <FormGroup className="mb-3" controlId="formEmail">
            <Form.Control
              className="place"
              type="test"
              placeholder="Enter Email"
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
export default Addcontact;
