import React, { useState, useEffect } from "react";

export const EditNote = ({ editNote, currentNote, handleModal }) => {
  const { title, body, _id } = currentNote;
  const [note, setNote] = useState({ title, body });

  const handleChange = e => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    editNote(_id, note);
  };

  useEffect(() => {}, [note]);
  return (
    <div>
      <h2 className="text-center title">Edit note</h2>
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
          />
        </div>
        <button
          onClick={handleModal}
          className="btn btn-add btn-lg mb-2 btn-block"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
