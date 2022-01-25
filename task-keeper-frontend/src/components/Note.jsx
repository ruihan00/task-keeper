import React, { useState } from "react";

function Note(props) {
  const [isDone, setIsDone] = useState(false);
  const data = {title: props.title, body: props.content, deadline: props.deadline};
  function handleClick(event) {
    props.onDelete(data);
  }

  function toggleDone() {
    setIsDone(!isDone);
  }
  return (
    <div className="note">
      <h1 style = {{textDecoration : isDone? "line-through" : "none"}} >{props.title}</h1>
      <p style = {{textDecoration : isDone? "line-through" : "none"}}>{props.content}</p>
      <p style = {{textDecoration : isDone? "line-through" : "none"}}>{props.deadline}</p>
      <button onClick={toggleDone}>{isDone? "UNDO": "DONE"}</button>
      <button>EDIT</button>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
