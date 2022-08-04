const express = require("express");
const serverless = require("serverless-http");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
require("dotenv").config();
const gamesRouter = require("./routes/games/index");
const playersRouter = require("./routes/players/index");

app.use(express.json());
app.use(cors());

// mongoose test
const mongoose = require("mongoose");

// mongoose.connect(process.env.DATABASE_URL);

const Game = require("./models/game");

app.get("/", async (request, response) => {
  console.log("hey");
  response.send({ hello: "world" });
});

//mongoose test

app.use("/.netlify/functions/api", gamesRouter);
app.use("/.netlify/functions/api", playersRouter);

// module.exports.handler = serverless(app);

// exports.connect = async function () {
//   if (conn == null) {
//     conn = mongoose
//       .connect(process.env.DATABASE_URL, {
//         serverSelectionTimeoutMS: 5000,
//       })
//       .then(() => mongoose);

//     // `await`ing connection after assigning to the `conn` variable
//     // to avoid multiple function calls creating new connections
//     await conn;
//   }

//   return conn;
// };

const handler = serverless(app);
module.exports.handler = async (event, context) => {
  mongoose.connect(process.env.DATABASE_URL);
  // you can do other things here
  const result = await handler(event, context);
  // and here
  return result;
};

// app.use(`/.netlify/functions/api`, router);
// app.use(express.static("public"));

// app.listen(process.env.PORT || PORT, () => {
//   console.log(`Express server listening on ${PORT} :-) !`);
// });
