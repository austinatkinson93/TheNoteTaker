const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/api/notes", function (req, res) {
    let notes = fs.readFileSync("./db/db.json", "utf8");
    console.log(notes)
    res.json(JSON.parse(notes))
});

router.post("/api/notes", function (req, res) {
    let newNote = req.body
    console.log(newNote)
    
});

router.delete("/api/notes/:id", function (req, res) {
    //req.params.id
});

module.exports = router;