import AddtionalInformationModel from "../../../models/AdditionalInformationModel.js";
import KnowledgeModel from "../../../models/KnowledgeModel.js";

export default async function createKnowledge(req, res) {
  try {
    const {
      title,
      description,
      categoryIds,
      additionalInformation: { applicability, references, importance_level },
    } = req.body;

    if (!title || !description || !categoryIds) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const knowledgeExists = await KnowledgeModel.findOne({ where: { title } });

    if (knowledgeExists) {
      return res.status(400).json({ message: "Knowledge already exists" });
    }

    const newKnowledge = await KnowledgeModel.create({
      title,
      description,
      quantity_views: 0,
    });

    await newKnowledge.addCategories(categoryIds);

    const additionalInformation = await AddtionalInformationModel.create({
      applicability,
      references,
      importance_level,
    });

    await newKnowledge.setAdditionalInformation(additionalInformation);

    return res.status(201).json(newKnowledge);
  } catch (error) {
    console.error("Error in createKnowledge", error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating knowledge" });
  }
}
