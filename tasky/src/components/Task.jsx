import React from "react";

const Task = (props) => {
  return (
    <div
      className="card"
      style={{ backgroundColor: props.done ? "lightgrey" : "#5bb4c4" }}
    >
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p className="description">
        {props.description ? "Description: " + props.description : ""}
      </p>
      {/* <p className="priority">{props.priority}</p> */}
      <div>
        {props.priority === "Low" && (
          <p className="priority-low">{props.priority}</p>
        )}

        {props.priority === "Medium" && (
          <p className="priority-medium">{props.priority}</p>
        )}

        {props.priority === "High" && (
          <p className="priority-high">{props.priority}</p>
        )}
      </div>
      <button onClick={props.markDone} className="doneButton">
        Done
      </button>
      <button className="deleteButton" onClick={props.deleteTask}>
        Delete
      </button>
    </div>
  );
};

export default Task;
