import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: Stirng,
      require: true,
      lowerCase: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      lowerCase: true,
      unique: true,
    },
    password: {
      type: String,
      require: [true, 'password required'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
