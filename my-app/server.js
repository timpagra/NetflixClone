const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const app = express();


app.use("/ping", (req, res) => {
  res.status(200).json({"pong": "hi there"})
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))