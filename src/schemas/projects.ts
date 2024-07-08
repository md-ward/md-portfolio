import mongoose from 'mongoose';

const Projects = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    description: String,
    liveDemo: String,
    main_image_url: String,
    images_url: [String],
    skills: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Skills', required: false },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Projects || mongoose.model('Projects', Projects);
