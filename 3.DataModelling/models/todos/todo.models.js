import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  content:{
    type:String,
    requie:true,
  },
  complete:{
    type:Boolean,
    default:false  
  },
  createdby:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  subTodo:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"subTodo"}
  ]

  
},{timestamps:true})

export const Todo = mongoose.model("Todo", todoSchema);
