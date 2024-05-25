import mongoose, {  Schema, model } from 'mongoose';
const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  skills: { type: [String], required: false },
});

export default mongoose.models.User || model('User', userSchema);
