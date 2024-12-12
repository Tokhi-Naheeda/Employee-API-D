import express from "express"
import { connect } from "./connect.js";
import {employeeRouter} from "./routes/employeeRouter.js";
import {roleRouter} from "./routes/roleRouter.js";
import {officeRouter} from "./routes/officeRouter.js";
import dotenv from "dotenv"
dotenv.config();

const PORT = process.env.PORT || 3010;
const app = express();
await connect();

app.use(express.json());
app.use("/employee", employeeRouter);
app.use("/role", roleRouter);
app.use("/office", officeRouter);

// start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

