import mongoose from 'mongoose';

const Projects = new mongoose.Schema({
  name: String,
  description: String,
  liveDemo: String,
  tags: [String],
  imageUrl: String,
});

export default mongoose.models.Projects || mongoose.model('Projects', Projects);
