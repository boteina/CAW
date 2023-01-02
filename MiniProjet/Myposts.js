import "./App.css";
import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import Posts from "./components/Posts";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
function Myposts() {
  let history = useNavigate();
  const hundleDelete = (id) => {
    var index = Posts.map(function (e) {
      return e.id;
    }).indexOf(id);
    Posts.splice(index, 1);
    history("");
  };

  // Question 6 de bonus
  function Display(props) {
    return <label>{props.message}</label>;
  }
  function ButtonIncrement(props) {
    return (
      <button className="boutton" onClick={props.onClickFunc}>
        <FaHeart />
      </button>
    );
  }
  const [counter, setCounter] = useState(0);
  const incrementCounter = (id) => {
    setCounter(counter + 1, id);
  };
  // Question 7 de bonus
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
  return (
    <Fragment>
      <div className="text-box1">
        <span>P</span>
        <span>o</span>
        <span>s</span>
        <span>t</span>
        <span>s</span>
        <span>L</span>
        <span>i</span>
        <span>s</span>
        <span>t</span>
      </div>
      <div className="table">
        <Link className="d-grid gap-3" to={"/create2"}>
          <Button size="lg" className="create">
            Create new post
          </Button>
        </Link>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {Posts && Posts.length > 0
              ? Posts.map((item) => {
                  return (
                    <tr>
                      <td>{item.Subject}</td>
                      <td>{item.Description}</td>
                      <td>{item.Date}</td>
                      <td>
                        <div className="main-container">
                          <div className="comment-flexbox">
                            <textarea
                              value={comment}
                              onChange={onChangeHandler}
                              className="input-box"
                            />
                            <button
                              onClick={() => onClickHandler(item.id)}
                              className="comment-button"
                            >
                              Comment
                            </button>
                          </div>
                          {comments.map((text) => (
                            <div className="comment-container">{text}</div>
                          ))}
                        </div>
                      </td>
                      <td>
                        <ButtonIncrement
                          onClickFunc={() => incrementCounter(item.id)}
                        />
                        <Display message={counter} />
                        <Button
                          className="boutton"
                          onClick={() => hundleDelete(item.id)}
                        >
                          <FaRegTrashAlt />
                        </Button>
                        &nbsp;
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}

export default Myposts;
