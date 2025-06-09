import mongoose from "mongoose";

const orderitemSchema =new mongoose.Schema({
  product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"
  },
  quantity:{
    type:Number,
    require:true
  }
})

const orderSchema =new mongoose.Schema({
  orderPrice:{
    type:Number,
    require:true
  },
  customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  orderItems:{
    type:[orderitemSchema]
  },
  address:{
    type:String
  },
  status:{
    type:String,
    enum:["Pending", "Cancelled","Delivered"],
    default:"Pending"
  }
}, {timestamps:true});

export const Order =mongoose.model("Order", orderSchema)