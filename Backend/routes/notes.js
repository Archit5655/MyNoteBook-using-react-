const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
const Note = require("../modules/Note");
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });

    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured ");
  }
});
router.post(
  "/addnote",
  fetchuser,
  [
    body("description", "Enter minimum length").isLength({ min: 5 }),
    body("title", "Enter a valid titleof min length 3 ").isLength({ min: 3 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savednote = await note.save();

      res.json(savednote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured ");
    }
  }
);

//  update note
router.put(
  "/updatenote/:id",
  fetchuser,

  async (req, res) => {
    const { title, description, tag } = req.body;
    try {
      const newnote = {};
      if (title) {
        newnote.title = title;
      }
      if (description) {
        newnote.description = description;
      }
      if (tag) {
        newnote.tag = tag;
      }

      //  find the note to update
      let note = await Note.findById(req.params.id);
      if (!note) {
        res.status(404).send(" not found");
      }

      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("not allowed");
      }

      note = await Note.findByIdAndUpdate(
        req.params.id,
        { $set: newnote },
        { new: true }
      );
      res.json({ note });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured ");
    }
  }
);

router.delete(
  "/deletenote/:id",
  fetchuser,

  async (req, res) => {
  
    try {
      //  find the note to update
      let note = await Note.findById(req.params.id);
      if (!note) {
        res.status(404).send(" not found");
      }

      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("not allowed");
      }

      note = await Note.findByIdAndDelete(req.params.id);
      res.json({ Success: "note has been deleted" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured ");
    }
  }
);

module.exports = router;
