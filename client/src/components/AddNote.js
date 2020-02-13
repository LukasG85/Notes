import React, { useState } from "react";

const initialState = {
  title: "",
  body: ""
};

const validate = (note, setDisableBtn) => {
  if (note.title !== "" && note.body !== "") {
    setDisableBtn(false);
  }
};

export const AddNote = ({ postNote, handleModal }) => {
  const [note, setNote] = useState(initialState);
  const [disableBtn, setDisableBtn] = useState(true);

  const handleChange = e => {
    setNote({ ...note, [e.target.name]: e.target.value });
    validate(note, setDisableBtn);
  };

  const handleSubmit = e => {
    e.preventDefault();
    postNote(note);
    setNote(initialState);
  };

  return (
    <div>
      <h2 className="text-center title">Add a note</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="col-form-label-lg" htmlFor="title">
            Title
          </label>
          <input
            className="form-control form-control-lg form-bcg"
            type="text"
            id="title"
            onChange={handleChange}
            name="title"
            value={note.title}
            required
          />
        </div>
        <div className="form-group">
          <label className="col-form-label-lg" htmlFor="body">
            Note
          </label>
          <textarea
            className="form-control form-control-lg form-bcg"
            type="text"
            id="body"
            onChange={handleChange}
            name="body"
            value={note.body}
            rows="8"
            required
          />
        </div>
        <button
          className="btn btn-add btn-lg mb-2 btn-block "
          onClick={disableBtn ? null : handleModal}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
