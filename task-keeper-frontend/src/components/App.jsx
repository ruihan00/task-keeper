import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/tasks";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}


function App() {
  const [db, setdb] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setdb(items);
      }
    });
    return () => (mounted = false);
  }, []);

  function addNote(title, content, deadline) {
    const index = db.length;
    const newNote = { title: title, body: content, deadline: deadline};
    axios.post(API_URL, newNote);
  }


  function deleteNote(note) {
    axios.delete(API_URL + "/delete" , {data: note});
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {db.map((entry, index) => (
        <Note
          key={index}
          id={index}
          onDelete={deleteNote}
          title={entry.title}
          content={entry.body}
          deadline ={entry.deadline}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
