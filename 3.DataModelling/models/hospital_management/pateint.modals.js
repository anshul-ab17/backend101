import mongoose from "mongoose";

const pateintSchema =new mongoose.Schema({
  username:{
    type:String,
    require:true,
    unique:true,
    lowercase:true
  },
  diagonsedWith:{
    type:String,
    require:true,
  },
  address:{
    type:String,
    require:true
  },
  age:{
    age:Number,
    require:true
  },
  bloodGroup:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    enum:["male","female","other"],
    required:true
  },
  admittedIn:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  }
}, {timestamps:true});

export const Pateint =mongoose.model("Pateint",pateintSchema )