import React from "react";

const Task = props => {
  const style = {
    color: "red"
  };

  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div className="task">
        <p>
          <strong style={important ? style : null}>{text}</strong>{" "}
          <span>- do {date} </span>
          <button onClick={() => props.change(id)}>Zostało zrobione</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div className="completed">
        <p>
          <strong>{text}</strong>
          <em> (zrobić do {date})</em>
          <br />- potwierdzenie wykonania<span> {finish}</span>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
