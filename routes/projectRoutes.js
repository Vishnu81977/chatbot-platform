const express = require("express");
const Project = require("../models/Project");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Create project

router.post("/", auth, async (req, res) => {
  try {
    console.log("USER ID:", req.userId);
    console.log("BODY:", req.body);

    const { name, prompt } = req.body;

    const project = new Project({
      name,
      prompt,
      userId: req.userId
    });

    await project.save();

    res.status(201).json(project);
  } catch (error) {
    console.error("PROJECT ERROR:", error);
    res.status(500).json({ message: "Project creation failed ❌", error: error.message });
  }
});



// Get user's projects
router.get("/", auth, async (req, res) => {
  const projects = await Project.find({ userId: req.userId });
  res.json(projects);
});

module.exports = router;
