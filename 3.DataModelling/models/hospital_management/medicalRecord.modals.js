import mongoose from "mongoose";

const medicalRecordSchema =new mongoose.Schema({
  pateint: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Pateint",
    require: true
  }
}, {timestamps:true});

export const MedicalRecord =mongoose.model("MedicalRecord", medicalRecordSchema)