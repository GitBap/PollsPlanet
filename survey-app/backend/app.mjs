import express from "express";
import { usersAdmin } from "./routes/usersAdmin.mjs";
import { participantRouter } from "./routes/participants.mjs";
import { surveyRouter } from "./routes/surveys.mjs";

const app = express();

app.use(express.json());
app.use(express.static("public"));

// Create a proxy server to avoid the issues with access to fetch hasn't been blocked by cors policy
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// router entrance for administrator routes
app.use("/api/users", usersAdmin);

// router entrance for participant routes
app.use("/api/participant", participantRouter);

// router entrance for surveys routes
app.use("/api/surveys", surveyRouter);

// router entrance for admin resgistration routes
app.use("/api/admin", usersAdmin);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is operational on port: ${PORT}`);
});
