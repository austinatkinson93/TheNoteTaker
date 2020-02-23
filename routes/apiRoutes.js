const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/api/notes", function (req, res) {
    let notes = fs.readFileSync("./db/db.json", "utf8");
    res.json(JSON.parse(notes))
});

router.post("/api/notes", function (req, res) {
    let notes = fs.readFileSync("./db/db.json", "utf8");
    let newNote = req.body;
    notes = JSON.parse(notes)
    notes.push(newNote)

    notes.forEach(function (element, i) {
        element.id = i;
    });

    fs.writeFileSync("./db/db.json", JSON.stringify(notes))
    console.log(notes)

    res.json(true)

});

router.delete("/api/notes/:id", function (req, res) {
    let notes = fs.readFileSync("./db/db.json", "utf8");
    notes = JSON.parse(notes)
    
    notes.forEach(function (element, i) {

        if (element.id === JSON.parse(req.params.id)) { 
            notes.splice(i, 1);
            console.log(notes)
        }
    });

    console.log(notes)
    fs.writeFileSync("./db/db.json", JSON.stringify(notes))

    res.json(true)
});

module.exports = router;