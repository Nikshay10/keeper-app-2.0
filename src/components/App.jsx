import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote, event) {
    setNotes((prev) => [...prev, newNote]);
    console.log(notes);
  }

  function deleteNote(id) {
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
    console.log(notes);
  }

  return (
    <div>
      <Header />
      <CreateArea handleSubmit={addNote} />
      {notes.map((note, index) => (
        <Note
          id={index}
          title={note.title}
          content={note.content}
          handleClick={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
