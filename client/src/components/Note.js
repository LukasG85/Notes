import React, { useState } from "react";
import Modal from "react-modal";
import { EditNote } from "./EditNote";
import modalImg from "../img/texture2.jpg";

export const Note = ({ note, deleteNote, editNote }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { title, body, _id } = note;

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title text-center">{title}</h2>
        <p className="card-text text-justify">{body}</p>
        <div className="container">
          <div className="row justify-content-between">
            <button
              className="btn btn-delete btn-note"
              onClick={() => deleteNote(_id)}
            >
              Delete
            </button>
            <button className="btn btn-edit btn-note" onClick={handleModal}>
              Edit
            </button>
          </div>
        </div>

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
          <EditNote
            id={_id}
            editNote={editNote}
            currentNote={note}
            handleModal={handleModal}
          />
        </Modal>
      </div>
    </div>
  );
};
