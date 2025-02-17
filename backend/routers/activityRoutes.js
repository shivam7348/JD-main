import express from "express";
import upload from "../middleware/upload.js";
import {
  getActivities,
  postActivity,
  updateActivity,
  deleteActivity,
} from "../controllers/activityController.js";

const router = express.Router();

router.get("/", getActivities);
router.post("/", upload.single("image"), postActivity); // Upload image
router.put("/:id", upload.single("image"), updateActivity); // Upload updated image
router.delete("/:id", deleteActivity);

export default router;
