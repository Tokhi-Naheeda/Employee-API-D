# Employee Registry API

The Employee Registry API is a backend application designed to manage employees, their roles, addresses, and office locations for an organization. This project demonstrates how to build relationships between entities in a MongoDB database using Mongoose and provides a simple API to interact with the data.

---

## Features

- Manage employees with essential details like name, email, position, address, and office location.
- Separate address management into a structured format for scalability.
- Track multiple roles for employees with many-to-many relationships.
- Associate employees with office locations and manage hierarchical office-employee relationships.
- Seed the database with test data for quick testing.
- Simple API with **GET** endpoints to fetch employee, role, and office data with or without related entities.

---

## Project Overview

This project leverages the following technologies:

- **Node.js**: Backend runtime for the API.
- **Express**: Framework for building the API endpoints.
- **MongoDB**: NoSQL database for storing the employee registry data.
- **Mongoose**: ODM for structuring the MongoDB models and managing relationships.
- **dotenv**: For managing environment variables (e.g., database connection string).

---

## Database Design

### Employee
- **Fields**: Full name, position, email, address (reference to `Address`), office (reference to `Office`), roles (references to `Role`).
- **Relationships**:
  - One employee has one contact address.
  - One employee belongs to one office.
  - One employee can have multiple roles.

### Address
- **Fields**: Street name, street number, area code, city.
- **Purpose**: Structured representation of an employee's address.

### Office
- **Fields**: Street name and number, area code, city.
- **Relationships**:
  - One office can have multiple employees.

### Role
- **Fields**: Name, list of employees (references to `Employee`).
- **Relationships**:
  - One role can be assigned to multiple employees.
  - One employee can have multiple roles.

---

## Seed Data

A seeder script is provided to populate the database with the following sample data:

- **Roles**: Developer, Manager, Marketing, HR, Management.
- **Offices**: Three office locations in different cities.
- **Employees**: 15 employees with unique addresses and a mix of roles, all assigned to one office.

### Endpoints

  - `GET /employee` - return all employees (no reference data included)
  - `GET /employee?full=true` - return all employees including address, office and roles

  - `GET /role` - return all roles (no reference data included)
  - `GET /role?full=true` - return roles and include employees who have the roles
  - `GET /role/:id/employees` - return all employees that have the given role

  - `GET /office` - return all offices (no reference data included)
  - `GET /office/:id/employees` - return all employees that have the given office

## How to run the project:
1:  Clone the repository:
```bash
git clone <repository_url>
cd <repository_folder>
``` 
2: Install dependencies:
```bash
npm install
``` 
3: Set up the .env file:
```bash
MONGO_URI=your-mongo-uri
PORT=3000
``` 
4: Start the server:
```bash
node --watch server.js
``` 
5:Run the seeder script to populate the database:
```bash
node --watch seeder.js
``` 
