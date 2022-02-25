const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const gamesRouter = require("./routes/games/index");
const playersRouter = require("./routes/players/index");

app.use(express.json());
app.use(cors());
app.use("/", gamesRouter);
app.use("/", playersRouter);

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT} :-) !`);
});