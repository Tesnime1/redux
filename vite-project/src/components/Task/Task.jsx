import React from "react";
import CheckBox from "../chekbox";
import DeleteTask from "../delettodo";

import "./style.css";

export default function Task({ title, description, isDone, id }) {
  return (
    <div className="task">
      <p>{title}</p>
      <p>{description}</p>
      <CheckBox isDone={isDone} id={id} />
      <DeleteTask id={id} />
    </div>
  );
}
