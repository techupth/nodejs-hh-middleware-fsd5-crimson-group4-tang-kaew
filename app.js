import express from "express";
import bodyParser from "body-parser";
import assignmentRouter from "./apps/assignments.js";
import logging from "./middlewares/logging.js";

const app = express();
const port = 4000;

//use logging Middleware before other Routes
app.use(logging);

app.use(bodyParser.json());
app.use("/assignments", assignmentRouter);

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
