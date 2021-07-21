// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
// You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

// const generateUniqueId = require("generate-unique-id");
const { v4: uuidv4 } = require("uuid");
const newId = uuidv4();

const fs = require("fs");

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (error, data) => {
      if (error) {
        return error;
      } else {
        res.send(data);
      }
    });
  });
};
