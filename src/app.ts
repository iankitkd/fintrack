import express from "express";
import cors from "cors";
import routes from "#/routes/index.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.send("FinTrack API is running");
});

export default app;
