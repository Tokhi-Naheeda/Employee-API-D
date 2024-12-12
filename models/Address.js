import {model, Schema} from "mongoose"

const AddressSchema= new Schema({
     StreetName:{
        type:String,
        required:true,
     },
     StreetNumber:{
        type:String,
        required:true,
     },
     AreaCode:{
        type:Number,
        required:true,
     },
     City:{
        type:String,
        required:true,
     },
});
export const Address = model("address", AddressSchema)

//Q:  Research: Why would it be good to separate the address into multiple fields?

//A:
//Better validation (e.g., ensure areaCode is a number).
//Easier querying/filtering (e.g., find all employees in a specific city or area code).
//Flexibility for future features (e.g., supporting international addresses).