import mongoose from "mongoose";

const doctorSchema =new mongoose.Schema({
  username: {
    type: Stirng,
    require: true
  },
  salary:{
    type: Stirng,
    require: true
  },
  qualification:{
    type: Stirng,
    require: true
  },
  experience:{
    type: Number,
    default:0
  },
  workInHospital:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Hospital"
    }
  ]
}, {timestamps:true});

export const Doctor =mongoose.model("Doctor", doctorSchema)