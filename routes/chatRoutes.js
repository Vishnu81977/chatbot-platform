const express = require("express");
const auth = require("../middleware/authMiddleware");
const Project = require("../models/Project");

const router = express.Router();

router.post("/:projectId", auth, async (req, res) => {
  try {
    const { message } = req.body;
    const { projectId } = req.params;

    if (!message) {
      return res.status(400).json({ message: "Message required ❌" });
    }

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found ❌" });
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5000",
        "X-Title": "Chatbot Project"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages: [
          { role: "system", content: project.prompt },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();

console.log("OPENROUTER STATUS:", response.status);
console.log("OPENROUTER RESPONSE:", JSON.stringify(data, null, 2));

if (!response.ok) {
  return res.status(500).json({
    message: "OpenRouter API error ❌",
    error: data
  });
}

if (!data.choices || !data.choices[0]) {
  return res.status(500).json({
    message: "No AI response ❌",
    error: data
  });
}


    res.json({
      reply: data.choices[0].message.content
    });

  } catch (error) {
    console.error("CHAT ERROR:", error);
    res.status(500).json({ message: "Chat failed ❌" });
  }
});

module.exports = router;
