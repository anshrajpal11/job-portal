import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name : {type:String,required:true},
  email : {type:String,required:true,unique:true},
  password : {type:String,required:true},
  image : {type:String,required:true},
  skills: {type:Array,required:true},
  applications :[{type:mongoose.Schema.Types.ObjectId,ref:'Job'}],
  role:{type:String , default:"employee"}
})


const employeeModel = mongoose.model('Employee',employeeSchema);
export default employeeModel;