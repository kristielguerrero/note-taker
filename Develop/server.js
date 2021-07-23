const htmlRoutes = require("./Routes/html-files");
const apiRoutes = require("./Routes/apiRoutes");
console.log(htmlRoutes);
const express = require("express");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

apiRoutes(app);
htmlRoutes(app);
app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
