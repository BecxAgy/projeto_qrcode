import KnowledgeModel from "./../../../models/KnowledgeModel.js";
import CategoriesModel from "../../../models/CategoriesModel.js";
import AdditionalInformationModel from "../../../models/AdditionalInformationModel.js";

export default async function updateKnowledge(req, res) {
  try {
    const { id } = req.params;
    const { title, description, categoryIds, additionalInformation } = req.body;
    console.log("updatingg...");
    const knowledge = await KnowledgeModel.findByPk(id, {
      include: [
        { model: AdditionalInformationModel, as: "additionalInformation" },
        { model: CategoriesModel, as: "categories" },
      ],
    });

    if (!knowledge) {
      return res.status(404).json({ error: "Conhecimento não encontrado" });
    }

    await knowledge.update({
      title: title,
      description: description,
    });

    if (additionalInformation && knowledge.additionalInformation) {
      await knowledge.additionalInformation.update(additionalInformation);
    }

    if (categoryIds) {
      await knowledge.setCategories(categoryIds);
    }

    res.status(200).json({ knowledge });
  } catch (err) {
    res.status(500).json({ err });
  }
}
