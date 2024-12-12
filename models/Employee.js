import {model, Schema} from "mongoose"
import {Address} from "./Address.js"
import {Office} from "./Office.js"
import {Role} from "./Role.js"

const EmployeeSchema= new Schema({
     FullName:{
        type:String,
        required:true,
     },
     Position:{
        type:String,
        required:true,
     },
     Email:{
        type:String,
        required:true,
        unique:true,
     },
     ContactAddress:{
        type:Schema.Types.ObjectId,
        ref: Address,
        required:true
     },
     Office:{
        type:Schema.Types.ObjectId,
        ref: Office,
        required:true
     },
     Roles:[{
        type:Schema.Types.ObjectId,
        ref: Role,
        required:true
     }]
});
export const Employee = model("employee", EmployeeSchema)