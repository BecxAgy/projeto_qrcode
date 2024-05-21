import KnowledgeModel from "./../../../models/KnowledgeModel.js";
import CategoriesModel from "../../../models/CategoriesModel.js";

export default async function updateKnowledge(req, res) {
  try {
    const { id } = req.params;
    const { name, description, categoryId } = req.body;
    const knowledge = await KnowledgeModel.findByPk(id);

    if (!knowledge) {
      return res.status(404).json({ error: "Conhecimento não encontrado" });
    }

    const category = await CategoriesModel.findByPk(categoryId);
    if (category) {
      await knowledge.update({
        name: name,
        description: description,
        categoryId: categoryId,
      });
    } else {
      await knowledge.update({
        name: name,
        description: description,
      });
    }

    res.status(200).json({ knowledge });
  } catch (err) {
    res.status(500).json({ err });
  }
}
