import {model, Schema} from "mongoose"

const OfficeSchema= new Schema({
     StreetNameAndNumber:{
        type:String,
        required:true,
     },
     AreaCode:{
        type:String,
        required:true,
     },
     City:{
        type:String,
        required:true,
     },
});
export const Office = model("office", OfficeSchema)