import Activity from "../models/ActivityModel.js";
import mongoose from "mongoose";
import fs from "fs"; // File system module

// Get all activities
export const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (error) {
    console.error("Error fetching activities:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new activity with image upload
export const postActivity = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description || !req.file) {
      return res
        .status(400)
        .json({ error: "All fields including image are required" });
    }

    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
      req.file.filename
    }`; // Get full URL

    const newActivity = new Activity({ title, description, image: imageUrl });
    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    console.error("Error creating activity:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update an activity
export const updateActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid activity ID" });
    }

    const updatedFields = { title, description };
    if (req.file) {
      updatedFields.image = `${req.protocol}://${req.get("host")}/uploads/${
        req.file.filename
      }`;
    }

    const updatedActivity = await Activity.findByIdAndUpdate(
      id,
      updatedFields,
      { new: true }
    );

    if (!updatedActivity) {
      return res.status(404).json({ error: "Activity not found" });
    }

    res.status(200).json(updatedActivity);
  } catch (error) {
    console.error("Error updating activity:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete an activity
export const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid activity ID" });
    }

    const deletedActivity = await Activity.findByIdAndDelete(id);

    if (!deletedActivity) {
      return res.status(404).json({ error: "Activity not found" });
    }

    // Delete image file from server
    if (deletedActivity.image) {
      const imagePath = `uploads/${
        deletedActivity.image.split("/uploads/")[1]
      }`;
      fs.unlink(imagePath, (err) => {
        if (err) console.error("Error deleting image:", err);
      });
    }

    res.status(200).json({ message: "Activity deleted successfully" });
  } catch (error) {
    console.error("Error deleting activity:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
