import React from "react";
import "./App.css";

function Todo(props) {
  return <div className="member-item">{props.text}</div>;
}

export default Todo;
