import mongoose, { Schema, model } from 'mongoose';
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    skills: { ref: 'Skills', type: [Schema.Types.ObjectId], required: false },
    projects: {
      ref: 'Projects',
      type: [Schema.Types.ObjectId],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || model('User', userSchema);
