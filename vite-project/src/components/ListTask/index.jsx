import React from "react";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import "./style.css";

export default function ListTask() {
  const Tasks = useSelector((state) => state.todos);
  console.log(Tasks);
  return (
    <div
      className="container
    "
    >
      {Tasks.map((el) => (
        <Task key={el.id} {...el} />
      ))}
    </div>
  );
}
