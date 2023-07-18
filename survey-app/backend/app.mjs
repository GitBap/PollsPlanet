import express from "express";
import pool from "./db.js";
import usersAdmin from "./routes/usersAdmin.mjs";
import polls from "./routes/polls.mjs";

const app = express();

app.use(express.json());
app.use(express.static("public"));

// Create a proxy server to avoid the issues with access to fetch hasn't been blocked by cors policy
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//router entrance for administrators function
app.use("/api/users", usersAdmin);
//router entrance for polls
app.use("/api/polls", polls);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is started and listenning at port: ${PORT}`);
});
