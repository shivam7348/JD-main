import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is required"], trim: true },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    image: { type: String, required: [true, "Image is required"], trim: true }, // Stores image URL
  },
  { timestamps: true }
);

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;
