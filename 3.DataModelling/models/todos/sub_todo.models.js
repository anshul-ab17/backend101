import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
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
    } 
  },
  { timestamps: true }
);
 

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);
