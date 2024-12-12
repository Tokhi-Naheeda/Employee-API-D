import {Router} from "express"
import {Employee} from "../models/Employee.js"

export const employeeRouter= Router();

//Get endpoints
employeeRouter.get("/", async (req, res) => {
    try {
      if (req.query.full === "true") {
        const employees = await Employee.find()
          .populate("contactAddress")
          .populate("office")
          .populate("roles");
        res.json(employees);
      } else {
        const employees = await Employee.find();
        res.json(employees);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  