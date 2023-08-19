import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDatabase } from "./src/database/db.js";

import teacherRoute from "./src/routes/teacherRoute.js";
import studentRoute from "./src/routes/studentRoute.js";
import classRoute from "./src/routes/classRoute.js";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

connectToDatabase();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/teacher", teacherRoute);
app.use("/student", studentRoute);
app.use("/class", classRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});