import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div className="input-area">
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={note.content}
        />
        <button onClick={() => {
          props.handleSubmit(note);
          setNote(() => ({
            title: "",
            content: ""
          }));
        }}>+</button>
    </div>
  );
}

export default CreateArea;
