import mongoose from "mongoose";
import dotenv from "dotenv"
import {Employee} from "./models/Employee.js"
import {Address} from "./models/Address.js"
import {Office} from "./models/Office.js"
import {Role} from "./models/Role.js"
import {connect} from "./connect.js"

dotenv.config();

async function seed() {
    try{
    await connect();
// Delete existing data (optional)

    await Employee.deleteMany();
    await Address.deleteMany();
    await Office.deleteMany();
    await Role.deleteMany();
    console.log("Existing data cleared");

//Add roles
const rolesNames= ["Developer", "Manager", "Marketing", "HR", "Management"];
const roles= await Role.insertMany(rolesNames.map(Name =>({Name})));
console.log("Roles seeded",  roles.map(r => r.Name).join(", "));

// Add offices
const offices= await Office.insertMany([
    {StreetNameAndNumber: "123 Main St", AreaCode: "12345", City: "Frankfurt" },
    {StreetNameAndNumber: "456 Elm St", AreaCode: "67890", City: "Mainz" },
    {StreetNameAndNumber: "789 Oak St", AreaCode: "11223", City: "Wiesbaden" },
]);
console.log("Offices seeded:", offices.map(o => o.StreetNameAndNumber).join(", "));

// Add employees and addresses
const employees= [];
for(let i=0; i<15; i++){
    const address = await Address.create({
        StreetName:`Street ${String.fromCharCode(65 + i)}`, // 'A', 'B', 'C', etc.
        StreetNumber: `${i + 1}`,
        AreaCode: 10000 + i,
        City: `City${i % 3}`,
    });
    const employee=new Employee({
        FullName: `Employee ${i + 1}`,
        Position: `Position ${i % 5}`,
        Email: `employee${i + 1}@example.com`,
        ContactAddress: address._id,
        Office: offices[i % offices.length]._id,
        Roles: [roles[i % roles.length]._id], 
    });
    employees.push(employee);
}
await Employee.insertMany(employees);
console.log("Employees seeded:", employees.length);
await mongoose.disconnect();
console.log("Database seeding completed and connection closed!");
} catch (error) {
console.error("Error during database seeding:", error);
}
}
seed().then(() => process.exit(0));