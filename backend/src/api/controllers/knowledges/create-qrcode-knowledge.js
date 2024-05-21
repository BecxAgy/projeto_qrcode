import express from "express";
import KnowledgeModel from "../../../models/KnowledgeModel.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const { title, description, categoryId } = req.body;

    if (!title || !description || !categoryId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const knowledgeExists = await KnowledgeModel.findOne({ where: { title } });

    if (knowledgeExists) {
      return res.status(400).json({ message: "Knowledge already exists" });
    }

    const newKnowledge = await KnowledgeModel.create({
      title,
      description,
      categoryId,
      quantity_views: 0,
    });

    return res.status(201).json(newKnowledge);
  } catch (error) {
    console.error("Error in createKnowledge", error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating knowledge" });
  }
});

export default router;
