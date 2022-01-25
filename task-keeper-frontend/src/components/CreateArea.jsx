import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setInput((prev) => ({ ...prev, [name]: value }));
  }
  function submit(event) {
    props.onAdd(input.title, input.content, input.deadline);
    setInput({title: "", content: ""})
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={input.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={input.content}
        />
        <input
          onChange={handleChange}
          name = "deadline"
          type={"date"}
        />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
