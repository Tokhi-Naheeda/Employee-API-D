import {Router} from "express";
import { Office } from "../models/Office.js";
import { Employee } from "../models/Employee.js";

export const officeRouter = Router();

// GET /office - return all offices (no reference data included)
officeRouter.get("/", async (req, res) => {
  try {
    const offices = await Office.find();
    res.json(offices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /office/:id/employees - return all employees that have the given office
officeRouter.get("/:id/employees", async (req, res) => {
  try {
    const employees = await Employee.find({ office: req.params.id });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

