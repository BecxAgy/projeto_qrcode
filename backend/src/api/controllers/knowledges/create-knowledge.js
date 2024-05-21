import KnowledgeModel from "../../../models/KnowledgeModel.js";

export default async function createKnowledge(req, res) {
  try {
    const { title, description, categoryId } = req.body;

    const KnowledgeExists = await KnowledgeModel.findOne({
      where: {
        title: title,
      },
    });

    if (!categoryId) {
      return res.status(400).json({ message: "Category is required" });
    }

    if (KnowledgeExists) {
      return res.status(400).json({ message: "Knowledge already exists" });
    }

    const newKnowledge = await KnowledgeModel.create({
      title: title,
      description: description,
      categoryId: categoryId,
      quantity_views: 0,
    });

    return res.status(201).json({ newKnowledge });
  } catch (error) {
    console.error("Error in createKnowledge", error);
    return res.status(500).json({ error });
  }
}
