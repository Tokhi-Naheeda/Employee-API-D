import {Router} from "express";
import { Role } from "../models/Role.js";
import { Employee } from "../models/Employee.js";

export const roleRouter = Router();

// GET /role -return roles and include employees who have the roles
roleRouter.get("/", async (req, res) => {
  try {
    if (req.query.full === "true") {
      const roles = await Role.find().populate("employees");
      res.json(roles);
    } else {
        //return all employees (no reference data included)
      const roles = await Role.find();
      res.json(roles);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /role/:id/employees - return all employees that have the given role
roleRouter.get("/:id/employees", async (req, res) => {
  try {
    const employees = await Employee.find({ roles: req.params.id });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


