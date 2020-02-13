import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Modal from "react-modal";
import { Note } from "./components/Note";
import { AddNote } from "./components/AddNote";
import modalImg from "./img/texture2.jpg";

Modal.setAppElement("#root");

function App() {
  const [notes, setNotes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const getNotes = () => {
    axios.get(`http://localhost/api`).then(res => {
      setNotes(res.data);
    });
  };

  const postNote = note => {
    axios.post(`http://localhost/api`, note).then(() => {
      getNotes();
    });
  };

  const deleteNote = id => {
    axios.delete(`http://localhost/api/${id}`).then(() => {
      getNotes();
    });
  };
  const editNote = (id, note) => {
    axios
      .put(`http://localhost/api/${id}`, {
        title: note.title,
        body: note.body
      })
      .then(() => {
        getNotes();
      });
  };
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center ">
        <button className="btn btn-add btn-lg add-btn" onClick={handleModal}>
          Add Note
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleModal}
          style={{
            overlay: { backgroundColor: "grey" },
            content: {
              top: "10%",
              left: "10%",
              right: "10%",
              bottom: "10%",
              backgroundImage: `url(${modalImg})`
            }
          }}
          closeTimeoutMS={300}
        >
          <AddNote postNote={postNote} handleModal={handleModal} />
        </Modal>
      </div>
      <div className="row">
        <div className="card-columns">
          {notes.map(note => (
            <Note
              key={note._id}
              note={note}
              deleteNote={deleteNote}
              editNote={editNote}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
