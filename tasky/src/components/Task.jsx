import React from "react";

const Task = (props) => {
  return (
    <div className="card">
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
    </div>
  );
};

export default Task;
