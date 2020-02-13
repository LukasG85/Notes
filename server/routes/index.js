const express = require("express");
const Note = require("../models/index");
const router = express.Router();

router.get("/", (req, res) => {
  Note.find({}, (err, data) => {
    res.json(data);
  });
});

router.get("/:id", (req, res) => {
  Note.findById(req.param.id, (err, data) => {
    res.json(data);
  });
});

router.delete("/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted" });
});

router.post("/", (req, res) => {
  note = new Note({
    title: req.body.title,
    body: req.body.body
  });
  note.save(() => {
    res.json(note);
  });
});

router.put("/:id", async (req, res) => {
  await Note.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "updated" });
});

module.exports = router;
