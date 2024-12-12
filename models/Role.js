import {model, Schema} from "mongoose"

const RoleSchema= new Schema({
     Name:{
        type:String,
        required:true,
     },
     Employees:[{
        type:Schema.Types.ObjectId,
        ref:"employee",
     }],
});
export const Role = model("role", RoleSchema)