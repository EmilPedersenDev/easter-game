require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./service/dbSettings");

const Port = process.env.PORT;
const app = express();

const corsOptions = {
  origin: process.env.GAME_URL,
};

app.use(cors(corsOptions));
app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to easter game server",
  });
});

require("./controllers/users")(app);

app.listen(Port, () => {
  console.log("Runnig server");
});
