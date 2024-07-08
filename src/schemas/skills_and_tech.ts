import mongoose from 'mongoose';

const Skills = new mongoose.Schema(
  {
    name: String,
    category: String,
    img: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.skills || mongoose.model('skills', Skills);
