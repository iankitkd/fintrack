import express from "express";
import cors from "cors";
import routes from "#/routes/index.js";
import cookieParser from "cookie-parser";
import { errorHandler } from "#/middleware/error.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use("/api/v1", routes);

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("FinTrack API is running");
});

export default app;
